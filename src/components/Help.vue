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
                    {title:'Introduction',text: 'Welcome to the game Your country. Here you can feel like the leaders of the countries, you will need to make a decision that will help you compete with other players in various fields. The goal of the game is to bring your country to prosperity, but what path have you chosen for this only from you.',pathToImage:'intro.jpg'},
                    {title:'Budget',text: 'Taxes are a good source of income, but remember that you need a balance in everything. You can almost completely abolish taxes, or vice versa to take everything, respectively, it will have consequences.',pathToImage:'budget.jpg'},
                    {title:'Technology',text: 'Technologies have always been a necessary part of humanity. They can seriously affect your country, but they are not cheap. Technological progress never stands still and you do not know about the achievements of science in other countries, perhaps you will be the first.',pathToImage:'technology.jpg'},
                    {title:'Storage',text: 'Large warehouses are good, and when they are full even better. If the warehouse is 100% full, the goods will start to disappear, and if empty, the factories will not work. Also, if you are successfully attacked, you will lose all your reserves, and this is not the best news for your economy.',pathToImage:'storage.jpeg'},
                    {title:'Politics',text: 'There are civil and conscription laws. Each law has its pros and cons, as well as price. There are no perfect laws, but there are enough good ones, choose, and whether everyone will like it does not matter, or not?',pathToImage:'politics.jpg'},
                    {title:'Industry',text: 'Choose one or more areas and build farms, mines, factories. Industry is the basis of profit. Become a bakery tycoon or make sure that there are enough tanks for each inhabitant. Monitor the price and efficiency of production. There are almost no factories.',pathToImage:'factory.png'},
                    {title:'Population',text: 'People are the main value of the country. Their employment depends on your priorities, no one should be left without a job. There is also a percentage of the population that is not active. It represents all other groups of the population. If you run out of population you lose, don\'t let that happen.',pathToImage:'population.jpg'},
                    {title:'Army',text: 'A large army is a big hole in the budget. Do you have a strong enough army? Time will tell, but as the practice of invincible armies shows, there are none. Learn the types of troops and what they are best suited for. You can have no army at all, or drive all the free population to the service. Quality or quantity that you choose?',pathToImage:'military.jpeg'},
                    {title:'Trade',text: 'Trading is always good for someone, but make it good for you. You can make money on it. Prices change randomly every hour. Don\'t let the market bankrupt you.',pathToImage:'trade.jpg'},
                ]
            }
        }
    }
</script>

<style scoped>

</style>
