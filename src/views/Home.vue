<template>
  <div class="container">
    <el-row :gutter="24">
      <el-col
        :xs="24"
        :sm="12"
        :md="6"
        v-for="(item, index) in Card"
        :key="index"
      >
        <el-card class="first-box-card clearFixed">
          <div class="card-icon"><img :src="item.url" alt="" /></div>
          <div class="text-box">
            <p class="card-title">{{ item.title }}</p>
            <p class="card-num">{{ item.num }}</p>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="24">
      <el-col :span="24">
        <el-card class="box-card">
          <div id="lineChart" style="width: 100%; height: 400px"></div>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="24">
      <el-col
        :xs="24"
        :sm="12"
        v-for="(item, index) in echartsName"
        :key="index"
      >
        <el-card class="box-card">
          <div :id="item" style="width: 100%; height: 400px"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 0px;
}

.first-box-card {
  /* display: flex;
  flex-direction: row;
  justify-content: space-between; */
  box-sizing: border-box;
  height: 160px;
  padding: 20px 10px;
}

.card-icon img {
  float: left;
  width: 80px;
  height: 80px;
  background-size: 100% 100%;
}

.text-box {
  width: 100px;
  height: 80px;
  float: right;
}

.text-box p {
  height: 20px;
  line-height: 20px;
  font-size: 20px;
  text-align: right;
  margin: 15px 0;
}

.card-title {
  color: rgb(119, 119, 119);
}

/* 清除浮动 */
.clearFixed::after {
  content: "";
  display: block;
  clear: both;
}

#echarts {
  padding: 10px;
}
</style>

<script>
// 全部引入
import * as echarts from "echarts";
import { getHomeCardData, getHomeLineData } from "@/api/data.js";

export default {
  name: "WebHome",
  data() {
    return {
      Card: [],
      LineData: {Xdata: [], Ydata: []},
      echartsName: ["echart1", "echart2"],
      optionName: [
        {
          // backgroundColor: '#2c343c',
          title: {
            text: "藏书数量前五类别"
          },

          tooltip: {
            trigger: "item",
          },

          visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
              colorLightness: [0, 1],
            },
          },
          series: [
            {
              name: "图书类别",
              type: "pie",
              radius: "55%",
              center: ["50%", "50%"],
              data: [
                { value: 335, name: "文学" },
                { value: 310, name: "历史" },
                { value: 274, name: "经济" },
                { value: 235, name: "政治" },
                { value: 400, name: "计算机" },
              ].sort(function (a, b) {
                return a.value - b.value;
              }),
              roseType: "radius",
              label: {
                color: "black",
              },
              labelLine: {
                lineStyle: {
                  color: "black",
                },
              },
              itemStyle: {
                color: "#c23531",
              },
              animationType: "scale",
              animationEasing: "elasticOut",
              animationDelay: function (idx) {
                return Math.random() * 200;
              },
            },
          ],
        },
        {
          title: {
            text: "本月借阅数量前五类别"
          },

          tooltip: {
            trigger: "item",
          },
          series: [
            {
              name: "本月借阅数量",
              type: "pie",
              radius: ["40%", "70%"],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 10,
                borderColor: "#fff",
                borderWidth: 2,
              },
              label: {
                show: false,
                position: "center",
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: "40",
                  fontWeight: "bold",
                },
              },
              labelLine: {
                show: false,
              },
              data: [
                { value: 1048, name: "计算机" },
                { value: 735, name: "冒险" },
                { value: 580, name: "历史" },
                { value: 484, name: "心理学" },
                { value: 300, name: "科幻" },
              ],
            },
          ],
        },
      ],
    };
  },
  // 异步请求
  async mounted() {
    this.Card = await getHomeCardData();
    this.LineData = await getHomeLineData();
    for (let i = 0; i < this.echartsName.length; i++) {
      this.initPieCharts(this.echartsName[i], this.optionName[i]);
    }
    this.initLineChart();
  },
  methods: {
    initPieCharts: function (echartsName, optionName) {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById(echartsName));

      // 指定图表的配置项和数据
      var option = optionName;

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    initLineChart: function () {
      var myChart = echarts.init(document.getElementById("lineChart"));

      var option = {
        xAxis: {
          type: "category",
          data: this.LineData.Xdata,
        },
        yAxis: {
          type: "value",
        },
        title: {
          text: "最近7日借阅量",
        },
        series: [
          {
            data: this.LineData.Ydata,
            type: "line",
          },
        ],
      };

      myChart.setOption(option);
    },
  },
};
</script>