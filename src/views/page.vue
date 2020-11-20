<!--
 * @Descripttion: 
 * @version: 
 * @Author: ankeji
 * @Date: 2020-11-20 10:48:57
 * @LastEditors: ankeji
 * @LastEditTime: 2020-11-20 11:25:07
-->
<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <div class="logo">ECharts-Tool</div>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['4']">
        <a-menu-item key="1">
          <a-icon type="line-chart" />
          <span class="nav-text">折线图</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="bar-chart" />
          <span class="nav-text">柱状图</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="pie-chart" />
          <span class="nav-text">饼状图</span>
        </a-menu-item>
        <a-menu-item key="4">
          <a-icon type="dot-chart" />
          <span class="nav-text">散点图</span>
        </a-menu-item>
        <a-menu-item key="5">
          <a-icon type="radar-chart" />
          <span class="nav-text">雷达图</span>
        </a-menu-item>
        <a-menu-item key="6">
          <a-icon type="sliders" />
          <span class="nav-text">K线图</span>
        </a-menu-item>
        <a-menu-item key="7">
          <a-icon type="dashboard" />
          <span class="nav-text">仪表盘</span>
        </a-menu-item>
        <a-menu-item key="8">
          <a-icon type="apartment" />
          <span class="nav-text">树状图</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <!-- <a-layout-header :style="{ background: '#fff', padding: 0 }" /> -->
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '90vh' }">
          content
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
  },
};
</script>

<style>
#components-layout-demo-responsive{
  height: 100vh;
}
#components-layout-demo-responsive .logo {
  height: 32px;
  margin: 16px;
  color:#ffffff;
  text-align: center;
  font-size: 24px;
}
</style>
