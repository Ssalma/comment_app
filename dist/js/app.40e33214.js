(function(e){function t(t){for(var c,a,s=t[0],i=t[1],u=t[2],d=0,p=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,s=1;s<n.length;s++){var i=n[s];0!==r[i]&&(c=!1)}c&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var c={},r={app:0},o=[];function a(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=c,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(n,c,function(t){return e[t]}.bind(null,c));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"06f3":function(e,t,n){},"0c6e":function(e,t,n){"use strict";n("cf23")},"11ca":function(e,t,n){e.exports=n.p+"img/icon-delete.bc196c73.svg"},"15cd":function(e,t,n){"use strict";n("91ef")},"20a7":function(e,t,n){},2930:function(e,t,n){e.exports=n.p+"img/close.1c60fed1.svg"},"2ea2":function(e,t,n){},4072:function(e,t,n){"use strict";n("86d7")},"56d7":function(e,t,n){"use strict";n.r(t);var c={};n.r(c),n.d(c,"getComments",(function(){return Vt})),n.d(c,"getCurrentUser",(function(){return Nt}));var r={};n.r(r),n.d(r,"getCommentsAction",(function(){return zt})),n.d(r,"deleteCommentAction",(function(){return qt})),n.d(r,"deleteReplyAction",(function(){return Jt})),n.d(r,"updateScoreAction",(function(){return Kt})),n.d(r,"editCommentAction",(function(){return Yt})),n.d(r,"editReplyAction",(function(){return Ht})),n.d(r,"pushReplyAction",(function(){return Xt})),n.d(r,"getCurrentUserAction",(function(){return Zt}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),a=Object(o["g"])("div",{id:"nav"},null,-1);function s(e,t){var n=Object(o["A"])("router-view");return Object(o["s"])(),Object(o["f"])(o["a"],null,[a,Object(o["i"])(n)],64)}n("0c6e");var i=n("6b0d"),u=n.n(i);const l={},d=u()(l,[["render",s]]);var p=d,b=n("6c02"),f={class:"comment__app"},m={class:"comment__app-content"},O={class:"reply"};function j(e,t,n,c,r,a){var s=Object(o["A"])("c-message-board"),i=Object(o["A"])("c-reply");return Object(o["s"])(),Object(o["f"])("div",f,[Object(o["g"])("div",m,[Object(o["i"])(s),Object(o["g"])("div",O,[Object(o["i"])(i)])])])}var y={class:"reply"},g={class:"reply__content"},v={class:"reply__content-image"},h=["src"];function _(e,t,n,c,r,a){var s=Object(o["A"])("c-comment"),i=Object(o["A"])("c-button");return Object(o["s"])(),Object(o["f"])("div",y,[Object(o["g"])("div",g,[Object(o["g"])("div",v,[Object(o["g"])("img",{src:e.currentUser.image,alt:""},null,8,h)]),Object(o["i"])(s,{class:"comment-component",modelValue:e.content,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.content=t})},null,8,["modelValue"]),Object(o["i"])(i,{onPress:a.sendComment,class:"btn",type:"button",loading:e.btnLoading},{default:Object(o["F"])((function(){return[Object(o["h"])(Object(o["C"])(n.btnType),1)]})),_:1},8,["onPress","loading"])])])}var C=n("1da1"),k=n("5530"),R=(n("96cf"),n("ac1f"),n("5319"),n("5502")),w=n("260b"),M=(n("e71f"),{apiKey:"AIzaSyCYg9c7PNvacv3gEUKjdpNaZfALXLE75Pk",authDomain:"comment-app-9f9ce.firebaseapp.com",projectId:"comment-app-9f9ce",storageBucket:"comment-app-9f9ce.appspot.com",messagingSenderId:"777336045547",appId:"1:777336045547:web:bcd88c8402d107be6fe3ae"});w["a"].initializeApp(M);var x=w["a"].firestore(),I=n("ef1b"),A=n("7b82"),U=n.n(A),S=n("11ca"),T=n.n(S),D=n("eaaf"),E=n.n(D),L=["disabled","type"],P={class:"icons"},$={key:0,src:U.a,alt:"reply"},F={key:1,src:T.a,alt:"deleteIcon"},B={key:2,src:E.a,alt:"editIcon"},V={key:0,class:"btn__loader"};function N(e,t,n,c,r,a){return Object(o["s"])(),Object(o["f"])("button",{class:Object(o["o"])(["btn",n.variant?"btn--".concat(n.variant):""]),onClick:t[0]||(t[0]=function(){return a.handleClick&&a.handleClick.apply(a,arguments)}),disabled:n.disabled||n.loading,type:n.submit?"submit":"button"},[Object(o["g"])("span",P,[n.reply?(Object(o["s"])(),Object(o["f"])("img",$)):Object(o["e"])("",!0),n.deleteIcon?(Object(o["s"])(),Object(o["f"])("img",F)):Object(o["e"])("",!0),n.edit?(Object(o["s"])(),Object(o["f"])("img",B)):Object(o["e"])("",!0)]),Object(o["z"])(e.$slots,"default",{},void 0,!0),n.loading?(Object(o["s"])(),Object(o["f"])("span",V)):Object(o["e"])("",!0)],10,L)}var z={name:"Button",props:{submit:{type:String},variant:{type:String,default:"primary",required:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},reply:{type:Boolean},deleteIcon:{type:Boolean},edit:{type:Boolean},type:{type:String,default:"button"}},methods:{handleClick:function(){this.$emit("press")}}};n("a055");const q=u()(z,[["render",N],["__scopeId","data-v-37cf3a3f"]]);var J=q,K={class:"comment"},Y=["value"];function H(e,t,n,c,r,a){return Object(o["s"])(),Object(o["f"])("div",K,[Object(o["g"])("textarea",{cols:"30",rows:"5",placeholder:"Add a comment....",class:"comment-text-area",value:n.modelValue,onInput:t[0]||(t[0]=function(t){return e.$emit("update:modelValue",t.target.value)})},null,40,Y)])}var X={props:{value:{type:String},modelValue:{type:String}}};n("fbde");const Z=u()(X,[["render",H],["__scopeId","data-v-dd9585e0"]]);var G=Z,Q={components:{CButton:J,CComment:G},props:{btnType:{type:String,default:"SEND"}},computed:Object(k["a"])({},Object(R["c"])({currentUser:"getCurrentUser"})),data:function(){return{content:"",btnLoading:!1}},methods:{formatDate:function(e){if(!e)return"-";var t=Object(I["a"])(e,{addSuffix:!0}).replace("about ","");return"".concat(t)},sendComment:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){var n,c,r,o,a,s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.currentUser,c=n.image,r=n.username,o=e.formatDate(new Date),a=Date.now(),e.btnLoading=!0,t.next=7,x.collection("comments").doc();case 7:if(s=t.sent,i=s.id,""===e.content){t.next=14;break}return t.next=12,s.set({id:i,content:e.content,date:a,user:{image:c,username:r},createdAt:o,score:0,replies:[]}).then((function(){e.content="",e.btnLoading=!1})).catch((function(e){console.error("Error writing document: ",e)}));case 12:t.next=15;break;case 14:window.alert("Please enter a comment");case 15:e.btnLoading=!1,e.content="",e.$store.dispatch("getCommentsAction");case 18:case"end":return t.stop()}}),t)})))()}}};n("7ee0");const W=u()(Q,[["render",_],["__scopeId","data-v-719eccfa"]]);var ee=W,te={key:0},ne={key:1},ce={class:"chat"},re={class:"chat__details"},oe={class:"content-text"},ae={class:"chat__buttons"},se={class:"desktop__btn__wrapper-mobile"},ie=Object(o["h"])("Reply"),ue={key:1,class:"reply__delete--btns-mobile"},le=Object(o["h"])("Delete"),de=Object(o["h"])("Edit"),pe={class:"desktop__btn__wrapper"},be=Object(o["h"])("Reply"),fe={key:1,class:"reply__delete--btns"},me=Object(o["h"])("Delete"),Oe=Object(o["h"])("Edit"),je={key:0},ye={key:1},ge={key:2,class:"replies"};function ve(e,t,n,c,r,a){var s=Object(o["A"])("profile"),i=Object(o["A"])("counter"),u=Object(o["A"])("c-button"),l=Object(o["A"])("c-reply-message"),d=Object(o["A"])("c-replies"),p=Object(o["A"])("modal");return a.loading?(Object(o["s"])(),Object(o["f"])("div",te,[(Object(o["s"])(),Object(o["f"])(o["a"],null,Object(o["y"])(5,(function(e){return Object(o["g"])("div",{class:"loading",key:e})})),64))])):(Object(o["s"])(),Object(o["f"])("div",ne,[(Object(o["s"])(!0),Object(o["f"])(o["a"],null,Object(o["y"])(a.comments,(function(t){return Object(o["s"])(),Object(o["f"])("div",{key:t.id},[Object(o["g"])("div",ce,[Object(o["g"])("div",re,[Object(o["i"])(s,{user:Object(k["a"])(Object(k["a"])({},t.user),{},{createdAt:t.createdAt,date:t.date})},null,8,["user"]),Object(o["g"])("p",oe,Object(o["C"])(t.content),1)]),Object(o["g"])("div",ae,[Object(o["i"])(i,{count:t.score,id:t.id},null,8,["count","id"]),Object(o["g"])("div",se,[t.user.username!==a.currentUser.username?(Object(o["s"])(),Object(o["d"])(u,{key:0,variant:"secondary",class:"button__mobile",reply:"",onClick:function(n){return e.replyTo=t.id}},{default:Object(o["F"])((function(){return[ie]})),_:2},1032,["onClick"])):Object(o["e"])("",!0),t.user.username===a.currentUser.username?(Object(o["s"])(),Object(o["f"])("div",ue,[Object(o["i"])(u,{onClick:function(e){return a.openDelModal(t.id)},variant:"secondary",class:"button__mobile",deleteIcon:""},{default:Object(o["F"])((function(){return[le]})),_:2},1032,["onClick"]),Object(o["i"])(u,{variant:"secondary",class:"button__mobile","edit-btn":"",editIcon:"",onClick:function(n){return e.editMsg=t.id}},{default:Object(o["F"])((function(){return[de]})),_:2},1032,["onClick"])])):Object(o["e"])("",!0)])]),Object(o["g"])("div",pe,[t.user.username!==a.currentUser.username?(Object(o["s"])(),Object(o["d"])(u,{key:0,variant:"secondary",class:"button__desktop",reply:"",onClick:function(n){return e.replyTo=t.id}},{default:Object(o["F"])((function(){return[be]})),_:2},1032,["onClick"])):Object(o["e"])("",!0),t.user.username===a.currentUser.username?(Object(o["s"])(),Object(o["f"])("div",fe,[Object(o["i"])(u,{variant:"secondary",class:"button__desktop delete-btn",deleteIcon:"",onClick:function(e){return a.openDelModal(t.id)}},{default:Object(o["F"])((function(){return[me]})),_:2},1032,["onClick"]),Object(o["i"])(u,{variant:"secondary",class:"button__desktop","edit-btn":"",editIcon:"",onClick:function(n){return e.editMsg=t.id}},{default:Object(o["F"])((function(){return[Oe]})),_:2},1032,["onClick"])])):Object(o["e"])("",!0)])]),e.editMsg===t.id?(Object(o["s"])(),Object(o["f"])("div",je,[Object(o["i"])(l,{onSendReplyMessage:function(e){return a.editMessage(e,t.id)},btnType:e.editMsg===t.id?e.update:e.Reply,onClose:a.closeReply},null,8,["onSendReplyMessage","btnType","onClose"])])):Object(o["e"])("",!0),e.replyTo===t.id?(Object(o["s"])(),Object(o["f"])("div",ye,[Object(o["i"])(l,{onSendReplyMessage:function(e){return a.sendReplyMessage(e,t.id)},btnType:"Reply",btnLoading:a.loading,onClose:a.closeReply},null,8,["onSendReplyMessage","btnLoading","onClose"])])):Object(o["e"])("",!0),0!==t.replies.length?(Object(o["s"])(),Object(o["f"])("div",ge,[Object(o["i"])(d,{replies:t.replies,currentUser:a.currentUser,commentId:t.id},null,8,["replies","currentUser","commentId"])])):Object(o["e"])("",!0)])})),128)),Object(o["i"])(p,{show:e.delMsg,onCancel:a.closeDeleteModal,onRemove:t[0]||(t[0]=function(e){return a.deleteMessage()})},null,8,["show","onCancel"])]))}n("7db0"),n("d3b7"),n("25f0"),n("b0c0");var he=function(e){return Object(o["v"])("data-v-39f7ddf0"),e=e(),Object(o["t"])(),e},_e={class:"profile"},Ce={class:"profile-image"},ke=["src"],Re={class:"username"},we={key:0,class:"you"},Me=he((function(){return Object(o["g"])("p",null,"you",-1)})),xe=[Me],Ie={class:"date"};function Ae(e,t,n,c,r,a){return Object(o["s"])(),Object(o["f"])("div",_e,[Object(o["g"])("div",Ce,[Object(o["g"])("img",{src:n.user.image,alt:""},null,8,ke)]),Object(o["g"])("p",Re,Object(o["C"])(n.user.username),1),n.user.username===e.name?(Object(o["s"])(),Object(o["f"])("div",we,xe)):Object(o["e"])("",!0),Object(o["g"])("p",Ie,Object(o["C"])(a.formatDate),1)])}var Ue={props:{user:{type:Object}},data:function(){return{name:"juliusomo"}},computed:{formatDate:function(){var e=this.user.date;if(!e)return"";var t=Object(I["a"])(e,{addSuffix:!0}).replace("about ","");return"".concat(t)}}};n("d0db");const Se=u()(Ue,[["render",Ae],["__scopeId","data-v-39f7ddf0"]]);var Te=Se,De=n("77ea"),Ee=n.n(De),Le=n("b398"),Pe=n.n(Le),$e={class:"counter__val"};function Fe(e,t,n,c,r,a){return Object(o["s"])(),Object(o["f"])("div",{class:Object(o["o"])(["counter",n.type?"counter--".concat(n.type):""])},[Object(o["g"])("button",null,[Object(o["g"])("img",{src:Ee.a,alt:"",onClick:t[0]||(t[0]=function(){return c.addOne&&c.addOne.apply(c,arguments)})})]),Object(o["g"])("p",$e,Object(o["C"])(c.state.count),1),Object(o["g"])("button",null,[Object(o["g"])("img",{src:Pe.a,alt:"",onClick:t[1]||(t[1]=function(){return c.subtractOne&&c.subtractOne.apply(c,arguments)})})])],2)}n("a9e3");var Be={data:function(){return{}},props:{count:{type:Number,default:0},id:{type:String,default:""},type:{type:String,default:"commentCount"},replyId:{type:String,default:""}},setup:function(e){var t=Object(R["d"])(),n=Object(o["w"])({count:Object(o["x"])(e.count)}),c=function(){var c=n.count+=1;t.dispatch("updateScoreAction",{id:e.id,score:c,type:e.type,replyId:e.replyId})},r=function(){var c=n.count-=1;t.dispatch("updateScoreAction",{id:e.id,score:c,type:e.type,replyId:e.replyId})};return{state:n,addOne:c,subtractOne:r}}};n("b0f5");const Ve=u()(Be,[["render",Fe],["__scopeId","data-v-0cefdc2f"]]);var Ne=Ve,ze={class:"chat"},qe={class:"chat__details"},Je={class:"content-text"},Ke={class:"chat__buttons"},Ye={class:"desktop__btn__wrapper-mobile"},He=Object(o["h"])("Reply"),Xe={key:1,class:"reply__delete--btns-mobile"},Ze=Object(o["h"])("Delete"),Ge=Object(o["h"])("Edit"),Qe={class:"desktop__btn__wrapper"},We=Object(o["h"])("Reply"),et={key:1,class:"reply__delete--btns"},tt=Object(o["h"])("Delete"),nt=Object(o["h"])("Edit"),ct={key:0,style:{"margin-top":"10px"}},rt={key:1,style:{"margin-top":"10px"}};function ot(e,t,n,c,r,a){var s=Object(o["A"])("profile"),i=Object(o["A"])("counter"),u=Object(o["A"])("c-button"),l=Object(o["A"])("c-reply-message"),d=Object(o["A"])("c-modal");return Object(o["s"])(!0),Object(o["f"])(o["a"],null,Object(o["y"])(n.replies,(function(c){return Object(o["s"])(),Object(o["f"])("div",{key:c.id},[Object(o["g"])("div",ze,[Object(o["g"])("div",qe,[Object(o["i"])(s,{user:Object(k["a"])(Object(k["a"])({},c.user),{},{date:c.date})},null,8,["user"]),Object(o["g"])("p",Je,[Object(o["g"])("span",null," @"+Object(o["C"])(c.replyingTo),1),Object(o["h"])(" "+Object(o["C"])(c.content),1)])]),Object(o["g"])("div",Ke,[Object(o["i"])(i,{count:c.score,type:"replyCount",replyId:c.id,id:n.commentId},null,8,["count","replyId","id"]),Object(o["g"])("div",Ye,[c.user.username!==n.currentUser.username?(Object(o["s"])(),Object(o["d"])(u,{key:0,variant:"secondary",class:"button__mobile",reply:"",onClick:function(e){return a.handleReplyClick(c.id,c.user.username)}},{default:Object(o["F"])((function(){return[He]})),_:2},1032,["onClick"])):Object(o["e"])("",!0),c.user.username===n.currentUser.username?(Object(o["s"])(),Object(o["f"])("div",Xe,[Object(o["i"])(u,{onClick:function(e){return a.handleDeleteClick(c.id)},variant:"secondary",class:"button__mobile",deleteIcon:""},{default:Object(o["F"])((function(){return[Ze]})),_:2},1032,["onClick"]),Object(o["i"])(u,{variant:"secondary",class:"button__mobile","edit-btn":"",editIcon:"",onClick:function(t){return e.editReply=c.id}},{default:Object(o["F"])((function(){return[Ge]})),_:2},1032,["onClick"])])):Object(o["e"])("",!0)])]),Object(o["g"])("div",Qe,[c.user.username!==n.currentUser.username?(Object(o["s"])(),Object(o["d"])(u,{key:0,variant:"secondary",class:"button__desktop",reply:"",onClick:function(e){return a.handleReplyClick(c.id,c.user.username)}},{default:Object(o["F"])((function(){return[We]})),_:2},1032,["onClick"])):Object(o["e"])("",!0),c.user.username===n.currentUser.username?(Object(o["s"])(),Object(o["f"])("div",et,[Object(o["i"])(u,{variant:"secondary",class:"button__desktop delete-btn",deleteIcon:"",onClick:function(e){return a.handleDeleteClick(c.id)}},{default:Object(o["F"])((function(){return[tt]})),_:2},1032,["onClick"]),Object(o["i"])(u,{variant:"secondary",class:"button__desktop","edit-btn":"",editIcon:"",onClick:function(t){return e.editReply=c.id}},{default:Object(o["F"])((function(){return[nt]})),_:2},1032,["onClick"])])):Object(o["e"])("",!0)])]),e.editReply===c.id?(Object(o["s"])(),Object(o["f"])("div",ct,[Object(o["i"])(l,{onSendReplyMessage:function(e){return a.editReplyMessage(e,c.id)},btnType:e.update,onClose:a.closeReply},null,8,["onSendReplyMessage","btnType","onClose"])])):Object(o["e"])("",!0),e.replyTo===c.id?(Object(o["s"])(),Object(o["f"])("div",rt,[Object(o["i"])(l,{onSendReplyMessage:t[0]||(t[0]=function(e){return a.sendReplyMessage(e)}),btnType:"Reply",btnLoading:a.btnLoading,onClose:a.closeReply},null,8,["btnLoading","onClose"])])):Object(o["e"])("",!0),Object(o["i"])(d,{show:e.showDelModal,onCancel:t[1]||(t[1]=function(e){return a.closeDeleteModal()}),onRemove:a.deleteReply},null,8,["show","onRemove"])])})),128)}var at=n("2930"),st=n.n(at),it=function(e){return Object(o["v"])("data-v-78fe97a2"),e=e(),Object(o["t"])(),e},ut={class:"reply"},lt={class:"reply__content"},dt={class:"reply__content-image"},pt=["src"],bt=it((function(){return Object(o["g"])("img",{src:st.a,alt:""},null,-1)})),ft=[bt];function mt(e,t,n,c,r,a){var s=Object(o["A"])("c-comment"),i=Object(o["A"])("c-button");return Object(o["s"])(),Object(o["f"])("div",ut,[Object(o["g"])("div",lt,[Object(o["g"])("div",dt,[Object(o["g"])("img",{src:e.currentUser.image,alt:""},null,8,pt)]),Object(o["i"])(s,{class:"comment-component",modelValue:e.content,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.content=t})},null,8,["modelValue"]),Object(o["g"])("div",{class:"image-btn",onClick:t[1]||(t[1]=function(){return a.closeReply&&a.closeReply.apply(a,arguments)})},ft),Object(o["i"])(i,{onPress:a.sendReply,class:"btn",type:"button",loading:n.btnLoading},{default:Object(o["F"])((function(){return[Object(o["h"])(Object(o["C"])(n.btnType),1)]})),_:1},8,["onPress","loading"])])])}var Ot={components:{CButton:J,CComment:G},props:{btnType:{type:String,default:"SEND"},btnLoading:{type:Boolean,default:!1}},computed:Object(k["a"])({},Object(R["c"])({currentUser:"getCurrentUser"})),data:function(){return{content:""}},methods:{sendReply:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$emit("sendReplyMessage",e.content);case 1:case"end":return t.stop()}}),t)})))()},closeReply:function(){this.$emit("close")}}};n("7c72");const jt=u()(Ot,[["render",mt],["__scopeId","data-v-78fe97a2"]]);var yt=jt,gt=function(e){return Object(o["v"])("data-v-423db3a6"),e=e(),Object(o["t"])(),e},vt={key:0,class:"modal"},ht={class:"modal__content"},_t=gt((function(){return Object(o["g"])("p",{class:"title"},"Delete Comment",-1)})),Ct=gt((function(){return Object(o["g"])("p",{class:"description"}," Are you sure you want to delete this comment? This will remove the comment and can't be undone ",-1)})),kt={class:"btns--wrapper"};function Rt(e,t,n,c,r,a){return n.show?(Object(o["s"])(),Object(o["f"])("div",vt,[Object(o["g"])("div",ht,[_t,Ct,Object(o["g"])("div",kt,[Object(o["g"])("button",{class:"cancel--btn",onClick:t[0]||(t[0]=function(){return a.handleCancel&&a.handleCancel.apply(a,arguments)})},"NO, CANCEL"),Object(o["g"])("button",{class:"delete--btn",onClick:t[1]||(t[1]=function(){return a.handleRemove&&a.handleRemove.apply(a,arguments)})},"YES, DELETE")])])])):Object(o["e"])("",!0)}var wt={name:"modal",props:{show:{type:Boolean,required:!0}},data:function(){return{showModal:!1}},computed:{handleCancel:function(){return this.$emit("cancel")},handleRemove:function(){return this.$emit("remove")}},methods:{}};n("4072");const Mt=u()(wt,[["render",Rt],["__scopeId","data-v-423db3a6"]]);var xt=Mt,It={components:{Profile:Te,Counter:Ne,CButton:J,CReplyMessage:yt,CModal:xt},props:{replies:{type:Array},currentUser:{type:Object},commentId:{type:String}},data:function(){return{replyTo:!1,showDelModal:!1,editReply:!1,replyingTo:"",replyId:"",reply:"Reply",update:"UPDATE"}},computed:{btnLoading:function(){return this.$store.state.btnLoading}},methods:{handleReplyClick:function(e,t){this.replyTo=e,this.replyingTo=t},handleDeleteClick:function(e){this.showDelModal=!0,this.replyId=e},closeDeleteModal:function(){this.showDelModal=!this.showDelModal},closeReply:function(){this.replyTo=!this.replyTo,this.editReply=!this.editReply},editReplyMessage:function(e,t){this.$store.dispatch("editReplyAction",{commentId:this.commentId,replyId:t,content:e}),e="",this.editReply=!1},sendReplyMessage:function(e){var t=this.currentUser,n=t.image,c=t.username;""!==e?this.$store.dispatch("pushReplyAction",{id:this.commentId,reply:{id:Math.random().toString(36).substr(2,9),content:e,date:Date.now(),replyingTo:this.replyingTo,score:0,user:{image:n,username:c}}}):window.alert("Please enter a reply"),e="",this.replyTo=!1},deleteReply:function(){var e=this.commentId,t=this.replyId;this.$store.dispatch("deleteReplyAction",{commentId:e,replyId:t}),this.closeDeleteModal()}}};n("bf59");const At=u()(It,[["render",ot],["__scopeId","data-v-26a24a8e"]]);var Ut=At,St={components:{Profile:Te,Counter:Ne,CButton:J,CReplies:Ut,CReplyMessage:yt,Modal:xt},data:function(){return{replyTo:!1,editMsg:!1,delMsg:!1,currentId:"",toUpdate:!1,update:"UPDATE",Reply:"Reply",btnLoading:!1}},mounted:function(){this.$store.dispatch("getCommentsAction"),this.$store.dispatch("getCurrentUserAction")},computed:{comments:function(){return this.$store.getters.getComments},currentUser:function(){return this.$store.getters.getCurrentUser},loading:function(){return this.$store.state.loading}},methods:Object(k["a"])(Object(k["a"])({},Object(R["b"])({deleteCommentAction:"deleteCommentAction",editCommentAction:"editCommentAction"})),{},{closeDeleteModal:function(){this.delMsg=!this.delMsg},closeReply:function(){this.replyTo=!this.replyTo,this.editMsg=!this.editMsg},deleteMessage:function(){var e=this.currentId;this.deleteCommentAction(e),this.closeDeleteModal()},openDelModal:function(e){this.currentId=e,this.delMsg=!0},sendReplyMessage:function(e,t){var n=this.comments.find((function(e){return e.id===t})),c=n.user.username,r=this.currentUser,o=r.image,a=r.username;""!==e?this.$store.dispatch("pushReplyAction",{id:t,reply:{id:Math.random().toString(36).substr(2,9),content:e,date:Date.now(),replyingTo:c,score:0,user:{image:o,username:a}}}):window.alert("Please enter a message"),e="",this.replyTo=!1},editMessage:function(e,t){var n=this;return Object(C["a"])(regeneratorRuntime.mark((function c(){return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return c.next=2,n.editCommentAction({id:t,content:e});case 2:n.editMsg=!1;case 3:case"end":return c.stop()}}),c)})))()}})};n("8a0b");const Tt=u()(St,[["render",ve],["__scopeId","data-v-0445a1dc"]]);var Dt=Tt;n("15cd");var Et={components:{CReply:ee,CMessageBoard:Dt}};n("83cb");const Lt=u()(Et,[["render",j],["__scopeId","data-v-54699b22"]]);var Pt=Lt,$t=[{path:"/",name:"Home",component:Pt}],Ft=Object(b["a"])({history:Object(b["b"])("/"),routes:$t}),Bt=Ft,Vt=function(e){return e.comments},Nt=function(e){return e.currentUser},zt=(n("159b"),n("4de4"),n("d81d"),function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(t){var n,c,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.state,e.next=3,x.collection("comments").orderBy("date","asc");case 3:return c=e.sent,e.next=6,c.get();case 6:return r=e.sent,e.next=9,r.forEach((function(e){if(!n.comments.some((function(t){return t.id===e.id}))){var t={id:e.data().id,content:e.data().content,user:e.data().user,createdAt:e.data().createdAt,score:e.data().score,replies:e.data().replies,date:e.data().date};n.comments.push(t)}}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),qt=function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(t,n){var c,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return c=t.state,e.next=3,x.collection("comments").doc(n);case 3:return r=e.sent,e.next=6,r.delete();case 6:c.comments=c.comments.filter((function(e){return e.id!==n}));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Jt=function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(t,n){var c,r,o,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return c=t.state,r=n.commentId,o=n.replyId,e.next=4,x.collection("comments").doc(r);case 4:return a=e.sent,s=c.comments.find((function(e){return e.id===r})).replies.find((function(e){return e.id===o})),e.next=8,a.update({replies:w["a"].firestore.FieldValue.arrayRemove(s)}).then((function(){c.comments=c.comments.map((function(e){return e.id===r&&(e.replies=e.replies.filter((function(e){return e.id!==o}))),e}))})).catch((function(e){console.log("Error occured",e)}));case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Kt=function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(t,n){var c,r,o,a,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return c=t.state,r=n.id,o=n.score,a=n.type,s=n.replyId,e.next=4,x.collection("comments").doc(r);case 4:if(i=e.sent,"commentCount"!==a){e.next=10;break}return e.next=8,i.update({score:o}).then((function(){c.comments=c.comments.map((function(e){return e.id===r&&(e.score=o),e}))})).catch((function(e){console.log("error occured",e)}));case 8:e.next=13;break;case 10:if("replyCount"!==a){e.next=13;break}return e.next=13,i.update({replies:c.comments.find((function(e){return e.id===r})).replies.map((function(e){return e.id===s&&(e.score=o),e}))}).catch((function(e){console.log("error occured",e)}));case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Yt=function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(t,n){var c,r,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return c=t.state,r=n.id,o=n.content,e.next=4,x.collection("comments").doc(r);case 4:return a=e.sent,e.next=7,a.update({content:o}).catch((function(e){console.error("Error updating document: ",e)}));case 7:c.comments=c.comments.map((function(e){return e.id===r?Object(k["a"])(Object(k["a"])({},e),{},{content:o}):e}));case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Ht=function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(t,n){var c,r,o,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return c=t.state,r=n.commentId,o=n.replyId,a=n.content,e.next=4,x.collection("comments").doc(r);case 4:return s=e.sent,e.next=7,s.update({replies:c.comments.find((function(e){return e.id===r})).replies.map((function(e){return e.id===o&&(e.content=a),e}))}).then((function(){c.comments=c.comments.map((function(e){return e.id===r&&(e.replies=e.replies.map((function(e){return e.id===o&&(e.content=a),e}))),e}))})).catch((function(e){console.log("Error occured",e)}));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Xt=function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(t,n){var c,r,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return c=t.state,r=n.id,o=n.reply,c.btnLoading=!0,e.next=5,x.collection("comments").doc(r);case 5:return a=e.sent,e.next=8,a.update({replies:w["a"].firestore.FieldValue.arrayUnion(o)}).then((function(){c.comments=c.comments.map((function(e){return e.id===r&&e.replies.push(o),e})),c.btnLoading=!1})).catch((function(e){console.log("error occured",e)}));case 8:c.btnLoading=!1;case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Zt=function(){var e=Object(C["a"])(regeneratorRuntime.mark((function e(t){var n,c,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.state,n.loading=!0,e.next=4,x.collection("currentUser");case 4:return c=e.sent,e.next=7,c.get();case 7:r=e.sent,n.currentUser=r.docs[0].data(),n.loading=!1;case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Gt={SET_COMMENTS:function(e,t){e.comments=t},SET_CURRENT_USER:function(e,t){e.currentUser=t}},Qt={comments:[],currentUser:{},postLoaded:null,loading:!1,btnLoading:!1},Wt=Object(R["a"])({state:Qt,getters:c,actions:r,mutations:Gt,plugins:[]});Object(o["c"])(p).use(Wt).use(Bt).mount("#app")},"5ac1":function(e,t,n){},"77ea":function(e,t,n){e.exports=n.p+"img/icon-plus.2736214f.svg"},"7b82":function(e,t,n){e.exports=n.p+"img/icon-reply.cb6fbfc8.svg"},"7c72":function(e,t,n){"use strict";n("20a7")},"7ee0":function(e,t,n){"use strict";n("c2de")},"83cb":function(e,t,n){"use strict";n("5ac1")},"86d7":function(e,t,n){},"8a0b":function(e,t,n){"use strict";n("2ea2")},"91ef":function(e,t,n){},a055:function(e,t,n){"use strict";n("06f3")},b0f5:function(e,t,n){"use strict";n("fd6b")},b398:function(e,t,n){e.exports=n.p+"img/icon-minus.c420fc92.svg"},b56f:function(e,t,n){},bf59:function(e,t,n){"use strict";n("b56f")},c2de:function(e,t,n){},cf23:function(e,t,n){},d0db:function(e,t,n){"use strict";n("d5ba")},d5ba:function(e,t,n){},e8be:function(e,t,n){},eaaf:function(e,t,n){e.exports=n.p+"img/icon-edit.88e96924.svg"},fbde:function(e,t,n){"use strict";n("e8be")},fd6b:function(e,t,n){}});
//# sourceMappingURL=app.40e33214.js.map