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
          <v-img
                  :src=srcFlagImage
                  alt="flag"
          ></v-img>
        </v-avatar>
        <div style="margin-top: 20px;font-size: large">
          <p><strong>Name country: {{nameCountry}}</strong></p>
          <p><strong>Population: {{population}}</strong></p>
          <p><strong>Budget: {{budget}}$</strong></p>
          <p><strong>Total profit: {{totalProfitCountry}}$</strong></p>
          <p><strong>Economic place: {{economicPlace}}</strong></p>
          <p><strong>Military place: {{militaryPlace}}</strong></p>
          <p><strong>Won battles: {{battlesWon}}</strong></p>
          <p><strong>Lost battles: {{battlesLost}}</strong></p>
        </div>
      </v-card-text>

      <apexchart style="margin-left:30px;margin-top: 60px;margin-bottom: 20px;" type="area" width="720" height="350" :options="budgetChartOptions" :series="budgetData"></apexchart>

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
            <apexchart v-if="table.tab === 'Farm goods'" type="bar" height="300" :options="farmsGoodsChartOptions" :series="farmsGoodsData"></apexchart>
            <apexchart v-if="table.tab === 'Mine goods'" type="bar" height="400" :options="minesGoodsChartOptions" :series="minesGoodsData"></apexchart>
            <apexchart v-if="table.tab === 'Industrial goods'" type="bar" height="600" :options="industrialGoodsChartOptions" :series="industrialGoodsData"></apexchart>
            <apexchart v-if="table.tab === 'Military goods'" type="bar" height="300" :options="militaryGoodsChartOptions" :series="militaryGoodsData"></apexchart>
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
              <template #item.id="{ item }">
                {{ table.tableData.indexOf(item) + 1 }}
              </template>
              <template v-slot:item.link_img="{ item }">
                <v-avatar size="35">
                  <v-img :src="require(`../assets/${item.link_img}`)" :alt="item.name"></v-img>
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
    //import GameService from "@/services/game-service"
    import SystemService from "@/services/system-service"
    export default {
        name: "BasicStatistic",
        data()
        {
            return{
                srcFlagImage: '',
                nameCountry: '',
                population: 0,
                budget: 0,
                totalProfitCountry: 0,
                economicPlace: 0,
                militaryPlace: 0,
                battlesWon: 0,
                battlesLost: 0,

                tab: null,
                tables: [],
                headers: [
                    { text: 'ID', align: 'start', sortable: true, value: 'id'},
                    { text: 'Icon', value: 'link_img' },
                    { text: 'Name', value: 'name_goods' },
                    { text: 'Number', value: 'number' },
                    { text: 'Place', value: 'world_place' },
                ],
                farmsGoodsData: [{
                    name: 'value',
                    data: []
                }],
                farmsGoodsChartOptions: {
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
                        categories: []
                    }
                },

                minesGoodsData: [{
                    name: 'value',
                    data: []
                }],
                minesGoodsChartOptions: {
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
                        categories: []
                    }
                },

                industrialGoodsData: [{
                    name: 'value',
                    data: []
                }],
                industrialGoodsChartOptions: {
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
                        categories: []
                    }
                },

                militaryGoodsData: [{
                    name: 'value',
                    data: []
                }],
                militaryGoodsChartOptions: {
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
                        categories: []
                    }
                },

                budgetData: [],
                budgetChartOptions: {
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
                        categories: []
                    },
                    yaxis: {
                        type: 'number'
                    },
                    tooltip: {
                        x: {
                            format: 'HH:mm yy/MM/dd'
                        },
                    },
                },

                profitAndExpensesData: [],
                profitAndExpensesChartOptions: {
                    chart: {
                        height: 350,
                        type: 'area'
                    },
                    title: {
                        text: 'Profit and expenses',
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
                        categories: []
                    },
                    yaxis: {
                        type: 'number'
                    },
                    tooltip: {
                        x: {
                            format: 'HH:mm yy/MM/dd'
                        },
                    },
                },

                populationData: [],
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
                                    to: -50,
                                    color: '#F15B46'
                                }, {
                                    from: -49,
                                    to: -6,
                                    color: '#FEB019'
                                },{
                                    from: -5,
                                    to: 5,
                                    color: '#53A4CE'
                                },{
                                    from: 6,
                                    to: 100,
                                    color: '#5BFE77'
                                }
                                ]
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
                        categories: [],
                        labels: {
                            rotate: -90
                        }
                    },
                    x: {
                        format: 'HH:mm yy/MM/dd'
                    },
                },

                totalProfit: [{
                    name: 'Value',
                    data: [],
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
                        categories: []
                    },
                    yaxis: {
                        max: 100,
                        min: 0,
                        tickAmount: 10,
                        labels: {
                            formatter: function(val, i) {
                                if (i % 2 === 0) {
                                    return Math.round(val) + ' %'
                                } else {
                                    return ''
                                }
                            }
                        }
                    }
                },

            }
        },
        methods:
        {
            updatePage()
            {
                let userId = '5f4814cc59e648f9cfba7e09'
                SystemService.getView(userId,'BasicStatistic').then(response => {
                    if (response.status === 200)
                    {
                        console.log(response.data)
                        console.log(response.status)
                        this.srcFlagImage = response.data['link_img']
                        this.nameCountry = response.data['name_country']
                        this.population = response.data['population']
                        this.budget = response.data['budget']
                        this.totalProfitCountry = response.data['total_profit_country']
                        this.economicPlace = response.data['economic_place']
                        this.militaryPlace = response.data['military_place']
                        this.battlesWon = response.data['victories_battles']
                        this.battlesLost = response.data['losses_battles']

                        this.tables = [
                            { tab: 'Farm goods',
                                tableData:response.data['farm_goods_table']
                            },
                            { tab: 'Mine goods',
                                tableData:response.data['mine_goods_table']
                            },
                            { tab: 'Industrial goods',
                                tableData:response.data['industrial_goods_table']
                            },
                            { tab: 'Military goods',
                                tableData:response.data['military_goods_table']
                            },
                        ]

                        this.farmsGoodsData = [{
                            name: 'value',
                            data: response.data['farms_goods_chart']['data']
                        }]
                        this.farmsGoodsChartOptions = {
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
                            categories: response.data['farms_goods_chart']['x_axis_label']
                          }
                        }

                        this.minesGoodsData = [{
                            name: 'value',
                            data: response.data['mines_goods_chart']['data']
                        }]
                        this.minesGoodsChartOptions = {
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
                                categories: response.data['mines_goods_chart']['x_axis_label']
                            }
                        }

                        this.industrialGoodsData = [{
                            name: 'value',
                            data: response.data['industrial_goods_chart']['data']
                        }]
                        this.industrialGoodsChartOptions = {
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
                            categories: response.data['industrial_goods_chart']['x_axis_label']
                          }
                        }

                        this.militaryGoodsData = [{
                            name: 'value',
                            data: response.data['military_goods_chart']['data']
                        }]
                        this.militaryGoodsChartOptions = {
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
                            categories: response.data['military_goods_chart']['x_axis_label']
                          }
                        }

                        this.budgetData = [
                            {
                                name: 'budget',
                                data: response.data['chart_money']['data']
                            }
                        ]
                        this.budgetChartOptions = {
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
                                categories: response.data['chart_money']['x_axis_label']
                        },
                        yaxis: {
                            type: 'number'
                        },
                        tooltip: {
                            x: {
                                format: 'HH:mm yy/MM/dd'
                            },
                        },
                        }

                        this.profitAndExpensesData = [{
                            name: 'profit',
                            data: response.data['chart_budget']['profit_data']
                        }, {
                            name: 'expenses',
                            data: response.data['chart_budget']['expenses_data']
                        }]
                        this.profitAndExpensesChartOptions = {
                        chart: {
                            height: 350,
                                type: 'area'
                        },
                        title: {
                            text: 'Profit and expenses',
                                align: 'left',
                                style: {
                                fontSize: "16px",
                                    getColor: '#666'
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
                            categories: response.data['chart_budget']['x_axis_label']
                        },
                        yaxis: {
                            type: 'number',
                            max: response.data['chart_budget']['y_axis_max'],
                        },
                        tooltip: {
                            x: {
                                format: 'HH:mm yy/MM/dd'
                            },
                        },
                        }

                        this.populationData = [{
                            name: 'Value',
                            data: response.data['chart_population']['data']
                        }]
                        this.populationChartOptions = {
                        chart: {
                            type: 'bar',
                                height: 350
                        },
                        title: {
                            text: 'Population',
                                align: 'left',
                                style: {
                                fontSize: "16px",
                                    getColor: '#666'
                            }
                        },
                        plotOptions: {
                            bar: {
                                colors: {
                                    ranges: [{
                                        from: -100,
                                        to: 0,
                                        color: '#F15B46'
                                    }
                                    ]
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
                                categories: response.data['chart_population']['x_axis_label'],
                                labels: {
                                rotate: -90
                            }
                        },
                        x: {
                            format: 'HH:mm yy/MM/dd'
                        },
                        }

                        this.totalProfit = [{
                            name: 'Value',
                            data: response.data['chart_profit']['data'],
                        }]
                        this.totalProfitChartOptions = {
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
                                    getColor: '#666'
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
                            categories: response.data['chart_profit']['x_axis_label']
                        },
                        yaxis: {
                            max: response.data['chart_profit']['y_max'],
                            min: response.data['chart_profit']['y_min'],
                            tickAmount: response.data['chart_profit']['tick_amount'],
                            labels: {
                                formatter: function(val, i) {
                                    if (i % 2 === 0) {
                                        return Math.round(val) + ' %'
                                    } else {
                                        return ''
                                    }
                                }
                            }
                        }
                        }
                    }
                }).catch(error => {
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                    }
                })
            }
        },
        mounted()
        {
            console.log('Inside bs mounted')
            this.updatePage()
        }

    }
</script>

<style scoped>

</style>
