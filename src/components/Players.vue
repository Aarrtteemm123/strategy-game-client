<template>
  <v-app>
    <v-card
            class="mx-auto"
            elevation="10"
            width="800"
            style="margin-top: 20px"
    >
      <v-card-text>
        <p class="display-1 text--primary" style="margin-top: 20px">
          Players
        </p>
        <p class="text--primary" style="font-size: medium;margin-top: 20px">
          Your economic place: {{yourEconomicPlace}}
        </p>
        <p class="text--primary" style="font-size: medium;margin-top: 20px">
          Your military place: {{yourMilitaryPlace}}
        </p>
        <v-text-field style="margin-left: 130px;margin-top: 30px;width: 500px"
                      label="Search" outlined rounded clearable
        ></v-text-field>
        <v-btn large style="width: 140px;" rounded color="primary" dark>
          Search
        </v-btn>
      </v-card-text>

      <v-data-table style="margin-bottom: 10px;margin-top: 20px"
                    :headers="headers"
                    :items="resultSearchPlayers"
                    fixed-heade
                    hide-default-footer
                    disable-pagination
                    class="elevation-1"
      >
        <template v-slot:item.srcImage="{ item }">
          <v-avatar size="35">
            <v-img :src="require(`../assets/${item.srcImage}`)" :alt="item.nameCountry"></v-img>
          </v-avatar>
        </template>
        <template v-slot:item.showStatistic="{ item }">
          <v-btn @click="showStatistic(item)" small rounded color="primary" dark>
            Show detail
          </v-btn>
        </template>
        <template v-slot:item.attack="{ item }">
          <v-btn @click="openAttackDialog(item)" small rounded color="error" dark>
            Attack
          </v-btn>
        </template>
      </v-data-table>
    </v-card>


    <v-row justify="center">
      <v-dialog v-model="flShowStatisticDialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">{{selectedPlayer.namePlayer}} {{selectedPlayer.nameCountry}}</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-card-text style="font-size: medium;margin-top: -15px">
                    <p>Budget: {{selectedPlayer.budget}}</p>
                    <p>Population: {{selectedPlayer.population}}</p>
                    <p>Farms: {{selectedPlayer.farms}}</p>
                    <p>Mines: {{selectedPlayer.mines}}</p>
                    <p>Factories: {{selectedPlayer.factories}}</p>
                    <p>Solders: {{selectedPlayer.solders}}</p>
                    <p>Infantry: {{selectedPlayer.infantry}}</p>
                    <p>Artillery: {{selectedPlayer.artillery}}</p>
                    <p>PTO: {{selectedPlayer.pto}}</p>
                    <p>PVO: {{selectedPlayer.pvo}}</p>
                    <p>Tanks: {{selectedPlayer.tanks}}</p>
                    <p>Aviation: {{selectedPlayer.aviation}}</p>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn style="margin-top: -40px" color="blue darken-1" text @click="closeShowStatisticDialog">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

    <v-row justify="center">
      <v-dialog
              v-model="flAttackDialog"
              max-width="400"
      >
        <v-card>
          <v-card-title style="margin-left: 110px" class="headline">Declare war</v-card-title>

          <v-card-text>
            <p>Are you sure you want declare war this country?</p>
            <p>You risk lost all your army</p>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
                    color="blue darken-1"
                    text
                    @click="flAttackDialog = false"
            >
              No,we aren't ready
            </v-btn>

            <v-btn
                    color="blue darken-1"
                    text
                    @click="confirmAttack()"
            >
              Attack!
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

    <v-row justify="center">
      <v-dialog
              v-model="flShowResultAttackDialog"
              max-width="400"
      >
        <v-card>
          <v-card-title style="margin-left: 120px" class="headline">Result war</v-card-title>

          <v-card-text>
            <h2 style="margin-top: 10px;margin-bottom: 20px">Losses:</h2>
            <div v-for="item in resultAttack.losses" v-bind:key="item">
              <p style="color: red">{{item.name}} - {{item.number}}</p>
            </div>

            <h2 style="margin-top: 10px;margin-bottom: 20px">Prey:</h2>
            <div v-for="item in resultAttack.prey" v-bind:key="item">
              <p style="color: green">{{item.name}} - {{item.number}}</p>
            </div>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
                    color="blue darken-1"
                    text
                    @click="flShowResultAttackDialog = false"
            >
              peace
            </v-btn>

          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

  </v-app>
</template>

<script>
    export default {
        name: "Players",
        data()
        {
            return{
                flAttackDialog: false,
                flShowStatisticDialog: false,
                flShowResultAttackDialog: false,
                selectedPlayer: {},
                yourEconomicPlace: 23,
                yourMilitaryPlace: 15,
                resultAttack: {},
                resultSearchPlayers:[
                    {id:1,srcImage:'logo.png',nameCountry:'Poland',namePlayer:'Max1',economicPlace:1,militaryPlace:1,budget:1000000,farms:10,mines:50,factories:14,population:5000000,solders:20000,infantry:8000,artillery:5000,pto:12,pvo:5000,tanks:1000,aviation:40},
                    {id:2,srcImage:'logo.png',nameCountry:'Poland2',namePlayer:'Max2',economicPlace:1,militaryPlace:1,budget:1000000,farms:10,mines:50,factories:14,population:5000000,solders:30000,infantry:1000,artillery:5000,pto:1200,pvo:500,tanks:10,aviation:42},
                    {id:3,srcImage:'logo.png',nameCountry:'Poland3',namePlayer:'Max3',economicPlace:1,militaryPlace:1,budget:1000000,farms:10,mines:50,factories:14,population:5000000,solders:40000,infantry:10000,artillery:100,pto:20,pvo:50,tanks:13,aviation:2},
                    {id:4,srcImage:'logo.png',nameCountry:'Poland4',namePlayer:'Max4',economicPlace:1,militaryPlace:1,budget:1000000,farms:10,mines:50,factories:14,population:5000000,solders:50000,infantry:20000,artillery:1000,pto:12,pvo:5,tanks:5,aviation:600},
                ],
                headers: [
                    { text: 'ID', align: 'start', sortable: true, value: 'id'},
                    { text: 'Flag', value: 'srcImage' },
                    { text: 'Name country', value: 'nameCountry' },
                    { text: 'Name player', value: 'namePlayer' },
                    { text: 'Economic place', value: 'economicPlace' },
                    { text: 'Military place', value: 'militaryPlace' },
                    { text: 'Show statistic', value: 'showStatistic' },
                    { text: 'Attack', value: 'attack' },
                ],
            }
        },
        methods:{
            showStatistic(item)
            {
                console.log(item)
                this.flShowStatisticDialog = true
                this.selectedPlayer = item
            },
            openAttackDialog(item)
            {
                console.log(item)
                this.flAttackDialog = true
                this.selectedPlayer = item
            },
            closeShowStatisticDialog()
            {
                this.flShowStatisticDialog = false
            },
            confirmAttack()
            {
                // attack player
                this.flAttackDialog = false
                console.log('attack player')
                this.resultAttack = {
                    losses:[
                        {name:'infantry',number:10000},
                        {name:'tanks',number:100},
                    ],
                    prey:[
                        {name:'bakery',number:1000},
                        {name:'jewelry',number:500},
                        {name:'solar panel',number:10000},
                        {name:'glass',number:10},
                        {name:'aviation',number:120},
                    ]
                }
                this.flShowResultAttackDialog = true
            }
        }
    }
</script>

<style scoped>

</style>
