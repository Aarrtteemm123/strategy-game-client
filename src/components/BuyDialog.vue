<template>
  <v-app>
    <v-dialog
            v-model="goods.flagBuy"
            max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Purchase goods</v-card-title>

        <v-card-text>
          <v-text-field
                  v-model="numberBuying"
                  label="Numbers"
                  type="number"
                  :rules="[numberBuyingRules.required, numberBuyingRules.min]"
                  required
          ></v-text-field>
          <p>Total price: {{numberBuying*goods.price}}$</p>
          <p>Max buy: {{goods.warehouseCapacity - goods.have}} tonnes</p>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
                  color="blue darken-1"
                  text
                  @click="goods.flagBuy = false"
          >
            Cancel
          </v-btn>

          <v-btn
                  color="blue darken-1"
                  text
                  @click="buy(goods.name,numberBuying)"
          >
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
    import GameService from "@/services/game-service"
    export default {
        name: "BuyDialog",
        props: ['goods'],
        data()
        {
            return{
                numberBuying:0,
                numberBuyingRules: {
                    required: value => !!value || 'Required',
                    min: v => Number(v) > 0 || 'Value must be more then 0',
                },
            }
        },
        methods:
        {
            closeBuyDialog()
            {
                this.goods.flagBuy = false
            },

            buy(name,number)
            {
                if (this.numberBuyingRules.min(this.numberBuying) === true && this.numberBuyingRules.required(this.numberBuying) === true)
                {
                    let userId = this.$cookies.get('userId')
                    let token = this.$cookies.get('token')
                    GameService.buyGoods(userId,token,name,number).then(response => {
                        if (response.status === 200)
                        {
                            console.log(response.data)
                            console.log(response.status)
                            if (this.goods.have + Number(this.numberBuying) <= this.goods.warehouseCapacity && Number(this.numberBuying) > 0)
                                this.goods.have += Number(this.numberBuying)
                            this.closeBuyDialog()
                        }
                    }).catch(error => {
                        if (error.response) {
                            this.$emit('get-error', error.response.data)
                            this.closeBuyDialog()
                            console.log(error.response.data);
                            console.log(error.response.status);
                        }
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>
