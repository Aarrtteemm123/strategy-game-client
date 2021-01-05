<template>
  <v-app>
    <v-bottom-navigation
            grow
            color="blue"
            style="margin-left: 260px;margin-top: 20px;margin-bottom: 30px;width: 700px;"
            v-model="activeBtn"
    >
      <v-btn>
        <h3>Farm goods</h3>
      </v-btn>
      <v-btn>
        <h3>Mine goods</h3>
      </v-btn>
      <v-btn>
        <h3>Industry goods</h3>
      </v-btn>
      <v-btn>
        <h3>Military goods</h3>
      </v-btn>
    </v-bottom-navigation>

    <v-row
            no-gutters
            style="margin-right: 30px;width: 1200px">
      <v-col
              v-for="item in goodsCardLst.slice(0,6)"
              :key="item.id+item"
              cols="12"
              sm="6"
      >
        <TradeCard v-if="activeBtn===0" style="margin-bottom: 30px;margin-left: 30px" v-bind:tradeCartData=item></TradeCard>
      </v-col>
    </v-row>

    <v-row
            no-gutters
            style="margin-right: 30px;width: 1200px">
      <v-col
              v-for="item in goodsCardLst.slice(6,15)"
              :key="item.id+item"
              cols="12"
              sm="6"
      >
        <TradeCard v-if="activeBtn===1" style="margin-bottom: 30px;margin-left: 30px" v-bind:tradeCartData=item></TradeCard>
      </v-col>
    </v-row>

    <v-row
            no-gutters
            style="margin-right: 30px;width: 1200px">
      <v-col
              v-for="item in goodsCardLst.slice(15,33)"
              :key="item.id+item"
              cols="12"
              sm="6"
      >
        <TradeCard v-if="activeBtn===2" style="margin-bottom: 30px;margin-left: 30px" v-bind:tradeCartData=item></TradeCard>
      </v-col>
    </v-row>

    <v-row
            no-gutters
            style="margin-right: 30px;width: 1200px">
      <v-col
              v-for="item in goodsCardLst.slice(33,40)"
              :key="item.id+item"
              cols="12"
              sm="6"
      >
        <TradeCard v-if="activeBtn===3" style="margin-bottom: 30px;margin-left: 30px" v-bind:tradeCartData=item></TradeCard>
      </v-col>
    </v-row>
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
    import TradeCard from "@/components/TradeCard";
    import SystemService from "@/services/system-service"
    export default {
        name: "Trade",
        components: {TradeCard},
        data()
        {
            return{
                snackbarVisible: false,
                error: '',

                goodsCardLst:[],
                activeBtn: 0,
            }
        },
        methods:
        {
            closeSnackbar()
            {
                this.snackbarVisible = false
                this.error = ''
            },
            updateTradePage()
            {
                console.log('Inside trade updatePage')
                let userId = '5fb92cde490b69cce9f464df'
                SystemService.getView(userId,'Trade').then(response => {
                    if (response.status === 200)
                    {
                        console.log(response.data)
                        console.log(response.status)
                        response.data.forEach(element => {
                            let tradeObj = {
                                goods:{name:element['name'], img:element['link_img'], flagSell:false, flagBuy:false, price:element['price'], warehouseCapacity:element['warehouse_capacity'], have:element['warehouse_has']},

                                headers: [
                                    { text: 'Place', align: 'start', sortable: true, value: 'place'},
                                    { text: 'Flag', value: 'flag' },
                                    { text: 'Name', value: 'name_country' },
                                    { text: 'Production', value: 'number' },
                                ],
                                srcData: element['data_top_producer'],
                                options: {
                                    series: [{
                                        name: 'Price',
                                        data: element['chart_price_goods']['data']
                                    }],
                                    chart: {
                                        height: 350,
                                        type: 'line',
                                    },
                                    stroke: {
                                        width: 7,
                                        curve: 'smooth'
                                    },
                                    xaxis: {
                                        type: 'string',
                                        categories: element['chart_price_goods']['x_axis_label'],
                                    },
                                    title: {
                                        text: element['name']+' price dynamic',
                                        align: 'left',
                                        style: {
                                            fontSize: "16px",
                                            color: '#666'
                                        }
                                    },
                                    fill: {
                                        type: "gradient",
                                        gradient: {
                                            type: "vertical",
                                            shadeIntensity: 1,
                                            opacityFrom: 0.7,
                                            opacityTo: 0.9,
                                            colorStops: [
                                                {
                                                    offset: 0,
                                                    color: "#EB656F",
                                                    opacity: 1
                                                },
                                                {
                                                    offset: 50,
                                                    color: "#FAD375",
                                                    opacity: 1
                                                },
                                                {
                                                    offset: 100,
                                                    color: "#61DBC3",
                                                    opacity: 1
                                                },
                                            ]
                                        }
                                    },
                                    markers: {
                                        size: 3,
                                        colors: ["#FFA41B"],
                                        strokeColors: "#fff",
                                        strokeWidth: 2,
                                        hover: {
                                            size: 7,
                                        }
                                    },
                                    yaxis: {
                                        min: element['chart_price_goods']['y_min'],
                                        max: element['chart_price_goods']['y_max'],
                                        title: {
                                            text: 'Price',
                                        },
                                    }
                                },
                            }
                            this.goodsCardLst.push(tradeObj)
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
            }
        },
        mounted()
        {
            this.updateTradePage()
        },
        computed: {
            ...mapGetters(["srcData"])
        },
    }
</script>

<style scoped>

</style>
