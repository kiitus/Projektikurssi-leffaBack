(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{28:function(e,t,n){e.exports=n(55)},55:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(25),i=n.n(l),o=n(1),c=n(9),u=n(2),s=function(e){var t=e.review;return r.a.createElement("div",{style:{margin:20}},r.a.createElement("div",null,r.a.createElement("b",null,"Rating:")," ",t.rating),r.a.createElement("div",null,r.a.createElement("b",null,"Review:")," ",t.review),r.a.createElement("div",null,r.a.createElement("b",null,"Author:")," ",t.user," ",t.date))},m=function(e){var t=e.movie,n=e.selectToShow,l=e.toShow,i=Object(a.useState)(null),c=Object(o.a)(i,2),u=c[0],m=c[1],v=function(e){n(e);var a=t.reviews.reduce((function(e,t){return e+t.rating}),0)/t.reviews.length;a=a.toFixed(1),m(a)},g={clear:"both",cursor:"pointer"};return l!==t.Title?r.a.createElement("h3",{onClick:function(){return v(t.Title)},style:g},t.Title," ",t.Year):l===t.Title?r.a.createElement("div",null,r.a.createElement("h3",{onClick:function(){return v(t.Title)},style:g},t.Title," ",t.Year),r.a.createElement("div",{style:{display:"inline-block",float:"left",marginRight:100}},r.a.createElement("img",{src:t.Poster,alt:"Poster"})),r.a.createElement("div",{style:{marginLeft:100,textAlignVertical:"top"}},r.a.createElement("h2",null," IMDB-rating:",t.imdb),u?r.a.createElement("h2",null,"Average-rating:",u):null,t.reviews.map((function(e,t){return r.a.createElement(s,{key:t,review:e})})))):void 0},v=function(e){var t=e.movies,n=Object(a.useState)(null),l=Object(o.a)(n,2),i=l[0],c=l[1],u=function(e){c(e===i?null:e)};return r.a.createElement("div",{style:{margin:20}},r.a.createElement("h2",null,"Movies"),r.a.createElement("div",{style:{marginLeft:20,marginTop:10}},t.map((function(e,t){return r.a.createElement(m,{key:t,movie:e,toShow:i,selectToShow:u})}))))},g=n(26),f=n.n(g),d=function(e){var t=e.movie,n=e.getReview,l=Object(a.useState)(5),i=Object(o.a)(l,2),c=i[0],u=i[1],s=Object(a.useState)(""),m=Object(o.a)(s,2),v=m[0],g=m[1],d=Object(a.useState)(!1),E=Object(o.a)(d,2),p=E[0],h=E[1];return null===t?null:r.a.createElement("div",null,r.a.createElement("div",{style:{display:"inline-block",float:"left",marginRight:110,marginLeft:50}},r.a.createElement("h2",null," ",t.Title," ",t.Year," "),r.a.createElement("h3",null," IMDB-rating:",t.imdbRating),r.a.createElement("p",null,r.a.createElement("img",{src:t.Poster,alt:"Poster"}))),r.a.createElement("form",{style:{overflowX:"auto"},onSubmit:function(e){if(e.preventDefault(),v.length>3){h(!0);var a={Title:t.Title,Year:t.Year,Poster:t.Poster,imdb:t.imdbRating,reviews:[]};console.log(a.imdb),a.reviews.push({rating:c,review:v}),console.log(a),n(a),u(5),g(""),setTimeout((function(){h(!1)}),1e3)}}},r.a.createElement("h2",null,"Review movie"),"Rating ",r.a.createElement(f.a,{required:!0,min:0,max:10,step:.1,value:c,name:"rating",onChange:u}),r.a.createElement("p",null," Review"),r.a.createElement("p",null,r.a.createElement("textarea",{value:v,name:"review",rows:23,cols:90,onChange:function(e){var t=e.target;return g(t.value)}})),r.a.createElement("button",{type:"submit",disabled:p},"Save review")))},E=function(e){var t=e.getLoginInformation,n=Object(a.useState)(""),l=Object(o.a)(n,2),i=l[0],c=l[1],u=Object(a.useState)(""),s=Object(o.a)(u,2),m=s[0],v=s[1];return r.a.createElement("div",{style:{margin:22}},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(i,m),c(""),v("")}},r.a.createElement("div",null,"username",r.a.createElement("input",{type:"text",value:i,name:"Username",onChange:function(e){var t=e.target;return c(t.value)}})),r.a.createElement("div",null,"password",r.a.createElement("input",{type:"password",value:m,name:"Password",onChange:function(e){var t=e.target;return v(t.value)}})),r.a.createElement("button",{type:"submit"},"login")))},p={margin:20},h=function(e){var t=e.amount;return r.a.createElement("div",{style:p},r.a.createElement("h2",null,"Welcome to use THE REVIEWER"),r.a.createElement("p",null,"This is an app for reading and writing reviews for movies. You can read reviews without signing in, but to write a review you must make an account for the site. You will see the reviews by cliking the title of the movie"),r.a.createElement("p",null,"There are ",t," movies reviewed in the site"),r.a.createElement("p",null,"The site has been made using React, MongoDB and node.js."))},w=function(e){var t=e.getSignUpIformation,n=Object(a.useState)(""),l=Object(o.a)(n,2),i=l[0],c=l[1],s=Object(a.useState)(""),m=Object(o.a)(s,2),v=m[0],g=m[1],f=Object(a.useState)(""),d=Object(o.a)(f,2),E=d[0],p=d[1];Object(u.f)();return r.a.createElement("div",{style:{margin:22}},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log(t(i,v,E)),c(""),g(""),p("")}},r.a.createElement("div",null,"username",r.a.createElement("input",{type:"text",value:i,name:"Username",onChange:function(e){var t=e.target;return c(t.value)}})),r.a.createElement("div",null,"password",r.a.createElement("input",{type:"password",value:v,name:"Password",onChange:function(e){var t=e.target;return g(t.value)}})),r.a.createElement("div",null,"password",r.a.createElement("input",{type:"password",value:E,name:"Password2",onChange:function(e){var t=e.target;return p(t.value)}})),r.a.createElement("button",{type:"submit"},"Sign up")))},b=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{style:{color:"red",margin:10}},t)},y=function(e){var t=e.getSearchedTitle,n=Object(a.useState)(""),l=Object(o.a)(n,2),i=l[0],c=l[1];return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(i),c("")}},r.a.createElement("h2",null,"Search movie to review"),"Title ",r.a.createElement("input",{type:"text",value:i,name:"search",onChange:function(e){var t=e.target;return c(t.value)}}),r.a.createElement("button",{type:"submit"},"Search movie")))},O=n(7),S=n.n(O),j=function(){return S.a.get("/api/movies").then((function(e){return e.data}))},T=function(e){return S.a.get("".concat("/api/movies","/").concat(e)).then((function(e){return e.data}))},k=function(e){var t="https://www.omdbapi.com/?t=".concat(e,"&apikey=d20392f7");return S.a.get(t).then((function(e){return e}))},I=function(e){return S.a.post("/api/login",e).then((function(e){return e.data}))},R=function(e){return S.a.post("/api/users",e).then((function(e){return e.data}))},C=null,x=function(e){C="bearer ".concat(e)},P=function(e){var t={headers:{Authorization:C}};return S.a.post("/api/movies",e,t).then((function(e){return e.data}))},A=function(e,t){var n={headers:{Authorization:C}};return S.a.put("".concat("/api/movies","/").concat(e),t,n).then((function(e){return e.data}))},Y=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],l=t[1],i=Object(a.useState)(null),s=Object(o.a)(i,2),m=s[0],g=s[1],f=Object(a.useState)(null),p=Object(o.a)(f,2),O=p[0],S=p[1],C=Object(a.useState)(null),Y=Object(o.a)(C,2),L=Y[0],U=Y[1],B=Object(a.useState)([]),D=Object(o.a)(B,2),_=D[0],N=D[1],J=function(e,t){return e.Title>t.Title?1:t.Title>e.Title?-1:0};Object(a.useEffect)((function(){j().then((function(e){e.sort(J),l(e)}))}),[]),Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedBlogAppUser");if(e){var t=JSON.parse(e);S(t),x(t.token),t&&T(t.id).then((function(e){null!==e&&(e.movies.sort(J),N(e.movies))}))}}),[]);var M=function(e,t){I({username:e,password:t}).then((function(e){window.localStorage.setItem("loggedBlogAppUser",JSON.stringify(e)),x(e.token),T(e.id).then((function(e){e.movies.sort(J),N(e.movies)})),S(e)})).catch((function(e){U("".concat(e.response.data.error)),setTimeout((function(){U(null)}),6e3)}))},V={padding:15};return r.a.createElement("div",{style:{margin:50,overflowX:"auto"}},r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(c.b,{style:V,to:"/"},"home"),r.a.createElement(c.b,{style:V,to:"/reviews"},"all reviews"),r.a.createElement(c.b,{style:V,to:"/your_reviews"},"movies reviewed by you"),r.a.createElement(c.b,{style:V,to:"/make_review"},"make review"),O?null:r.a.createElement(c.b,{style:V,to:"/sign_up"},"Sign up"),O?r.a.createElement("em",null,O.username," logged in ",r.a.createElement("button",{onClick:function(){window.localStorage.removeItem("loggedBlogAppUser"),S(null),x(null),N([])}}," Logout")):r.a.createElement("span",null,"You are not logged in")),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/sign_up"},r.a.createElement(b,{message:L}),r.a.createElement(w,{getSignUpIformation:function(e,t,n){if(t!==n)return U("Passwords didn't match"),setTimeout((function(){U(null)}),6e3),!1;R({userName:e,password:t}).then((function(e){M(e.userName,t),console.log("Oikein, pit\xe4isi tulla true"),U('Account created. Redirect doesn\'t work yet,please click "make review"'),setTimeout((function(){U(null)}),16e3)})).catch((function(e){return console.log(e.response),U(e.response.data.message),setTimeout((function(){U(null)}),6e3),console.log("V\xe4\xe4rin, pit\xe4isi tulla false"),!1}))}})),r.a.createElement(u.a,{path:"/reviews"},r.a.createElement(v,{movies:n})),r.a.createElement(u.a,{path:"/your_reviews"},O?r.a.createElement(v,{movies:_}):r.a.createElement("div",null,r.a.createElement(b,{message:L}),r.a.createElement(E,{getLoginInformation:M}))),r.a.createElement(u.a,{path:"/make_review"},O?r.a.createElement("div",null,r.a.createElement(y,{getSearchedTitle:function(e){k(e).then((function(e){"False"!==e.data.Response?g(e.data):g(null)})).catch((function(e){console.log(e)}))}}),r.a.createElement(d,{movie:m,getReview:function(e){var t=_.findIndex((function(t){return t.Title===e.Title})),a=n.findIndex((function(t){return t.Title===e.Title})),r=-1;-1!==t&&(r=_[t].reviews.findIndex((function(e){return e.user===O.username})),console.log("N\xe4m\xe4 l\xf6ytyy arvostelusta ".concat(_[t].reviews[r])),window.confirm("You have already reviewed this movie. Update the review?")&&A(_[t].reviews[r].id,e.reviews[0]).then((function(e){var i=_.concat(),o=n.concat();i[t].reviews[r]=e,o[a].reviews[r]=e,N(i),l(o)})).catch((function(e){console.log(e.response.data)}))),-1===t&&P(e).then((function(t){if(-1===a){e.reviews.length=0,e.reviews.push(t);var r=n.concat(e);r.sort(J),l(r)}else{var i=n.concat();i[a].reviews.push(t),l(i)}var o;(o=-1===a?_.concat(e):_.concat(n[a])).sort(J),N(o)})),g(null)}})):r.a.createElement("div",null,r.a.createElement(b,{message:L}),r.a.createElement(E,{getLoginInformation:M}))),r.a.createElement(u.a,{path:"/login"},r.a.createElement(E,{getLoginInformation:M})),r.a.createElement(u.a,{path:"/"},r.a.createElement(h,{amount:n.length}))),r.a.createElement("footer",{style:{clear:"both",marginTop:40,bottom:0,padding:20,backgroundColor:"grey"}},r.a.createElement("i",null,"Teemu Hallinen, Ohjelmistosuunnittelu t\xe4ydennyskoulutus 2019-2020"))))};i.a.render(r.a.createElement(Y,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.ed164f8f.chunk.js.map