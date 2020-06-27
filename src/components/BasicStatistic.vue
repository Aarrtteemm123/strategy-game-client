<template>
  <v-app>
    <v-card
            class="mx-auto"
            elevation="10"
            width="800"
            style="margin-top: 20px"
    >
      <v-card-text>
        <p class="display-1 text--primary">
          Basic statistic
        </p>
        <v-avatar size="100">
          <img
                  src="https://static.posters.cz/image/1300/%D0%A4%D0%BE%D1%82%D0%BE%D1%88%D0%BF%D0%B0%D0%BB%D0%B5%D1%80%D0%B8/flag-great-britain-uk-416x254-cm-130g/m2-vlies-non-woven-i44071.jpg"
                  alt="flag"
          >
        </v-avatar>
        <div style="margin-top: 20px;font-size: large">
          <p><strong>Name country: {{nameCountry}}</strong></p>
          <p><strong>Population: {{population}}</strong></p>
          <p><strong>Budget: {{budget}}$</strong></p>
          <p><strong>GDP: {{gdp}}$</strong></p>
          <p><strong>Economic place: {{economicPlace}}</strong></p>
          <p><strong>Military place: {{militaryPlace}}</strong></p>
          <p><strong>Won battles: {{battlesWon}}</strong></p>
          <p><strong>Lost battles: {{battlesLost}}</strong></p>
        </div>
      </v-card-text>

      <apexchart style="margin-left:30px;margin-top: 60px;margin-bottom: 20px;" type="area" width="720" height="350" :options="profitAndExpensesChartOptions" :series="profitAndExpensesData"></apexchart>

      <apexchart style="margin-left:30px;margin-top: 60px;margin-bottom: 20px;" type="bar" width="720" height="350" :options="populationChartOptions" :series="populationData"></apexchart>

      <apexchart style="margin-left:30px;margin-top: 60px;margin-bottom: 20px;" type="radar" width="720" height="350" :options="totalProfitChartOptions" :series="totalProfit"></apexchart>


      <v-tabs
              v-model="tab"
              background-color="primary"
              dark
              centered
      >
        <v-tab
                v-for="table in tables"
                :key="table.tab"
        >
          {{ table.tab }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item
                v-for="table in tables"
                :key="table.tab"
        >
          <v-card flat>
            <apexchart type="bar" height="350" :options="goodsChartOptions" :series="goodsData"></apexchart>
            <v-card-text>
              <h2 style="margin-top: 20px">{{table.tab}} production</h2>
            </v-card-text>
            <v-data-table style="margin-bottom: 0px;margin-top: 20px"
                          :headers="headers"
                          :items="table.tableData"
                          fixed-header
                          hide-default-footer
                          disable-pagination
                          class="elevation-1"
            >
              <template v-slot:item.srcImage="{ item }">
                <v-avatar size="35">
                  <v-img :src="require(`../assets/${item.srcImage}`)" :alt="item.name"></v-img>
                </v-avatar>
              </template>
            </v-data-table>
          </v-card>
        </v-tab-item>
      </v-tabs-items>

    </v-card>
  </v-app>
</template>

<script>
    export default {
        name: "BasicStatistic",
        data()
        {
            return{
                srcFlagImage: 'https://static.posters.cz/image/1300/%D0%A4%D0%BE%D1%82%D0%BE%D1%88%D0%BF%D0%B0%D0%BB%D0%B5%D1%80%D0%B8/flag-great-britain-uk-416x254-cm-130g/m2-vlies-non-woven-i44071.jpg',
                nameCountry: 'Great Britain',
                population: 100000,
                budget: 1200000,
                gdp: 200000,
                economicPlace: 1,
                militaryPlace: 3,
                farms: 23,
                mines: 42,
                factories: 62,
                battlesWon: 93,
                battlesLost: 4,

                tab: null,
                tables: [
                    { tab: 'Farm goods',
                        tableData:[
                            {id: 1,type:'Seed',number:10,place:2,srcImage:'farms_goods/seed.jpg'},
                            {id: 2,type:'Meat',number:10,place:2,srcImage:'farms_goods/meat.jpg'},
                            {id: 3,type:'Milk',number:10,place:2,srcImage:'farms_goods/milk.jpg'},
                            {id: 4,type:'Fish',number:10,place:2,srcImage:'farms_goods/fish.jpg'},
                            {id: 5,type:'Fruits',number:10,place:2,srcImage:'farms_goods/fruits.jpg'},
                            {id: 6,type:'Vegetables',number:10,place:2,srcImage:'farms_goods/vegetables.jpg'},
                        ],
                    },
                    { tab: 'Mine goods',
                        tableData:[
                            {id:1,type:'Iron',number:24,place:1,srcImage:'mine_goods/iron.jpg'},
                            {id:2,type:'Aluminum',number:24,place:1,srcImage:'mine_goods/aluminum.jpg'},
                            {id:3,type:'Coal',number:24,place:1,fillingSpeed:10,srcImage:'mine_goods/coal.jpg'},
                            {id:4,type:'Oil',number:24,place:1,srcImage:'mine_goods/oil.jpg'},
                            {id:5,type:'Silicon',number:24,place:1,srcImage:'mine_goods/silicon.jpg'},
                            {id:6,type:'Salt',number:24,place:1,srcImage:'mine_goods/salt.jpg'},
                            {id:7,type:'Minerals',number:24,place:1,srcImage:'mine_goods/minerals.jpg'},
                            {id:8,type:'Gold',number:24,place:1,srcImage:'mine_goods/gold.jpg'},
                            {id:9,type:'Diamond',number:24,place:1,srcImage:'mine_goods/diamond.jpg'},
                        ],
                    },
                    { tab: 'Industry goods',
                        tableData:[
                            {id:1,type:'Bakery',number:10,place:1,srcImage:'industry_goods/bakery.jpg'},
                            {id:2,type:'Canned food',number:10,place:1,srcImage:'industry_goods/canned_food.jpg'},
                            {id:3,type:'Cheese',number:10,place:1,srcImage:'industry_goods/cheese.jpg'},
                            {id:4,type:'Salt fish',number:10,place:1,srcImage:'industry_goods/salt_fish.jpg'},
                            {id:5,type:'Juice',number:10,place:1,srcImage:'industry_goods/juice.jpg'},
                            {id:6,type:'Fuel',number:10,place:1,srcImage:'industry_goods/fuel.jpg'},
                            {id:7,type:'Electronics',number:10,place:1,srcImage:'industry_goods/electronics.jpg'},
                            {id:8,type:'Chemicals',number:10,place:1,srcImage:'industry_goods/chemicals.jpg'},
                            {id:9,type:'Computers',number:10,place:1,srcImage:'industry_goods/computers.jpg'},
                            {id:10,type:'Steel',number:10,place:1,srcImage:'industry_goods/steel.jpg'},
                            {id:11,type:'Rubber',number:10,place:1,srcImage:'industry_goods/rubber.jpg'},
                            {id:12,type:'Plastic',number:10,place:1,srcImage:'industry_goods/plastic.jpg'},
                            {id:13,type:'Glass',number:10,place:1,srcImage:'industry_goods/glass.jpg'},
                            {id:14,type:'Fertilizer',number:10,place:1,srcImage:'industry_goods/fertilizer.jpg'},
                            {id:15,type:'Medicine',number:10,place:1,srcImage:'industry_goods/medicine.png'},
                            {id:16,type:'Solar panel',number:10,place:1,srcImage:'industry_goods/solar_panel.jpg'},
                            {id:17,type:'Battery',number:10,place:1,srcImage:'industry_goods/battery.jpg'},
                            {id:18,type:'Jewelry',number:10,place:1,srcImage:'industry_goods/jewelry.jpg'},
                        ],
                    },
                    { tab: 'Military goods',
                        tableData:[
                            {id:1,type:'Infantry equipment',number:10,place:1,srcImage:'army/infantry_equipment.jpg'},
                            {id:2,type:'Artillery',number:10,place:1,srcImage:'army/artillery.jpg'},
                            {id:3,type:'PTO',number:10,place:1,srcImage:'army/pto.jpg'},
                            {id:4,type:'PVO',number:10,place:1,srcImage:'army/pvo.jpg'},
                            {id:5,type:'Tank',number:10,place:1,srcImage:'army/tank.jpg'},
                            {id:6,type:'Aviation',number:10,place:1,srcImage:'army/aviation.jpg'},
                        ],
                    },
                ],
                headers: [
                    { text: 'ID', align: 'start', sortable: true, value: 'id'},
                    { text: 'Icon', value: 'srcImage' },
                    { text: 'Name', value: 'type' },
                    { text: 'Number', value: 'number' },
                    { text: 'Place', value: 'place' },
                ],
                goodsData: [{
                    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
                }],
                goodsChartOptions: {
                    chart: {
                        type: 'bar',
                        height: 350
                    },
                    plotOptions: {
                        bar: {
                            horizontal: true,
                        }
                    },
                    dataLabels: {
                        enabled: false
                    },
                    xaxis: {
                        categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                            'United States', 'China', 'Germany'
                        ],
                    }
                },

                profitAndExpensesData: [{
                    name: 'profit',
                    data: [31, 40, 28, 51, 42, 109, 100]
                }, {
                    name: 'expenses',
                    data: [11, 32, 45, 32, 34, 52, 41]
                }],
                profitAndExpensesChartOptions: {
                    chart: {
                        height: 350,
                        type: 'area'
                    },
                    title: {
                        text: 'Budget',
                        align: 'left',
                        style: {
                            fontSize: "16px",
                            color: '#666'
                        }
                    },
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        curve: 'smooth'
                    },
                    xaxis: {
                        type: 'datetime',
                        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
                    },
                    yaxis: {
                        type: 'number',
                        max: 150,
                    },
                    tooltip: {
                        x: {
                            format: 'dd/MM/yy HH:mm'
                        },
                    },
                },

                populationData: [{
                    name: 'Value',
                    data: [1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34, 3.88, 13.07,
                        5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4, -47.2, -43.3, -18.6, -
                            48.6, -41.1, -39.6, -37.6, -29.4, -21.4, -2.4
                    ]
                }],
                populationChartOptions: {
                    chart: {
                        type: 'bar',
                        height: 350
                    },
                    title: {
                        text: 'Population',
                        align: 'left',
                        style: {
                            fontSize: "16px",
                            color: '#666'
                        }
                    },
                    plotOptions: {
                        bar: {
                            colors: {
                                ranges: [{
                                    from: -100,
                                    to: -46,
                                    color: '#F15B46'
                                }, {
                                    from: -45,
                                    to: 0,
                                    color: '#FEB019'
                                }]
                            },
                            columnWidth: '80%',
                        }
                    },
                    dataLabels: {
                        enabled: false,
                    },
                    yaxis: {
                        labels: {
                            formatter: function (y) {
                                return y.toFixed(0) + "%";
                            }
                        }
                    },
                    xaxis: {
                        type: 'datetime',
                        categories: [
                            '2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01', '2011-05-01', '2011-06-01',
                            '2011-07-01', '2011-08-01', '2011-09-01', '2011-10-01', '2011-11-01', '2011-12-01',
                            '2012-01-01', '2012-02-01', '2012-03-01', '2012-04-01', '2012-05-01', '2012-06-01',
                            '2012-07-01', '2012-08-01', '2012-09-01', '2012-10-01', '2012-11-01', '2012-12-01',
                            '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01', '2013-06-01',
                            '2013-07-01', '2013-08-01', '2013-09-01'
                        ],
                        labels: {
                            rotate: -90
                        }
                    }
                },

                totalProfit: [{
                    name: 'Value',
                    data: [10,30,20,40],
                }],
                totalProfitChartOptions: {
                    chart: {
                        height: 350,
                        type: 'radar',
                    },
                    dataLabels: {
                        enabled: true
                    },
                    plotOptions: {
                        radar: {
                            size: 140,
                            polygons: {
                                strokeColors: '#e9e9e9',
                                fill: {
                                    colors: ['#f8f8f8', '#fff']
                                }
                            }
                        }
                    },
                    title: {
                        text: 'Profit',
                        align: 'left',
                        style: {
                            fontSize: "16px",
                            color: '#666'
                        }
                    },
                    colors: ['#FF4560'],
                    markers: {
                        size: 4,
                        colors: ['#fff'],
                        strokeColor: '#FF4560',
                        strokeWidth: 2,
                    },
                    tooltip: {
                        y: {
                            formatter: function(val) {
                                return val
                            }
                        }
                    },
                    xaxis: {
                        categories: ['Taxes', 'Mines', 'Farms', 'Industry']
                    },
                    yaxis: {
                        max: 40,
                        min: 0,
                        tickAmount: 10,
                        labels: {
                            formatter: function(val, i) {
                                if (i % 2 === 0) {
                                    return val + ' %'
                                } else {
                                    return ''
                                }
                            }
                        }
                    }
                },

            }
        }
    }
</script>

<style scoped>

</style>
