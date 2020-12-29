<template>
  <v-app>
    <v-row
            no-gutters
            style="margin-left: 22px;width: 1200px">
      <v-col
              v-for="item in army"
              :key="item.id + item"
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
    import SystemService from "@/services/system-service"
    export default {
        name: "Military",
        components: {EditMilitaryDialog, MilitaryCard},
        data() {
            return {
                army:[],
            }
        },
        methods:
        {
            updateArmyPage()
            {
                console.log('Inside army updatePage')
                let userId = '5fb92cde490b69cce9f464df'
                SystemService.getView(userId,'Army').then(response => {
                    if (response.status === 200)
                    {
                        console.log(response.data)
                        console.log(response.status)
                        response.data.forEach(element => {
                            let armyCardView = {
                                name: element['name'],
                                srcImage: element['link_img'],
                                number: element['number'],
                                manpower: element['reserve'],
                                weaponOnStorage: element['reserve_weapon'],
                                storageCapacity: element['storage_capacity'],
                                maintenancePriceUnit: element['maintenance_price'],
                                show: false,
                                dialog: false,
                                peopleOnUnit: element['need_peoples'],
                                modifiers: element['modifiers'],
                                srcDataInfantry: element['unit_characteristic']
                            }
                            this.army.push(armyCardView)
                        });
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
            this.updateArmyPage()
        },
    }
</script>

<style scoped>

</style>
