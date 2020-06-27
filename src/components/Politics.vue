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
          <v-expansion-panel-header>Population</v-expansion-panel-header>
          <p>Laws: {{ selected }}</p>
          <v-expansion-panel-content v-for="law in PopLaws" v-bind:key="law">
              <v-checkbox v-hover="" v-model="selected" :label=law.name+law.description :value=law.name></v-checkbox>
            <v-expansion-panel-content v-for="item in law.modifiers" v-bind:key="item">
              <div class="text-left" style="font-size: large" v-bind:class="{greenText:item.color==='green',redText:item.color==='red',whiteText:item.color==='white'}">
                 {{item.value}}  {{item.to}}
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>Industry</v-expansion-panel-header>
          <p>Laws: {{ selected }}</p>
          <v-expansion-panel-content v-for="law in PopLaws" v-bind:key="law">
            <v-checkbox v-hover="" v-model="selected" :label=law.name+law.description :value=law.name></v-checkbox>
            <v-expansion-panel-content v-for="item in law.modifiers" v-bind:key="item">
              <div class="text-left" style="font-size: large" v-bind:class="{greenText:item.color==='green',redText:item.color==='red',whiteText:item.color==='white'}">
                {{item.value}}  {{item.to}}
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>Military</v-expansion-panel-header>
          <p>Laws: {{ selected }}</p>
          <v-expansion-panel-content v-for="law in PopLaws" v-bind:key="law">
            <v-checkbox v-model="selected" :label=law.name+law.description :value=law.name></v-checkbox>
            <v-expansion-panel-content v-for="item in law.modifiers" v-bind:key="item">
              <div class="text-left" style="font-size: large" v-bind:class="{greenText:item.color==='green',redText:item.color==='red',whiteText:item.color==='white'}">
                {{item.value}}  {{item.to}}
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            Conscript law (percent of the total population) {{radioGroup}}
            <v-radio-group v-model="radioGroup">
              <v-radio
                      v-for="item in conscripts"
                      :key="item"
                      :label=item.name+space+item.value
                      :value="item.name"
              ></v-radio>
            </v-radio-group>
            <div style="font-size: large">Modifiers:</div>
            <div style="font-size: large" class="text-left" v-for="item in conscripts" v-bind:key="item">
              {{item.name}} {{item.value}}
              <hr>
              <div style="margin-top: 5px;margin-bottom: 5px" v-for="item2 in item.modifiers" v-bind:key="item2">
                <div style="font-size: large" v-bind:class="{greenText:item2.color==='green',redText:item2.color==='red',whiteText:item2.color==='white'}">
                  {{item2.value}} {{item2.to}}
                </div>
              </div>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>


    </v-card-text>
  </v-card>
</template>

<script>
    export default {
        name: "Politics",
        data()
        {
            return{

                space:' ',
                radioGroup: 'Volunteer',
                conscripts:[
                    {value:'0.5%',name:'Elite', modifiers:[
                            {value: '-10%', to:'population', from: 'conscripts law', color: 'red'},
                            {value: '+5%', to:'industry', from: 'conscripts law', color: 'green'},
                            {value: '+10%', to:'army', from: 'conscripts law', color: 'green'},
                        ]},
                    {value:'1.5%',name:'Volunteer', modifiers:[]},
                    {value:'2.5%',name:'Limited Conscription', modifiers:[
                            {value: '-3%', to:'population', from: 'conscripts law', color: 'red'},
                            {value: '+5%', to:'army', from: 'conscripts law', color: 'green'},
                        ]},
                    {value:'5%',name:'Extensive Conscription', modifiers:[
                            {value: '-5%', to:'population', from: 'conscripts law', color: 'red'},
                            {value: '-5%', to:'industry', from: 'conscripts law', color: 'red'},
                        ]},
                    {value:'10%',name:'Service by Requirement', modifiers:[
                            {value: '-15%', to:'population', from: 'conscripts law', color: 'red'},
                            {value: '-10%', to:'industry', from: 'conscripts law', color: 'red'},
                        ]},
                    {value:'20%',name:'All Adults Serve', modifiers:[
                            {value: '-30%', to:'population', from: 'conscripts law', color: 'red'},
                            {value: '-25%', to:'industry', from: 'conscripts law', color: 'red'},
                            {value: '-5%', to:'army', from: 'conscripts law', color: 'red'},
                        ]},
                    {value:'25%',name:'Scraping the Barrel', modifiers:[
                            {value: '-50%', to:'population', from: 'conscripts law', color: 'red'},
                            {value: '-50%', to:'industry', from: 'conscripts law', color: 'red'},
                            {value: '-10%', to:'army', from: 'conscripts law', color: 'red'},
                        ]},
                ],
                PopLaws:[
                    {name:'Immigration',description:' (Open border end invite tourist)',
                        modifiers:[
                            {value: '+2%', to:'population', from: 'immigration', color: 'green'},
                            {value: '+5%', to:'industry', from: 'immigration', color: 'green'},
                            {value: '-8%', to:'army', from: 'immigration', color: 'red'},
                        ]},
                    {name:'Close border',description:' (Close border and deportation people without passport)',
                        modifiers:[
                            {value: '-5%', to:'population', from: 'immigration', color: 'red'},
                            {value: '-5%', to:'industry', from: 'immigration', color: 'red'},
                            {value: '+10%', to:'army', from: 'immigration', color: 'green'},
                        ]}
                ],
                selected: [],
            }
        },
        methods:{

        }
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
