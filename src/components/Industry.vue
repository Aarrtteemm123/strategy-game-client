<template>
  <v-app>
    <v-bottom-navigation
            grow
            color="blue"
            style="margin-left: 300px;margin-top: 20px;margin-bottom: 30px;width: 600px;"
            v-model="activeBtn"
    >
      <v-btn>
        <h3>Farms</h3>
      </v-btn>
      <v-btn>
        <h3>Mines</h3>
      </v-btn>
      <v-btn>
        <h3>Industry goods</h3>
      </v-btn>
      <v-btn>
        <h3>Military goods</h3>
      </v-btn>
    </v-bottom-navigation>

    <v-row
            no-gutters
            style="margin-left: 22px;width: 1200px">
      <v-col
              v-for="item in farms"
              :key="item.id+item"
              cols="12"
              sm="4"
      >
        <IndustryCard style="margin-bottom: 30px" v-on:update-page="updateIndustryPage" v-if="activeBtn===0" v-bind:factory="item"></IndustryCard>
      </v-col>
    </v-row>

    <v-row
            no-gutters
            style="margin-left: 22px;width: 1200px">
      <v-col
              v-for="item in mines"
              :key="item.id+item"
              cols="12"
              sm="4"
      >
        <IndustryCard style="margin-bottom: 30px" v-on:update-page="updateIndustryPage" v-if="activeBtn===1" v-bind:factory="item"></IndustryCard>
      </v-col>
    </v-row>

    <v-row
            no-gutters
            style="margin-left: 22px;width: 1200px">
      <v-col
              v-for="item in factories"
              :key="item.id+item"
              cols="12"
              sm="4"
      >
        <IndustryCard style="margin-bottom: 30px" v-on:update-page="updateIndustryPage" v-if="activeBtn===2" v-bind:factory="item"></IndustryCard>
      </v-col>
    </v-row>

    <v-row
            no-gutters
            style="margin-left: 22px;width: 1200px">
      <v-col
              v-for="item in militaryFactories"
              :key="item.id+item"
              cols="12"
              sm="4"
      >
        <IndustryCard v-on:update-page="updateIndustryPage" style="margin-bottom: 30px" v-if="activeBtn===3" v-bind:factory="item"></IndustryCard>
      </v-col>
    </v-row>
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
  </v-app>
</template>

<script>
    import IndustryCard from "@/components/IndustryCard";
    import SystemService from "@/services/system-service"
    export default {
        name: "Industry",
        components: {IndustryCard},
        data()
        {
            return{
                snackbarVisible: false,
                error: '',
                activeBtn: 0,
                farms:[],
                mines:[],
                factories:[],
                militaryFactories:[],
            }
        },
        methods:
        {
            closeSnackbar()
            {
                this.snackbarVisible = false
                this.error = ''
            },
            updateIndustryPage()
            {
                console.log('Inside industry updatePage')
                let userId = '5fb92cde490b69cce9f464df'
                SystemService.getView(userId,'Industry').then(response => {
                    if (response.status === 200)
                    {
                        console.log(response.data)
                        console.log(response.status)
                        this.farms = response.data['farms']
                        this.mines = response.data['mines']
                        this.factories = response.data['factories']
                        this.militaryFactories = response.data['military_factories']
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
        },
        mounted()
        {
            this.updateIndustryPage()
        }
    }
</script>

<style scoped>

</style>
