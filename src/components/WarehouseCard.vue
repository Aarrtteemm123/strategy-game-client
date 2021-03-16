<template>
  <v-card elevation="12" width="370">
    <v-img
            class="white--text align-end"
            height="200px"
            :src="require(`../assets/${warehouse.link_img}`)"
    >
    </v-img>
    <v-card-subtitle style="font-weight: bold;font-size: x-large;" class="pb-0">{{warehouse.name}}</v-card-subtitle>
    <v-card-text style="font-weight: bolder;font-size: medium" class="text-left">
      <div style="margin-top: 15px">{{warehouse.value}}/{{warehouse.capacity}} tonnes (100% in {{Number((warehouse.capacity/warehouse.filling_speed).toFixed(1))}} hours)</div>
      <div style="margin-top: 15px">Filling speed: {{warehouse.filling_speed}} t/h</div>
      <div style="margin-top: 15px">Level: {{warehouse.level}}</div>
      <div style="margin-top: 15px">Max level: {{warehouse.max_level}}</div>
      <div style="margin-top: 15px">Price upgrade: {{warehouse.price_upgrade}}$ (+{{warehouse.added_capacity}}t)</div>
      <v-btn style="margin-left: 130px;margin-top: 20px" v-on:click="upgradeWarehouse(warehouse.name)" medium color="primary">Upgrade</v-btn>
      <v-progress-linear
              style="margin-top: 20px"
              color="light-blue"
              height="10"
              :value=warehouse.value/warehouse.capacity*100
              striped
      ></v-progress-linear>
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
        name: "WarehouseCard",
        props: ['warehouse'],
        data()
        {
            return{
                snackbarVisible: false,
                error: '',
            }
        },
        methods:
        {
            closeSnackbar()
            {
                this.snackbarVisible = false
                this.error = ''
            },
            upgradeWarehouse(name)
            {
                let userId = this.$cookies.get('userId')
                let token = this.$cookies.get('token')
                GameService.upgradeWarehouse(userId,token,name).then(response => {
                    if (response.status === 200)
                    {
                        console.log(response.data)
                        console.log(response.status)
                        this.$emit('update-page')
                    }
                }).catch(error => {
                    if (error.response) {
                        this.snackbarVisible = true;
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
