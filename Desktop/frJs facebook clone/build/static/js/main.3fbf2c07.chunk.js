(this.webpackJsonpfacebook=this.webpackJsonpfacebook||[]).push([[0],{65:function(e,a,t){e.exports=t(97)},70:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){},89:function(e,a,t){},90:function(e,a,t){},91:function(e,a,t){},92:function(e,a,t){},93:function(e,a,t){},94:function(e,a,t){},95:function(e,a,t){},96:function(e,a,t){},97:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(18),l=t.n(r),o=(t(70),t(11)),i=(t(71),t(72),t(111)),s=(t(73),t(41)),m=t.n(s),d=t(42),u=t.n(d),p=t(43),_=t.n(p),f=Object(n.createContext)(),E=function(e){var a=e.reducer,t=e.initialState,r=e.children;return c.a.createElement(f.Provider,{value:Object(n.useReducer)(a,t)},r)},g=function(){return Object(n.useContext)(f)},h=t(22),v=t.n(h),b=v.a.initializeApp({apiKey:"AIzaSyC9jinydTSjqlht1kixyADS41Fs8tkvuwI",authDomain:"facebook-bysavio.firebaseapp.com",databaseURL:"https://facebook-bysavio.firebaseio.com",projectId:"facebook-bysavio",storageBucket:"facebook-bysavio.appspot.com",messagingSenderId:"954178709829",appId:"1:954178709829:web:e52b45a5cb4b6e79e6362c",measurementId:"G-J7LYZFE858"}).firestore(),k=v.a.auth(),S=new v.a.auth.GoogleAuthProvider,w=b;var y=function(){var e=g(),a=Object(o.a)(e,2),t=a[0].user,r=(a[1],Object(n.useState)("")),l=Object(o.a)(r,2),s=l[0],d=l[1],p=Object(n.useState)(""),f=Object(o.a)(p,2),E=f[0],h=f[1];return c.a.createElement("div",{className:"messageSender"},c.a.createElement("div",{class:"messageSender__top"},c.a.createElement(i.a,{src:t.photoURL}),c.a.createElement("form",null,c.a.createElement("input",{value:s,onChange:function(e){return d(e.target.value)},placeholder:"What's on your mind, ".concat(t.displayName,"?")}),c.a.createElement("input",{placeholder:"Image Url (optional) ",value:E,onChange:function(e){return h(e.target.value)}}),c.a.createElement("button",{type:"submit",onClick:function(e){e.preventDefault(),w.collection("posts").add({message:s,timestamp:v.a.firestore.FieldValue.serverTimestamp(),profilePic:t.photoURL,username:t.displayName,image:E}),d(""),h("")}},"Hidden Submit"))),c.a.createElement("div",{class:"messageSender__bottom"},c.a.createElement("div",{class:"messageSender__option"},c.a.createElement(m.a,{style:{color:"red"}}),c.a.createElement("h3",null,"Live Video")),c.a.createElement("div",{class:"messageSender__option"},c.a.createElement(u.a,{style:{color:"green"}}),c.a.createElement("h3",null,"Photo/Video")),c.a.createElement("div",{class:"messageSender__option"},c.a.createElement(_.a,{style:{color:"orange"}}),c.a.createElement("h3",null,"Feeling/Activity"))))},F=(t(89),t(44)),j=t.n(F),N=t(45),I=t.n(N),C=t(47),O=t.n(C),A=t(46),P=t.n(A),R=t(20),U=t.n(R);var L=function(e){var a=e.profilePic,t=e.image,n=e.username,r=e.timestamp,l=e.message;return c.a.createElement("div",{className:"post"},c.a.createElement("div",{class:"post__top"},c.a.createElement(i.a,{src:a,className:"post__avatar"}),c.a.createElement("div",{class:"post__topInfo"},c.a.createElement("h3",null,n),c.a.createElement("p",null,new Date(null===r||void 0===r?void 0:r.toDate()).toUTCString()))),c.a.createElement("div",{class:"post__bottom"},c.a.createElement("p",null,l)),c.a.createElement("div",{class:"post__image"},c.a.createElement("img",{src:t,alt:""})),c.a.createElement("div",{class:"post__options"},c.a.createElement("div",{class:"post__option"},c.a.createElement(j.a,null),c.a.createElement("p",null,"Like")),c.a.createElement("div",{class:"post__option"},c.a.createElement(I.a,null),c.a.createElement("p",null,"Comment")),c.a.createElement("div",{class:"post__option"},c.a.createElement(P.a,null),c.a.createElement("p",null,"Share")),c.a.createElement("div",{class:"post__option"},c.a.createElement(O.a,null),c.a.createElement(U.a,null))))};t(90);var x=function(e){var a=e.image,t=e.profileSrc,n=e.title;return c.a.createElement("div",{style:{backgroundImage:"url(".concat(a,")")},className:"story"},c.a.createElement(i.a,{src:t,className:"story__avatar"}),c.a.createElement("h4",null,n))};t(91);var X=function(){return c.a.createElement("div",{className:"storyReel"},c.a.createElement(x,{image:"https://instagram.fcok1-1.fna.fbcdn.net/v/t51.2885-15/e35/117227248_586850415533303_3473043354800851414_n.jpg?_nc_ht=instagram.fcok1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=qiw52tV7Xl4AX8dXhhY&_nc_tp=18&oh=fea18169003547d26a698d33200e1ed0&oe=5F84474B",profileSrc:"https://avatars.githubusercontent.com/saviomartin",title:"Savio Martin"}),c.a.createElement(x,{image:"https://instagram.fcok1-1.fna.fbcdn.net/v/t51.2885-15/e35/121000593_110923880688458_1897834268424628982_n.jpg?_nc_ht=instagram.fcok1-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=6ZKYQ8RaVcQAX9FUJVm&_nc_tp=18&oh=18d55d74d001e5eceaeb1d1fbad6a2ab&oe=5F83FCCA",profileSrc:"https://instagram.fcok1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/118091999_304127827545656_7867854293078204270_n.jpg?_nc_ht=instagram.fcok1-1.fna.fbcdn.net&_nc_ohc=Ew--seFc_pcAX_8WLGB&oh=b30ce23d49578d85ce5ff728a195f6a6&oe=5FAA29C3",title:"Realme India"}),c.a.createElement(x,{image:"https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/How-Often-to-Post-to-Facebook-Stories.png",profileSrc:"https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4",title:"Sonny Sangha"}),c.a.createElement(x,{image:"https://instagram.fcok1-1.fna.fbcdn.net/v/t51.12442-15/e35/p1080x1080/95626377_698632864224608_4690720343234713657_n.jpg?_nc_ht=instagram.fcok1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=eHSyhi2GhCUAX9zkkLs&_nc_tp=19&oh=4ffa6d4fb3d51e5f6049540e615b17b4&oe=5F83DF48",profileSrc:"https://instagram.fcok1-1.fna.fbcdn.net/v/t51.2885-19/10729318_654650964633655_619168277_a.jpg?_nc_ht=instagram.fcok1-1.fna.fbcdn.net&_nc_ohc=H2rUtmI3UIwAX8GvREE&oh=b9cd55ce58cdb2876c745013a8efced5&oe=5FACEE75",title:"Microsoft"}),c.a.createElement(x,{image:"https://instagram.fcok1-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/121060575_340014553945432_8028668953703766441_n.jpg?_nc_ht=instagram.fcok1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=3WIclsEgKLcAX8ciTmK&_nc_tp=19&oh=b61f9daad4439b93983f2b06cb26b515&oe=5F84610B",profileSrc:"https://instagram.fcok1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/102429948_1095179260864915_7316874323564026733_n.jpg?_nc_ht=instagram.fcok1-1.fna.fbcdn.net&_nc_ohc=sEioj22PzHoAX_8PXTJ&oh=21a681263759d02d0adeb7568e8c2f35&oe=5FAC8F25",title:"Sajon"}))};var z=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){w.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){return r(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),c.a.createElement("div",{className:"feed"},c.a.createElement(X,null),c.a.createElement(y,null),t.map((function(e){return c.a.createElement(L,{key:e.data.id,profilePic:e.data.profilePic,message:e.data.message,timestamp:e.data.timestamp,username:e.data.username,image:e.data.image})})))},T=(t(92),t(48)),V=t.n(T),B=t(49),D=t.n(B),W=t(50),G=t.n(W),M=t(51),H=t.n(M),J=t(30),K=t.n(J),Y=t(52),q=t.n(Y),Q=t(109),Z=t(53),$=t.n(Z),ee=t(54),ae=t.n(ee),te=t(55),ne=t.n(te);var ce=function(){var e=g(),a=Object(o.a)(e,2),t=a[0].user;return a[1],c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"header__left"},c.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png",alt:""}),c.a.createElement("div",{className:"header__input"},c.a.createElement(V.a,null),c.a.createElement("input",{type:"text",placeholder:"Search Facebook"}))),c.a.createElement("div",{className:"header__center"},c.a.createElement("div",{className:"header__option header__option--active"},c.a.createElement(D.a,{fontSize:"large"})),c.a.createElement("div",{className:"header__option"},c.a.createElement(G.a,{fontSize:"large"})),c.a.createElement("div",{className:"header__option"},c.a.createElement(H.a,{fontSize:"large"})),c.a.createElement("div",{className:"header__option"},c.a.createElement(K.a,{fontSize:"large"})),c.a.createElement("div",{className:"header__option"},c.a.createElement(q.a,{fontSize:"large"}))),c.a.createElement("div",{className:"header__right"},c.a.createElement("div",{class:"header__info"},c.a.createElement(i.a,{src:t.photoURL}),c.a.createElement("h4",null,t.displayName)),c.a.createElement(Q.a,null,c.a.createElement($.a,null)),c.a.createElement(Q.a,null,c.a.createElement(ae.a,null)),c.a.createElement(Q.a,null,c.a.createElement(ne.a,null)),c.a.createElement(Q.a,null,c.a.createElement(U.a,null))))},re=t(110),le=(t(93),t(32)),oe={SET_USER:"SET_USER"},ie=function(e,a){switch(console.log(oe),a.type){case oe.SET_USER:return Object(le.a)(Object(le.a)({},e),{},{user:a.user});default:return e}};var se=function(){var e=g(),a=Object(o.a)(e,2),t=(a[0],a[1]);return c.a.createElement("div",{className:"login"},c.a.createElement("div",{className:"login__logo"},c.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png",alt:""}),c.a.createElement("img",{src:"https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg",alt:""}),c.a.createElement(re.a,{type:"submit",onClick:function(){k.signInWithPopup(S).then((function(e){t({type:oe.SET_USER,user:e.user}),console.log(e.user)})).catch((function(e){return alert(e.message)}))}},"Sign In With Google")))};t(94),t(95);var me=function(e){var a=e.src,t=e.Icon,n=e.title;return c.a.createElement("div",{className:"sidebarRow"},a&&c.a.createElement(i.a,{src:a}),t&&c.a.createElement(t,null),c.a.createElement("h4",null,n))},de=t(56),ue=t.n(de),pe=t(57),_e=t.n(pe),fe=t(58),Ee=t.n(fe),ge=t(59),he=t.n(ge),ve=t(60),be=t.n(ve);var ke=function(){var e=g(),a=Object(o.a)(e,2),t=a[0].user;return a[1],c.a.createElement("div",{className:"sidebar"},c.a.createElement(me,{src:t.photoURL,title:t.displayName}),c.a.createElement(me,{Icon:ue.a,title:"COVID_19 Information Center"}),c.a.createElement(me,{Icon:_e.a,title:"Pages"}),c.a.createElement(me,{Icon:Ee.a,title:"Friends"}),c.a.createElement(me,{Icon:he.a,title:"Messenger"}),c.a.createElement(me,{Icon:K.a,title:"Marketplace"}),c.a.createElement(me,{Icon:be.a,title:"Videos"}),c.a.createElement(me,{Icon:U.a,title:"More"}))};t(96);var Se=function(){return c.a.createElement("div",{className:"widgets"},c.a.createElement("iframe",{src:"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCleverProgrammerr%2F&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId",title:"Clever Programmer Fb Page",width:"340",height:"100%",style:{border:"none",overflow:"hidden"},scrolling:"no",frameborder:"0",allowtransparency:"true",allow:"encrypted-media"}))};var we=function(){var e=g(),a=Object(o.a)(e,2),t=a[0].user;return a[1],c.a.createElement("div",{className:"app"},t?c.a.createElement(c.a.Fragment,null,c.a.createElement(ce,null),c.a.createElement("div",{className:"app__body"},c.a.createElement(ke,null),c.a.createElement(z,null),c.a.createElement(Se,null))):c.a.createElement(se,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,{initialState:{user:null},reducer:ie},c.a.createElement(we,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[65,1,2]]]);
//# sourceMappingURL=main.3fbf2c07.chunk.js.map