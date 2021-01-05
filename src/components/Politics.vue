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
          <v-expansion-panel-content v-for="law in PopLaws" v-bind:key="law.id+law">
            <v-checkbox @change="changeCivilLaw(law.name)" v-model="selectedLaws" :label=law.name+law.description :value=law.name></v-checkbox>
            <v-expansion-panel-content v-for="item in law.modifiers" v-bind:key="item.id+item">
              <div class="text-left" style="font-size: large" v-bind:class="{greenText:item.color==='green',redText:item.color==='red',whiteText:item.color==='white'}">
                {{item.value}}  {{item.to}}
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            Conscript law (percent of the total population) {{conscriptsLaw}}
            <v-radio-group v-model="conscriptsLaw">
              <v-radio
                      v-for="item in conscripts"
                      :key="item.id+item"
                      :label=item.name+space+item.value
                      :value="item.name"
                      @change="changeMilitaryLaw(item.name)"
              ></v-radio>
            </v-radio-group>
            <div style="font-size: large">Modifiers:</div>
            <div style="font-size: large" class="text-left" v-for="item in conscripts" v-bind:key="item.id+item">
              {{item.name}} {{item.value}}
              <hr>
              <div style="margin-top: 5px;margin-bottom: 5px" v-for="item2 in item.modifiers" v-bind:key="item2.id+item2">
                <div style="font-size: large" v-bind:class="{greenText:item2.color==='green',redText:item2.color==='red',whiteText:item2.color==='white'}">
                  {{item2.value}} {{item2.to}}
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
                conscriptsLaw: 'Volunteer',
                conscripts:[
                    {value:'0.5%',name:'Elite', modifiers:[
                            {value: '-10%', to:'population', from: 'conscripts law', color: 'red'},
                            {value: '+10%', to:'industry', from: 'conscripts law', color: 'green'},
                            {value: '+10%', to:'attack army', from: 'conscripts law', color: 'green'},
                            {value: '+10%', to:'defence army', from: 'conscripts law', color: 'green'},
                        ]},
                    {value:'1.5%',name:'Volunteer', modifiers:[]},
                    {value:'2.5%',name:'Limited Conscription', modifiers:[
                            {value: '-5%', to:'industry', from: 'conscripts law', color: 'red'},
                            {value: '+5%', to:'attack army', from: 'conscripts law', color: 'green'},
                            {value: '+5%', to:'defence army', from: 'conscripts law', color: 'green'},
                        ]},
                    {value:'5%',name:'Extensive Conscription', modifiers:[
                            {value: '-5%', to:'industry', from: 'conscripts law', color: 'red'},
                        ]},
                    {value:'10%',name:'Service by Requirement', modifiers:[
                            {value: '-5%', to:'population', from: 'conscripts law', color: 'red'},
                            {value: '-5%', to:'industry', from: 'conscripts law', color: 'red'},
                            {value: '-5%', to:'attack army', from: 'conscripts law', color: 'red'},
                            {value: '-5%', to:'defence army', from: 'conscripts law', color: 'red'},
                        ]},
                    {value:'20%',name:'All Adults Serve', modifiers:[
                            {value: '-10%', to:'population', from: 'conscripts law', color: 'red'},
                            {value: '-15%', to:'industry', from: 'conscripts law', color: 'red'},
                            {value: '-5%', to:'attack army', from: 'conscripts law', color: 'red'},
                            {value: '-5%', to:'defence army', from: 'conscripts law', color: 'red'},
                        ]},
                    {value:'30%',name:'All with weapons', modifiers:[
                            {value: '-15%', to:'population', from: 'conscripts law', color: 'red'},
                            {value: '-35%', to:'industry', from: 'conscripts law', color: 'red'},
                            {value: '-15%', to:'attack army', from: 'conscripts law', color: 'red'},
                            {value: '-10%', to:'defence army', from: 'conscripts law', color: 'red'},
                        ]},
                ],
                PopLaws:[
                    {name:'Isolation',description:' (Close border for all)',
                        modifiers:[
                            {value: '-5%', to:'population', from: 'Isolation', color: 'red'},
                            {value: '-5%', to:'industry', from: 'Isolation', color: 'red'},
                            {value: '+15%', to:'defence army', from: 'Isolation', color: 'green'},
                        ]},
                    {name:'Free medicine',description:' (Medicine is free for everyone)',
                        modifiers:[
                            {value: '+5%', to:'population', from: 'Free medicine', color: 'green'},
                            {value: '-10%', to:'industry', from: 'Free medicine', color: 'red'},
                        ]},
                    {name:'Free housing',description:' (Gift flat for every family)',
                        modifiers:[
                            {value: '+5%', to:'population', from: 'Free housing', color: 'green'},
                            {value: '-10%', to:'industry', from: 'Free housing', color: 'red'},
                            {value: '+10%', to:'defence army', from: 'Free housing', color: 'green'},
                            {value: '-10%', to:'attack army', from: 'Free housing', color: 'red'},
                        ]},
                    {name:'Free education',description:' (Education is free for everyone)',
                        modifiers:[
                            {value: '-2%', to:'population', from: 'Free education', color: 'red'},
                            {value: '+15%', to:'industry', from: 'Free education', color: 'green'},
                            {value: '-10%', to:'attack army', from: 'Free education', color: 'red'},
                        ]},
                ],
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
                let userId = '5fb92cde490b69cce9f464df'
                SystemService.getView(userId,'Politics').then(response => {
                    if (response.status === 200)
                    {
                        console.log(response.data)
                        console.log(response.status)
                        response.data.forEach(element => {
                            if (element.includes('Conscript law: '))
                                this.conscriptsLaw = element.split('Conscript law: ')[1]

                        });
                        this.selectedLaws = response.data
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
                let userId = '5fb92cde490b69cce9f464df'
                if (this.selectedLaws.includes(name))
                {
                    // adopt law
                    GameService.setPoliticsLaw(userId,name).then(response => {
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
                    GameService.cancelPoliticsLaw(userId,name).then(response => {
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
                let userId = '5fb92cde490b69cce9f464df'
                GameService.setPoliticsLaw(userId,'Conscript law: '+name).then(response => {
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
