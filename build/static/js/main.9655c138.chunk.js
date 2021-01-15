(this["webpackJsonpleffaapp-frontend"]=this["webpackJsonpleffaapp-frontend"]||[]).push([[0],{34:function(e,t,a){e.exports=a(62)},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(31),o=a.n(l),i=a(6),c=a(15),u=a(7),s=function(e){var t=e.review;return r.a.createElement("div",{style:{margin:20}},r.a.createElement("div",null,r.a.createElement("b",null,"Rating:")," ",t.rating),r.a.createElement("div",null,r.a.createElement("b",null,"Review: ")," ",t.review),r.a.createElement("div",null,r.a.createElement("b",null,"Author:")," ",t.user,"  ",t.date))},m=function(e){var t=e.movie,a=e.selectToShow,n=e.toShow,l=e.average,o=function(e){var n=t.reviews.reduce((function(e,t){return e+t.rating}),0)/t.reviews.length;n=n.toFixed(1),a({title:e,average:n})},i={clear:"both",cursor:"pointer"},c={verticalAlign:"text-top"};return n!==t.Title?r.a.createElement("h3",{onClick:function(){return o(t.Title)},style:i},t.Title," ",t.Year):n===t.Title?r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{style:c},r.a.createElement("h3",{onClick:function(){return o(t.Title)},style:i},t.Title," ",t.Year),r.a.createElement("div",{style:{display:"inline-block",float:"left",marginRight:100}},r.a.createElement("img",{src:t.Poster,alt:"Poster"}))),r.a.createElement("td",{style:c},r.a.createElement("div",{style:{marginLeft:100,textAlignVertical:"top"}}),r.a.createElement("h2",null,"IMDB-rating:",t.imdb),r.a.createElement("h2",null,"Average-rating:",l),t.reviews.map((function(e,t){return r.a.createElement(s,{key:t,review:e})}))))))):void 0},v=function(e){var t=e.movies,a=Object(n.useState)(null),l=Object(i.a)(a,2),o=l[0],c=l[1],u=Object(n.useState)(null),s=Object(i.a)(u,2),v=s[0],d=s[1],E=function(e){e.title===o?c(null):(c(e.title),d(e.average))};return r.a.createElement("div",{style:{margin:20}},r.a.createElement("h2",null,"Movies"),r.a.createElement("div",{style:{marginLeft:20,marginTop:10}},t.map((function(e,t){return r.a.createElement(m,{key:t,movie:e,toShow:o,selectToShow:E,average:v})}))))},d=a(32),E=a.n(d),g=a(3),f=a(14),p=function(e){var t=e.movie,a=e.getReview,l=Object(n.useState)(5),o=Object(i.a)(l,2),c=o[0],u=o[1],s=Object(n.useState)(""),m=Object(i.a)(s,2),v=m[0],d=m[1],p=Object(n.useState)(!1),h=Object(i.a)(p,2),w=h[0],b=h[1];return null===t?null:r.a.createElement("div",null,r.a.createElement("h2",{style:{marginLeft:50}},t.Title," ",t.Year),r.a.createElement("div",{style:{display:"inline-block",float:"left",marginRight:110,marginLeft:50}},r.a.createElement("h3",null,"IMDB-rating:",t.imdbRating),r.a.createElement("p",null,r.a.createElement("img",{src:t.Poster,alt:"Poster"}))),r.a.createElement("h2",null,"Review movie"),r.a.createElement(g.a,{onSubmit:function(e){if(e.preventDefault(),v.length>3){b(!0);var n={Title:t.Title,Year:t.Year,Poster:t.Poster,imdb:t.imdbRating,reviews:[]};n.reviews.push({rating:c,review:v}),a(n),u(5),d(""),setTimeout((function(){b(!1)}),1e3)}}},r.a.createElement(g.a.Group,{controlId:"reviewTextarea"},r.a.createElement(g.a.Row,null,r.a.createElement(g.a.Label,null,"Rating"),r.a.createElement(E.a,{required:"true",min:0,max:10,step:.1,value:c,name:"rating",onChange:u})),r.a.createElement(g.a.Row,null,r.a.createElement(g.a.Label,null,"Write a review"),r.a.createElement(g.a.Control,{placeholder:"Write your review here ( min 4 letters)",as:"textarea",rows:"17",value:v,onChange:function(e){var t=e.target;return d(t.value)}}),r.a.createElement(f.a,{className:"float-right",variant:"primary",type:"submit",disabled:w},"Save review")))))},h=function(e){var t=e.getLoginInformation,a=Object(n.useState)(""),l=Object(i.a)(a,2),o=l[0],c=l[1],u=Object(n.useState)(""),s=Object(i.a)(u,2),m=s[0],v=s[1];return r.a.createElement("div",null,r.a.createElement(g.a,{style:{margin:22},onSubmit:function(e){e.preventDefault(),t(o,m),c(""),v("")}},r.a.createElement(g.a.Group,{controlId:"formBasicEmail"},r.a.createElement(g.a.Label,null,"Username:"),r.a.createElement(g.a.Control,{type:"text",placeholder:"Enter username",value:o,onChange:function(e){var t=e.target;return c(t.value)}})),r.a.createElement(g.a.Group,{controlId:"formBasicPassword"},r.a.createElement(g.a.Label,null,"Password:"),r.a.createElement(g.a.Control,{type:"password",placeholder:"Enter password",value:m,name:"Password",onChange:function(e){var t=e.target;return v(t.value)}})),r.a.createElement(f.a,{variant:"primary",type:"submit"},"Login")))},w={margin:20},b=function(e){var t=e.amount;return r.a.createElement("div",{style:w},r.a.createElement("h2",null,"Welcome to use THE REVIEWER"),r.a.createElement("p",null,"This is an app for reading and writing reviews for movies. You can read reviews without signing in, but to write a review you must make an account for the site. You will see the reviews by cliking the title of the movie"),r.a.createElement("p",null,"There are ",t," movies reviewed in the site"),r.a.createElement("p",null,r.a.createElement("b",null,"When you test the site, please write some sensible review")),r.a.createElement("p",null,"The site has been made using React, Axios, Json web token, Node.js (express) and MongoDB (mongoose)."),r.a.createElement("p",null,"Github repo can be found ",r.a.createElement("a",{href:"https://github.com/kiitus/Projektikurssi-leffaBack"},r.a.createElement("b",null,"here"))))},y=function(e){var t=e.getSignUpIformation,a=Object(n.useState)(""),l=Object(i.a)(a,2),o=l[0],c=l[1],u=Object(n.useState)(""),s=Object(i.a)(u,2),m=s[0],v=s[1],d=Object(n.useState)(""),E=Object(i.a)(d,2),p=E[0],h=E[1];return r.a.createElement("div",null,r.a.createElement(g.a,{style:{margin:22},onSubmit:function(e){e.preventDefault(),console.log(t(o,m,p)),c(""),v(""),h("")}},r.a.createElement(g.a.Group,{controlId:"formBasicEmail"},r.a.createElement(g.a.Label,null,"Username:"),r.a.createElement(g.a.Control,{type:"text",placeholder:"Enter username",value:o,onChange:function(e){var t=e.target;return c(t.value)}})),r.a.createElement(g.a.Group,{controlId:"formBasicPassword"},r.a.createElement(g.a.Label,null,"Password:"),r.a.createElement(g.a.Control,{type:"password",placeholder:"Enter password",value:m,name:"Password",onChange:function(e){var t=e.target;return v(t.value)}})),r.a.createElement(g.a.Group,{controlId:"formBasicPassword2"},r.a.createElement(g.a.Label,null,"Password:"),r.a.createElement(g.a.Control,{type:"password",placeholder:"Enter same password",value:p,name:"Password2",onChange:function(e){var t=e.target;return h(t.value)}})),r.a.createElement(f.a,{variant:"primary",type:"submit"},"Sign up")))},S=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{style:{color:"red",margin:10}},t)},j=function(e){var t=e.getSearchedTitle,a=Object(n.useState)(""),l=Object(i.a)(a,2),o=l[0],c=l[1];return r.a.createElement(g.a,{style:{marginRight:10,marginTop:20},onSubmit:function(e){e.preventDefault(),t(o),c("")}},r.a.createElement(g.a.Group,{controlId:"formBasicMovie"},r.a.createElement(g.a.Label,null,"Search movie to review:"),r.a.createElement(g.a.Control,{type:"text",placeholder:"Title of the movie",value:o,name:"search",onChange:function(e){var t=e.target;return c(t.value)}})),r.a.createElement(f.a,{variant:"primary",type:"submit"},"Seach movie"))},O=a(12),T=a.n(O),k=function(){return T.a.get("/api/movies").then((function(e){return e.data}))},I=function(e){return T.a.get("".concat("/api/movies","/").concat(e)).then((function(e){return e.data}))},C=function(e){var t="https://www.omdbapi.com/?t=".concat(e,"&apikey=d20392f7");return T.a.get(t).then((function(e){return e}))},L=function(e){return T.a.post("/api/login",e).then((function(e){return e.data}))},R=function(e){return T.a.post("/api/users",e).then((function(e){return e.data}))},P=null,x=function(e){P="bearer ".concat(e)},A=function(e){var t={headers:{Authorization:P}};return T.a.post("/api/reviews",e,t).then((function(e){return e.data}))},B=function(e,t){var a={headers:{Authorization:P}};return console.log(a),T.a.put("".concat("/api/reviews","/").concat(e),t,a).then((function(e){return e.data}))},Y=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(null),s=Object(i.a)(o,2),m=s[0],d=s[1],E=Object(n.useState)(null),g=Object(i.a)(E,2),f=g[0],w=g[1],O=Object(n.useState)(null),T=Object(i.a)(O,2),P=T[0],Y=T[1],G=Object(n.useState)([]),U=Object(i.a)(G,2),D=U[0],N=U[1],M=function(e,t){return e.Title>t.Title?1:t.Title>e.Title?-1:0};Object(n.useEffect)((function(){k().then((function(e){e.sort(M),l(e)}))}),[]),Object(n.useEffect)((function(){var e=window.localStorage.getItem("loggedAppUser");if(e){var t=JSON.parse(e);console.log(t),w(t),x(t.token),t&&I(t.id).then((function(e){null!==e&&(e.movies.sort(M),N(e.movies))}))}}),[]);var _=function(e){C(e).then((function(e){"False"!==e.data.Response?d(e.data):d(null)})).catch((function(e){console.log(e)}))},J=function(e){var t=D.findIndex((function(t){return t.Title===e.Title})),n=a.findIndex((function(t){return t.Title===e.Title})),r=-1;-1!==t?(r=D[t].reviews.findIndex((function(e){return e.user===f.username})),window.confirm("You have already reviewed this movie. Update the review?")&&B(D[t].reviews[r].id,e.reviews[0]).then((function(e){var o=D.concat(),i=a.concat();o[t].reviews[r]=e,i[n].reviews[r]=e,N(o),l(i)})).catch((function(e){console.log(e.response.data)}))):-1===t&&A(e).then((function(t){if(-1===n){e.reviews.length=0,e.reviews.push(t);var r=a.concat(e);r.sort(M),l(r)}else{var o=a.concat();o[n].reviews.push(t),l(o)}var i;(i=-1===n?D.concat(e):D.concat(a[n])).sort(M),N(i)})),d(null)},W=function(e,t){L({username:e,password:t}).then((function(e){window.localStorage.setItem("loggedAppUser",JSON.stringify(e)),x(e.token),I(e.id).then((function(e){e.movies.sort(M),N(e.movies)})),w(e)})).catch((function(e){Y("".concat(e.response.data.error)),setTimeout((function(){Y(null)}),6e3)}))},z={padding:15};return r.a.createElement("div",{className:"container"},r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(c.b,{style:z,to:"/"},"home"),r.a.createElement(c.b,{style:z,to:"/reviews"},"all reviews"),r.a.createElement(c.b,{style:z,to:"/your_reviews"},"movies reviewed by you"),r.a.createElement(c.b,{style:z,to:"/make_review"},"make review"),f?null:r.a.createElement(c.b,{style:z,to:"/sign_up"},"Sign up"),f?r.a.createElement("em",null,f.username," logged in ",r.a.createElement("button",{onClick:function(){window.localStorage.removeItem("loggedAppUser"),w(null),x(null),N([]),d(null)}}," Logout")):r.a.createElement("span",null,"You are not logged in")),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/sign_up"},f?r.a.createElement("div",null,r.a.createElement(j,{getSearchedTitle:_}),r.a.createElement(p,{movie:m,getReview:J})):r.a.createElement("div",null,r.a.createElement(S,{message:P}),r.a.createElement(y,{getSignUpIformation:function(e,t,a){if(t!==a)return Y("Passwords didn't match"),setTimeout((function(){Y(null)}),6e3),!1;R({userName:e,password:t}).then((function(e){W(e.userName,t)})).catch((function(e){return console.log(e.response),Y(e.response.data.message),setTimeout((function(){Y(null)}),6e3),!1}))}}))),r.a.createElement(u.a,{path:"/reviews"},r.a.createElement(v,{movies:a})),r.a.createElement(u.a,{path:"/your_reviews"},f?r.a.createElement(v,{movies:D}):r.a.createElement("div",null,r.a.createElement(S,{message:P}),r.a.createElement(h,{getLoginInformation:W}))),r.a.createElement(u.a,{path:"/make_review"},f?r.a.createElement("div",null,r.a.createElement(j,{getSearchedTitle:_}),r.a.createElement(p,{movie:m,getReview:J})):r.a.createElement("div",null,r.a.createElement(S,{message:P}),r.a.createElement(h,{getLoginInformation:W}))),r.a.createElement(u.a,{path:"/login"},r.a.createElement(h,{getLoginInformation:W})),r.a.createElement(u.a,{path:"/"},r.a.createElement(b,{amount:a.length})))),r.a.createElement("footer",{style:{clear:"both",marginTop:40,bottom:0,padding:20,backgroundColor:"grey"}},r.a.createElement("i",null,"Teemu Hallinen, Ohjelmistosuunnittelu t\xe4ydennyskoulutus SeAMK 2019-2020")))};o.a.render(r.a.createElement(Y,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.9655c138.chunk.js.map