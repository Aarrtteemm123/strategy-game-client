<template>
  <v-app>
    <v-card elevation="8" width="800" style="margin-top: 20px">
      <v-card-subtitle style="margin-top: 20px;margin-bottom: 20px;font-weight: bold;font-size: x-large;">Population</v-card-subtitle>
        <apexchart style="margin-left: 245px;margin-bottom: 30px" class="text-sm-left" width="400" type="pie" :options="chartOptions" :series="series"></apexchart>
        <v-card-text style="font-size: larger">
          <p>Population: {{population}}</p>
          <p>Workers: {{workers}}</p>
          <p>Miners: {{miners}}</p>
          <p>Farmers: {{farmers}}</p>
          <p>Others: {{others}}</p>
          <div style="margin-bottom: 12px">Solders: {{solders}}</div>
          <hr>
          <p style="margin-top: 10px">Total progress: {{totalProgress}}%</p>
        </v-card-text>

      <v-tooltip color="white" left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
                  style="margin-bottom: 30px"
                  color="primary"
                  v-bind="attrs"
                  v-on="on"
          >Modifiers</v-btn>
        </template>
        <v-card-text  v-for="item in modifiers" v-bind:key="item" style="font-size: medium;font-weight: bolder;">
          <div style="margin-bottom: -20px" v-bind:class="{greenText:item.color==='green',redText:item.color==='red',whiteText:item.color==='white'}">
            {{item.value}}  {{item.msg}}
          </div>
        </v-card-text>
      </v-tooltip>
    </v-card>
  </v-app>
</template>

<script>

    export default {
        name: "Population",
        data()
        {
            return {
                population: 100000,
                solders: 1000,
                workers: 10000,
                miners: 1000,
                farmers: 100,
                others: 60000,
                totalProgress: 3.6,
                modifiers: [
                    {value: '+10%', msg: 'nationals region', color: 'green'},
                    {value: '-8%', msg: 'old guns', color: 'red'},
                ],
                series: [40,10,20,15,12,3],
                chartOptions: {
                    labels: ['Others', 'Solders', 'Workers', 'Miners','Farmers','Free']
                }
            }
        }
    }
</script>

<style scoped>
  .greenText{
    color: green;
  }
  .redText{
    color: red;
  }
  .whiteText{
    color: white;
  }
</style>
