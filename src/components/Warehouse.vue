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
                :key="item"
                cols="12"
                sm="4"
        >
          <WarehouseCard style="margin-bottom: 30px" v-if="activeBtn===0" v-bind:warehouse="item"></WarehouseCard>
        </v-col>
      </v-row>

    <v-row
            no-gutters
            style="margin-left: 22px;width: 1200px"
         >
      <v-col
              v-for="item in mineralsWarehouses"
              :key="item"
              cols="12"
              sm="4"
      >
        <WarehouseCard style="margin-bottom: 30px" v-if="activeBtn===1" v-bind:warehouse="item"></WarehouseCard>
      </v-col>
    </v-row>

    <v-row
            no-gutters
            style="margin-left: 22px;width: 1200px"
    >
      <v-col
              v-for="item in productsWarehouses"
              :key="item"
              cols="12"
              sm="4"
      >
        <WarehouseCard style="margin-bottom: 30px" v-if="activeBtn===2" v-bind:warehouse="item"></WarehouseCard>
      </v-col>
    </v-row>

    <v-row
            no-gutters
            style="margin-left: 22px;width: 1200px"
    >
      <v-col
              v-for="item in militaryWarehouses"
              :key="item"
              cols="12"
              sm="4"
      >
        <WarehouseCard style="margin-bottom: 30px" v-if="activeBtn===3" v-bind:warehouse="item"></WarehouseCard>
      </v-col>
    </v-row>

  </v-app>
</template>

<script>
    import WarehouseCard from "@/components/WarehouseCard";
    export default {
        name: "Warehouse",
        components: {WarehouseCard},
        data()
        {
            return{
                activeBtn: 0,
                foodsWarehouses:[
                    {type:'Seed',fillingSpeed:10,numberItemsNow:100,max:1000,maxLevel:100,level:1,price:10000,increasePrice:2,expenses:100,srcImage:'farms_goods/seed.jpg'},
                    {type:'Meat',fillingSpeed:10,numberItemsNow:100,max:1000,maxLevel:100,level:1,price:10000,increasePrice:2,expenses:100,srcImage:'farms_goods/meat.jpg'},
                    {type:'Milk',fillingSpeed:10,numberItemsNow:100,max:1000,maxLevel:100,level:1,price:10000,increasePrice:2,expenses:100,srcImage:'farms_goods/milk.jpg'},
                    {type:'Fish',fillingSpeed:10,numberItemsNow:100,max:1000,maxLevel:100,level:1,price:10000,increasePrice:2,expenses:100,srcImage:'farms_goods/fish.jpg'},
                    {type:'Fruits',fillingSpeed:10,numberItemsNow:100,max:1000,maxLevel:100,level:1,price:10000,increasePrice:2,expenses:100,srcImage:'farms_goods/fruits.jpg'},
                    {type:'Vegetables',fillingSpeed:10,numberItemsNow:100,max:1000,maxLevel:100,level:1,price:10000,increasePrice:2,expenses:100,srcImage:'farms_goods/vegetables.jpg'},
                ],
                mineralsWarehouses:[
                    {type:'Iron',fillingSpeed:10,numberItemsNow:100,max:1000,maxLevel:100,level:1,price:10000,increasePrice:2,expenses:100,srcImage:'mine_goods/iron.jpg'},
                    {type:'Aluminum',fillingSpeed:10,numberItemsNow:100,max:1000,maxLevel:100,level:1,price:10000,increasePrice:2,expenses:100,srcImage:'mine_goods/aluminum.jpg'},
                    {type:'Coal',fillingSpeed:10,numberItemsNow:100,max:1000,maxLevel:100,level:1,price:10000,increasePrice:2,expenses:100,srcImage:'mine_goods/coal.jpg'},
                    {type:'Oil',fillingSpeed:10,numberItemsNow:100,max:1000,maxLevel:100,level:1,price:10000,increasePrice:2,expenses:100,srcImage:'mine_goods/oil.jpg'},
                    {type:'Silicon',fillingSpeed:10,numberItemsNow:100,max:1000,maxLevel:100,level:1,price:10000,increasePrice:2,expenses:100,srcImage:'mine_goods/silicon.jpg'},
                    {type:'Salt',fillingSpeed:10,numberItemsNow:100,max:1000,maxLevel:100,level:1,price:10000,increasePrice:2,expenses:100,srcImage:'mine_goods/salt.jpg'},
                    {type:'Minerals',fillingSpeed:10,numberItemsNow:100,max:1000,maxLevel:100,level:1,price:10000,increasePrice:2,expenses:100,srcImage:'mine_goods/minerals.jpg'},
                    {type:'Gold',fillingSpeed:10,numberItemsNow:100,max:1000,maxLevel:100,level:1,price:10000,increasePrice:2,expenses:100,srcImage:'mine_goods/gold.jpg'},
                    {type:'Diamond',fillingSpeed:10,numberItemsNow:100,max:1000,maxLevel:100,level:1,price:10000,increasePrice:2,expenses:100,srcImage:'mine_goods/diamond.jpg'},
                ],
                productsWarehouses:[
                    {type:'Bakery',fillingSpeed:10,numberItemsNow:100,max:1000,maxLevel:100,level:1,price:10000,increasePrice:2,expenses:100,srcImage:'industry_goods/bakery.jpg'},
                    {type:'Canned food',fillingSpeed:10,numberItemsNow:100,max:1000,maxLevel:100,level:1,price:10000,increasePrice:2,expenses:100,srcImage:'industry_goods/canned_food.jpg'},
                    {type:'Cheese',fillingSpeed:10,numberItemsNow:100,max:1000,maxLevel:100,level:1,price:10000,increasePrice:2,expenses:100,srcImage:'industry_goods/cheese.jpg'},
                    {type:'Salt fish',fillingSpeed:10,numberItemsNow:100,max:1000,maxLevel:100,level:1,price:10000,increasePrice:2,expenses:100,srcImage:'industry_goods/salt_fish.jpg'},
                    {type:'Juice',fillingSpeed:10,numberItemsNow:100,max:1000,maxLevel:100,level:1,price:10000,increasePrice:2,expenses:100,srcImage:'industry_goods/juice.jpg'},
                    {type:'Fuel',fillingSpeed:10,numberItemsNow:100,max:1000,maxLevel:100,level:1,price:10000,increasePrice:2,expenses:100,srcImage:'industry_goods/fuel.jpg'},
                    {type:'Electronics',fillingSpeed:10,numberItemsNow:100,max:1000,maxLevel:100,level:1,price:10000,increasePrice:2,expenses:100,srcImage:'industry_goods/electronics.jpg'},
                    {type:'Chemicals',fillingSpeed:10,numberItemsNow:100,max:1000,maxLevel:100,level:1,price:10000,increasePrice:2,expenses:100,srcImage:'industry_goods/chemicals.jpg'},
                    {type:'Computers',fillingSpeed:10,numberItemsNow:100,max:1000,maxLevel:100,level:1,price:10000,increasePrice:2,expenses:100,srcImage:'industry_goods/computers.jpg'},
                    {type:'Steel',fillingSpeed:10,numberItemsNow:100,max:1000,maxLevel:100,level:1,price:10000,increasePrice:2,expenses:100,srcImage:'industry_goods/steel.jpg'},
                    {type:'Rubber',fillingSpeed:10,numberItemsNow:100,max:1000,maxLevel:100,level:1,price:10000,increasePrice:2,expenses:100,srcImage:'industry_goods/rubber.jpg'},
                    {type:'Plastic',fillingSpeed:10,numberItemsNow:100,max:1000,maxLevel:100,level:1,price:10000,increasePrice:2,expenses:100,srcImage:'industry_goods/plastic.jpg'},
                    {type:'Glass',fillingSpeed:10,numberItemsNow:100,max:1000,maxLevel:100,level:1,price:10000,increasePrice:2,expenses:100,srcImage:'industry_goods/glass.jpg'},
                    {type:'Fertilizer',fillingSpeed:10,numberItemsNow:100,max:1000,maxLevel:100,level:1,price:10000,increasePrice:2,expenses:100,srcImage:'industry_goods/fertilizer.jpg'},
                    {type:'Medicine',fillingSpeed:10,numberItemsNow:100,max:1000,maxLevel:100,level:1,price:10000,increasePrice:2,expenses:100,srcImage:'industry_goods/medicine.png'},
                    {type:'Solar panel',fillingSpeed:10,numberItemsNow:100,max:1000,maxLevel:100,level:1,price:10000,increasePrice:2,expenses:100,srcImage:'industry_goods/solar_panel.jpg'},
                    {type:'Battery',fillingSpeed:10,numberItemsNow:100,max:1000,maxLevel:100,level:1,price:10000,increasePrice:2,expenses:100,srcImage:'industry_goods/battery.jpg'},
                    {type:'Jewelry',fillingSpeed:10,numberItemsNow:100,max:1000,maxLevel:100,level:1,price:10000,increasePrice:2,expenses:100,srcImage:'industry_goods/jewelry.jpg'},
                ],
                militaryWarehouses:[
                    {type:'Infantry equipment',fillingSpeed:10,numberItemsNow:100,max:1000,maxLevel:100,level:1,price:10000,increasePrice:2,expenses:100,srcImage:'army/infantry_equipment.jpg'},
                    {type:'Artillery',fillingSpeed:10,numberItemsNow:100,max:1000,maxLevel:100,level:1,price:10000,increasePrice:2,expenses:100,srcImage:'army/artillery.jpg'},
                    {type:'PTO',fillingSpeed:10,numberItemsNow:100,max:1000,maxLevel:100,level:1,price:10000,increasePrice:2,expenses:100,srcImage:'army/pto.jpg'},
                    {type:'PVO',fillingSpeed:10,numberItemsNow:100,max:1000,maxLevel:100,level:1,price:10000,increasePrice:2,expenses:100,srcImage:'army/pvo.jpg'},
                    {type:'Tank',fillingSpeed:10,numberItemsNow:100,max:1000,maxLevel:100,level:1,price:10000,increasePrice:2,expenses:100,srcImage:'army/tank.jpg'},
                    {type:'Aviation',fillingSpeed:10,numberItemsNow:100,max:1000,maxLevel:100,level:1,price:10000,increasePrice:2,expenses:100,srcImage:'army/aviation.jpg'},
                ],
            }
        }
    }
</script>

<style scoped>

</style>
