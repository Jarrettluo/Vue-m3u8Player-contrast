<template>
  <div class="about">
    <h1>This is an Navigation page</h1>
      <div class="route-group">
        <div class="route-item" v-for="(item, index) in allRoute" :key="index" @click="pushToRoute(item.path)">
           <span>{{ item.name }}</span>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Route from "../router/index"
export default Vue.extend({

    data(){
      return {
        // allRoute: Route
        allRoute: Route.options.routes,
      };
    },
    mounted(){
      this.init()
    },
    methods: {
      init(){
        console.log(Route)
        this.allRoute = Route.options.routes
      },
      pushToRoute(path:string) {
        this.$router.push(path)
      }
    }

})
</script>

<style lang="scss" scoped>
  .route-group {
    display: flex;
    justify-content: center;
    .route-item {
      background-color: royalblue;
      border-radius: 19px;
      color: #fff;
      cursor: pointer;
      margin-left: 10px;
      padding: 20px;
      &:hover {
        background-color: #045b75;
      }
      span {
        font-size: 18px;
        font-weight: 500;
      }
    }
  }
</style>
