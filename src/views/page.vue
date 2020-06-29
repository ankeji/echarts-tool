<!--
 * @Descripttion: 
 * @version: 
 * @Author: ankeji
 * @Date: 2020-06-29 17:55:45
 * @LastEditors: ankeji
 * @LastEditTime: 2020-06-29 18:47:12
--> 
<!--  -->
<template>
  <div class="page">
    <div class="menu">
      <a-menu
        style="width: 256px;height:100vh"
        :default-selected-keys="['1']"
        :open-keys.sync="openKeys"
        mode="inline"
        @click="handleClick"
      >
        <a-sub-menu key="sub1" @titleClick="titleClick">
          <span slot="title">
            <a-icon type="mail" />
            <span>DOM类型</span>
          </span>
          <a-menu-item-group key="g1">
            <template slot="title">
              <a-icon type="qq" />
              <span>Item 1</span>
            </template>
            <a-menu-item key="1">Option 1</a-menu-item>
            <a-menu-item key="2">Option 2</a-menu-item>
          </a-menu-item-group>
          <a-menu-item-group key="g2" title="Item 2">
            <a-menu-item key="3">Option 3</a-menu-item>
            <a-menu-item key="4">Option 4</a-menu-item>
          </a-menu-item-group>
        </a-sub-menu>
        <a-sub-menu key="sub2" @titleClick="titleClick">
          <span slot="title">
            <a-icon type="appstore" />
            <span>Navigation Two</span>
          </span>
          <a-menu-item key="5">Option 5</a-menu-item>
          <a-menu-item key="6">Option 6</a-menu-item>
          <a-sub-menu key="sub3" title="Submenu">
            <a-menu-item key="7">Option 7</a-menu-item>
            <a-menu-item key="8">Option 8</a-menu-item>
          </a-sub-menu>
        </a-sub-menu>
        <a-sub-menu key="sub4">
          <span slot="title">
            <a-icon type="setting" />
            <span>Navigation Three</span>
          </span>
          <a-menu-item key="9">Option 9</a-menu-item>
          <a-menu-item key="10">Option 10</a-menu-item>
          <a-menu-item key="11">Option 11</a-menu-item>
          <a-menu-item key="12">Option 12</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </div>
    <div class="dom-panel">
        <div class="name-nav">DOM面板</div>
    </div>
    <div class="dom-operation">
      <div class="name-nav">属性编辑</div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      current: ["mail"],
      openKeys: ["sub1"]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    openKeys(val) {
      console.log("openKeys", val);
    }
  },
  //方法集合
  methods: {
    handleClick(e) {
      console.log("click", e);
    },
    titleClick(e) {
      console.log("titleClick", e);
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
.page {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.dom-panel {
  width: 100%;
  height: 100vh;
  /* border: solid 1px red; */
}
.dom-operation {
  border-left: 1px solid #e8e8e8;
  width: 350px;
  height: 100vh;
}
.name-nav {
  color: #333333;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #e8e8e8;
}
</style>