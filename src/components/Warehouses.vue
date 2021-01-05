<template>
  <v-app>

    <v-bottom-navigation
            grow
            color="blue"
            style="margin-left: 300px;margin-top: 20px;margin-bottom: 30px;width: 600px;"
            v-model="activeBtn"
    >
      <v-btn>
        <h3>Farm goods</h3>
      </v-btn>
      <v-btn>
        <h3>Mine goods</h3>
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
                v-for="item in foodsWarehouses"
                :key="item.id+item"
                cols="12"
                sm="4"
        >
          <WarehouseCard style="margin-bottom: 30px" v-on:update-page="updateWarehousePage" v-if="activeBtn===0" v-bind:warehouse="item"></WarehouseCard>
        </v-col>
      </v-row>

    <v-row
            no-gutters
            style="margin-left: 22px;width: 1200px"
         >
      <v-col
              v-for="item in mineralsWarehouses"
              :key="item.id+item"
              cols="12"
              sm="4"
      >
        <WarehouseCard style="margin-bottom: 30px" v-on:update-page="updateWarehousePage" v-if="activeBtn===1" v-bind:warehouse="item"></WarehouseCard>
      </v-col>
    </v-row>

    <v-row
            no-gutters
            style="margin-left: 22px;width: 1200px"
    >
      <v-col
              v-for="item in productsWarehouses"
              :key="item.id+item"
              cols="12"
              sm="4"
      >
        <WarehouseCard style="margin-bottom: 30px" v-on:update-page="updateWarehousePage" v-if="activeBtn===2" v-bind:warehouse="item"></WarehouseCard>
      </v-col>
    </v-row>

    <v-row
            no-gutters
            style="margin-left: 22px;width: 1200px"
    >
      <v-col
              v-for="item in militaryWarehouses"
              :key="item.id+item"
              cols="12"
              sm="4"
      >
        <WarehouseCard style="margin-bottom: 30px" v-on:update-page="updateWarehousePage" v-if="activeBtn===3" v-bind:warehouse="item"></WarehouseCard>
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
    import WarehouseCard from "@/components/WarehouseCard"
    import SystemService from "@/services/system-service"

    export default {
        name: "Warehouse",
        components: {WarehouseCard},
        data()
        {
            return{
                snackbarVisible: false,
                error: '',
                activeBtn: 0,
                foodsWarehouses:[],
                mineralsWarehouses:[],
                productsWarehouses:[],
                militaryWarehouses:[],
            }
        },
        methods:
            {
                closeSnackbar()
                {
                    this.snackbarVisible = false
                    this.error = ''
                },
                updateWarehousePage()
                {
                    console.log('Inside warehouse updatePage')
                    let userId = '5fb92cde490b69cce9f464df'
                    SystemService.getView(userId,'Warehouses').then(response => {
                        if (response.status === 200)
                        {
                            console.log(response.data)
                            console.log(response.status)
                            this.foodsWarehouses = response.data.slice(0,6)
                            this.mineralsWarehouses = response.data.slice(6,15)
                            this.productsWarehouses = response.data.slice(15,33)
                            this.militaryWarehouses = response.data.slice(33,40)
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
            this.updateWarehousePage()
        }
    }
</script>

<style scoped>

</style>
