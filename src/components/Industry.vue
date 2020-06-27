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
              :key="item"
              cols="12"
              sm="4"
      >
        <FarmCard style="margin-bottom: 30px" v-if="activeBtn===0" v-bind:farm="item"></FarmCard>
      </v-col>
    </v-row>

    <v-row
            no-gutters
            style="margin-left: 22px;width: 1200px">
      <v-col
              v-for="item in mines"
              :key="item"
              cols="12"
              sm="4"
      >
        <MinesCard style="margin-bottom: 30px" v-if="activeBtn===1" v-bind:mine="item"></MinesCard>
      </v-col>
    </v-row>

    <v-row
            no-gutters
            style="margin-left: 22px;width: 1200px">
      <v-col
              v-for="item in factories"
              :key="item"
              cols="12"
              sm="4"
      >
        <IndustryCard style="margin-bottom: 30px" v-if="activeBtn===2" v-bind:factory="item"></IndustryCard>
      </v-col>
    </v-row>

  </v-app>
</template>

<script>
    import FarmCard from "@/components/FarmCard";
    import MinesCard from "@/components/MinesCard";
    import IndustryCard from "@/components/IndustryCard";
    export default {
        name: "Industry",
        components: {IndustryCard, MinesCard, FarmCard},
        data()
        {
            return{
                activeBtn: 0,
                farms:[
                    {type:'Seed farm',productionSpeed:10,needFarmers:500,price:10000,numbers:1,srcImage:'farms_goods/seed.jpg'},
                    {type:'Meat farm',productionSpeed:10,needFarmers:500,price:10000,numbers:1,srcImage:'farms_goods/meat.jpg'},
                    {type:'Milk farm',productionSpeed:10,needFarmers:500,price:10000,numbers:1,srcImage:'farms_goods/milk.jpg'},
                    {type:'Fish farm',productionSpeed:10,needFarmers:500,price:10000,numbers:1,srcImage:'farms_goods/fish.jpg'},
                    {type:'Fruits farm',productionSpeed:10,needFarmers:500,price:10000,numbers:1,srcImage:'farms_goods/fruits.jpg'},
                    {type:'Vegetables farm',productionSpeed:10,needFarmers:500,price:10000,numbers:1,srcImage:'farms_goods/vegetables.jpg'},
                ],
                mines:[
                    {type:'Iron mine',productionSpeed:10,needMiners:500,price:10000,numbers:1,srcImage:'farms_goods/seed.jpg'},
                    {type:'Aluminum mine',productionSpeed:10,needMiners:500,price:10000,numbers:1,srcImage:'farms_goods/meat.jpg'},
                    {type:'Coal mine',productionSpeed:10,needMiners:500,price:10000,numbers:1,srcImage:'farms_goods/milk.jpg'},
                    {type:'Oil well',productionSpeed:10,needMiners:500,price:10000,numbers:1,srcImage:'farms_goods/fish.jpg'},
                    {type:'Silicon mine',productionSpeed:10,needMiners:500,price:10000,numbers:1,srcImage:'farms_goods/fruits.jpg'},
                    {type:'Salt mine',productionSpeed:10,needMiners:500,price:10000,numbers:1,srcImage:'farms_goods/vegetables.jpg'},
                    {type:'Minerals mine',productionSpeed:10,needMiners:500,price:10000,numbers:1,srcImage:'farms_goods/vegetables.jpg'},
                    {type:'Gold mine',productionSpeed:10,needMiners:500,price:10000,numbers:1,srcImage:'farms_goods/vegetables.jpg'},
                    {type:'Diamond mine',productionSpeed:10,needMiners:500,price:10000,numbers:1,srcImage:'farms_goods/vegetables.jpg'},
                ],
                factories:[
                    {type:'Bakery factory',productionSpeed:20,needWorkers:2000,price:50000,numbers:1,srcImage:'farms_goods/seed.jpg',
                        needGoods:[
                            {id:1,name:'Seed',number:14,srcImage:'farms_goods/seed.jpg'},
                        ]
                    },
                    {type:'Canned food factory',productionSpeed:20,needWorkers:2000,price:50000,numbers:1,srcImage:'farms_goods/seed.jpg',
                        needGoods:[
                            {id:1,name:'Seed',number:14,srcImage:'farms_goods/seed.jpg'},
                            {id:2,name:'Meat',number:20,srcImage:'farms_goods/meat.jpg'},
                        ]
                    },
                    {type:'Cheese factory',productionSpeed:20,needWorkers:2000,price:50000,numbers:1,srcImage:'farms_goods/seed.jpg',
                        needGoods:[
                            {id:1,name:'Milk',number:14,srcImage:'farms_goods/milk.jpg'},
                        ]
                    },
                    {type:'Salt fish factory',productionSpeed:20,needWorkers:2000,price:50000,numbers:1,srcImage:'farms_goods/seed.jpg',
                        needGoods:[
                            {id:1,name:'Fish',number:14,srcImage:'farms_goods/fish.jpg'},
                            {id:2,name:'Salt',number:20,srcImage:'farms_goods/salt.jpg'},
                        ]
                    },
                    {type:'Juice factory',productionSpeed:20,needWorkers:2000,price:50000,numbers:1,srcImage:'farms_goods/seed.jpg',
                        needGoods:[
                            {id:1,name:'Fruits',number:14,srcImage:'farms_goods/fruits.jpg'},
                            {id:2,name:'Glass',number:20,srcImage:'farms_goods/glass.jpg'},
                        ]
                    },
                    {type:'Fuel factory',productionSpeed:20,needWorkers:2000,price:50000,numbers:1,srcImage:'farms_goods/seed.jpg',
                        needGoods:[
                            {id:1,name:'Oil',number:14,srcImage:'farms_goods/oil.jpg'},
                        ]
                    },
                ],
            }
        }
    }
</script>

<style scoped>

</style>
