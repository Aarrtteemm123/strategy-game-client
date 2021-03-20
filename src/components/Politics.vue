<template>
  <v-card
          class="mx-auto"
          elevation="10"
          width="800"
  >

    <v-card-text>
      <p class="display-1 text--primary">
        Political laws
      </p>

      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>Laws</v-expansion-panel-header>
          <p>Adopted laws: {{ selectedLaws }}</p>
          <v-expansion-panel-content v-for="law in popLaws" v-bind:key="law.id+law">
            <v-checkbox @change="changeCivilLaw(law.name)" v-model="selectedLaws" :label=law.name+law.description :value=law.name></v-checkbox>
            <v-expansion-panel-content v-for="item in law.modifiers" v-bind:key="item.id+item">
              <div class="text-left" style="font-size: large" v-bind:class="{greenText:item.color==='green',redText:item.color==='red',whiteText:item.color==='white'}">
                {{item.value}}  {{item.msg}}
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            Conscript law (percent of the total population) {{conscriptsLaw}}
            <v-radio-group v-model="conscriptsLaw">
              <v-radio
                      v-for="item in conscriptionLaws"
                      :key="item.id+item"
                      :label=item.name+space+item.value
                      :value="item.name"
                      @change="changeMilitaryLaw(item.name)"
              ></v-radio>
            </v-radio-group>
            <div style="font-size: large">Modifiers:</div>
            <div style="font-size: large" class="text-left" v-for="item in conscriptionLaws" v-bind:key="item.id+item">
              {{item.name}} {{item.value}}
              <hr>
              <div style="margin-top: 5px;margin-bottom: 5px" v-for="item2 in item.modifiers" v-bind:key="item2.id+item2">
                <div style="font-size: large" v-bind:class="{greenText:item2.color==='green',redText:item2.color==='red',whiteText:item2.color==='white'}">
                  {{item2.value}} {{item2.msg}}
                </div>
              </div>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card-text>
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
  </v-card>
</template>

<script>
    import SystemService from "@/services/system-service"
    import GameService from "@/services/game-service"
    export default {
        name: "Politics",
        data()
        {
            return{
                snackbarVisible: false,
                error: '',
                space:' ',
                conscriptsLaw: 'Conscript law: Volunteer',
                conscriptionLaws:[],
                popLaws:[],
                selectedLaws: [],
            }
        },
        methods:{
            closeSnackbar()
            {
                this.snackbarVisible = false
                this.error = ''
            },
            updatePoliticsPage()
            {
                console.log('Inside politics updatePage')
                let userId = this.$cookies.get('userId')
                let token = this.$cookies.get('token')
                SystemService.getView(userId,token,'Politics').then(response => {
                    if (response.status === 200)
                    {
                        console.log(response.data)
                        console.log(response.status)
                        this.conscriptionLaws = response.data['conscription_laws']
                        this.popLaws = response.data['pop_laws']
                        this.selectedLaws = response.data['selected_laws']
                        response.data['selected_laws'].forEach(element => {
                            if (element.includes('Conscript law: '))
                                this.conscriptsLaw = element

                        });
                    }
                }).catch(error => {
                    if (error.response) {
                        this.snackbarVisible = true
                        this.error = error.response.data
                        console.log(error.response.data);
                        console.log(error.response.status);
                    }
                })
            },
            changeCivilLaw(name)
            {
                let userId = this.$cookies.get('userId')
                let token = this.$cookies.get('token')
                if (this.selectedLaws.includes(name))
                {
                    // adopt law
                    GameService.setPoliticsLaw(userId,token,name).then(response => {
                        if (response.status === 200)
                        {
                            console.log(response.data)
                            console.log(response.status)
                            this.updatePoliticsPage()
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
                else
                {
                    // cancel law
                    GameService.cancelPoliticsLaw(userId,token,name).then(response => {
                        if (response.status === 200)
                        {
                            console.log(response.data)
                            console.log(response.status)
                            this.updatePoliticsPage()
                        }
                    }).catch(error => {
                        if (error.response) {
                            this.snackbarVisible = true
                            this.error = error.response.data
                            console.log(error.response.data);
                            console.log(error.response.status);
                        }
                    })
                }

            },
            changeMilitaryLaw(name)
            {
                console.log(name)
                let userId = this.$cookies.get('userId')
                let token = this.$cookies.get('token')
                GameService.setPoliticsLaw(userId,token,name).then(response => {
                    if (response.status === 200)
                    {
                        console.log(response.data)
                        console.log(response.status)
                        this.updatePoliticsPage()
                    }
                }).catch(error => {
                    if (error.response) {
                        this.snackbarVisible = true
                        this.error = error.response.data
                        console.log(error.response.data);
                        console.log(error.response.status);
                    }
                })
            }
        },
        mounted()
        {
            this.updatePoliticsPage()
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
