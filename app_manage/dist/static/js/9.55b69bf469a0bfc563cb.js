webpackJsonp([9],{527:function(t,a,e){e(604),e(603);var i=e(211)(e(546),e(586),"data-v-2ab0f280",null);t.exports=i.exports},546:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={components:{},data:function(){return{indexs:0,name:"",bannerList:[{image:"",click_url:""}],index:"",activeName:"first"}},methods:{getBannerList:function(){var t=this;this.$ajax.get("/api/indexBannerList",{params:{type:"1"}}).then(function(a){"200"==a.data.code?t.bannerList=a.data.data:"601"==a.data.code?t.$router.push("/login"):t.$message({message:a.data.error,type:"error"})},function(t){console.log(t)})},saveBanner:function(t){var a=this;this.$ajax.post("/api/saveIndexBanner",this.bannerList[t]).then(function(t){"200"==t.data.code?a.$message({message:t.data.data.message,type:"success"}):"601"==t.data.code?a.$router.push("/login"):a.$message({message:t.data.error,type:"error"})},function(t){console.log(t)})},uploadImg:function(t,a){var e=this,i=new FormData;i.append("image",t.target.files[0]);var n={headers:{"Content-Type":"multipart/form-data"}};console.log(a),this.$ajax.post("api/uploadBanner",i,n).then(function(t){"200"==t.data.code?(e.bannerList[a].image=t.data.data.image,console.log(e.bannerList)):"601"==t.data.code?e.$router.push("/login"):e.$message({message:t.data.error,type:"error"})},function(t){})},add1:function(){this.bannerList.push({image:"",click_url:"",type:1})},del1:function(t){var a=this;this.bannerList[t].id?this.$ajax.post("/api/delIndexBanner",{id:this.bannerList[t].id}).then(function(t){"200"==t.data.code?(a.$message({message:t.data.data.message}),a.getBannerList()):"601"==t.data.code?a.$router.push("/login"):a.$message({message:t.data.error,type:"error"})},function(t){console.log(t)}):this.bannerList.splice(t,1)}},mounted:function(){},created:function(){this.getBannerList()}}},563:function(t,a,e){a=t.exports=e(94)(!1),a.push([t.i,".el-carousel__button{display:block;width:5px;height:5px;background-color:#fff;border-radius:50%}.el-button{padding:0 10px!important;border-radius:6px!important;font-size:14px!important}.el-button,.el-input__inner{height:28px!important;line-height:28px!important}.el-form-item{margin-bottom:12px!important;display:inline-block}.el-form-item__content{margin-right:20px}.el-button+.el-button{margin-left:0!important}.el-tabs__active-bar{background-color:#0f8edd!important}.el-tabs__item{font-size:20px!important;height:60px!important;line-height:60px!important;padding:0 20px!important}.el-tabs__item,.el-tabs__item.is-active{color:#54667a!important}",""])},564:function(t,a,e){a=t.exports=e(94)(!1),a.push([t.i,'.title small[data-v-2ab0f280]{color:#a6afbb;font-size:14px;margin-left:10px}.right[data-v-2ab0f280]{float:left;background-color:#fff;width:510px;padding:0 20px}.upload_img2[data-v-2ab0f280],.upload_img[data-v-2ab0f280]{width:250px;height:86px;background-image:url("/static/img/upload_img_bd.png");background-size:100% 100%;background-repeat:no-repeat;display:inline-block;margin:0 10px 20px 88px}.upload_img2[data-v-2ab0f280]{height:60px}.upload_btn[data-v-2ab0f280]{height:28px;line-height:28px;font-size:14px;position:absolute;display:inline-block;color:#0f8edd}',""])},586:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"crumbs"},[e("el-breadcrumb",{attrs:{separator:"/"}},[e("el-breadcrumb-item",{staticStyle:{"font-size":"24px","margin-left":"20px"}},[t._v("品牌现场海报图")])],1)],1),t._v(" "),e("div",{staticClass:"ms-doc"},[e("el-tabs",{staticStyle:{"min-height":"500px"},model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"品牌现场海报",name:"first"}},[e("div",{staticClass:"left_main"},[t._l(t.bannerList,function(a,i){return e("div",{staticStyle:{"margin-bottom":"20px"}},[e("div",{staticStyle:{position:"relative"}},[e("span",{staticStyle:{"font-size":"14px","margin-left":"15px",position:"absolute"}},[t._v(" 轮播图：")]),t._v(" "),e("div",{staticClass:"upload_img"},[e("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:a.image,alt:""}})]),t._v(" "),e("input",{staticStyle:{display:"none"},attrs:{id:"banner"+i,type:"file",multiple:"",accept:"image/*"},on:{change:function(a){t.uploadImg(a,i)}}}),t._v(" "),e("label",{staticClass:"upload_btn",attrs:{for:"banner"+i}},[t._v("上传图片")]),e("span",{staticStyle:{"font-size":"14px",color:"#999999",position:"absolute",bottom:"20px"}},[t._v("(格式JPG、JPEG、PNG，文件大小100k以内，建议尺寸750PX*260PX)")])]),t._v(" "),e("span",{staticStyle:{"font-size":"14px"}},[t._v("跳转链接：")]),t._v(" "),e("el-input",{staticStyle:{width:"300px",margin:"0 10px"},attrs:{placeholder:"请输入链接"},model:{value:a.click_url,callback:function(e){t.$set(a,"click_url",e)},expression:"i.click_url"}}),t._v(" "),e("el-button",{staticStyle:{"background-color":"#0f8edd","border-color":"#0f8edd"},attrs:{type:"primary",round:""},on:{click:function(a){t.saveBanner(i)}}},[t._v("保存\n\t\t\t\t\t")]),t._v(" "),e("el-button",{attrs:{type:"danger"},on:{click:function(a){t.del1(i)}}},[t._v("删除组")])],1)}),t._v(" "),e("el-button",{staticStyle:{"background-color":"#0f8edd","border-color":"#0f8edd","margin-left":"84px"},attrs:{type:"primary",round:""},on:{click:function(a){t.add1()}}},[t._v("增加组\n\t\t\t\t\t")])],2)])],1)],1)])},staticRenderFns:[]}},603:function(t,a,e){var i=e(563);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(210)("91da700e",i,!0)},604:function(t,a,e){var i=e(564);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(210)("3bae662d",i,!0)}});