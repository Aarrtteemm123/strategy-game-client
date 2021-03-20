<template>
  <v-card
          elevation="8"
          width="500"
  >
    <v-img
            :src="require(`../assets/${unit.srcImage}`)"
            height="300px"
    ></v-img>

    <v-card-title>
      {{unit.name}}
    </v-card-title>
    <p>Number: {{unit.number}}</p>
    <p>Solders per unit: {{unit.peopleOnUnit}}</p>
    <p>Total serve soldiers: {{unit.number * unit.peopleOnUnit}}</p>
    <p>Maintenance price: {{unit.maintenancePriceUnit}} $/hour</p>
    <p>Total maintenance price: {{unit.number * unit.maintenancePriceUnit}} $/hour</p>
    <p>Reserve weapon: {{unit.weaponOnStorage}}</p>
    <p>Reserve military manpower: {{unit.manpower}}</p>

    <v-tooltip color="white" bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
                color="primary"
                v-bind="attrs"
                v-on="on"
        >modifiers</v-btn>
      </template>
      <v-card-text v-for="item in unit.modifiers" v-bind:key="item.id+item" style="font-size: medium;font-weight: bolder;">
        <div style="margin-top: -20px" v-bind:class="{greenText:item.color==='green',redText:item.color==='red',whiteText:item.color==='white'}">
          {{item.value}}  {{item.msg}}
        </div>
      </v-card-text>
    </v-tooltip>

    <v-card-actions>
      <v-btn
              color="blue"
              text
              @click="unit.dialog = true"
      >
        edit
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
              icon
              @click="unit.show = !unit.show"
      >
        <v-icon>{{ unit.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="unit.show">
        <v-divider></v-divider>

        <v-data-table
                :headers="tableHeaders"
                :items="unit.srcDataInfantry"
                hide-default-footer
                class="elevation-1"
        ></v-data-table>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
    export default {
        name: "MilitaryCard",
        props: ['unit'],
        data()
        {
            return{
                tableHeaders: [
                    { text: 'Type unit', align: 'start', sortable: true, value: 'unit_name'},
                    { text: 'Attack', value: 'attack_value' },
                    { text: 'Defence', value: 'defence_value' },
                ],
            }
        },
        methods:{
            callMethodForUpdatingArmyPage() {

            }
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
