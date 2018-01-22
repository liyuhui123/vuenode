<template>
  <div class="first">
    <div class="first-left">
      <ul class="first-top" >
        <!--<router-link to="/">{{it.text}}</router-link>-->
        <li v-for="(it,index) in arr2" :key="index"><router-link :to="{path: it.url}" exact>{{it.text}}</router-link></li>
        <!--<li v-on:click="show()"><router-link :to=path:['/?tab=all']>{{}}</router-link></li>-->
        <!--<li v-on:click="show()"><router-link to="/?tab=good">精华</router-link></li>-->
        <!--<li>分享</li>-->
        <!--<li>问答</li>-->
        <!--<li>招聘</li>-->
        <!--<li>客户端测试</li>-->
      </ul>
      <ul class="first-main">
        <li v-for="item in arr">
          <div class="li">
            <div class="first-main-img">
              <img :src="item.author.avatar_url"/>
            </div>
            <span>{{item.reply_count}}/{{item.visit_count}}</span>
            <div>
              <span class="span">置顶</span>
            </div>
            <router-link :to="{name:'Detal',params:{id:item.id}}" v-model='parentMsg'>{{item.title}}</router-link>
          </div>
          <div class="imga">
            <img :src="item.author.avatar_url" alt="">
            <a>20分钟前</a>
          </div>
        </li>
      </ul>
    </div>
    <div class="first-right">
    </div>
  </div>
</template>
<!---->
<script>
import axios from 'axios'
export default {
  name: 'First',
  data () {
    return {
      arr:[],
      arr2:[{text: '全部', url: '/?tab=all', a: 'all'}, {text: '精华', url: '/?tab=good', a: 'good'}, {text: '分享', url: '/?tab=share', a: 'share'}, {text: '问答', url: '/?tab=ask', a: 'ask'}, {text: '招聘', url: '/?tab=job', a: 'job'}, {text: '客户端测试', url: '/?tab=dev', a: 'dev'}]
    }
  },
  created () {
    console.log(21456)
    axios.get('https://cnodejs.org/api/v1/topics', {params: { page: 1, tab: 'all', limit: 20 }})
      .then(function (res) {
        console.log(res)
        this.arr = res.data.data
        console.log(this.arr)
      }.bind(this))
  },
  watch: {
    $route: function () {
      var tab = this.$router.currentRoute.query.tab
      console.log(tab)
      axios.get('https://cnodejs.org/api/v1/topics', {params: { page: 1, tab: tab, limit: 20 }})
        .then(function (res) {
          console.log(res)
          this.arr = res.data.data
          console.log(this.arr)
        }.bind(this))
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.first{
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  .first-left{
    width: 77%;
    /*display: flex;*/
    .first-top{
      display: flex;
      background: #f3f3f3;
      padding: 0.5rem;
      li{
        a{
          color: yellowgreen;
          font-size: 12px;
          margin: 0 0.5rem;
          padding: 0.2rem;
          border-radius: 5px;
        }
      }
      li:hover a{
        color: green;
        /*color: #fff;background: #9ACD32;*/
      }
    }
    .first-main{
      background: #fff;
      li{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
        border-bottom: 1px solid lightgray;
        .li{
          display: flex;
        .first-main-img{
          width: 25px;
          height:25px;
          margin: 0 10px;
          position: relative;
          top: 0;
          left: 0;

          img{
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
          }
        }
        span{
          width: 80px;
          font-size: 11px;
          vertical-align: center;
          margin: 5px;
          color: gray
        }
        .span{
          padding: 1px 4px;
          background: olivedrab;
          color: #fff;
          border-radius: 3px;
        }
        a{
          font-size: 14px;
          color: #000;
          margin-left: 3px;
        }
        }
        .imga{
          margin-right:10px;
          a{
            font-size: 10px;
          }
          a:hover {
            border-bottom: 1px solid #000;
          }
          img{
            width: 15px;
            height: 15px;
          }
        }
      }
      li:hover{
        background: #f3f3f3;
      }
    }
	}
  .first-right{
    width: 22%;
    background: #F3F3F3;
  }
}
</style>
