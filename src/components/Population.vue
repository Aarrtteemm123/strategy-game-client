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
          <p>Free: {{free}}</p>
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
        <v-card-text  v-for="item in modifiers" v-bind:key="item.id+item" style="font-size: medium;font-weight: bolder;">
          <div style="margin-bottom: -20px" v-bind:class="{greenText:item.color==='green',redText:item.color==='red',whiteText:item.color==='white'}">
            {{item.value}}  {{item.msg}}
          </div>
        </v-card-text>
      </v-tooltip>
    </v-card>
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
    import SystemService from "@/services/system-service"
    export default {
        name: "Population",
        data()
        {
            return {
                snackbarVisible: false,
                error: '',

                population: 0,
                solders: 0,
                workers: 0,
                miners: 0,
                farmers: 0,
                others: 0,
                free: 0,
                totalProgress: 0,
                modifiers: [],
                series: [],
                chartOptions: {
                    labels: []
                }
            }
        },
        methods:
        {
            closeSnackbar()
            {
                this.snackbarVisible = false
                this.error = ''
            },
            updatePopulationPage()
            {
                let userId = this.$cookies.get('userId')
                let token = this.$cookies.get('token')
                SystemService.getView(userId,token,'Population').then(response => {
                    if (response.status === 200)
                    {
                        console.log(response.data)
                        console.log(response.status)
                        this.population = response.data['population']
                        this.solders = response.data['soldiers']
                        this.workers = response.data['workers']
                        this.miners = response.data['miners']
                        this.farmers = response.data['farmers']
                        this.others = response.data['others']
                        this.free = response.data['free']
                        this.totalProgress = response.data['percent_total_progress']
                        this.modifiers = response.data['modifiers']
                        this.series = response.data['pie_chart_data']
                        this.chartOptions = {
                            labels: response.data['pie_chart_labels']
                        }
                    }
                }).catch(error => {
                    if (error.response) {
                        this.snackbarVisible = true
                        this.error = error.response.data
                        console.log(error.response.data);
                        console.log(error.response.status);
                    }
                })
            }
        },
        mounted()
        {
            console.log('Inside population mounted')
            this.updatePopulationPage()
        }
    }
</script>

<style scoped>
  .greenText{
    color: rgb(0,168,107);
  }
  .redText{
    color: rgb(255,40,0);
  }
  .whiteText{
    color: white;
  }
</style>
