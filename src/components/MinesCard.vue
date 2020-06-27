<template>
  <v-card elevation="12" width="370">
    <v-img
            class="white--text align-end"
            height="200px"
            :src="require(`../assets/${mine.srcImage}`)"
    >
    </v-img>
    <v-card-subtitle style="font-weight: bold;font-size: x-large;">{{mine.type}}</v-card-subtitle>
    <v-card-text style="font-weight: bolder;font-size: medium" class="text-left">
      <div style="margin-top: 15px">Production speed: +{{mine.productionSpeed}} t/h</div>
      <div style="margin-top: 15px">Total production speed: +{{mine.numbers*mine.productionSpeed}} t/h</div>
      <div style="margin-top: 15px">Price build: +{{mine.price}}$</div>
      <div style="margin-top: 15px">Need miners: {{mine.needMiners}}</div>
      <div style="margin-top: 15px">Number farms: {{mine.numbers}}</div>
      <div style="margin-top: 15px">Total farmers: {{mine.numbers*mine.needMiners}}</div>
      <v-btn style="margin-top: 20px; width: 100px" color="error">Remove</v-btn>
      <v-btn style="margin-left: 138px;margin-top: 20px;width: 100px" medium color="primary">Build</v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
    export default {
        name: "MinesCard",
        props: ['mine'],
    }
</script>

<style scoped>

</style>
