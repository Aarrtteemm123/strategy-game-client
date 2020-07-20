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
                <v-text-field label="Numbers now*" v-model="unit.number" required></v-text-field>
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
    export default {
        name: "EditMilitaryDialog",
        props: ['unit'],
        data()
        {
            return{
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
                console.log(this.unit)
            }
        }
    }
</script>

<style scoped>

</style>
