<template>
  <v-app>
    <v-card elevation="12" width="600">
      <v-card-title>
        <v-avatar style="margin-left: 10px;margin-top: 10px" size="64">
          <img :src="require(`../assets/${tradeCartData.goods.img}`)" alt="flag">
        </v-avatar>
      </v-card-title>
      <v-card-subtitle style="margin-top: -60px;font-weight: bold;font-size: x-large;" class="pb-0">{{tradeCartData.goods.name}}</v-card-subtitle>
      <apexchart style="margin-top: 60px;margin-bottom: 20px;margin-left: 15px" class="text-sm-left" width="550" :options="tradeCartData.options" :series="tradeCartData.options.series"></apexchart>

      <v-data-table
              :headers="tradeCartData.headers"
              :items="tradeCartData.srcData"
              hide-default-footer
              class="elevation-1"
      >
        <template #item.place="{ item }">
          {{ tradeCartData.srcData.indexOf(item) + 1 }}
        </template>
        <template v-slot:item.flag="{ item }">
          <v-avatar size="35">
            <v-img :src=item.link_img :alt="item.name"></v-img>
          </v-avatar>
        </template>
      </v-data-table>

      <v-card-text style="font-weight: bolder;font-size: x-large" class="text-center">
        <div style="margin-top: 15px">Price now: {{tradeCartData.goods.price}}$</div>
        <div style="margin-top: 15px">You have: {{tradeCartData.goods.have}} tonnes</div>
        <v-btn @click="tradeCartData.goods.flagSell = true" style="width: 180px;;margin-top: 30px" large color="primary">Sell</v-btn>
        <v-btn @click="tradeCartData.goods.flagBuy = true" style="width: 180px;margin-left: 140px;margin-top: 30px" large color="primary">Buy</v-btn>
      </v-card-text>
    </v-card>

    <BuyDialog @get-error="showSnackbar"  v-if="tradeCartData.goods.flagBuy" v-bind:goods="tradeCartData.goods"></BuyDialog>
    <SellDialog @get-error="showSnackbar" v-if="tradeCartData.goods.flagSell" v-bind:goods="tradeCartData.goods"></SellDialog>

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
  </v-app>
</template>

<script>
    import { mapGetters } from "vuex";
    import BuyDialog from "@/components/BuyDialog";
    import SellDialog from "@/components/SellDialog";
    export default {
        name: "TradeCard",
        components: {SellDialog, BuyDialog},
        props: ['tradeCartData'],
        data()
        {
            return{
                snackbarVisible: false,
                error: '',
            }
        },
        methods:
        {
            showSnackbar(error)
            {
                this.snackbarVisible = true
                this.error = error
            },
            closeSnackbar()
            {
                this.snackbarVisible = false
                this.error = ''
            },
        },
        computed: {
            ...mapGetters(["srcData"])
        },
    }
</script>

<style scoped>

</style>
