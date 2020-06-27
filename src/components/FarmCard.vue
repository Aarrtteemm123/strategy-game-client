<template>
    <v-card elevation="12" width="370">
      <v-img
              class="white--text align-end"
              height="200px"
              :src="require(`../assets/${farm.srcImage}`)"
      >
      </v-img>
      <v-card-subtitle style="font-weight: bold;font-size: x-large;">{{farm.type}}</v-card-subtitle>
      <v-card-text style="font-weight: bolder;font-size: medium" class="text-left">
        <div style="margin-top: 15px">Production speed: +{{farm.productionSpeed}} t/h</div>
        <div style="margin-top: 15px">Total production speed: +{{farm.numbers*farm.productionSpeed}} t/h</div>
        <div style="margin-top: 15px">Price build: +{{farm.price}}$</div>
        <div style="margin-top: 15px">Need farmers: {{farm.needFarmers}}</div>
        <div style="margin-top: 15px">Number farms: {{farm.numbers}}</div>
        <div style="margin-top: 15px">Total farmers: {{farm.numbers*farm.needFarmers}}</div>
        <v-btn style="margin-top: 20px; width: 100px" color="error">Remove</v-btn>
        <v-btn style="margin-left: 138px;margin-top: 20px;width: 100px" medium color="primary">Build</v-btn>
      </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "FarmCard",
        props: ['farm'],
    }
</script>

<style scoped>

</style>
