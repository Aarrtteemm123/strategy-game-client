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
          Top players
        </p>
        <p class="text--primary" style="font-size: medium;margin-top: 20px">
          Your economic place: {{yourEconomicPlace}}
        </p>
        <p class="text--primary" style="font-size: medium;margin-top: 20px">
          Your military place: {{yourMilitaryPlace}}
        </p>
        <v-text-field style="margin-left: 130px;margin-top: 30px;width: 500px"
                      label="Search by player name" outlined rounded clearable
                      v-model="searchText"
        ></v-text-field>
        <v-btn large style="width: 140px;margin-right: 50px" @click="clearSearchResult" rounded color="error" dark>
          Clear
        </v-btn>
        <v-btn large style="width: 140px;" @click="searchPlayers" rounded color="primary" dark>
          Search
        </v-btn>
      </v-card-text>

      <v-data-table v-if="searchPlayerList.length!==0" style="margin-bottom: 10px;margin-top: 20px"
                    :headers="headers"
                    :items="searchPlayerList"
                    fixed-heade
                    hide-default-footer
                    disable-pagination
                    class="elevation-1"
      >
        <template v-slot:item.srcImage="{ item }">
          <v-avatar size="35">
            <v-img :src=item.srcImage :alt="item.nameCountry"></v-img>
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

      <v-data-table style="margin-bottom: 10px;margin-top: 70px"
                    :headers="headers"
                    :items="topPlayers"
                    fixed-heade
                    hide-default-footer
                    disable-pagination
                    class="elevation-1"
      >
        <template v-slot:item.srcImage="{ item }">
          <v-avatar size="35">
            <v-img :src=item.srcImage :alt="item.nameCountry"></v-img>
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
            <v-avatar
                    size="40px"
                    style="margin-right: 20px"
                    item
            >
              <v-img
                      :src=selectedPlayer.srcImage
                      alt="Vuetify"
              ></v-img>
            </v-avatar>
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
            <v-btn style="margin-top: -40px" color="blue darken-1" text @click="closeStatisticDialog">Close</v-btn>
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
                    @click="cancelAttack()"
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
            <div v-for="item in resultAttack.losses" v-bind:key="item.id+item">
              <p style="color: red">{{item.name}} - {{item.number}}</p>
            </div>

            <h2 style="margin-top: 10px;margin-bottom: 20px">Prey:</h2>
            <div v-for="item in resultAttack.prey" v-bind:key="item.id+item">
              <p style="color: green">{{item.name}} - {{item.number}}</p>
            </div>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
                    color="blue darken-1"
                    text
                    @click="closeAttackResultDialog"
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
    import SystemService from "@/services/system-service"
    import GameService from "@/services/game-service"
    export default {
        name: "Players",
        data()
        {
            return{
                flAttackDialog: false,
                flShowStatisticDialog: false,
                flShowResultAttackDialog: false,
                selectedPlayer: {},
                searchPlayerList: [],
                searchText: '',

                yourEconomicPlace: 0,
                yourMilitaryPlace: 0,

                resultAttack: {},
                topPlayers:[],
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
            closeAttackResultDialog()
            {
                this.flShowResultAttackDialog = false
                this.resultAttack = {}
            },
            searchPlayers()
            {
                if (this.searchText != null)
                {
                    console.log('Inside account updatePage')
                    let userId = '5fb92cde490b69cce9f464df'
                    SystemService.findPlayer(userId,this.searchText).then(response => {
                        if (response.status === 200) {
                            console.log(response.data)
                            console.log(response.status)
                            this.searchPlayerList = []
                            let index = 1
                            response.data.forEach(element => {
                                let playerView = {
                                    id: index,
                                    srcImage: element['link_country_flag'],
                                    nameCountry: element['name_country'],
                                    namePlayer: element['username'],
                                    economicPlace: element['economic_place'],
                                    militaryPlace: element['military_place'],
                                    budget: element['money'],
                                    farms: element['farms'],
                                    mines: element['mines'],
                                    factories: element['factories'],
                                    population: element['population'],
                                    solders: element['solders'],
                                    infantry: element['army_units_dict']['Infantry'],
                                    artillery: element['army_units_dict']['Artillery'],
                                    pto: element['army_units_dict']['PTO'],
                                    pvo: element['army_units_dict']['PVO'],
                                    tanks: element['army_units_dict']['Tank'],
                                    aviation: element['army_units_dict']['Aviation'],
                                }
                                this.searchPlayerList.push(playerView)
                                index++
                            })
                        }
                    }).catch(error => {
                        if (error.response) {
                            console.log(error.response.data);
                            console.log(error.response.status);
                        }
                    })
                }
                else
                {
                    this.searchText = null
                    this.searchPlayerList = []
                }
            },
            clearSearchResult()
            {
                this.searchText = null
                this.searchPlayerList = []
            },
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
            cancelAttack()
            {
                this.flAttackDialog = false
                this.selectedPlayer = {}
            },
            closeStatisticDialog()
            {
                this.flShowStatisticDialog = false
            },
            confirmAttack()
            {
                // attack player
                this.flAttackDialog = false
                console.log('attack player')
                let userId = '5fb92cde490b69cce9f464df'
                GameService.calculateWar(userId,this.selectedPlayer.namePlayer).then(response => {
                    if (response.status === 200) {
                        console.log(response.data)
                        console.log(response.status)
                        this.resultAttack = response.data
                    }
                }).catch(error => {
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                    }
                })
                this.flShowResultAttackDialog = true
            },
            updateTopPlayersPage()
            {
                let userId = '5fb92cde490b69cce9f464df'
                SystemService.getView(userId,'TopPlayers').then(response => {
                    if (response.status === 200)
                    {
                        console.log(response.data)
                        console.log(response.status)
                        this.yourEconomicPlace = response.data['economic_place']
                        this.yourMilitaryPlace = response.data['military_place']
                        let index = 1
                        response.data['top_players'].forEach(element => {
                            let playerView = {
                                id: index,
                                srcImage: element['link_country_flag'],
                                nameCountry: element['name_country'],
                                namePlayer: element['username'],
                                economicPlace: element['economic_place'],
                                militaryPlace: element['military_place'],
                                budget: element['money'],
                                farms: element['farms'],
                                mines: element['mines'],
                                factories: element['factories'],
                                population: element['population'],
                                solders: element['solders'],
                                infantry: element['army_units_dict']['Infantry'],
                                artillery: element['army_units_dict']['Artillery'],
                                pto: element['army_units_dict']['PTO'],
                                pvo: element['army_units_dict']['PVO'],
                                tanks: element['army_units_dict']['Tank'],
                                aviation: element['army_units_dict']['Aviation'],
                            }
                            this.topPlayers.push(playerView)
                            index++
                        })
                    }
                }).catch(error => {
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                    }
                })
            }
        },
        mounted()
        {
            this.updateTopPlayersPage()
        }
    }
</script>

<style scoped>

</style>
