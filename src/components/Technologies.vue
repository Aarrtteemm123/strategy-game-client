<template>
  <v-app>
    <v-card

            width="600"
            elevation="8"
            style="margin-top: 20px"
    >
      <v-card-subtitle style="margin-top: 10px;font-weight: bold;font-size: x-large">Technologies</v-card-subtitle>
      <v-card-text style="font-size: large;font-weight: bolder" class="text-left" v-for="technology in technologyLst" v-bind:key="technology">
        <hr>
        <p style="margin-top: 15px">Name: {{technology.name}}</p>
        <p>Price upgrade: {{technology.price_upgrade}}</p>
        <p>Level: {{technology.level}}</p>
        <p>Max level: {{technology.max_level}}</p>
        <p>Total results: {{technology.percent_total_result}}%</p>
        <p class="text-center">Modifiers:</p>
        <v-card-text v-for="item in technology.modifiers" v-bind:key="item">
          <div class="text-center" style=" font-size:larger;margin-top: -20px" v-bind:class="{greenText:item.color==='green',redText:item.color==='red',whiteText:item.color==='white'}">
            {{item.value}}  {{item.msg}}
          </div>
        </v-card-text>
        <v-btn @click="clkBtnUpgrade(technology)" style="margin-left: 230px" medium color="primary">Upgrade</v-btn>
        <v-progress-linear
                style="margin-top: 20px"
                color="light-blue"
                height="10"
                :value=technology.level
                striped
        ></v-progress-linear>
      </v-card-text>
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
    import GameService from "@/services/game-service"
    import SystemService from "@/services/system-service"
    export default {
        name: "Technology",
        data()
        {
            return{
                technologyLst:[],
                snackbarVisible: false,
                error: '',
            }
        },
        methods:{
            closeSnackbar()
            {
                this.snackbarVisible = false
                this.error = ''
            },
            updatePage()
            {
                let userId = '5f4814cc59e648f9cfba7e09'
                SystemService.getView(userId,'Technologies').then(response => {
                    if (response.status === 200)
                    {
                        console.log(response.data)
                        console.log(response.status)
                        this.technologyLst = response.data

                    }
                }).catch(error => {
                    if (error.response) {
                        this.snackbarVisible = true;
                        this.error = error.response.data
                        console.log(error.response.data);
                        console.log(error.response.status);
                    }
                })
            },
            clkBtnUpgrade(item)
            {
                let userId = '5f4814cc59e648f9cfba7e09'
                GameService.upgradeTechnology(userId,item.name).then(response => {
                    if (response.status === 200)
                    {
                        console.log(response.data)
                        console.log(response.status)
                        this.updatePage()

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
        },
        mounted() {
            console.log('Inside technologies mounted');
            this.updatePage() // equivalent to data download
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
