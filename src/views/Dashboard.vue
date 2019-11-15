<template>
  <div class="container">
    <div class="total">
      <div class="total-text">总用户</div>
      <div class="total-num">{{ total }}</div>
    </div>
    <div class="circle">
      <i-circle
        :size="200"
        :trail-width="6"
        :stroke-width="6"
        :percent="(female / total) * 100"
        stroke-linecap="square"
        stroke-color="#FFC0CB"
        trail-color="#FFF0F2"
      >
        <div class="demo-Circle-custom">
          <h1>{{ female }}</h1>
          <p>女性用户</p>
          <span>
            占总人数
            <i>{{ Math.floor((female / total) * 100) }}%</i>
          </span>
        </div>
      </i-circle>
      <i-circle
        :size="200"
        :trail-width="6"
        :stroke-width="6"
        :percent="(pregnant / total) * 100"
        stroke-linecap="square"
        stroke-color="#43a3fb"
      >
        <div class="demo-Circle-custom">
          <h1>{{ pregnant }}</h1>
          <p>怀孕用户</p>
          <span>
            占总人数
            <i>{{ Math.floor((pregnant / total) * 100) }}%</i>
          </span>
        </div>
      </i-circle>
      <i-circle
        :size="200"
        :trail-width="6"
        :stroke-width="6"
        :percent="(bred / total) * 100"
        stroke-linecap="square"
        stroke-color="#FFD700"
        trail-color="#FFFFE0"
      >
        <div class="demo-Circle-custom">
          <h1>{{ bred }}</h1>
          <p>已育用户</p>
          <span>
            占总人数
            <i>{{ Math.floor((bred / total) * 100) }}%</i>
          </span>
        </div>
      </i-circle>
    </div>
  </div>
</template>

<script>
import userService from "@/global/service/user.js";

export default {
  data() {
    return {
      total: 0,
      female: 0,
      pregnant: 0,
      bred: 0
    };
  },
  created() {
    userService.list().then(res => {
      this.total = res.data.total;
      this.female = res.data.female;
      this.pregnant = res.data.pregnant;
      this.bred = res.data.bred;
    });
  }
};
</script>

<style lang="less">
.container {
  background-color: #fff;
  padding: 30px;
  .total {
    margin: 0 auto 40px auto;
    width: 300px;
    height: 100px;
    box-shadow: 2px 2px 6px rgba(153, 153, 153, 0.3);
    .total-text {
      padding-top: 10px;
      font-size: 20px;
      color: #777;
      text-align: center;
    }
    .total-num {
      font-size: 24px;
      color: #000;
      text-align: center;
      line-height: 2;
    }
  }
  .circle {
    display: flex;
    margin: 50px 30px;
    align-items: center;
    justify-content: space-between;
  }
}
.demo-Circle-custom {
  & h1 {
    color: #3f414d;
    font-size: 28px;
    font-weight: normal;
  }
  & p {
    color: #657180;
    font-size: 14px;
    margin: 10px 0 15px;
  }
  & span {
    display: block;
    padding-top: 15px;
    color: #657180;
    font-size: 14px;
    &:before {
      content: "";
      display: block;
      width: 50px;
      height: 1px;
      margin: 0 auto;
      background: #e0e3e6;
      position: relative;
      top: -15px;
    }
  }
  & span i {
    font-style: normal;
    color: #3f414d;
  }
}
</style>
