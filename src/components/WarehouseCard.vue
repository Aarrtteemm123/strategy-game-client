<template>
  <v-card elevation="12" width="370">
    <v-img
            class="white--text align-end"
            height="200px"
            :src="require(`../assets/${warehouse.srcImage}`)"
    >
    </v-img>
    <v-card-subtitle style="font-weight: bold;font-size: x-large;" class="pb-0">{{warehouse.type}}</v-card-subtitle>
    <v-card-text style="font-weight: bolder;font-size: medium" class="text-left">
      <div style="margin-top: 15px">{{warehouse.numberItemsNow}}/{{warehouse.max}} tonnes (100% in {{warehouse.max/warehouse.fillingSpeed}} hours)</div>
      <div style="margin-top: 15px">Filling speed: +{{warehouse.fillingSpeed}} t/h</div>
      <div style="margin-top: 15px">Level: {{warehouse.level}}</div>
      <div style="margin-top: 15px">Max level: {{warehouse.maxLevel}}</div>
      <div style="margin-top: 15px">Price upgrade: {{warehouse.price}}$ (+1000t)</div>
      <v-btn style="margin-left: 130px;margin-top: 20px" medium color="primary">Upgrade</v-btn>
      <v-progress-linear
              style="margin-top: 20px"
              color="light-blue"
              height="10"
              :value=warehouse.level/warehouse.maxLevel*100
              striped
      ></v-progress-linear>
    </v-card-text>
  </v-card>
</template>

<script>
    export default {
        name: "WarehouseCard",
        props: ['warehouse'],
    }
</script>

<style scoped>

</style>
