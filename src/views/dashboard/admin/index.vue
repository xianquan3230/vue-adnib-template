<template>
  <div class="dashboard-editor-container">
    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <panel-group @handleSetLineChartData="handleSetLineChartData" />
    </el-row>
    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-pie-chart :chart-data="linePieChartData"></line-pie-chart>
    </el-row>

    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <raddar-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <pie-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <bar-chart />
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import LineChart from './components/LineChart'
import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
import LinePieChart from './components/LinePieChart'
import PanelGroup from './components/PanelGroup'
const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  }
}
const linePieChartData = {
  newVisitis:{
    newVisitis: {
      title:'newVisitis',
      source: [
        ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
        ['成功', 4, 3, 6, 5, 8, 9],
        ['失败', 86, 92, 85, 83, 73, 55],
        ['拉了', 24, 67, 79, 86, 65, 82],
        ['失联', 15, 27, 29, 12, 23, 19]
      ]
    }
  },
  messages:{
    newVisitis: {
      title:'messages',
      source: [
        ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
        ['成功', 41, 30, 65, 53, 83, 98],
        ['失败', 8, 9, 5, 8, 3, 5],
        ['拉了', 14, 17, 7, 16, 15, 12],
        ['失联', 55, 67, 69, 72, 53, 39]
      ]
    }
  },
  start:{
    newVisitis: {
      title:'start',
      source: [
        ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
        ['成功', 41, 30, 65, 53, 83, 98],
        ['失败', 86, 92, 85, 83, 73, 55],
        ['拉了', 4, 7, 9, 6, 5, 2],
        ['失联', 15, 17, 19, 12, 13, 19]
      ]
    }
  },
  zip:{
    newVisitis: {
      title:'start',
      source: [
        ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
        ['成功', 4, 3, 6, 5, 8, 9],
        ['失败', 26, 12, 25, 33, 23, 15],
        ['拉了', 44, 47, 49, 46, 45, 42],
        ['失联', 15, 17, 19, 12, 13, 19]
      ]
    }
  },
}

export default {
  name: 'DashboardAdmin',
  components: {
    LineChart,
    RaddarChart,
    PieChart,
    BarChart,
    LinePieChart,
    PanelGroup
  },
  data() {
    return {
      lineChartData: lineChartData.newVisitis,
      linePieChartData: linePieChartData.newVisitis
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.linePieChartData = linePieChartData[type]
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
