<template>
  <v-app>

    <v-card
            width="600"
            elevation="8"
            style="margin-top: 20px"
    >
      <v-card-title>Budget</v-card-title>
      <v-card-text style="font-size: large">
        <p>Money: {{money}}$</p>
        <p>Taxes profit: {{taxesProfit}}$</p>
        <p>Farms profit: {{farmsProfit}}$</p>
        <p>Mines profit: {{minesProfit}}$</p>
        <p>Factories profit: {{factoriesProfit}}$</p>
        <p>Army profit: {{militaryProfit}}$</p>
        <p>Military expenses: {{militaryExpenses}}$</p>
        <hr>
        <p style="margin-top: 10px">Total profit: {{totalProfit}}$</p>
      </v-card-text>
    </v-card>
    <v-card

            width="600"
            elevation="8"
            style="margin-top: 20px"
    >
      <v-toolbar
              flat
              dense
      >
        <v-toolbar-title>
          <span class="subheading">POPULATION TAXES</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>

      <v-card-text>
        <v-row
                class="mb-4"
                justify="space-between"
        >
          <v-col class="text-left">
          <span
                  class="display-1 font-weight-light"
                  v-text="popTax"
          ></span>
            <span style="font-weight: bolder;font-size: x-large"> %</span>

            <span  style="font-weight: normal;font-size: x-large;margin-left: 20px">Profit: {{popTaxProfit}}$</span>


          </v-col>
        </v-row>

        <v-slider
                v-model="popTax"
                @change="changeTaxes('population_taxes',popTax)"
                :color="getColor(popTax)"
                track-color="grey"
                :thumb-size="28"
                thumb-label="always"
                min="1"
                max="100"
        >
          <template v-slot:prepend>
            <v-icon
                    :color="getColor(popTax)"
                    @click="decrementPopTaxes"
            >
              mdi-minus
            </v-icon>
          </template>

          <template v-slot:append>
            <v-icon
                    :color="getColor(popTax)"
                    @click="incrementPopTaxes"
            >
              mdi-plus
            </v-icon>
          </template>

          <template v-slot:thumb-label="{ value }">
            {{ satisfactionEmojis[Math.min(Math.floor(value / 10), 9)] }}
          </template>

        </v-slider>

        <v-expansion-panels hover>
          <v-expansion-panel>
            <v-expansion-panel-header>MODIFIERS</v-expansion-panel-header>
            <v-expansion-panel-content v-for="item in popModifiers" v-bind:key="item">
              <div style="font-size: large" v-bind:class="{greenText:item.color==='green',redText:item.color==='red',whiteText:item.color==='white'}">
                {{item.value}}  {{item.msg}}
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
    </v-card>
    <v-card

            width="600"
            elevation="8"
            style="margin-top: 30px"
    >
      <v-toolbar
              flat
              dense
      >
        <v-toolbar-title>
          <span class="subheading">FARMS TAXES</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>

      <v-card-text>
        <v-row
                class="mb-4"
                justify="space-between"
        >
          <v-col class="text-left">
          <span
                  class="display-1 font-weight-light"
                  v-text="farmsTax"
          ></span>
            <span style="font-weight: bolder;font-size: x-large"> %</span>

            <span  style="font-weight: normal;font-size: x-large;margin-left: 20px">Profit: {{farmsTaxProfit}}$</span>

          </v-col>
        </v-row>

        <v-slider
                v-model="farmsTax"
                :color="getColor(farmsTax)"
                @change="changeTaxes('farms_taxes',farmsTax)"
                track-color="grey"
                :thumb-size="28"
                thumb-label="always"
                min="1"
                max="100"
        >
          <template v-slot:prepend>
            <v-icon
                    :color="getColor(farmsTax)"
                    @click="decrementFarmsTaxes"
            >
              mdi-minus
            </v-icon>
          </template>

          <template v-slot:append>
            <v-icon
                    :color="getColor(farmsTax)"
                    @click="incrementFarmsTaxes"
            >
              mdi-plus
            </v-icon>
          </template>

          <template v-slot:thumb-label="{ value }">
            {{ satisfactionEmojis[Math.min(Math.floor(value / 10), 9)] }}
          </template>

        </v-slider>

        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>MODIFIERS</v-expansion-panel-header>
            <v-expansion-panel-content v-for="item in farmsModifiers" v-bind:key="item">
              <div style="font-size: large" v-bind:class="{greenText:item.color==='green',redText:item.color==='red',whiteText:item.color==='white'}">
                {{item.value}}  {{item.msg}}
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
    </v-card>
    <v-card

            width="600"
            elevation="8"
            style="margin-top: 30px"
    >
      <v-toolbar
              flat
              dense
      >
        <v-toolbar-title>
          <span class="subheading">MINES TAXES</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>

      <v-card-text>
        <v-row
                class="mb-4"
                justify="space-between"
        >
          <v-col class="text-left">
          <span
                  class="display-1 font-weight-light"
                  v-text="minesTax"
          ></span>
            <span style="font-weight: bolder;font-size: x-large"> %</span>

            <span  style="font-weight: normal;font-size: x-large;margin-left: 20px">Profit: {{minesTaxProfit}}$</span>

          </v-col>
        </v-row>

        <v-slider
                v-model="minesTax"
                :color="getColor(minesTax)"
                @change="changeTaxes('mines_taxes',minesTax)"
                track-color="grey"
                :thumb-size="28"
                thumb-label="always"
                min="1"
                max="100"
        >
          <template v-slot:prepend>
            <v-icon
                    :color="getColor(minesTax)"
                    @click="decrementMinesTaxes"
            >
              mdi-minus
            </v-icon>
          </template>

          <template v-slot:append>
            <v-icon
                    :color="getColor(minesTax)"
                    @click="incrementMinesTaxes"
            >
              mdi-plus
            </v-icon>
          </template>

          <template v-slot:thumb-label="{ value }">
            {{ satisfactionEmojis[Math.min(Math.floor(value / 10), 9)] }}
          </template>

        </v-slider>

        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>MODIFIERS</v-expansion-panel-header>
            <v-expansion-panel-content v-for="item in minesModifiers" v-bind:key="item">
              <div style="font-size: large" v-bind:class="{greenText:item.color==='green',redText:item.color==='red',whiteText:item.color==='white'}">
                {{item.value}}  {{item.msg}}
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
    </v-card>
    <v-card

            width="600"
            elevation="8"
            style="margin-top: 30px"
    >
      <v-toolbar
              flat
              dense
      >
        <v-toolbar-title>
          <span class="subheading">FACTORIES TAXES</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>

      <v-card-text>
        <v-row
                class="mb-4"
                justify="space-between"
        >
          <v-col class="text-left">
          <span
                  class="display-1 font-weight-light"
                  v-text="factoriesTax"
          ></span>
            <span style="font-weight: bolder;font-size: x-large"> %</span>

            <span  style="font-weight: normal;font-size: x-large;margin-left: 20px">Profit: {{factoriesTaxProfit}}$</span>

          </v-col>
        </v-row>

        <v-slider
                v-model="factoriesTax"
                :color="getColor(factoriesTax)"
                @change="changeTaxes('factories_taxes',factoriesTax)"
                track-color="grey"
                :thumb-size="28"
                thumb-label="always"
                min="1"
                max="100"
        >
          <template v-slot:prepend>
            <v-icon
                    :color="getColor(factoriesTax)"
                    @click="decrementFactoriesTaxes"
            >
              mdi-minus
            </v-icon>
          </template>

          <template v-slot:append>
            <v-icon
                    :color="getColor(factoriesTax)"
                    @click="incrementFactoriesTaxes"
            >
              mdi-plus
            </v-icon>
          </template>

          <template v-slot:thumb-label="{ value }">
            {{ satisfactionEmojis[Math.min(Math.floor(value / 10), 9)] }}
          </template>

        </v-slider>

        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>MODIFIERS</v-expansion-panel-header>
            <v-expansion-panel-content v-for="item in factoriesModifiers" v-bind:key="item">
              <div style="font-size: large" v-bind:class="{greenText:item.color==='green',redText:item.color==='red',whiteText:item.color==='white'}">
                {{item.value}}  {{item.msg}}
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
    </v-card>
    <v-card

            width="600"
            elevation="8"
            style="margin-top: 30px"
    >
      <v-toolbar
              flat
              dense
      >
        <v-toolbar-title>
          <span class="subheading">ARMY TAXES</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>

      <v-card-text>
        <v-row
                class="mb-4"
                justify="space-between"
        >
          <v-col class="text-left">
          <span
                  class="display-1 font-weight-light"
                  v-text="armyTax"
          ></span>
            <span style="font-weight: bolder;font-size: x-large"> %</span>

            <span  style="font-weight: normal;font-size: x-large;margin-left: 20px">Profit: {{armyTaxProfit}}$</span>

          </v-col>
        </v-row>

        <v-slider
                v-model="armyTax"
                :color="getColor(armyTax)"
                @change="changeTaxes('military_taxes',armyTax)"
                track-color="grey"
                :thumb-size="28"
                thumb-label="always"
                min="1"
                max="100"
        >
          <template v-slot:prepend>
            <v-icon
                    :color="getColor(armyTax)"
                    @click="decrementArmyTaxes"
            >
              mdi-minus
            </v-icon>
          </template>

          <template v-slot:append>
            <v-icon
                    :color="getColor(armyTax)"
                    @click="incrementArmyTaxes"
            >
              mdi-plus
            </v-icon>
          </template>

          <template v-slot:thumb-label="{ value }">
            {{ satisfactionEmojis[Math.min(Math.floor(value / 10), 9)] }}
          </template>

        </v-slider>

        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>MODIFIERS</v-expansion-panel-header>
            <v-expansion-panel-content v-for="item in armyModifiers" v-bind:key="item">
              <div style="font-size: large" v-bind:class="{greenText:item.color==='green',redText:item.color==='red',whiteText:item.color==='white'}">
                {{item.value}}  {{item.msg}}
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
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
        name: "Budget",
        data()
        {
            return{
                snackbarVisible: false,
                error: '',

                money: 0,
                taxesProfit: 0,
                farmsProfit:0,
                minesProfit:0,
                factoriesProfit:0,
                militaryProfit:0,
                militaryExpenses:0,
                totalProfit: 0,

                popTax: 0,
                popTaxProfit:0,
                popModifiers: [],

                farmsTax: 0,
                farmsTaxProfit: 0,
                farmsModifiers: [],

                minesTax: 0,
                minesTaxProfit: 0,
                minesModifiers: [],

                factoriesTax: 0,
                factoriesTaxProfit: 0,
                factoriesModifiers: [],

                armyTax: 0,
                armyTaxProfit: 0,
                armyModifiers: [],

                satisfactionEmojis: ['😭', '😢', '☹️', '🙁', '😐', '🙂', '😊', '😁', '😄', '😍'].reverse(),

            }
        },
        methods: {
            closeSnackbar()
            {
                this.snackbarVisible = false
                this.error = ''
            },
            getColor (taxValue) {
                if (taxValue < 20) return 'indigo';
                if (taxValue < 40) return 'teal';
                if (taxValue < 60) return 'green';
                if (taxValue < 80) return 'orange';
                return 'red'
            },
            updatePage()
            {
                console.log('Inside updatePage')
                let userId = this.$cookies.get('userId')
                let token = this.$cookies.get('token')
                SystemService.getView(userId,token,'Budget').then(response => {
                    if (response.status === 200)
                    {
                        console.log(response.data)
                        console.log(response.status)
                        this.money = response.data['money']
                        this.taxesProfit = response.data['taxes_profit']
                        this.farmsProfit = response.data['farms_profit']
                        this.minesProfit = response.data['mines_profit']
                        this.factoriesProfit = response.data['factories_profit']
                        this.militaryProfit = response.data['army_taxes']['profit']
                        this.militaryExpenses = response.data['military_expenses']
                        this.totalProfit = response.data['total_profit']

                        this.popTax = response.data['population_taxes']['percent_value']
                        this.popTaxProfit = response.data['population_taxes']['profit']
                        this.popModifiers = response.data['population_taxes']['modifiers']

                        this.farmsTax = response.data['farms_taxes']['percent_value']
                        this.farmsTaxProfit = response.data['farms_taxes']['profit']
                        this.farmsModifiers = response.data['farms_taxes']['modifiers']

                        this.minesTax = response.data['mines_taxes']['percent_value']
                        this.minesTaxProfit = response.data['mines_taxes']['profit']
                        this.minesModifiers = response.data['mines_taxes']['modifiers']

                        this.factoriesTax = response.data['factories_taxes']['percent_value']
                        this.factoriesTaxProfit = response.data['factories_taxes']['profit']
                        this.factoriesModifiers = response.data['factories_taxes']['modifiers']

                        this.armyTax = response.data['army_taxes']['percent_value']
                        this.armyTaxProfit = response.data['army_taxes']['profit']
                        this.armyModifiers = response.data['army_taxes']['modifiers']
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
            changeTaxes(name, newValue)
            {
                console.log('change taxes')
                let userId = this.$cookies.get('userId')
                let token = this.$cookies.get('token')
                GameService.changeTax(userId,token,name,newValue).then(response => {
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

            },
            decrementPopTaxes () {
                this.popTax--
                this.changeTaxes('population_taxes',this.popTax)
            },
            incrementPopTaxes () {
                this.popTax++
                this.changeTaxes('population_taxes',this.popTax)
            },
            decrementFarmsTaxes () {
                this.farmsTax--
                this.changeTaxes('farms_taxes',this.farmsTax)
            },
            incrementFarmsTaxes () {
                this.farmsTax++
                this.changeTaxes('farms_taxes',this.farmsTax)
            },
            decrementMinesTaxes () {
                this.minesTax--
                this.changeTaxes('mines_taxes',this.minesTax)
            },
            incrementMinesTaxes () {
                this.minesTax++
                this.changeTaxes('mines_taxes',this.minesTax)
            },
            decrementFactoriesTaxes () {
                this.factoriesTax--
                this.changeTaxes('factories_taxes',this.factoriesTax)
            },
            incrementFactoriesTaxes () {
                this.factoriesTax++
                this.changeTaxes('factories_taxes',this.factoriesTax)
            },
            decrementArmyTaxes () {
                this.armyTax--
                this.changeTaxes('military_taxes',this.armyTax)
            },
            incrementArmyTaxes () {
                this.armyTax++
                this.changeTaxes('military_taxes',this.armyTax)
            },
        },
        mounted() {
            console.log('Inside budget mounted');
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
