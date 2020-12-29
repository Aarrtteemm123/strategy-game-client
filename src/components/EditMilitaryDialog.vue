<template>
  <v-row justify="center">
    <v-dialog v-model="unit.dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">{{unit.name}}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Numbers now*" v-model="numberUnits" required></v-text-field>
                <v-card-text>Manpower: {{unit.manpower}}</v-card-text>
                <v-card-text>On storage: {{unit.weaponOnStorage}}</v-card-text>
                <v-card-text>1 unit = {{unit.peopleOnUnit}} people</v-card-text>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="cancelChanges">Close</v-btn>
          <v-btn color="blue darken-1" text @click="saveChanges">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
    import GameService from "@/services/game-service"
    export default {
        name: "EditMilitaryDialog",
        props: ['unit'],
        data()
        {
            return{
                numberUnits: 0
            }
        },
        methods:{
            cancelChanges()
            {
                this.unit.dialog = false
            },
            saveChanges()
            {
                this.unit.dialog = false
                console.log(this.unit.name)
                console.log(this.unit.number)
                let userId = '5fb92cde490b69cce9f464df'
                GameService.editArmy(userId,this.unit.name,this.numberUnits).then(response => {
                    if (response.status === 200)
                    {
                        console.log(response.data)
                        console.log(response.status)
                        let dif = this.unit.number - this.numberUnits
                        if (this.unit.manpower + (dif * this.unit.peopleOnUnit) >= 0 && this.unit.weaponOnStorage + dif >= 0 && this.numberUnits > 0)
                        {
                            this.unit.number = this.numberUnits
                            this.unit.weaponOnStorage +=dif
                            this.unit.manpower +=dif

                            if (this.unit.weaponOnStorage > this.unit.storageCapacity)
                                this.unit.weaponOnStorage = this.unit.storageCapacity
                        }
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
            this.numberUnits = JSON.parse(JSON.stringify(this.unit.number)) // copy value
        }
    }
</script>

<style scoped>

</style>
