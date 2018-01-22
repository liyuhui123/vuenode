<template>
  <div class="detal">
    <div class="detal-left">
      <h3 v-html="arr2" class="detal-title"></h3>
      <div v-html="arr" class="left-http"></div>
    </div>
    <div class="detal-right"></div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      arr: null
    }
  },
  created () {
    var topicId = this.$route.params.id
    console.log(topicId)
    axios.get('https://cnodejs.org/api/v1/topic/' + topicId)
      .then(function (res) {
        console.log(res)
        this.arr2 = res.data.data.title
        this.arr = res.data.data.content
        console.log(this.arr)
      }.bind(this))
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .detal {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    .detal-left {
      width: 77%;
      background: #fff;
      .left-http {
        width: 95%;
        margin: 0 auto;
        .markdown-text{
          width: 100%;
          li{
            list-style-type: disc;
            margin-left: 20px;
          }
          h2,p{
            padding: 10px 0;
          }
          img{
            width: 100%;
          }
          p:last-child{
            img{
              width: 30%;
            }
          }
        }
      }
      .detal-title{
        padding: 10px 20px;
      }
    }
    .detal-right {
      width: 22%;
      background: #fff;
    }
  }

</style>
