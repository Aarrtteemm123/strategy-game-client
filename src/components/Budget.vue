<template>
  <v-app>

    <v-card

            width="600"
            elevation="8"
            style="margin-top: 20px"
    >
      <v-card-title >Budget</v-card-title>
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
                  v-text="value_1"
          ></span>
            <span style="font-weight: bolder;font-size: x-large"> %</span>

            <span  style="font-weight: normal;font-size: x-large;margin-left: 20px">Profit: {{value_1*k_1}}$</span>


          </v-col>
        </v-row>

        <v-slider
                v-model="value_1"
                @change="savePopTaxes"
                :color="color"
                track-color="grey"
                :thumb-size="28"
                thumb-label="always"
                min="1"
                max="100"
        >
          <template v-slot:prepend>
            <v-icon
                    :color="color"
                    @click="decrement"
            >
              mdi-minus
            </v-icon>
          </template>

          <template v-slot:append>
            <v-icon
                    :color="color"
                    @click="increment"
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
            <v-expansion-panel-content v-for="item in modifiers" v-bind:key="item">
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
                  v-text="value_1"
          ></span>
            <span style="font-weight: bolder;font-size: x-large"> %</span>

            <span  style="font-weight: normal;font-size: x-large;margin-left: 20px">Profit: {{value_1*k_1}}$</span>

          </v-col>
        </v-row>

        <v-slider
                v-model="value_1"
                :color="color"
                track-color="grey"
                :thumb-size="28"
                thumb-label="always"
                min="1"
                max="100"
        >
          <template v-slot:prepend>
            <v-icon
                    :color="color"
                    @click="decrement"
            >
              mdi-minus
            </v-icon>
          </template>

          <template v-slot:append>
            <v-icon
                    :color="color"
                    @click="increment"
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
            <v-expansion-panel-content v-for="item in modifiers" v-bind:key="item">
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
                  v-text="value_1"
          ></span>
            <span style="font-weight: bolder;font-size: x-large"> %</span>

            <span  style="font-weight: normal;font-size: x-large;margin-left: 20px">Profit: {{value_1*k_1}}$</span>

          </v-col>
        </v-row>

        <v-slider
                v-model="value_1"
                :color="color"
                track-color="grey"
                :thumb-size="28"
                thumb-label="always"
                min="1"
                max="100"
        >
          <template v-slot:prepend>
            <v-icon
                    :color="color"
                    @click="decrement"
            >
              mdi-minus
            </v-icon>
          </template>

          <template v-slot:append>
            <v-icon
                    :color="color"
                    @click="increment"
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
            <v-expansion-panel-content v-for="item in modifiers" v-bind:key="item">
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
                  v-text="value_1"
          ></span>
            <span style="font-weight: bolder;font-size: x-large"> %</span>

            <span  style="font-weight: normal;font-size: x-large;margin-left: 20px">Profit: {{value_1*k_1}}$</span>

          </v-col>
        </v-row>

        <v-slider
                v-model="value_1"
                :color="color"
                track-color="grey"
                :thumb-size="28"
                thumb-label="always"
                min="1"
                max="100"
        >
          <template v-slot:prepend>
            <v-icon
                    :color="color"
                    @click="decrement"
            >
              mdi-minus
            </v-icon>
          </template>

          <template v-slot:append>
            <v-icon
                    :color="color"
                    @click="increment"
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
            <v-expansion-panel-content v-for="item in modifiers" v-bind:key="item">
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
                  v-text="value_1"
          ></span>
            <span style="font-weight: bolder;font-size: x-large"> %</span>

            <span  style="font-weight: normal;font-size: x-large;margin-left: 20px">Profit: {{value_1*k_1}}$</span>

          </v-col>
        </v-row>

        <v-slider
                v-model="value_1"
                :color="color"
                track-color="grey"
                :thumb-size="28"
                thumb-label="always"
                min="1"
                max="100"
        >
          <template v-slot:prepend>
            <v-icon
                    :color="color"
                    @click="decrement"
            >
              mdi-minus
            </v-icon>
          </template>

          <template v-slot:append>
            <v-icon
                    :color="color"
                    @click="increment"
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
            <v-expansion-panel-content v-for="item in modifiers" v-bind:key="item">
              <div style="font-size: large" v-bind:class="{greenText:item.color==='green',redText:item.color==='red',whiteText:item.color==='white'}">
                {{item.value}}  {{item.msg}}
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
    </v-card>

  </v-app>
</template>

<script>
    export default {
        name: "Budget",
        data()
        {
            return{
                money: 1000000,
                taxesProfit:3000,
                farmsProfit:10000,
                minesProfit:10000,
                factoriesProfit:10000,
                militaryProfit:2000,
                militaryExpenses:2000,
                totalProfit: 11000,
                value_1: 50,
                k_1:100000,
                satisfactionEmojis: ['😭', '😢', '☹️', '🙁', '😐', '🙂', '😊', '😁', '😄', '😍'].reverse(),
                modifiers: [
                    {value: '+10%', msg: 'nationals region', color: 'green'},
                    {value: '-8%', msg: 'old guns', color: 'red'},
                ],
            }
        },
        computed: {
            color () {
                this.checkModifiers();
                if (this.value_1 < 20) return 'indigo';
                if (this.value_1 < 40) return 'teal';
                if (this.value_1 < 60) return 'green';
                if (this.value_1 < 80) return 'orange';
                return 'red'
            },
        },

        methods: {
            savePopTaxes()
            {
                //saving population taxes
                console.log('change taxes')
            },
            decrement () {
                this.value_1--
            },
            increment () {
                this.value_1++
            },
            checkModifiers()
            {
                if (this.value_1 < 20) this.modifiers = [];
                else if (this.value_1 < 40) this.modifiers = [{value: '-8%', msg: 'old guns', color: 'red'},];
                else if (this.value_1 < 60) this.modifiers = [
                    {value: '-8%', msg: 'old guns', color: 'red'},
                    {value: '-8%', msg: 'old guns', color: 'red'},
                ];
                else if (this.value_1 < 80) this.modifiers = [
                    {value: '-8%', msg: 'old guns', color: 'red'},
                    {value: '-8%', msg: 'old guns', color: 'red'},
                    {value: '-8%', msg: 'old guns', color: 'red'},
                ];
                else this.modifiers = [
                        {value: '-8%', msg: 'old guns', color: 'red'},
                        {value: '-8%', msg: 'old guns', color: 'red'},
                        {value: '-8%', msg: 'old guns', color: 'red'},
                        {value: '-8%', msg: 'old guns', color: 'red'},
                    ];
            }
        },
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
