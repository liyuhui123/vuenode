<template>
  <div id="app">
    <div class="hea">
      <div class="head">
        <div class="head-left">
          <img src="//o4j806krb.qnssl.com/public/images/cnodejs_light.svg" />
          <input type="text" />
        </div>
        <div class="head-right">
          <router-link to="/" exact>首页</router-link>
          <router-link to="/two">新手入门</router-link>
          <router-link to="/three">API</router-link>
          <router-link to="/about">关于</router-link>
          <router-link to="/register">注册</router-link>
          <router-link to="/login">登录</router-link>
        </div>
      </div>
    </div>
    <main>
      <router-view/>
    </main>
    <div class="foot">
      <div class="fot">
        <p style="color: #000;">RSS|源码地址</p>
        <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
        <p>服务器赞助商为<a href="http://www.ucloud.cn/?utm_source=zanzhu&utm_campaign=cnodejs&utm_medium=display&utm_content=yejiao&ytag=cnodejs_logo" target="_blank"class="sponsor_outlink" data-label="ucloud_bottom">
          <img src="//dn-cnode.qbox.me/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9" title="ucloud"alt="ucloud" width="92px"/></a>，存储赞助商为<a href="http://www.qiniu.com/?ref=cnode" target="_blank"class="sponsor_outlink" data-label="qiniu_bottom">
          <img src="//dn-cnode.qbox.me/Fg0jtDIcTqVC049oVu5-sn6Om4NX" title="七牛云存储"alt="七牛云存储" width="115px"/></a>,由<a href="https://alinode.aliyun.com/?ref=cnode" target="_blank"class="sponsor_outlink" data-label="alinode_bottom">
          <img src="//dn-cnode.qbox.me/FpMZk31PDyxkC8yStmMQL4XroaGD" title="alinode"alt="alinode" height="54px" width="166px"/></a>提供应用性能服务。
        </p>
        <p>新手搭建 Node.js 服务器，推荐使用无需备案的 <a href="https://www.digitalocean.com/?refcode=eba02656eeb3">DigitalOcean(https://www.digitalocean.com/)</a></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
html,body{
	width: 100%;
	height: 100%;
	background: #D3D3D3;
}
#app{
  a{text-decoration: none;}
  width: 100%;
  .hea{
    width: 100%;
    height: 45px;
    background: #444;
  .head {
    width: 77%;
    margin: 0 auto;
    height: 45px;
    line-height: 45px;
    background: #444;
    display: flex;
    justify-content: space-between;
      .head-left{
        width: 50%;
        display:flex;
        padding: 10px 0;
        img {
          height: 25px;
        }
        input{
          height: 25px;
          width: 200px;
          opacity: 0.5;
          border-radius: 50px;
          border: none;
          color: gray;
          margin-left: 1rem;
        }
      }
    .head-right{
          width: 50%;
          text-align: right;
          font-size: 10px;
        a{
          color: lightgray;
          padding: 0 13px;
        }
        .router-link-active{
          color: #fff;
        }
        a:hover{
          color: #fff;
        }
      }
    }
  }
  main{
    width: 77%;
    margin: 0 auto;
    /*height: 1000px;*/
  }
  .foot{
    width: 100%;
    padding:15px 0;
    font-size: 12px;
    .fot{
      width: 77%;
      margin: 0 auto;
    }
      background: #fff;
    p{
      color: gray;
      margin-bottom: 10px;
      vertical-align: bottom;
      /*line-height: 20px;*/
    }
    p:nth-of-type(3) {
      /*height: 4rem;*/
      /*line-height: 4rem;*/
    }
  }
}
@media only screen and (max-width: 979px){
  .head{
    flex-wrap:wrap;
  }
}
</style> b
