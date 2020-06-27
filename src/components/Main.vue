<template>
  <div id="main">
    <v-app>
      <v-navigation-drawer
              v-model="drawer"
              :clipped="$vuetify.breakpoint.lgAndUp"
              app
      >
        <v-list dense>
          <template v-for="item in items">
            <v-row
                    v-if="item.heading"
                    :key="item.heading"
                    align="center"
            >
            </v-row>
            <v-list-group
                    v-else-if="item.children"
                    :key="item.text"
                    v-model="item.realActive"
                    :prepend-icon="item.realActive ? item.icon : item['icon-alt']"
                    append-icon=""
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title class="font-weight-bold">
                    {{ item.text }}
                  </v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item
                      v-for="(child, i) in item.children"
                      :key="i"
                      link
                      @click="choiceMenu(child.text)"
              >
                <v-list-item-action v-if="child.icon">
                  <v-icon>{{ child.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="font-weight-bold">
                    {{ child.text }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
            <v-list-item
                    v-else
                    :key="item.text"
                    link
                    @click="choiceMenu(item.text)"
            >
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold">
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar
              :clipped-left="$vuetify.breakpoint.lgAndUp"
              app
              color="blue darken-3"
              dark
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title
                style="width: 400px"
                class="ml-0 pl-4"
        >
          <span class="hidden-sm-and-down">Online Strategy - YOUR COUNTRY</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn @click="items[7].active = true" style="margin-right: 15px"
               icon
               large
        >
          <v-avatar
                  size="40px"
                  item
          >
            <v-img
                    src="https://www.computerhope.com/issues/pictures/logout.jpg"
                    alt="Vuetify"
            ></v-img>
          </v-avatar>
        </v-btn>
      </v-app-bar>
      <v-content>
        <v-container
                class="fill-height"
                fluid
        >
          <v-row
                  align="center"
                  justify="center"
          >
            <BasicStatistic v-if="items[0].children[0].active"></BasicStatistic>
            <Budget v-if="items[0].children[1].active"></Budget>
            <Technology v-if="items[0].children[2].active"></Technology>
            <Industry v-if="items[0].children[3].active"></Industry>
            <Warehouse v-if="items[0].children[4].active"></Warehouse>
            <Politics v-if="items[0].children[5].active"></Politics>
            <Population v-if="items[0].children[6].active"></Population>
            <Trade v-if="items[0].children[7].active"></Trade>
            <Military v-if="items[0].children[8].active"></Military>
            <Account v-if="items[1].active"></Account>
            <News v-if="items[2].active"></News>
            <AboutProject v-if="items[6].active"></AboutProject>
            <Help v-if="items[5].active"></Help>
            <SendFeedback v-if="items[4].active"></SendFeedback>
            <Settings v-if="items[3].active"></Settings>
            <Exit v-if="items[7].active"></Exit>
          </v-row>
        </v-container>
      </v-content>
    </v-app>
    <router-view></router-view>
  </div>
</template>

<script>
    //import router from "@/router";

    import AboutProject from "@/components/AboutProject";
    import Help from "@/components/Help";
    import SendFeedback from "@/components/SendFeedback";
    import Exit from "@/components/Exit";
    import Settings from "@/components/Settings";
    import Account from "@/components/Account";
    import Military from "@/components/Military";
    import Population from "@/components/Population";
    import News from "@/components/News";
    import Budget from "@/components/Budget";
    import Politics from "@/components/Politics";
    import Technology from "@/components/Technology";
    import Warehouse from "@/components/Warehouse";
    import Trade from "@/components/Trade";
    import Industry from "@/components/Industry";
    import BasicStatistic from "@/components/BasicStatistic";

    export default {
        name: "Main",
        components: {
            BasicStatistic,
            Industry,
            Trade,
            Warehouse,
            Technology,
            Politics,
            Budget, News, Population, Military, Account, Settings, Exit, SendFeedback, Help, AboutProject},
        props: {
            source: String,
        },
        data() {
            return {
                drawer: null,
                items: [
                    {
                        icon: 'mdi-chevron-up',
                        'icon-alt': 'mdi-chevron-down',
                        text: 'Country',
                        active: false,
                        realActive:true,
                        children: [
                            {active: true, icon: 'mdi-chart-pie', text: 'Basic statistic'},
                            {active: false, icon: 'mdi-currency-usd-circle-outline', text: 'Budget'},
                            {active: false, icon: 'mdi-atom', text: 'Technology'},
                            {active: false, icon: 'mdi-factory', text: 'Industry'},
                            {active: false, icon: 'mdi-barn', text: 'Warehouse'},
                            {active: false, icon: 'mdi-bank', text: 'Politics'},
                            {active: false, icon: 'mdi-human-male-female', text: 'Population'},
                            {active: false, icon: 'mdi-cart-outline', text: 'Trade'},
                            {active: false, icon: 'mdi-ammunition', text: 'Military'},
                        ],
                    },
                    {active: false, icon: 'mdi-account-circle', text: 'Account'},
                    {active: false, icon: 'mdi-newspaper-variant-multiple', text: 'News'},
                    {active: false, icon: 'mdi-cog', text: 'Settings'},
                    {active: false, icon: 'mdi-message', text: 'Send feedback'},
                    {active: false, icon: 'mdi-help-circle', text: 'Help'},
                    {active: false, icon: 'mdi-briefcase', text: 'About project'},
                    {active: false, icon: 'mdi-exit-to-app', text: 'Exit'},
                ],
            }
        },
        methods: {
            choiceMenu(item) {
                console.log(item);
                this.items.forEach(el => {
                    el.text === item ? el.active = true : el.active = false
                });
                this.items[0].children.forEach(el => {
                    el.text === item ? el.active = true : el.active = false
                });
            }
        }
    }
</script>

<style scoped>

</style>
