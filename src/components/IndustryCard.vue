<template>
  <v-card elevation="12" width="370">
    <v-img
            class="white--text align-end"
            height="200px"
            :src="require(`../assets/${factory.srcImage}`)"
    >
    </v-img>
    <v-card-subtitle style="font-weight: bold;font-size: x-large;">{{factory.type}}</v-card-subtitle>
    <v-card-text style="font-weight: bolder;font-size: medium" class="text-left">
      <div style="margin-top: 15px">Production speed: +{{factory.productionSpeed}} t/h</div>
      <div style="margin-top: 15px">Total production speed: +{{factory.numbers*factory.productionSpeed}} t/h</div>
      <div style="margin-top: 15px">Price build: +{{factory.price}}$</div>
      <div style="margin-top: 15px">Need workers: {{factory.needWorkers}}</div>
      <div style="margin-top: 15px">Number factories: {{factory.numbers}}</div>
      <div style="margin-top: 15px">Total workers: {{factory.numbers*factory.needWorkers}}</div>
      <div style="margin-top: 15px" class="text-center">Need goods</div>

      <v-data-table style="margin-bottom: 10px;margin-top: 20px"
            :headers="headers"
            :items="factory.needGoods"
            fixed-header
            :height="150"
            hide-default-footer
            class="elevation-1"
    >
      <template v-slot:item.srcImage="{ item }">
        <v-avatar size="35">
          <v-img :src="require(`../assets/${item.srcImage}`)" :alt="item.name"></v-img>
        </v-avatar>
      </template>
    </v-data-table>

      <v-btn style="margin-top: 20px; width: 100px" color="error">Remove</v-btn>
      <v-btn style="margin-left: 138px;margin-top: 20px;width: 100px" medium color="primary">Build</v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
    export default {
        name: "IndustryCard",
        props: ['factory'],
        data()
        {
            return{
                headers: [
                    { text: 'ID', align: 'start', sortable: true, value: 'id'},
                    { text: 'Icon', value: 'srcImage' },
                    { text: 'Name', value: 'name' },
                    { text: 'Numbers', value: 'number' },
                ],
            }
        },

    }
</script>

<style scoped>

</style>
