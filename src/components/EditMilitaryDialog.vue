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
                <v-text-field type="number" :rules="[numberUnitsRules.required, numberUnitsRules.min]" label="Numbers now*" v-model="numberUnits" required></v-text-field>
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
                snackbarVisible: false,
                error: '',
                numberUnits: 0,
                numberUnitsRules: {
                    required: value => !!value || 'Required',
                    min: v => Number(v) >= 0 || 'The value must be more than 0 or equal to 0',
                },
            }
        },
        methods:{
            closeSnackbar()
            {
                this.snackbarVisible = false
                this.error = ''
            },
            cancelChanges()
            {
                this.unit.dialog = false
            },
            saveChanges()
            {
                if (this.numberUnitsRules.min(this.numberUnits) === true && this.numberUnitsRules.required(this.numberUnits) === true)
                {
                    this.unit.dialog = false
                    let userId = this.$cookies.get('userId')
                    let token = this.$cookies.get('token')
                    GameService.editArmy(userId,token,this.unit.name,this.numberUnits).then(response => {
                        if (response.status === 200)
                        {
                            console.log(response.data)
                            console.log(response.status)
                            this.$emit('update-army-page')
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
