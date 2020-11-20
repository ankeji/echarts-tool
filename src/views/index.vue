<!--
 * @Descripttion: 
 * @version: 
 * @Author: ankeji
 * @Date: 2020-06-29 17:07:10
 * @LastEditors: ankeji
 * @LastEditTime: 2020-11-20 10:53:40
--> 
<!-- 首页 -->
<template>
  <div class="index">
    <div class="cover-main">
      <div class="automation">
        <span>ECharts-Tool</span>
      </div>
      <p class="detail">ECharts可视化调试工具</p>
      <div class="start">
        <div>
          <a href="https://github.com/ankeji/echarts-tool" target="_blank">项目地址</a>
        </div>
        <div>
          <router-link to="/page">开始使用</router-link>
        </div>
      </div>
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
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
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
.index {
  width: 100%;
  height: 100vh;
  background: linear-gradient( to left bottom, hsl(156, 42%, 43%) 0%, hsl(234, 41%, 55%) 100% );
  display: flex;
  justify-content: center;
  align-items: center;
}
.start{
  display: flex;
  justify-content: center;
}
.start div{
  width: 130px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  border: solid 1px #eeeeee;
  margin: 20px;
  cursor: pointer;
  border-radius: 5px;
  
}
.start div a{
  color: #ffffff;
}
.start div:first-child{
  background: #409EFF;
  border: solid 1px #409EFF;
}
.automation{
  font-size: 60px;
  color: #ffffff;
}
.detail{
  line-height: 80px;
  font-size: 22px;
}
.detail{
  color: rgb(255, 203, 107);
}
</style>
