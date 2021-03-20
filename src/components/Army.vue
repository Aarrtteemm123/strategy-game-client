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
        <EditMilitaryDialog @update-army-page="updateArmyPage" v-bind:unit="item"></EditMilitaryDialog>
      </v-col>
    </v-row>
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
    import MilitaryCard from "@/components/MilitaryCard";
    import EditMilitaryDialog from "@/components/EditMilitaryDialog";
    import SystemService from "@/services/system-service"
    export default {
        name: "Military",
        components: {EditMilitaryDialog, MilitaryCard},
        data() {
            return {
                snackbarVisible: false,
                error: '',
                army:[],
            }
        },
        methods:
        {
            closeSnackbar()
            {
                this.snackbarVisible = false
                this.error = ''
            },
            updateArmyPage()
            {
                console.log('Inside army updatePage')
                let userId = this.$cookies.get('userId')
                let token = this.$cookies.get('token')
                SystemService.getView(userId,token,'Army').then(response => {
                    if (response.status === 200)
                    {
                        console.log(response.data)
                        console.log(response.status)
                        this.snackbarVisible = false
                        this.error = ''
                        this.army = []
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
                        this.snackbarVisible = true;
                        this.error = error.response.data
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
