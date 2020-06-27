<template>
  <v-app>
    <v-row
            no-gutters
            style="margin-left: 22px;width: 1200px">
      <v-col
              v-for="item in army"
              :key="item"
              cols="12"
              sm="6"
      >
        <MilitaryCard style="margin-top: 30px;" v-bind:unit="item"></MilitaryCard>
        <EditMilitaryDialog v-bind:unit="item"></EditMilitaryDialog>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
    import MilitaryCard from "@/components/MilitaryCard";
    import EditMilitaryDialog from "@/components/EditMilitaryDialog";

    export default {
        name: "Military",
        components: {EditMilitaryDialog, MilitaryCard},
        data() {
            return {
                army:[
                    {
                        name: 'Infantry',
                        srcImage: "infantry.jpg",
                        number: 10000,
                        manpower: 500000,
                        weaponOnStorage: 10000,
                        maintenancePriceUnit: 3,
                        show: false,
                        dialog: false,
                        peopleOnUnit: 1,
                        modifiers: [
                            {value: '+10%', msg: 'nationals region', color: 'green'},
                            {value: '+5%', msg: 'low taxes', color: 'green'},
                            {value: '-8%', msg: 'old guns', color: 'red'},
                            {value: '-2%', msg: 'old tactics', color: 'red'},
                        ],
                        srcDataInfantry: [
                            {unit: 'Infantry', attack: 10, defence: 30},
                            {unit: 'Artillery', attack: 15, defence: 5},
                            {unit: 'PTO', attack: 25, defence: 40},
                            {unit: 'PVO', attack: 50, defence: 90},
                            {unit: 'Tank', attack: 5, defence: 5},
                            {unit: 'Aviation', attack: 1, defence: 15},
                        ]
                    },
                    {
                        name: 'Artillery',
                        srcImage: "artillery.jpg",
                        number: 1000,
                        manpower: 500000,
                        weaponOnStorage: 100,
                        maintenancePriceUnit: 2,
                        show: false,
                        dialog: false,
                        peopleOnUnit: 4,
                        modifiers: [

                        ],
                        srcDataInfantry: [
                            {unit: 'Infantry', attack: 60, defence: 10},
                            {unit: 'Artillery', attack: 30, defence: 5},
                            {unit: 'PTO', attack: 25, defence: 20},
                            {unit: 'PVO', attack: 25, defence: 15},
                            {unit: 'Tank', attack: 10, defence: 15},
                            {unit: 'Aviation', attack: 5, defence: 10},
                        ]
                    },
                    {
                        name: 'PTO',
                        srcImage: "pto.jpg",
                        number: 500,
                        manpower: 500000,
                        weaponOnStorage: 10,
                        maintenancePriceUnit: 1,
                        show: false,
                        dialog: false,
                        peopleOnUnit: 4,
                        modifiers: [
                            {value: '+10%', msg: 'nationals region', color: 'green'},
                            {value: '-8%', msg: 'old guns', color: 'red'},
                        ],
                        srcDataInfantry: [
                            {unit: 'Infantry', attack: 30, defence: 10},
                            {unit: 'Artillery', attack: 20, defence: 10},
                            {unit: 'PTO', attack: 20, defence: 15},
                            {unit: 'PVO', attack: 25, defence: 15},
                            {unit: 'Tank', attack: 70, defence: 20},
                            {unit: 'Aviation', attack: 1, defence: 10},
                        ]
                    },
                    {
                        name: 'PVO',
                        srcImage: "pvo.jpg",
                        number: 500,
                        manpower: 500000,
                        weaponOnStorage: 10,
                        maintenancePriceUnit: 4,
                        show: false,
                        dialog: false,
                        peopleOnUnit: 5,
                        modifiers: [
                            {value: '+10%', msg: 'nationals region', color: 'green'},
                            {value: '-8%', msg: 'old guns', color: 'red'},
                        ],
                        srcDataInfantry: [
                            {unit: 'Infantry', attack: 25, defence: 10},
                            {unit: 'Artillery', attack: 5, defence: 15},
                            {unit: 'PTO', attack: 20, defence: 5},
                            {unit: 'PVO', attack: 5, defence: 40},
                            {unit: 'Tank', attack: 10, defence: 20},
                            {unit: 'Aviation', attack: 80, defence: 40},
                        ]
                    },
                    {
                        name: 'Tank',
                        srcImage: "tank.jpg",
                        number: 800,
                        manpower: 500000,
                        weaponOnStorage: 200,
                        maintenancePriceUnit: 10,
                        show: false,
                        dialog: false,
                        peopleOnUnit: 4,
                        modifiers: [
                            {value: '-8%', msg: 'old guns', color: 'red'},
                        ],
                        srcDataInfantry: [
                            {unit: 'Infantry', attack: 100, defence: 200},
                            {unit: 'Artillery', attack: 30, defence: 30},
                            {unit: 'PTO', attack: 20, defence: 5},
                            {unit: 'PVO', attack: 10, defence: 20},
                            {unit: 'Tank', attack: 60, defence: 45},
                            {unit: 'Aviation', attack: 5, defence: 25},
                        ]
                    },
                    {
                        name: 'Aviation',
                        srcImage: "aviation.jpg",
                        number: 1500,
                        manpower: 500000,
                        weaponOnStorage: 230,
                        maintenancePriceUnit: 20,
                        show: false,
                        dialog: false,
                        peopleOnUnit: 3,
                        modifiers: [
                            {value: '+10%', msg: 'nationals region', color: 'green'},
                            {value: '-8%', msg: 'old guns', color: 'red'},
                        ],
                        srcDataInfantry: [
                            {unit: 'Infantry', attack: 40, defence: 500},
                            {unit: 'Artillery', attack: 25, defence: 50},
                            {unit: 'PTO', attack: 25, defence: 150},
                            {unit: 'PVO', attack: 10, defence: 10},
                            {unit: 'Tank', attack: 35, defence: 90},
                            {unit: 'Aviation', attack: 100, defence: 80},
                        ]
                    }
                ],
            }
        }
    }
</script>

<style scoped>

</style>
