webpackJsonp([1],{127:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n=["basugasubakuhatsu","professionalize","constitutional","transformation","draemon","gegegenokitaro","development","operation","pocketmonster","supermario","splatoon","nintendoswitch","tama","nakano","harumi","ikejiri","marunouchi","honkan","kitte","environmental","extraordinary","java","cobol","windows","linux","sandwitchman","chidori","bananaman","womanrushhour","queen","redhotchilipeppers","carpenters","backtothefuture","interstellar","independenceday","ironman","spiderman","avengers","legendofzelda","elvispresley","hoge","zedd","borgeous","avicii","ageha","v2","therollingstones","ledzeppelin","nakata","indianajones","jawz","annehathaway","forestgump","jurassicpark","starwars","rocky","biohazard","darsvader","lukeskywalker","lightsaber","reyskywalker","eddiemurphy","michaeljackson","michaeljordan","katyperry"]},128:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(1),r=a(80),s=a.n(r),o=a(81),i=a.n(o),l=a(83),c=(a.n(l),a(84)),u=(a.n(c),a(85)),p=a.n(u),d=a(15),h=a(79),f=a(82);a.n(f);n.default.config.productionTip=!1,n.default.use(s.a,{locale:i.a}),n.default.directive("focus",{componentUpdated:function(e,t){t.value&&e.focus()}}),new n.default({el:"#app",router:d.a,store:h.a,template:"<App/>",components:{App:p.a}})},129:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(1),r=a(209),s=a.n(r);t.default={name:"app"},n.default.component("navigation",s.a)},130:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(29);t.default={name:"error",computed:a.i(n.b)({errorMessage:function(e){return e.errorMessage}})}},131:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(1),r=a(78),s=a.n(r);t.default={name:"hello",data:function(){return{msg:"Thanks for playing Typing App"}}},n.default.component("ranking",s.a)},132:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"navigation",data:function(){return{activeIndex:"1"}},methods:{handleSelect:function(e,t){console.log(e,t)}}}},133:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(19),r=a.n(n),s=a(15),o=r.a.create({baseURL:"http://localhost:8080"});t.default={name:"perfectRanking",data:function(){return{tableData:[]}},mounted:function(){this.fetchRanking()},methods:{fetchRanking:function(){var e=this;o.get("/player/perfectRanking").then(function(t){e.tableData=t.data}).catch(function(e){s.a.push({path:"Top"})})}}}},134:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(1),r=a(19),s=a.n(r),o=a(15),i=s.a.create({baseURL:"http://localhost:8080"});t.default={name:"ranking",data:function(){return{tableData:[],temporaryTableData:[]}},mounted:function(){this.fetchRanking()},methods:{fetchRanking:function(){var e=this;i.get("/player/ranking").then(function(t){e.temporaryTableData=t.data,console.log(e.temporaryTableData);for(var a=0,r=e.temporaryTableData.length;a<r&&(!0===e.temporaryTableData[a].displayNameEnable&&(e.temporaryTableData[a].name="Hidden"),e.temporaryTableData[a].handleName=e.temporaryTableData[a].handleName||"名無しさん",n.default.set(e.tableData,a,e.temporaryTableData[a]),149!==a);a++);}).catch(function(e){o.a.push({path:"top"})})}}}},135:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(20),r=a.n(n),s=a(29),o=a(31),i=a(19),l=a.n(i),c=l.a.create({baseURL:"http://localhost:8080"});t.default={name:"top",data:function(){return{departmentOptions:["a","i"],form:{department:"",id:"",name:"",handleName:"",displayNameEnable:"false"},rules:{department:[{required:!0,message:"選択必須です",trigger:"blur"}],id:[{required:!0,message:"入力必須です",trigger:"blur"},{min:8,max:8,message:"8桁必須です",trigger:"blur"}],name:[{required:!0,message:"入力必須です",trigger:"blur"}]}}},mounted:function(){this.fetchDepartment()},methods:r()({},a.i(s.c)([o.a]),a.i(s.d)(["bindTopForm"]),{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){e?(t.bindTopForm(t.form),t.LOGIN()):t.$alert("入力に誤りがあります","バリデーションエラー",{confirmButtonText:"OK"})})},showRanking:function(){this.$router.push("/ranking")},fetchDepartment:function(){var e=this;c.get("/department").then(function(t){e.departmentOptions=t.data}).catch(function(e){console.log(e)})}})}},136:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(20),r=a.n(n),s=a(1),o=a(86),i=a.n(o),l=a(29),c=a(31),u=a(15),p=a(127);t.default={name:"typing",data:function(){return{mondai:"",mondaiList:p.a,input:"",answer:"",charIndex:0,wordChars:[],score:0,inputDisabled:!0,focus:!1,percentage:100,buttonDisabled:!1,buttonType:"info",buttonText:"れんしゅう",progressStatus:"",remainingTime:0,challengeCount:0,counting:!1,firstProgressFlg:!0,TOTAL_TIME:6e4,confirmDialogVisible:!0,resultDialogVisible:!1}},mounted:function(){this.challengeCount>=2&&(this.setErrorMessage("あなたは既に本番をプレイ済です。"),u.a.push({path:"/error"}))},computed:a.i(l.b)({challengeCount:function(e){return e.playerInfo.challengeCount},id:function(e){return e.playerInfo.id}}),watch:{percentage:function(e){e<30&&0!==e&&(this.progressStatus="exception"),e<=0&&(this.counting=!1,this.challengeCount++,this.percentage=100,this.progressStatus="",this.firstProgressFlg=!0,this.sendResults())},challengeCount:function(e){1===e&&(this.buttonDisabled=!1,this.buttonType="danger",this.buttonText="ほんばん",this.mondai="",this.input="",this.inputDisabled=!0,this.focus=!1,this.score=0),2===e&&(this.inputDisabled=!0,this.resultDialogVisible=!0)}},methods:r()({},a.i(l.c)([c.b]),a.i(l.d)(["setErrorMessage"]),{transitionToThanks:function(e){u.a.push({path:"thanks"})},checkKeyCode:function(e){var t=String.fromCharCode(e.keyCode),a=this.input.split("");if(8===e.keyCode)return void(this.charIndex>0&&this.charIndex--);if(this.wordChars[this.charIndex]===t){if(++this.charIndex===this.wordChars.length){if(this.input===this.mondai)return this.openSuccessMessage(),this.score=this.score+this.wordChars.length,this.charIndex=0,this.reloadNextWord(),void(this.input="");this.openFailureMessage(),this.input="",this.charIndex=0}}else this.charIndex++,a.length>=this.wordChars.length&&(this.openFailureMessage(),this.input="",this.charIndex=0)},reloadNextWord:function(){var e=Math.floor(Math.random()*this.mondaiList.length);this.mondai=this.mondaiList[e],this.wordChars=this.mondai.toUpperCase().split("")},startTyping:function(){this.buttonDisabled=!0,this.reloadNextWord(),this.inputDisabled=!1,this.focus=!0,this.startCountDown()},openSuccessMessage:function(){this.$message({message:"せいかい！",type:"success"})},openFailureMessage:function(){this.$message({message:"まちがえてます・・・もう一度最初から！",type:"error"})},startCountDown:function(){this.remainingTime=6e4,this.counting=!0},updateProgress:function(e){this.firstProgressFlg?this.firstProgressFlg=!1:this.percentage=1e3*e.seconds/this.TOTAL_TIME*100},sendResults:function(){1===this.challengeCount&&(this.score=0),this.$store.dispatch(c.b,{score:this.score,challengeCount:this.challengeCount})}})},s.default.component("countdown",i.a)},15:function(e,t,a){"use strict";var n=a(1),r=a(221),s=a(208),o=a.n(s),i=a(212),l=a.n(i),c=a(211),u=a.n(c),p=a(78),d=a.n(p),h=a(207),f=a.n(h),m=a(210),v=a.n(m);n.default.use(r.a),t.a=new r.a({routes:[{path:"/",name:"Top",component:u.a},{path:"/thanks",name:"Hello",component:o.a},{path:"/typing",name:"Typing",component:l.a},{path:"/ranking",name:"Ranking",component:d.a},{path:"/error",name:"Error",component:f.a},{path:"/perfectRanking",name:"PerfectRanking",component:v.a}]})},193:function(e,t){},194:function(e,t){},195:function(e,t){},196:function(e,t){},197:function(e,t){},198:function(e,t){},199:function(e,t){},200:function(e,t){},207:function(e,t,a){function n(e){a(197)}var r=a(6)(a(130),a(217),n,null,null);e.exports=r.exports},208:function(e,t,a){function n(e){a(195)}var r=a(6)(a(131),a(215),n,"data-v-16684e84",null);e.exports=r.exports},209:function(e,t,a){function n(e){a(193)}var r=a(6)(a(132),a(213),n,null,null);e.exports=r.exports},210:function(e,t,a){function n(e){a(198)}var r=a(6)(a(133),a(218),n,null,null);e.exports=r.exports},211:function(e,t,a){function n(e){a(200)}var r=a(6)(a(135),a(220),n,null,null);e.exports=r.exports},212:function(e,t,a){function n(e){a(199)}var r=a(6)(a(136),a(219),n,"data-v-a0ce2e8a",null);e.exports=r.exports},213:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-menu",{staticClass:"el-menu-demo",attrs:{theme:"dark","default-active":e.activeIndex,mode:"horizontal"},on:{select:e.handleSelect}},[a("el-menu-item",{attrs:{index:"1"}},[a("router-link",{attrs:{to:"/"}},[e._v("Typing")])],1)],1)},staticRenderFns:[]}},214:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("navigation"),e._v(" "),a("router-view")],1)},staticRenderFns:[]}},215:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("h1",[e._v(e._s(e.msg))]),e._v(" "),a("h2",[e._v("Links")]),e._v(" "),e._m(0),e._v(" "),a("h2",[e._v("FrontEnd Technology")]),e._v(" "),e._m(1),e._v(" "),a("h2",[e._v("BackEnd Technology")]),e._v(" "),e._m(2),e._v(" "),a("ranking")],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/kochoru/typing",target:"_blank"}},[e._v("GitHub")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("Vue.js:MVVM Framework")])]),e._v(" "),a("li",[a("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[e._v("vue-router:ルーティング")])]),e._v(" "),a("li",[a("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[e._v("vuex:状態管理")])]),e._v(" "),a("li",[a("a",{attrs:{href:"http://element.eleme.io",target:"_blank"}},[e._v("element-ui:UIツールキット")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/yiminghe/async-validator",target:"_blank"}},[e._v("async-validator:バリデータ")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/axios/axios",target:"_blank"}},[e._v("axios:httpクライアント")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://projects.spring.io/spring-boot/",target:"_blank"}},[e._v("Spring boot")])]),e._v(" "),a("li",[a("a",{attrs:{href:"http://www.mybatis.org/mybatis-3/ja/",target:"_blank"}},[e._v("ORマッパー：Mybatis")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.postgresql.org/",target:"_blank"}},[e._v("DBMS:postgresql")])])])}]}},216:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ranking"},[a("h1",[e._v("ランキング")]),e._v(" "),a("el-table",{staticClass:"rankingTable",attrs:{data:e.tableData,stripe:""}},[a("el-table-column",{attrs:{label:"ランク",type:"index",width:"100px"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"しめい",width:"180px"}}),e._v(" "),a("el-table-column",{attrs:{prop:"handleName",label:"ハンドルネーム",width:"180px"}}),e._v(" "),a("el-table-column",{attrs:{prop:"department",label:"ぶしょ",width:"150px"}}),e._v(" "),a("el-table-column",{attrs:{prop:"score",label:"スコア",width:"200px"}})],1),e._v(" "),a("h2",[e._v("and more...")])],1)},staticRenderFns:[]}},217:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"error"},[a("h1",{staticClass:"caution"},[e._v(" "+e._s(e.errorMessage)+" ")])])},staticRenderFns:[]}},218:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"perfectRanking"},[a("h1",[e._v("ランキング")]),e._v(" "),a("el-table",{staticClass:"rankingTable",attrs:{data:e.tableData,stripe:""}},[a("el-table-column",{attrs:{label:"ランク",type:"index",width:"100px"}}),e._v(" "),a("el-table-column",{attrs:{prop:"id",label:"ID",width:"180px"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"しめい",width:"180px"}}),e._v(" "),a("el-table-column",{attrs:{prop:"handleName",label:"ハンドルネーム",width:"180px"}}),e._v(" "),a("el-table-column",{attrs:{prop:"department",label:"ぶしょ",width:"150px"}}),e._v(" "),a("el-table-column",{attrs:{prop:"ipAddress",label:"IPアドレス",width:"200px"}}),e._v(" "),a("el-table-column",{attrs:{prop:"score",label:"スコア",width:"200px"}})],1)],1)},staticRenderFns:[]}},219:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"typing"},[a("el-dialog",{attrs:{title:"ルール・注意事項",visible:e.confirmDialogVisible,size:"small","show-close":"false","close-on-click-modal":"false"},on:{"update:visible":function(t){e.confirmDialogVisible=t}}},[a("h3",{staticClass:"keepLeft"},[e._v("・文字の削除に関し、Deleteボタンは対応してません。Backspaceで消してください。")]),e._v(" "),a("h3",{staticClass:"keepLeft"},[e._v("・れんしゅう、ほんばんで計2回プレイできます。")]),e._v(" "),a("h3",{staticClass:"keepLeft"},[e._v("・タイピングに成功した文字数がそのままスコアに加算されます。")]),e._v(" "),a("h3",{staticClass:"keepLeft"},[e._v("・その他、細かいバグがあるかもしれません。ごめんなさい。")]),e._v(" "),a("h3",{staticClass:"keepLeft"},[e._v("・更新ボタンは押さないでください！！！")]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{plain:!0,type:"info"},on:{click:function(t){e.confirmDialogVisible=!1}}},[e._v("さぁ、れんしゅうボタンを押して早速スタートだ！")])],1)]),e._v(" "),a("el-dialog",{attrs:{title:"結果発表～！！",visible:e.resultDialogVisible,size:"small","show-close":"false","close-on-click-modal":"false"},on:{"update:visible":function(t){e.resultDialogVisible=t},close:e.transitionToThanks}},[a("h1",[e._v("あなたの得点は "+e._s(e.score)+" 点でした！")]),e._v(" "),a("h1",[e._v("おめでとうございます！！")]),e._v(" "),a("h2",[e._v("プレイありがとうございました。結果は後日発表します。")])]),e._v(" "),a("span",[e._v("ようこそ "+e._s(e.id)+" さん")]),e._v(" "),a("h1",{staticClass:"score"},[e._v("あなたのスコアは： "+e._s(e.score))]),e._v(" "),a("h1",{staticClass:"mondai"},[e._v(e._s(e.mondai)+" ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"},{name:"focus",rawName:"v-focus",value:e.focus,expression:"focus"}],staticClass:"input",attrs:{type:"email",disabled:e.inputDisabled},domProps:{value:e.input},on:{keyup:e.checkKeyCode,input:function(t){t.target.composing||(e.input=t.target.value)}}}),e._v(" "),a("ul",[a("li",[a("el-button",{staticClass:"startButton",attrs:{type:e.buttonType,size:"large",disabled:e.buttonDisabled},on:{click:e.startTyping}},[e._v(" "+e._s(e.buttonText)+" ")])],1)]),e._v(" "),a("footer",[a("h2",[e.counting?a("countdown",{ref:"countdown",attrs:{time:e.remainingTime,interval:50},on:{countdownprogress:e.updateProgress},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("のこりじかん "+e._s(t.hours)+" : "+e._s(t.minutes)+" : "+e._s(t.seconds)+" ")]}}])}):e._e()],1),e._v(" "),a("el-progress",{attrs:{percentage:e.percentage,"show-text":!1,status:e.progressStatus}})],1)],1)},staticRenderFns:[]}},220:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"top"},[a("h1",{staticClass:"caution"},[e._v("!!注意事項!!")]),e._v(" "),a("h2",[e._v("・一度実施された方は二度目は実施できません。")]),e._v(" "),a("el-form",{ref:"form",staticClass:"form",attrs:{model:e.form,"label-width":"300px",size:"medium",rules:e.rules}},[a("el-form-item",{attrs:{label:"Department",prop:"department"}},[a("el-select",{attrs:{placeholder:"所属する部署を選択してください",clearable:""},model:{value:e.form.department,callback:function(t){e.$set(e.form,"department",t)},expression:"form.department"}},e._l(e.departmentOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"ID",prop:"id"}},[a("el-input",{attrs:{placeholder:"XXXXXXXX",required:""},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"おなまえ",prop:"name"}},[a("el-input",{attrs:{placeholder:"氏名をフルネームで入力ください（半角全角はどっちでもいいです）",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"ハンドルネーム"}},[a("el-input",{attrs:{placeholder:"好きなハンドルネームを入力ください(任意)"},model:{value:e.form.handleName,callback:function(t){e.$set(e.form,"handleName",t)},expression:"form.handleName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"ランキングで「おなまえ」はひょうじしたくない"}},[a("el-radio",{attrs:{label:"true"},model:{value:e.form.displayNameEnable,callback:function(t){e.$set(e.form,"displayNameEnable",t)},expression:"form.displayNameEnable"}},[e._v("はい")]),e._v(" "),a("el-radio",{attrs:{label:"false"},model:{value:e.form.displayNameEnable,callback:function(t){e.$set(e.form,"displayNameEnable",t)},expression:"form.displayNameEnable"}},[e._v("とくにこだわらない")])],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("form")}}},[e._v("ゲームを開始する")]),e._v(" "),a("el-button",{attrs:{type:"info"},on:{click:e.showRanking}},[e._v("ランキングを見る")])],1)],1)],1)},staticRenderFns:[]}},223:function(e,t){},31:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r});var n="LOGIN",r="REGISTER_RESULT"},78:function(e,t,a){function n(e){a(196)}var r=a(6)(a(134),a(216),n,null,null);e.exports=r.exports},79:function(e,t,a){"use strict";var n,r,s=a(141),o=a.n(s),i=a(1),l=a(29),c=a(19),u=a.n(c),p=a(202),d=a.n(p),h=a(15),f=a(31);i.default.use(l.a);var m={playerInfo:{department:"",id:"",name:"",handleName:"",displayNameEnable:"false",score:0,challengeCount:0,adminFlg:!1},errorMessage:"!!"},v=(n={},o()(n,f.a,function(e){var t=e.commit,a=e.state;try{u.a.post("http://localhost:8080/player",d.a.stringify(a.playerInfo)).then(function(e){t(f.a,e.data),a.playerInfo.challengeCount>=2?h.a.push({path:"/error"}):h.a.push({path:"/typing"})}).catch(function(e){console.log(e),h.a.push({path:"/"})})}catch(e){console.log(e)}}),o()(n,f.b,function(e,t){var a=e.commit,n=e.state;a(f.b,t),u.a.put("http://localhost:8080/player/"+n.playerInfo.id+"/result",d.a.stringify({score:t.score,challengeCount:t.challengeCount})).then(function(e){}).catch(function(e){console.log(e)})}),n),g={},b=(r={},o()(r,f.a,function(e,t){e.playerInfo.challengeCount=t.challengeCount,e.playerInfo.adminFlg=t.adminFlg,t.challengeCount>=2&&(e.errorMessage="チャレンジは一度のみです")}),o()(r,f.b,function(e,t){e.playerInfo.score=t.score,e.playerInfo.challengeCount=t.challengeCount}),o()(r,"bindTopForm",function(e,t){e.playerInfo.department=t.department,e.playerInfo.id=t.id,e.playerInfo.name=t.name,e.playerInfo.handleName=t.handleName,e.playerInfo.displayNameEnable=t.displayNameEnable}),o()(r,"setErrorMessage",function(e,t){e.errorMessage=t}),r);t.a=new l.a.Store({state:m,getters:g,actions:v,mutations:b})},83:function(e,t){},84:function(e,t){},85:function(e,t,a){function n(e){a(194)}var r=a(6)(a(129),a(214),n,null,null);e.exports=r.exports}},[128]);
//# sourceMappingURL=app.c621ac79a3522c186f4d.js.map