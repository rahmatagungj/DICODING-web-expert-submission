!function(e){function n(n){for(var r,o,c=n[0],s=n[1],u=n[2],l=0,f=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(d&&d(n);f.length;)f.shift()();return a.push.apply(a,u||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,c=1;c<t.length;c++){var s=t[c];0!==i[s]&&(r=!1)}r&&(a.splice(n--,1),e=o(o.s=t[0]))}return e}var r={},i={2:0},a=[];function o(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=r,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=n,c=c.slice();for(var u=0;u<c.length;u++)n(c[u]);var d=s;a.push([10,1,0]),t()}({10:function(e,n,t){"use strict";t.r(n);t(4),t(5);var r={parseActiveUrlWithCombiner:function(){var e=window.location.hash.slice(1).toLowerCase(),n=this._urlSplitter(e);return this._urlCombiner(n)},parseActiveUrlWithoutCombiner:function(){var e=window.location.hash.slice(1).toLowerCase();return this._urlSplitter(e)},_urlSplitter:function(e){var n=e.split("/");return{resource:n[1]||null,id:n[2]||null,verb:n[3]||null}},_urlCombiner:function(e){return(e.resource?"/".concat(e.resource):"/")+(e.id?"/:id":"")+(e.verb?"/".concat(e.verb):"")}},i=t(3),a={DATABASE_NAME:"restaurant-database",DATABASE_VERSION:1,OBJECT_STORE_NAME:"restaurant",SERVER_IMAGE_URL:"https://dicoding-restaurant-api.el.r.appspot.com/images/medium/",SERVER_API_URL:"https://restaurant-api.dicoding.dev"};function o(e,n,t,r,i,a,o){try{var c=e[a](o),s=c.value}catch(e){return void t(e)}c.done?n(s):Promise.resolve(s).then(r,i)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function c(e){o(a,r,i,c,s,"next",e)}function s(e){o(a,r,i,c,s,"throw",e)}c(void 0)}))}}var s=a.DATABASE_NAME,u=a.DATABASE_VERSION,d=a.OBJECT_STORE_NAME,l=Object(i.a)(s,u,{upgrade:function(e){e.createObjectStore(d,{keyPath:"id"})}}),f={getRestaurant:function(e){return c(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,l;case 4:return n.abrupt("return",n.sent.get(d,e));case 5:case"end":return n.stop()}}),n)})))()},getAllRestaurant:function(){return c(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l;case 2:return e.abrupt("return",e.sent.getAll(d));case 3:case"end":return e.stop()}}),e)})))()},putRestaurant:function(e){return c(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.hasOwnProperty("id")){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,l;case 4:return n.abrupt("return",n.sent.put(d,e));case 5:case"end":return n.stop()}}),n)})))()},deleteRestaurant:function(e){return c(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l;case 2:return n.abrupt("return",n.sent.delete(d,e));case 3:case"end":return n.stop()}}),n)})))()}};function p(e,n,t,r,i,a,o){try{var c=e[a](o),s=c.value}catch(e){return void t(e)}c.done?n(s):Promise.resolve(s).then(r,i)}function m(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function o(e){p(a,r,i,o,c,"next",e)}function c(e){p(a,r,i,o,c,"throw",e)}o(void 0)}))}}var v={sendNotification:function(e){var n=e.title,t=e.options;if(this._checkAvailability())return this._checkPermission()?void this._showNotification({title:n,options:t}):(console.log("User did not yet granted permission"),void this._requestPermission());console.log("Notification not supported in this browser")},_checkAvailability:function(){return!!("Notification"in window)},_checkPermission:function(){return"granted"===Notification.permission},_requestPermission:function(){return m(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Notification.requestPermission();case 2:"denied"===(n=e.sent)&&console.log("Notification Denied"),"default"===n&&console.log("Permission closed");case 5:case"end":return e.stop()}}),e)})))()},_showNotification:function(e){return m(regeneratorRuntime.mark((function n(){var t,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.title,r=e.options,n.next=3,navigator.serviceWorker.ready;case 3:n.sent.showNotification(t,r);case 5:case"end":return n.stop()}}),n)})))()}};function h(e,n,t,r,i,a,o){try{var c=e[a](o),s=c.value}catch(e){return void t(e)}c.done?n(s):Promise.resolve(s).then(r,i)}function g(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function o(e){h(a,r,i,o,c,"next",e)}function c(e){h(a,r,i,o,c,"throw",e)}o(void 0)}))}}var x=a.SERVER_IMAGE_URL,b=function(e,n){v.sendNotification({title:"Restaurant ".concat(n.name," ").concat(e," to Favorite List!"),options:{body:n.name,image:"".concat(x+n.pictureId)}})},w={init:function(e){var n=this;return g(regeneratorRuntime.mark((function t(){var r,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.favoriteButtonContainer,i=e.restaurant,n._favoriteButtonContainer=r,n._restaurant=i,t.next=5,n._renderButton();case 5:case"end":return t.stop()}}),t)})))()},_renderButton:function(){var e=this;return g(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e._restaurant.id,n.next=3,e._isRestaurantExist(t);case 3:if(!n.sent){n.next=7;break}e._renderFavorited(),n.next=8;break;case 7:e._renderFavorite();case 8:case"end":return n.stop()}}),n)})))()},_isRestaurantExist:function(e){return g(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.getRestaurant(e);case 2:return t=n.sent,n.abrupt("return",!!t);case 4:case"end":return n.stop()}}),n)})))()},_renderFavorite:function(){var e=this;this._favoriteButtonContainer.innerHTML='\n  <button aria-label="make as favorite" id="favButton">\n    <svg xmlns="http://www.w3.org/2000/svg" class="favorit-icon" fill="none" viewBox="0 0 24 24" stroke="#FF0075">\n        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />\n     </svg>\n    </button>\n',document.querySelector("#favButton").addEventListener("click",g(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.putRestaurant(e._restaurant);case 2:e._renderButton(),b("added",e._restaurant);case 4:case"end":return n.stop()}}),n)}))))},_renderFavorited:function(){var e=this;this._favoriteButtonContainer.innerHTML='\n  <button aria-label="make as unfavorite" id="favButton">\n      <svg xmlns="http://www.w3.org/2000/svg" class="favorit-icon" viewBox="0 0 20 20" fill="#FF0075">\n              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />\n      </svg>\n    </button>\n',document.querySelector("#favButton").addEventListener("click",g(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.deleteRestaurant(e._restaurant.id);case 2:e._renderButton(),b("removed",e._restaurant);case 4:case"end":return n.stop()}}),n)}))))}};function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(Object(t),!0).forEach((function(n){R(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function R(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function _(e,n,t,r,i,a,o){try{var c=e[a](o),s=c.value}catch(e){return void t(e)}c.done?n(s):Promise.resolve(s).then(r,i)}function E(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function o(e){_(a,r,i,o,c,"next",e)}function c(e){_(a,r,i,o,c,"throw",e)}o(void 0)}))}}var j=[],P=!1,O=a.SERVER_API_URL,B=a.SERVER_IMAGE_URL,S=function(e){var n=O+"/detail/".concat(e);return fetch(n).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log(e)}))},A=a.SERVER_IMAGE_URL,z=function(e){return'\n    <div class="card">\n        <div class="city">\n            Kota '.concat(e.city,'\n        </div>\n        <img alt="').concat(e.name,'" class="featured-image lazyload"\n            width="600px"\n            height="400px"\n            src="./images/image-placeholder.png"\n            data-src="').concat(A).concat(e.pictureId,'"\n            loading="lazy"/>\n        <div class="content">\n            <div class="rating">\n            ⭐️ Rating ').concat(e.rating,'\n            </div>\n            <a href="/#/detail/').concat(e.id,'" id="link-restaurant" value="').concat(e.id,'">\n                <h4 class="restaurant-title">\n                ').concat(e.name,'\n                </h4>\n            </a>\n            <p class="description">\n            ').concat(e.description.slice(0,90),"\n            </p>\n        </div>\n    </div>\n")};function C(e,n,t,r,i,a,o){try{var c=e[a](o),s=c.value}catch(e){return void t(e)}c.done?n(s):Promise.resolve(s).then(r,i)}function L(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function o(e){C(a,r,i,o,c,"next",e)}function c(e){C(a,r,i,o,c,"throw",e)}o(void 0)}))}}var M=[],I=!1,T=a.SERVER_API_URL;function N(e,n,t,r,i,a,o){try{var c=e[a](o),s=c.value}catch(e){return void t(e)}c.done?n(s):Promise.resolve(s).then(r,i)}function F(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function o(e){N(a,r,i,o,c,"next",e)}function c(e){N(a,r,i,o,c,"throw",e)}o(void 0)}))}}var U=[],V={"/":{onWillMount:function(){return L(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(T+"/list").then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log(e),I=!0}));case 2:if(n=e.sent,document.getElementById("loading").style.display="none",n){e.next=7;break}return e.abrupt("return");case 7:n.error&&(I=!0),n.error||(M=n.restaurants);case 9:case"end":return e.stop()}}),e)})))()},onMounted:function(){return L(regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=document.getElementById("skipToContent"),t=document.getElementById("mainContent"),n.addEventListener("click",(function(){t.scrollIntoView({behavior:"smooth"}),t.focus()}));case 3:case"end":return e.stop()}}),e)})))()},render:function(){return L(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!I){e.next=2;break}return e.abrupt("return",'\n      <h5 class="splash-text">Gagal memuat data</h5>\n      ');case 2:return e.abrupt("return",'\n        <div class="container list-restaurant" id="content">\n        <h3>Explore Restaurant</h3>\n            <div class="items">\n                '.concat(M.map((function(e){return z(e)})).join(" "),"\n            </div>\n        </div>\n        "));case 3:case"end":return e.stop()}}),e)})))()}},"/detail/:id":{onWillMount:function(){return E(regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.parseActiveUrlWithoutCombiner(),e.next=3,S(n.id);case 3:if(t=e.sent,document.getElementById("loading").style.display="none",t){e.next=8;break}return e.abrupt("return");case 8:t.error&&(P=!0),t.error||(j=t.restaurant);case 10:case"end":return e.stop()}}),e)})))()},onMounted:function(){return E(regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=document.getElementById("skipToContent"),t=document.getElementById("mainContent"),n.addEventListener("click",(function(){t.scrollIntoView({behavior:"smooth"}),t.focus()})),w.init({favoriteButtonContainer:document.querySelector("#favoriteButtonContainer"),restaurant:k({},j)});case 4:case"end":return e.stop()}}),e)})))()},render:function(){return E(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!P){e.next=2;break}return e.abrupt("return",'\n      <h5 class="splash-text" id="content">Gagal memuat data</h5>\n      ');case 2:return e.abrupt("return",'\n    <div class="container detail-restaurant" id="content">\n      <div id="favoriteButtonContainer"></div>\n\n      <div class="frame">\n        <img alt="'.concat(j.name,'" class="featured-image lazyload"\n          src="./images/image-placeholder.png"\n          width="600px"\n          height="400px"\n          data-src="').concat(B).concat(j.pictureId,'"\n          loading="lazy"/>\n        <div class="details">\n          <h4>Restaurant ').concat(j.name,'</h4>\n            <div class="rating">\n            ⭐️ Rating ').concat(j.rating,'\n            </div>\n            <p class="description">\n              ').concat(j.address,", Kota ").concat(j.city,'\n            </p>\n            <p class="description">\n              ').concat(j.description,' \n            </p>\n        </div>\n      </div>\n\n      <h3 class="all-menus-title">All Menu</h3>\n        <div class="menus">\n\n          <div class="frame">\n            <div class="drinks">\n            <h3>Drinks</h3>\n              <ul class="list-menu">\n                ').concat(j.menus.drinks.map((function(e){return'\n                  <li class="menu-item">'.concat(e.name,"</li>\n                  ")})).join(" "),'\n              </ul>\n            </div>\n          </div>\n\n\n          <div class="frame">\n            <div class="food">\n            <h3>Foods</h3>\n              <ul class="list-menu">\n                ').concat(j.menus.foods.map((function(e){return'\n                  <li class="menu-item">'.concat(e.name,"</li>\n                  ")})).join(" "),'\n              </ul>\n            </div>\n          </div>\n\n        </div>\n\n\n        <h3 class="all-menus-title">Reviews</h3>\n          <div class="reviews">\n          \n          ').concat(j.customerReviews.map((function(e){return'\n                <div class="review">\n                  <h4 class="user-name">'.concat(e.name,'</h4>\n                  <p class="date">').concat(e.date,'</p>\n               <div class="frame reviewed">\n                  <p>" ').concat(e.review,' "</p>\n                </div>\n                </div>\n                ')})).join(" "),"\n\n      </div>\n        "));case 3:case"end":return e.stop()}}),e)})))()}},"/favorite":{onWillMount:function(){return F(regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.getAllRestaurant();case 2:n=e.sent,U=n,t=document.querySelector("#mainContent"),n.forEach((function(e){t.innerHTML+=z(e)}));case 6:case"end":return e.stop()}}),e)})))()},onMounted:function(){return F(regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=document.getElementById("skipToContent"),t=document.getElementById("mainContent"),n.addEventListener("click",(function(){t.scrollIntoView({behavior:"smooth"}),t.focus()})),document.getElementById("loading").style.display="none";case 5:case"end":return e.stop()}}),e)})))()},render:function(){return F(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==U.length){e.next=2;break}return e.abrupt("return",'\n        <div class="container list-restaurant" id="content">\n        <h3>Favorite Restaurant</h3>\n            <div class="items">\n                Nothing here.\n            </div>\n        </div>\n        ');case 2:return e.abrupt("return",'\n        <div class="container list-restaurant" id="content">\n        <h3>Favorite Restaurant</h3>\n            <div class="items">\n                '.concat(U.map((function(e){return z(e)})).join(" "),"\n            </div>\n        </div>\n        "));case 3:case"end":return e.stop()}}),e)})))()}}};function q(e,n,t,r,i,a,o){try{var c=e[a](o),s=c.value}catch(e){return void t(e)}c.done?n(s):Promise.resolve(s).then(r,i)}function D(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var W=function(){function e(n){var t=n.content;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this._content=t}var n,t,i,a,o;return n=e,(t=[{key:"renderPage",value:(a=regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.parseActiveUrlWithCombiner(),t=V[n],e.next=4,t.onWillMount();case 4:return e.next=6,t.render();case 6:return this._content.innerHTML=e.sent,e.next=9,t.onMounted();case 9:case"end":return e.stop()}}),e,this)})),o=function(){var e=this,n=arguments;return new Promise((function(t,r){var i=a.apply(e,n);function o(e){q(i,t,r,o,c,"next",e)}function c(e){q(i,t,r,o,c,"throw",e)}o(void 0)}))},function(){return o.apply(this,arguments)})}])&&D(n.prototype,t),i&&D(n,i),e}(),G=t(2),H=t.n(G);function J(e,n,t,r,i,a,o){try{var c=e[a](o),s=c.value}catch(e){return void t(e)}c.done?n(s):Promise.resolve(s).then(r,i)}var K=function(){var e,n=(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("serviceWorker"in navigator)){e.next=4;break}return e.next=3,H.a.register();case 3:return e.abrupt("return");case 4:console.log("Service worker not supported in this browser");case 5:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function o(e){J(a,r,i,o,c,"next",e)}function c(e){J(a,r,i,o,c,"throw",e)}o(void 0)}))});return function(){return n.apply(this,arguments)}}();t(1),t(9);document.getElementById("mobile-nav-button").addEventListener("click",(function(){document.querySelector("#menu").classList.toggle("active"),document.querySelector(".mobile-bar").classList.toggle("active")}));var Y=new W({skipToContent:document.querySelector("#skipToContent"),content:document.querySelector("#mainContent")});window.addEventListener("hashchange",(function(){Y.renderPage()})),window.addEventListener("load",(function(){document.getElementById("loading").style.display="flex",Y.renderPage(),K()}))},5:function(e,n,t){var r=t(6),i=t(7);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1};r(i,a);e.exports=i.locals||{}},7:function(e,n,t){(n=t(8)(!1)).push([e.i,'*{padding:0;margin:0;box-sizing:border-box}body{box-sizing:border-box;margin:0px;padding:0px;font-size:18px;font-family:"Inter",sans-serif;background-color:#f3f3f3;overflow-x:hidden}main{min-height:85vh}.container{margin:0 auto}@media(min-width: 1080px){.container{width:80%}}header{background-color:#172774;position:relative}header .header-flex{color:#222;display:flex;align-items:center;padding:15px 10px;justify-content:space-between}header a{text-decoration:none;padding:10px 0}header a h1{color:#fafafa;text-transform:uppercase;font-size:27px;font-weight:600}header a h1:hover{color:#9b9b9b}header .mobile-bar{border-radius:.5em;border:0;background:transparent;flex-direction:column;justify-content:center;align-items:center;padding:1.2em 1.2em;display:none}@media(max-width: 768px){header .mobile-bar{display:flex}}header .mobile-bar span{display:block;height:2px;width:20px;margin:2px;background:#e0e0e0}header .mobile-bar.active{background:#333}header .mobile-bar.active span{background:#fff}header .mobile-bar:hover{background:#e1e1e1;cursor:pointer}header .mobile-bar:hover span{background:#444}header .mobile-bar:hover.active{background:#222}header .mobile-bar:hover.active span{background:#fff}header ul{list-style:none;margin:0;padding:0}@media(max-width: 768px){header ul{transition:ease 1s all;opacity:0;max-height:0px;overflow:hidden;display:flex;position:absolute;left:0;right:0;top:100%;flex-direction:column;background-color:#f1f1f1;margin-left:-100%}header ul.active{opacity:1;max-height:500px;right:0;margin-left:0%;background-color:#e1e1e1}header ul.active li{display:block}header ul.active li a{display:block}}header ul li{display:inline-block;padding:10px 0}@media(max-width: 768px){header ul li{background-color:#333}}header ul li a{display:inline-block;color:#eee;text-decoration:none;padding:1em 1em}@media(max-width: 768px){header ul li a{color:#fff}}header ul li a:hover{color:#b0b0b0}.jumbotron{align-items:center;justify-content:center;display:flex;text-align:center;width:100%;height:350px;z-index:-2;overflow:hidden;position:relative}@media screen and (max-width: 768px){.jumbotron{height:100%}}.jumbotron img{width:100%;position:relative}.jumbotron h2{text-shadow:#222;color:#fff;margin:0 auto;font-size:35px;text-transform:uppercase;position:absolute;margin:auto}@media screen and (max-width: 768px){.jumbotron h2{font-size:20px}}.list-restaurant{display:flex;flex-direction:column;justify-content:center;align-items:center}@media(max-width: 768px){.list-restaurant{margin:0 30px}}.list-restaurant h3{text-align:center;font-size:25px;margin-top:3rem}.list-restaurant .items{display:flex;align-items:center;justify-content:space-evenly;flex-direction:row;flex-wrap:wrap}@media screen and (min-width: 768px){.list-restaurant .items{margin:50px 10px}}@media(max-width: 768px){.list-restaurant .items{margin:50px 0;flex-direction:column;align-items:center;justify-content:center}}.card{border-radius:.5em;background-color:#fff;position:relative;margin:20px}@media screen and (min-width: 768px){.card{max-width:320px}}.card .city{position:absolute;background-color:#ff0075;font-size:18px;font-weight:bold;padding:10px 20px;border-radius:0px .5em .5em 0px;top:10px;color:#fff}.card .featured-image{border-radius:.5em .5em .2em .2em;width:100%;height:auto}.card .content{padding:10px}.card .content .rating{font-size:18px;color:#444;margin:10px 0}.card .content a{text-decoration:none;color:#222}.card .content a h4{font-size:20px;padding:15px 0}.card .content a h4:hover{cursor:pointer;color:#757575}.card .content .description{margin:10px 0;font-size:17px;text-transform:capitalize;text-align:justify-all;line-height:1.5rem;color:#333}footer{background-color:#fafafa;padding:50px;align-items:center;justify-content:center;display:flex}.relative-menu{position:relative;width:100%;display:flex;justify-content:center;align-items:center;margin-bottom:80px}.main-menu{display:flex;align-items:center;background-color:#fafafa;position:absolute;top:-48px;justify-content:space-evenly;width:50%;height:100px}@media screen and (max-width: 1080px){.main-menu{width:95%}}.main-menu .menu{border-radius:1em;display:flex;flex-direction:column;align-items:center;justify-content:center}.main-menu .menu-icon{width:50px;margin-bottom:5px}.detail-restaurant{position:relative;margin:50px auto}@media(max-width: 768px){.detail-restaurant{margin:50px 30px}}.detail-restaurant button{position:absolute;top:10px;right:10px;background-color:transparent;border:none}.frame{background:#fafafa;border-radius:.5em;width:100%;padding:10px;display:flex;flex-direction:row}.frame.reviewed{flex-direction:column;padding:20px}@media screen and (min-width: 768px){.frame.reviewed{margin-left:20px;margin-top:15px}}.frame .list-menu{margin-left:20px;margin-top:10px}.frame .list-menu .menu-item{font-size:19px}.frame .featured-image{max-width:30%}.frame .details{margin-left:30px}.frame .details .rating{align-items:center;display:flex;font-size:18px;color:#444;margin:10px 0}.frame .details h4{font-size:25px;padding:15px 0}.frame .details .description{margin:20px 0;font-size:19px;text-transform:capitalize;text-align:justify-all;line-height:1.5rem;color:#333}@media screen and (max-width: 768px){.frame{flex-direction:column;margin:10px 0}.frame .featured-image{max-width:100%}.frame .details{margin:30px 0}}.all-menus-title{font-size:30px;margin:35px 0}.menus{display:flex;flex-direction:row}@media screen and (max-width: 768px){.menus{flex-direction:column}}.splash-text{display:flex;align-items:center;justify-content:center;margin:50px auto;font-size:25px}.reviews{display:flex;flex-direction:column;flex-wrap:wrap}.review{margin:5px 0 30px 0}.review .user-name{margin-bottom:16px 0}.review .date{font-size:15px;margin:5px 0 10px 0}.favorit-icon{width:50px}#favButton{width:50px;position:absolute;top:25px;right:25px}.skip-to-content-link{background:#e77e23;height:60px;left:50%;position:absolute;transform:translateY(-100%);transition:transform .3s;z-index:100;text-decoration:none;color:#fff;font-size:18px;border-radius:.5em;border:none;padding:13px}.skip-to-content-link:focus{transform:translateY(10%)}',""]),e.exports=n}});