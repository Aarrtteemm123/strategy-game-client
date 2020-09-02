<template>
  <v-app>
    <v-card

            width="600"
            elevation="8"
            style="margin-top: 20px"
    >
      <v-card-subtitle style="margin-top: 10px;font-weight: bold;font-size: x-large">Technology</v-card-subtitle>
      <v-card-text style="font-size: large;font-weight: bolder" class="text-left" v-for="technology in technologyLst" v-bind:key="technology">
        <hr>
        <p style="margin-top: 15px">Name: {{technology.name}}</p>
        <p>Price upgrade: {{technology.price}}</p>
        <p>Level: {{technology.level}}</p>
        <p>Max level: {{technology.maxLevel}}</p>
        <p>Total results: {{technology.level * 0.1}}%</p>
        <p class="text-center">Modifiers:</p>
        <v-card-text v-for="item in technology.modifiers" v-bind:key="item">
          <div class="text-center" style=" font-size:larger;margin-top: -20px" v-bind:class="{greenText:item.color==='green',redText:item.color==='red',whiteText:item.color==='white'}">
            {{item.value}}  {{item.to}}
          </div>
        </v-card-text>
        <v-btn @click="clkBtnUpgrade(technology)" style="margin-left: 230px" medium color="primary">Upgrade</v-btn>
        <v-progress-linear
                style="margin-top: 20px"
                color="light-blue"
                height="10"
                :value=technology.level
                striped
        ></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
    export default {
        name: "Technology",
        data()
        {
            return{
                technologyLst:[
                    {name:'medicine technology',price:1000,maxLevel:100,level:1,increasePrice:2,modifiers: [
                            {value: '+0.1%', from: 'medicine technology', to:'population', color: 'green'},
                        ],
                    },
                    {name:'machines and computers technology',price:1000,maxLevel:100,level:1,increasePrice:2,modifiers: [
                            {value: '+0.1%', from: 'machines and computer technology', to:'farms production', color: 'green'},
                            {value: '+0.1%', from: 'machines and computer technology', to:'mines production', color: 'green'},
                            {value: '+0.1%', from: 'machines and computer technology', to:'factories production', color: 'green'},
                            {value: '+0.1%', from: 'machines and computer technology', to:'military factories production', color: 'green'},
                        ],
                    },
                    {name:'upgrade weapons',price:1000,maxLevel:100,level:1,increasePrice:2,modifiers: [
                            {value: '+1%', from: 'upgrade weapons', to:'attack army', color: 'green'},
                            {value: '+1%', from: 'upgrade weapons', to:'defence army', color: 'green'},
                        ],
                    },
                ],
            }
        },
        methods:{
            clkBtnUpgrade(item)
            {
                item.level++;
                item.price *= item.increasePrice;
            }
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
