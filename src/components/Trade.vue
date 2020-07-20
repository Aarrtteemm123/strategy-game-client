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
              v-for="item in goodsCardLst"
              :key="item"
              cols="12"
              sm="6"
      >
        <TradeCard v-if="item.activeBtn===activeBtn" style="margin-bottom: 30px;margin-left: 30px" v-bind:tradeCartData=item></TradeCard>
      </v-col>
    </v-row>

  </v-app>
</template>

<script>
    import { mapGetters } from "vuex";
    import TradeCard from "@/components/TradeCard";
    export default {
        name: "Trade",
        components: {TradeCard},
        data()
        {
            return{
                goodsCardLst:[
                    {
                        activeBtn: 0,
                        goods:{name:'Seed',flagSell:false, flagBuy:false,minPrice: 10,
                            sellPrice:100,buyPrice:120,have:1200},

                        headers: [
                            { text: 'Place', align: 'start', sortable: true, value: 'place'},
                            { text: 'Flag', value: 'flag' },
                            { text: 'Name', value: 'name' },
                            { text: 'Production', value: 'production' },
                        ],
                        srcData: [
                            {place: 1, flag: 'https://static.posters.cz/image/1300/%D0%A4%D0%BE%D1%82%D0%BE%D1%88%D0%BF%D0%B0%D0%BB%D0%B5%D1%80%D0%B8/flag-great-britain-uk-416x254-cm-130g/m2-vlies-non-woven-i44071.jpg',name: 'Great Britain',production: 12.4},
                            {place: 2, flag: 'https://image.winudf.com/v2/image1/Y29tLmZsYWd3YWxscGFwZXIuZ2VybWFueV9zY3JlZW5fNF8xNTQ3NDgyNTMyXzA1OA/screen-5.jpg?fakeurl=1&type=.jpg',name: 'Germany',production: 12.1},
                            {place: 3, flag: 'https://images-na.ssl-images-amazon.com/images/I/71J2%2BQiNWDL._AC_SL1500_.jpg',name: 'USA',production: 11.5},
                            {place: 4, flag: 'https://www.thebodyholiday.com/wp-content/uploads/2017/07/france-flag.jpg',name: 'France',production: 10},
                            {place: 5, flag: 'https://ak.picdn.net/shutterstock/videos/3533912/thumb/1.jpg',name: 'Sweden',production: 8},
                        ],

                        options: {
                            series: [{
                                name: 'Price',
                                data: [0,5,10,7,15,20,14]
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
                                categories: ['00:00h','1:00h','2:00h','3:00h','4:00h','5:00h','6:00h'],
                            },
                            title: {
                                text: 'Seed price dynamic',
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
                                min: -5,
                                max: 30,
                                title: {
                                    text: 'Price',
                                },
                            }
                        },
                    },
                    {
                        activeBtn: 0,
                        goods:{name:'Meat',flagSell:false, flagBuy:false,minPrice: 10,
                            sellPrice:100,buyPrice:120,have:1200},

                        headers: [
                            { text: 'Place', align: 'start', sortable: true, value: 'place'},
                            { text: 'Flag', value: 'flag' },
                            { text: 'Name', value: 'name' },
                            { text: 'Production', value: 'production' },
                        ],
                        srcData: [
                            {place: 1, flag: 'https://static.posters.cz/image/1300/%D0%A4%D0%BE%D1%82%D0%BE%D1%88%D0%BF%D0%B0%D0%BB%D0%B5%D1%80%D0%B8/flag-great-britain-uk-416x254-cm-130g/m2-vlies-non-woven-i44071.jpg',name: 'Great Britain',production: 12.4},
                            {place: 2, flag: 'https://image.winudf.com/v2/image1/Y29tLmZsYWd3YWxscGFwZXIuZ2VybWFueV9zY3JlZW5fNF8xNTQ3NDgyNTMyXzA1OA/screen-5.jpg?fakeurl=1&type=.jpg',name: 'Germany',production: 12.1},
                            {place: 3, flag: 'https://images-na.ssl-images-amazon.com/images/I/71J2%2BQiNWDL._AC_SL1500_.jpg',name: 'USA',production: 11.5},
                            {place: 4, flag: 'https://www.thebodyholiday.com/wp-content/uploads/2017/07/france-flag.jpg',name: 'France',production: 10},
                            {place: 5, flag: 'https://ak.picdn.net/shutterstock/videos/3533912/thumb/1.jpg',name: 'Sweden',production: 8},
                        ],

                        options: {
                            series: [{
                                name: 'Price',
                                data: [0,5,10,7,15,20,14]
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
                                categories: ['00:00h','1:00h','2:00h','3:00h','4:00h','5:00h','6:00h'],
                            },
                            title: {
                                text: 'Seed price dynamic',
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
                                min: -5,
                                max: 30,
                                title: {
                                    text: 'Price',
                                },
                            }
                        },
                    },
                    {
                        activeBtn: 1,
                        goods:{name:'Fruits',flagSell:false, flagBuy:false,minPrice: 10,
                            sellPrice:100,buyPrice:120,have:1200},

                        headers: [
                            { text: 'Place', align: 'start', sortable: true, value: 'place'},
                            { text: 'Flag', value: 'flag' },
                            { text: 'Name', value: 'name' },
                            { text: 'Production', value: 'production' },
                        ],
                        srcData: [
                            {place: 1, flag: 'https://static.posters.cz/image/1300/%D0%A4%D0%BE%D1%82%D0%BE%D1%88%D0%BF%D0%B0%D0%BB%D0%B5%D1%80%D0%B8/flag-great-britain-uk-416x254-cm-130g/m2-vlies-non-woven-i44071.jpg',name: 'Great Britain',production: 12.4},
                            {place: 2, flag: 'https://image.winudf.com/v2/image1/Y29tLmZsYWd3YWxscGFwZXIuZ2VybWFueV9zY3JlZW5fNF8xNTQ3NDgyNTMyXzA1OA/screen-5.jpg?fakeurl=1&type=.jpg',name: 'Germany',production: 12.1},
                            {place: 3, flag: 'https://images-na.ssl-images-amazon.com/images/I/71J2%2BQiNWDL._AC_SL1500_.jpg',name: 'USA',production: 11.5},
                            {place: 4, flag: 'https://www.thebodyholiday.com/wp-content/uploads/2017/07/france-flag.jpg',name: 'France',production: 10},
                            {place: 5, flag: 'https://ak.picdn.net/shutterstock/videos/3533912/thumb/1.jpg',name: 'Sweden',production: 8},
                        ],

                        options: {
                            series: [{
                                name: 'Price',
                                data: [0,5,10,7,15,20,14]
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
                                categories: ['00:00h','1:00h','2:00h','3:00h','4:00h','5:00h','6:00h'],
                            },
                            title: {
                                text: 'Seed price dynamic',
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
                                min: -5,
                                max: 30,
                                title: {
                                    text: 'Price',
                                },
                            }
                        },
                    },
                    {
                        activeBtn: 1,
                        goods:{name:'Vegetables',flagSell:false, flagBuy:false,minPrice: 10,
                            sellPrice:100,buyPrice:120,have:1200},

                        headers: [
                            { text: 'Place', align: 'start', sortable: true, value: 'place'},
                            { text: 'Flag', value: 'flag' },
                            { text: 'Name', value: 'name' },
                            { text: 'Production', value: 'production' },
                        ],
                        srcData: [
                            {place: 1, flag: 'https://static.posters.cz/image/1300/%D0%A4%D0%BE%D1%82%D0%BE%D1%88%D0%BF%D0%B0%D0%BB%D0%B5%D1%80%D0%B8/flag-great-britain-uk-416x254-cm-130g/m2-vlies-non-woven-i44071.jpg',name: 'Great Britain',production: 12.4},
                            {place: 2, flag: 'https://image.winudf.com/v2/image1/Y29tLmZsYWd3YWxscGFwZXIuZ2VybWFueV9zY3JlZW5fNF8xNTQ3NDgyNTMyXzA1OA/screen-5.jpg?fakeurl=1&type=.jpg',name: 'Germany',production: 12.1},
                            {place: 3, flag: 'https://images-na.ssl-images-amazon.com/images/I/71J2%2BQiNWDL._AC_SL1500_.jpg',name: 'USA',production: 11.5},
                            {place: 4, flag: 'https://www.thebodyholiday.com/wp-content/uploads/2017/07/france-flag.jpg',name: 'France',production: 10},
                            {place: 5, flag: 'https://ak.picdn.net/shutterstock/videos/3533912/thumb/1.jpg',name: 'Sweden',production: 8},
                        ],

                        options: {
                            series: [{
                                name: 'Price',
                                data: [0,5,10,7,15,20,14]
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
                                categories: ['00:00h','1:00h','2:00h','3:00h','4:00h','5:00h','6:00h'],
                            },
                            title: {
                                text: 'Seed price dynamic',
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
                                min: -5,
                                max: 30,
                                title: {
                                    text: 'Price',
                                },
                            }
                        },
                    },
                    {
                        activeBtn: 2,
                        goods:{name:'Fish',flagSell:false, flagBuy:false,minPrice: 10,
                            sellPrice:100,buyPrice:120,have:1200},

                        headers: [
                            { text: 'Place', align: 'start', sortable: true, value: 'place'},
                            { text: 'Flag', value: 'flag' },
                            { text: 'Name', value: 'name' },
                            { text: 'Production', value: 'production' },
                        ],
                        srcData: [
                            {place: 1, flag: 'https://static.posters.cz/image/1300/%D0%A4%D0%BE%D1%82%D0%BE%D1%88%D0%BF%D0%B0%D0%BB%D0%B5%D1%80%D0%B8/flag-great-britain-uk-416x254-cm-130g/m2-vlies-non-woven-i44071.jpg',name: 'Great Britain',production: 12.4},
                            {place: 2, flag: 'https://image.winudf.com/v2/image1/Y29tLmZsYWd3YWxscGFwZXIuZ2VybWFueV9zY3JlZW5fNF8xNTQ3NDgyNTMyXzA1OA/screen-5.jpg?fakeurl=1&type=.jpg',name: 'Germany',production: 12.1},
                            {place: 3, flag: 'https://images-na.ssl-images-amazon.com/images/I/71J2%2BQiNWDL._AC_SL1500_.jpg',name: 'USA',production: 11.5},
                            {place: 4, flag: 'https://www.thebodyholiday.com/wp-content/uploads/2017/07/france-flag.jpg',name: 'France',production: 10},
                            {place: 5, flag: 'https://ak.picdn.net/shutterstock/videos/3533912/thumb/1.jpg',name: 'Sweden',production: 8},
                        ],

                        options: {
                            series: [{
                                name: 'Price',
                                data: [0,5,10,7,15,20,14]
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
                                categories: ['00:00h','1:00h','2:00h','3:00h','4:00h','5:00h','6:00h'],
                            },
                            title: {
                                text: 'Seed price dynamic',
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
                                min: -5,
                                max: 30,
                                title: {
                                    text: 'Price',
                                },
                            }
                        },
                    },
                    {
                        activeBtn: 2,
                        goods:{name:'Bakery',flagSell:false, flagBuy:false,minPrice: 10,
                            sellPrice:100,buyPrice:120,have:1200},

                        headers: [
                            { text: 'Place', align: 'start', sortable: true, value: 'place'},
                            { text: 'Flag', value: 'flag' },
                            { text: 'Name', value: 'name' },
                            { text: 'Production', value: 'production' },
                        ],
                        srcData: [
                            {place: 1, flag: 'https://static.posters.cz/image/1300/%D0%A4%D0%BE%D1%82%D0%BE%D1%88%D0%BF%D0%B0%D0%BB%D0%B5%D1%80%D0%B8/flag-great-britain-uk-416x254-cm-130g/m2-vlies-non-woven-i44071.jpg',name: 'Great Britain',production: 12.4},
                            {place: 2, flag: 'https://image.winudf.com/v2/image1/Y29tLmZsYWd3YWxscGFwZXIuZ2VybWFueV9zY3JlZW5fNF8xNTQ3NDgyNTMyXzA1OA/screen-5.jpg?fakeurl=1&type=.jpg',name: 'Germany',production: 12.1},
                            {place: 3, flag: 'https://images-na.ssl-images-amazon.com/images/I/71J2%2BQiNWDL._AC_SL1500_.jpg',name: 'USA',production: 11.5},
                            {place: 4, flag: 'https://www.thebodyholiday.com/wp-content/uploads/2017/07/france-flag.jpg',name: 'France',production: 10},
                            {place: 5, flag: 'https://ak.picdn.net/shutterstock/videos/3533912/thumb/1.jpg',name: 'Sweden',production: 8},
                        ],

                        options: {
                            series: [{
                                name: 'Price',
                                data: [0,5,10,7,15,20,14]
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
                                categories: ['00:00h','1:00h','2:00h','3:00h','4:00h','5:00h','6:00h'],
                            },
                            title: {
                                text: 'Seed price dynamic',
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
                                min: -5,
                                max: 30,
                                title: {
                                    text: 'Price',
                                },
                            }
                        },
                    },
                    {
                        activeBtn: 3,
                        goods:{name:'Tanks',flagSell:false, flagBuy:false,minPrice: 10,
                            sellPrice:100,buyPrice:120,have:1200},

                        headers: [
                            { text: 'Place', align: 'start', sortable: true, value: 'place'},
                            { text: 'Flag', value: 'flag' },
                            { text: 'Name', value: 'name' },
                            { text: 'Production', value: 'production' },
                        ],
                        srcData: [
                            {place: 1, flag: 'https://static.posters.cz/image/1300/%D0%A4%D0%BE%D1%82%D0%BE%D1%88%D0%BF%D0%B0%D0%BB%D0%B5%D1%80%D0%B8/flag-great-britain-uk-416x254-cm-130g/m2-vlies-non-woven-i44071.jpg',name: 'Great Britain',production: 12.4},
                            {place: 2, flag: 'https://image.winudf.com/v2/image1/Y29tLmZsYWd3YWxscGFwZXIuZ2VybWFueV9zY3JlZW5fNF8xNTQ3NDgyNTMyXzA1OA/screen-5.jpg?fakeurl=1&type=.jpg',name: 'Germany',production: 12.1},
                            {place: 3, flag: 'https://images-na.ssl-images-amazon.com/images/I/71J2%2BQiNWDL._AC_SL1500_.jpg',name: 'USA',production: 11.5},
                            {place: 4, flag: 'https://www.thebodyholiday.com/wp-content/uploads/2017/07/france-flag.jpg',name: 'France',production: 10},
                            {place: 5, flag: 'https://ak.picdn.net/shutterstock/videos/3533912/thumb/1.jpg',name: 'Sweden',production: 8},
                        ],

                        options: {
                            series: [{
                                name: 'Price',
                                data: [0,5,10,7,15,20,14]
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
                                categories: ['00:00h','1:00h','2:00h','3:00h','4:00h','5:00h','6:00h'],
                            },
                            title: {
                                text: 'Seed price dynamic',
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
                                min: -5,
                                max: 30,
                                title: {
                                    text: 'Price',
                                },
                            }
                        },
                    },
                    {
                        activeBtn: 3,
                        goods:{name:'PTO',flagSell:false, flagBuy:false,minPrice: 10,
                            sellPrice:100,buyPrice:120,have:1200},

                        headers: [
                            { text: 'Place', align: 'start', sortable: true, value: 'place'},
                            { text: 'Flag', value: 'flag' },
                            { text: 'Name', value: 'name' },
                            { text: 'Production', value: 'production' },
                        ],
                        srcData: [
                            {place: 1, flag: 'https://static.posters.cz/image/1300/%D0%A4%D0%BE%D1%82%D0%BE%D1%88%D0%BF%D0%B0%D0%BB%D0%B5%D1%80%D0%B8/flag-great-britain-uk-416x254-cm-130g/m2-vlies-non-woven-i44071.jpg',name: 'Great Britain',production: 12.4},
                            {place: 2, flag: 'https://image.winudf.com/v2/image1/Y29tLmZsYWd3YWxscGFwZXIuZ2VybWFueV9zY3JlZW5fNF8xNTQ3NDgyNTMyXzA1OA/screen-5.jpg?fakeurl=1&type=.jpg',name: 'Germany',production: 12.1},
                            {place: 3, flag: 'https://images-na.ssl-images-amazon.com/images/I/71J2%2BQiNWDL._AC_SL1500_.jpg',name: 'USA',production: 11.5},
                            {place: 4, flag: 'https://www.thebodyholiday.com/wp-content/uploads/2017/07/france-flag.jpg',name: 'France',production: 10},
                            {place: 5, flag: 'https://ak.picdn.net/shutterstock/videos/3533912/thumb/1.jpg',name: 'Sweden',production: 8},
                        ],

                        options: {
                            series: [{
                                name: 'Price',
                                data: [0,5,10,7,15,20,14]
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
                                categories: ['00:00h','1:00h','2:00h','3:00h','4:00h','5:00h','6:00h'],
                            },
                            title: {
                                text: 'Seed price dynamic',
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
                                min: -5,
                                max: 30,
                                title: {
                                    text: 'Price',
                                },
                            }
                        },
                    },
                ],
                activeBtn: 0,
            }
        },
        computed: {
            ...mapGetters(["srcData"])
        },
    }
</script>

<style scoped>

</style>
