<!--  -->
<template>
  <div class="person">
    <h2>一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
    <button @click="changePrice">修改汽车价格</button>
    <!-- <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button> -->
    <ul>
      <li v-for="game in games" :key="game.id">{{ game.name }}</li>
    </ul>
    <button @click="changeFirstGame">修改第一个游戏名字</button>
  </div>
  <hr>
  <h2>测试：{{ obj.a.b.c }}</h2>
</template>

<script lang="ts" setup name="Person">
import { reactive } from 'vue'
  let car = reactive({ brand: '奔驰', price: 100 })
  let games = reactive([
    {id: 'jahdj01', name:'王者荣耀'}, 
    {id: 'jahdj02', name:'元神'},
    {id: 'jahdj03', name:'三国志'}
  ])
  let obj = reactive({
    a:{
      b:{
        c:666
      }
    }
  })
  function changePrice() {
    car.price += 10
  }
  function changeFirstGame() {
    games[0].name = '流星蝴蝶剑'
  }
</script>
<style scoped>
.person {
  background-color: skyblue;
  /* 记住 0 0 10px 好看 
     */
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
button {
  margin: 0 5px;
}
</style>
