<template>
  <v-app>
    <v-dialog
            v-model="goods.flagSell"
            max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Sell goods</v-card-title>

        <v-card-text>
          <v-text-field
                  v-model="numberSelling"
                  label="Numbers"
                  type="number"
          ></v-text-field>
          <p>Profit: {{numberSelling*goods.sellPrice}}$</p>
          <p>Max sell: {{youHave}} tonnes</p>
          <p>Delta price: -{{numberSelling*0.001}}%</p>
          <p>Min price: {{goods.minPrice}}$</p>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
                  color="blue darken-1"
                  text
                  @click="goods.flagSell = false"
          >
            Cancel
          </v-btn>

          <v-btn
                  color="blue darken-1"
                  text
                  @click="goods.flagSell = false"
          >
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
    export default {
        name: "SellDialog",
        props: ['goods'],
        data()
        {
            return{
                numberSelling:0,
                youHave: 10000,
            }
        }
    }
</script>

<style scoped>

</style>
