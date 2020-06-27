<template>
  <v-app>

    <v-row
            no-gutters
            style="margin-left: 22px;width: 1200px">
      <v-col
              v-for="item in helpLst"
              :key="item"
              cols="12"
              sm="4"
      >
        <HelpCard style="margin-bottom: 30px;height: 400px" v-bind:help=item></HelpCard>
      </v-col>
    </v-row>

  </v-app>
</template>

<script>
    import HelpCard from "@/components/HelpCard";
    export default {
        name: "Help",
        components: {HelpCard},
        data() {
            return {
                helpLst:[
                    {title:'Introduction',text: 'Whitsunday Island, Whitsunday Islands',pathToImage:'intro.jpg'},
                    {title:'Budget',text: 'Whitsunday Island, Whitsunday Islands',pathToImage:'budget.jpg'},
                    {title:'Technology',text: 'Whitsunday Island, Whitsunday Islands',pathToImage:'technology.jpg'},
                    {title:'Storage',text: 'Whitsunday Island, Whitsunday Islands',pathToImage:'storage.jpeg'},
                    {title:'Politics',text: 'Whitsunday Island, Whitsunday Islands',pathToImage:'politics.jpg'},
                    {title:'Industry',text: 'Whitsunday Island, Whitsunday Islands',pathToImage:'factory.png'},
                    {title:'Population',text: 'Whitsunday Island, Whitsunday Islands',pathToImage:'population.jpg'},
                    {title:'Military',text: 'Whitsunday Island, Whitsunday Islands',pathToImage:'military.jpeg'},
                    {title:'Trade',text: 'Whitsunday Island, Whitsunday Islands',pathToImage:'trade.jpg'},
                ]
            }
        }
    }
</script>

<style scoped>

</style>
