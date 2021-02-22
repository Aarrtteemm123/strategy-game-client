<template>
  <v-card elevation="12" width="370">
    <v-img
            class="white--text align-end"
            height="200px"
            :src="require(`../assets/${factory.link_img}`)"
    >
    </v-img>
    <v-card-subtitle style="font-weight: bold;font-size: x-large;">{{factory.name}}</v-card-subtitle>
    <v-card-text style="font-weight: bolder;font-size: medium" class="text-left">
      <div style="margin-top: 15px">Production speed: +{{factory.production_speed}} t/h</div>
      <div style="margin-top: 15px">Total production speed: +{{factory.total_production_speed}} t/h</div>
      <div style="margin-top: 15px">Price build: +{{factory.price_build}}$</div>
      <div style="margin-top: 15px">Need workers: {{factory.workers}}</div>
      <div style="margin-top: 15px">Number: {{factory.number}}</div>
      <div style="margin-top: 15px">Active: {{factory.active_number}}</div>
      <div style="margin-top: 15px">Total workers: {{factory.total_workers}}</div>
      <div v-if="Object.keys(factory.need_goods).length !==0" style="margin-top: 15px" class="text-center">Need goods</div>

      <v-data-table v-if="Object.keys(factory.need_goods).length !==0" style="margin-bottom: 10px;margin-top: 20px"
                    :headers="headers"
                    :items="factory.need_goods"
                    fixed-header
                    :height="150"
                    hide-default-footer
                    class="elevation-1"
    >
        <template #item.id="{ item }">
          {{ factory.need_goods.indexOf(item) + 1 }}
        </template>
      <template v-slot:item.link_img="{ item }">
        <v-avatar size="35">
          <v-img :src="require(`../assets/${item.link_img}`)" :alt="item.name"></v-img>
        </v-avatar>
      </template>
    </v-data-table>
      <v-btn style="margin-top: 20px; width: 100px" v-on:click="removeIndustry(factory.name)" color="error">Remove</v-btn>
      <v-btn style="margin-left: 138px;margin-top: 20px;width: 100px" v-on:click="buildIndustry(factory.name)" medium color="primary">Build</v-btn>
    </v-card-text>
    <v-snackbar v-if="snackbarVisible"
                v-model="snackbarVisible"
                timeout="5000"
    >
      {{error}}
      <v-btn
              color="blue"
              text
              @click="closeSnackbar"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-card>
</template>

<script>
    import GameService from "@/services/game-service"
    export default {
        name: "IndustryCard",
        props: ['factory'],
        data()
        {
            return{
                snackbarVisible: false,
                error: '',
                headers: [
                    { text: 'ID', align: 'start', sortable: true, value: 'id'},
                    { text: 'Icon', value: 'link_img' },
                    { text: 'Name', value: 'name_goods' },
                    { text: 'Numbers', value: 'number' },
                ],
            }
        },
        methods:
        {
            closeSnackbar()
            {
                this.snackbarVisible = false
                this.error = ''
            },
            buildIndustry(name)
            {
                let userId = this.$cookies.get('userId')
                let token = this.$cookies.get('token')
                GameService.buildIndustry(userId,token,name).then(response => {
                    if (response.status === 200)
                    {
                        console.log(response.data)
                        console.log(response.status)
                        this.$emit('update-page')
                    }
                }).catch(error => {
                    if (error.response) {
                        this.snackbarVisible = true
                        this.error = error.response.data
                        console.log(error.response.data);
                        console.log(error.response.status);
                    }
                })

            },
            removeIndustry(name)
            {
                let userId = this.$cookies.get('userId')
                let token = this.$cookies.get('token')
                console.log(name)
                GameService.removeIndustry(userId,token,name).then(response => {
                    if (response.status === 200)
                    {
                        console.log(response.data)
                        console.log(response.status)
                        this.$emit('update-page')
                    }
                }).catch(error => {
                    if (error.response) {
                        this.snackbarVisible = true
                        this.error = error.response.data
                        console.log(error.response.data);
                        console.log(error.response.status);
                    }
                })
            }
        }

    }
</script>

<style scoped>

</style>
