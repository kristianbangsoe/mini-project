webpackJsonp([1],{"7PyJ":function(t,s){},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("7+uW"),i=a("mtWM"),r=a.n(i),n=a("Yr+0"),l=a.n(n),c={name:"homepage",data:function(){return{msg:"Hello",products:0,heroImage:"static/images/hero.jpg",counter:0,isActive:!1,boxImage1:"static/images/man.jpg",boxImage2:"static/images/woman.jpg",boxImage3:"static/images/you.jpg",form:{name:""}}},mounted:function(){var t=this;document.getElementById("header").classList.remove("bg-white"),r.a.get("static/products-data.json").then(function(s){return t.products=s.data}),window.$=l.a,$(document).ready(function(){$(window).scroll(function(){$(window).scrollTop()>100?$("header").addClass("show"):$("header").removeClass("show")})})}},o={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"home"},[a("section",{style:{backgroundImage:"url("+t.heroImage+")"},attrs:{id:"hero"}},[t._m(0),t._v(" "),t._m(1)]),t._v(" "),a("section",{staticClass:"product-list pt-5"},[a("div",{staticClass:"container"},[t._m(2),t._v(" "),a("div",{staticClass:"product-collection columns my-3"},t._l(t.products,function(s){return a("figure",{key:s.id,staticClass:"item"},[a("router-link",{attrs:{to:{name:"product",params:{id:s.id}}}},[a("div",{staticClass:"info-i"},[a("i",{staticClass:"fas fa-info-circle"})]),t._v(" "),a("div",{staticClass:"price-tag pt-1 ml-1"},[t._v(t._s(s.price)+" DKK")]),t._v(" "),a("img",{attrs:{src:""+s.productImage,alt:""}}),t._v(" "),a("div",{staticClass:"label-container"},[a("div",{staticClass:"label"},[a("p",{staticClass:"pb-1"},[t._v(t._s(s.productName))]),t._v(" "),a("p",[t._v(t._s(s.description))]),t._v(" "),a("div",{staticClass:"d-flex jf-center mt-1"},[a("div",{staticClass:"icon compare"}),t._v(" "),a("div",{staticClass:"icon-fa mx-1"},[a("i",{staticClass:"fas fa-shopping-cart"})]),t._v(" "),a("div",{staticClass:"icon-fa"},[a("i",{staticClass:"far fa-heart"})])])])])])],1)})),t._v(" "),a("hr",{staticClass:"my-5"})])]),t._v(" "),a("section",{staticClass:"category-boxes columns"},[a("div",{staticClass:"column col-4"},[a("div",{staticClass:"p-4 pb-0 d-flex bg-light"},[a("img",{attrs:{src:t.boxImage1,alt:""}}),t._v(" "),t._m(3)])]),t._v(" "),a("div",{staticClass:"column col-4"},[a("div",{staticClass:"p-4 pb-0 d-flex bg-light"},[a("img",{attrs:{src:t.boxImage2,alt:""}}),t._v(" "),t._m(4)])]),t._v(" "),a("div",{staticClass:"column col-4"},[a("div",{staticClass:"p-4 pb-0 d-flex bg-light p-3"},[a("img",{attrs:{src:t.boxImage3,alt:""}}),t._v(" "),t._m(5)])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"container d-flex animate-letters"},[s("p",[this._v("A")]),s("p",[this._v("V")]),s("p",[this._v("E")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"container d-flex"},[s("div",{staticClass:"ml-auto  mr-5"},[s("a",{staticClass:"btn btn-border  mr-5",attrs:{href:"#"}},[this._v("SHOP MEN'S COLLECTION")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"filter mt-5 pb-2"},[a("ul",{staticClass:"d-flex"},[a("li",[a("a",{attrs:{href:"#"}},[t._v("POPULAR")])]),t._v(" "),a("li",[a("a",{staticClass:"active",attrs:{href:"#"}},[t._v("NEW ARRIVALS")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("BEST SELLERS")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("SPECIAL OFFERS")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("COMMING SOON")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"pl-3"},[s("h1",[s("strong",[this._v("MEN'S")]),s("br"),this._v("LOOKBOOK")]),this._v(" "),s("p",[this._v("Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.")]),this._v(" "),s("a",{staticClass:"btn bg-cyan mt-2",attrs:{href:"#"}},[this._v("VIEW NOW")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"pl-3"},[s("h1",[s("strong",[this._v("WOMAN'S")]),s("br"),this._v("LOOKBOOK")]),this._v(" "),s("p",[this._v("Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.")]),this._v(" "),s("a",{staticClass:"btn bg-cyan mt-2",attrs:{href:"#"}},[this._v("VIEW NOW")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"pl-3"},[s("h1",[s("strong",[this._v("YOUR")]),s("br"),this._v("LOOKBOOK")]),this._v(" "),s("p",[this._v("Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.")]),this._v(" "),s("a",{staticClass:"btn bg-cyan mt-2",attrs:{href:"#"}},[this._v("VIEW NOW")])])}]},u=a("VU/8")(c,o,!1,null,null,null).exports,v={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),s("li",[s("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),s("li",[s("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var _=a("VU/8")({name:"BrandPage",data:function(){return{msg:"Welcomddde to Your Vue.js App"}}},v,!1,function(t){a("zSOr")},"data-v-5488facc",null).exports,d={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essdddential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),s("li",[s("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),s("li",[s("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var p=a("VU/8")({name:"SignupPage",data:function(){return{msg:"Welcffome to Your Vue.js App"}}},d,!1,function(t){a("7PyJ")},"data-v-73ede9e4",null).exports,m={methods:{distract:function(t){alert(t-1)}},mounted:function(){var t=this;document.getElementById("header").classList.add("bg-white");var s=this.$route.params.id;r.a.get("static/products-data.json").then(function(a){return t.product=a.data.find(function(t){return t.id===s})})},data:function(){return{product:null,heroImage:"static/images/banner.jpg",counter:1,quantity:6,name:"product",tab:1}}},C={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return t.product?a("div",{staticClass:"productpage header"},[a("section",{staticClass:"banner",style:{backgroundImage:"url("+t.heroImage+")"}},[t._m(0)]),t._v(" "),a("section",{staticClass:"product-details mt-4"},[a("div",{staticClass:"container-s d-flex"},[a("div",{staticClass:"image"},[t._m(1),t._v(" "),t.product?a("img",{attrs:{src:t.product.productImage,alt:""}}):t._e()]),t._v(" "),a("div",{staticClass:"details ml-3"},[a("h2",[t._v(t._s(t.product.productName))]),t._v(" "),t._m(2),t._v(" "),a("div",{staticClass:"price mt-2 d-flex h5 gray-color"},[a("div",{staticClass:"oldPrice"},[t._v(t._s(t.product.oldPrice)+",00 "),a("div",[t._v("DKK")])]),t._v(" "),a("div",{staticClass:"ml-2"},[t._v(t._s(t.product.price)+",00 "),a("div",[t._v("DKK")])])]),t._v(" "),a("div",{staticClass:"d-flex mt-3"},[a("p",{staticClass:"stock uppercase mr-1"},[t._v("Availability: ")]),t._v(" "),a("p",[t._v(t._s(t.product.quantity?"In Stock":"Empty"))])]),t._v(" "),a("p",{staticClass:"uppercase mt-1"},[t._v("Product code: #"+t._s(t.product.productCode))]),t._v(" "),a("div",{staticClass:"mt-1 d-flex tags"},[t._v("TAGS:\n          "),t._l(t.product.items,function(s){return a("div",{staticClass:"d-flex"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v(t._s(s))])],1)})],2),t._v(" "),t._m(3),t._v(" "),a("form",{staticClass:"mt-2"},[a("div",{staticClass:"form-elements d-flex"},[t._m(4),t._v(" "),t._m(5),t._v(" "),a("div",{staticClass:"form-elements__form-item"},[a("label",{staticClass:"uppercase h1",attrs:{for:"qty"}},[t._v("Qty")]),t._v(" "),a("div",{staticClass:"styled-adder d-flex"},[a("p",[t._v(t._s(t.counter<0?0:t.counter))]),t._v(" "),a("div",[a("button",{attrs:{name:"button"},on:{click:function(s){s.preventDefault(),t.counter+=1}}},[a("i",{staticClass:"fas fa-chevron-up"})]),t._v(" "),a("button",{attrs:{name:"button"},on:{click:function(s){s.preventDefault(),t.distract(t.counter)}}},[a("i",{staticClass:"fas fa-chevron-down"})])])])])]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.counter,expression:"counter"}],attrs:{name:"qty",hidden:""},domProps:{value:t.counter},on:{input:function(s){s.target.composing||(t.counter=s.target.value)}}}),t._v(" "),t._m(6),t._v(" "),t._m(7)])])])])]):t._e()},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"overlay py-5"},[s("div",{staticClass:"container d-flex jf-center ai-center white-color fd-column uppercase"},[s("h1",{staticClass:"mb-2"},[s("strong",[this._v("Product")]),this._v(" view")]),this._v(" "),s("p",[this._v("mens - casuals - hoodies & sweatshirts - "),s("span",{staticClass:"cyan-color"})])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"arrows"},[s("div",{staticClass:"icon arrow arrow-left"},[s("i",{staticClass:"fa fa-angle-left"})]),this._v(" "),s("div",{staticClass:"icon arrow arrow-right"},[s("i",{staticClass:"fa fa-angle-right"})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"d-flex mt-1"},[a("div",{staticClass:"stars mr-1"},[a("i",{staticClass:"fas fa-star"}),t._v(" "),a("i",{staticClass:"fas fa-star"}),t._v(" "),a("i",{staticClass:"fas fa-star"}),t._v(" "),a("i",{staticClass:"fas fa-star"}),t._v(" "),a("i",{staticClass:"far fa-star"})]),t._v(" "),a("p",[a("strong",[t._v("3")]),t._v(" Review(s) |")]),t._v(" "),a("a",{staticClass:"px-1",attrs:{href:"#"}},[t._v("Add a review")]),t._v(" "),a("p",[t._v("| Share: ")]),t._v(" "),a("ul",{staticClass:"d-flex"},[a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-facebook-f"})])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-twitter"})])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-google-plus-g"})])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-pinterest-p"})])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-instagram"})])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"far fa-envelope"})])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"detailed__content gray-color mt-2"},[a("p",[t._v("Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est")]),t._v(" "),a("p",[t._v(" congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar")]),t._v(" "),a("p",[t._v("tempor lorem a pretium justo interdum.")]),t._v(" "),a("ul",{staticClass:"mt-2"},[a("li",[t._v("Elasticated cuffs")]),t._v(" "),a("li",[t._v("Casual fit")]),t._v(" "),a("li",[t._v("100% Cotton")]),t._v(" "),a("li",[t._v("Free shipping with 4 days delivery")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"form-elements__form-item mr-1"},[a("label",{staticClass:"uppercase h1",attrs:{for:"color"}},[t._v("Color")]),t._v(" "),a("div",{staticClass:"styled-select"},[a("select",{attrs:{name:"color"}},[a("option",{attrs:{selected:"",disabled:"",value:"0"}},[t._v("Select Colour")]),t._v(" "),a("option",{attrs:{value:""}},[t._v("Red")]),t._v(" "),a("option",{attrs:{value:""}},[t._v("Blue")]),t._v(" "),a("option",{attrs:{value:""}},[t._v("Black")]),t._v(" "),a("option",{attrs:{value:""}},[t._v("White")])]),t._v(" "),a("span",{staticClass:"fas fa-chevron-down"})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"form-elements__form-item mr-1"},[a("label",{staticClass:"uppercase h1",attrs:{for:"size"}},[t._v("Size")]),t._v(" "),a("div",{staticClass:"styled-select"},[a("select",{attrs:{name:"size"}},[a("option",{attrs:{selected:"",disabled:"",value:"0"}},[t._v("Select Size")]),t._v(" "),a("option",{attrs:{value:""}},[t._v("XS (27)")]),t._v(" "),a("option",{attrs:{value:""}},[t._v("S (30)")]),t._v(" "),a("option",{attrs:{value:""}},[t._v("M (32)")]),t._v(" "),a("option",{attrs:{value:""}},[t._v("XL (35)")]),t._v(" "),a("option",{attrs:{value:""}},[t._v("XXL (40)")])]),t._v(" "),a("span",{staticClass:"fas fa-chevron-down"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"form-elements__form-item mt-2"},[s("button",{staticClass:"btn bg-cyan"},[s("i",{staticClass:"fas fa-shopping-cart"}),this._v(" ADD TO CART")]),this._v(" "),s("button",{staticClass:"btn btn-border ml-2"},[s("i",{staticClass:"far fa-heart"}),this._v(" ADD TO COLLECTION")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"compare-el"},[s("button",{attrs:{type:"button",name:"button"}},[s("div",{staticClass:"icon compare"}),this._v(" ADD TO COMPARE")])])}]};var M=a("VU/8")(m,C,!1,function(t){a("qLFm")},"data-v-707b69f4",null).exports,L={name:"App",components:{Homepage:u,BrandPage:_,SignupPage:p,ProductPage:M},data:function(){return{msg:"Hello",heroImage:"static/images/hero.jpg",navBanner:"static/images/sale-banner.png",counter:0,isActive:!1,form:{name:""},products:[{productId:1,productName:"Pants",productImage:"static/images/products/product-1.jpg",productGallery:null,quantity:1,description:"Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien.",price:200,oldPrice:null,onSale:!1},{productId:2,productName:"Shirts",productImage:"static/images/products/product-2.jpg",productGallery:["static/images/products/product-2.jpg","static/images/products/product-2.jpg"],quantity:1,description:"Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien.",price:900,oldPrice:1200,onSale:!0},{productId:3,productName:"Shoes",productImage:"static/images/products/product-3.jpg",quantity:2,description:"Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien.",price:100,oldPrice:null,onSale:!1},{productId:4,productName:"Hats",productImage:"static/images/products/product-4.jpg",quantity:6,description:"Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien.",price:100,oldPrice:null,onSale:!1},{productId:5,productName:"Hats",productImage:"static/images/products/product-5.jpg",quantity:6,description:"Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien.",price:100,oldPrice:null,onSale:!1},{productId:6,productName:"Hats",productImage:"static/images/products/product-6.jpg",quantity:6,description:"Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien.",price:100,oldPrice:null,onSale:!1}]}},computed:{total:function(){return this.products.reduce(function(t,s){return t+s.price*s.quantity},0)},productQuantity:function(){return this.products.reduce(function(t,s){var a=t+s.quantity;return Math.max(0,a)},0)}},methods:{distract:function(t){return this.products.reduce(function(s,a){if(a.productId===t&&a.quantity>0)return a.quantity-=1},0)},deleteObject:function(t){this.$delete(this.products,t)},myFilter:function(){this.isActive=!this.isActive}}},f={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("header",{attrs:{id:"header"}},[e("nav",{staticClass:"nav top-nav bg-dark"},[e("div",{staticClass:"container-s d-flex"},[t._m(0),t._v(" "),e("div",{staticClass:"ml-auto"},[e("div",{staticClass:"cart bg-cyan",class:{active:!t.isActive}},[e("div",{staticClass:"text-center",on:{click:t.myFilter}},[e("i",{staticClass:"fas fa-shopping-cart"}),t._v(" "+t._s(t.productQuantity?" "+t.productQuantity:"Empty")+"\n            ")]),t._v(" "),e("div",{staticClass:"cart-list"},[t._l(t.products,function(s,a){return e("div",{key:s.productId,staticClass:" list-item"},[e("div",{staticClass:"cart-image mr-1",style:{backgroundImage:"url("+s.productImage+")"}}),t._v(" "),e("div",{staticClass:"cart-container"},[e("button",{staticClass:"delete-btn",on:{click:function(s){s.preventDefault(),t.deleteObject(a)}}},[e("i",{staticClass:"fas fa-times"})]),t._v(" "),e("p",{staticClass:"cart-name"},[t._v(t._s(s.productName))]),t._v(" "),e("div",{},[e("p",{staticClass:"cart-price"},[t._v(t._s(s.price)+" DKK")]),t._v(" "),e("div",{staticClass:"d-flex mt-1"},[e("button",{staticClass:"quantity-btn",attrs:{min:"0"},on:{click:function(t){s.quantity+=1}}},[e("i",{staticClass:"fas fa-plus"})]),t._v(" "),e("p",{staticClass:"cart-quantity"},[e("strong",[t._v(t._s(s.quantity<0?0:s.quantity))])]),t._v(" "),e("button",{staticClass:"quantity-btn ",on:{click:function(a){t.distract(s.productId)}}},[e("i",{staticClass:"fas fa-minus"})])])])])])}),t._v(" "),e("div",{staticClass:"total d-flex bg-white p-1-5"},[t._v("\n                Total "),e("div",{staticClass:"ml-auto"},[e("strong",{},[t._v(t._s(t.total)+" DKK")])])]),t._v(" "),t._m(1)],2)])])])]),t._v(" "),e("nav",{staticClass:"nav buttom-nav py-2"},[e("div",{staticClass:"container d-flex"},[e("div",{staticClass:"navbar-brand  mt-1"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[e("img",{attrs:{src:a("qz/U"),alt:""}})])],1),t._v(" "),e("ul",{staticClass:"navbar-nav my-0 ml-auto"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[e("i",{staticClass:"fas fa-angle-down"}),t._v("Men's")]),t._v(" "),e("div",{staticClass:"sub-container"},[e("div",{staticClass:"sub-cat"},[t._m(2),t._v(" "),e("div",{staticClass:"shop-banner",style:{backgroundImage:"url("+t.navBanner+")"}},[e("a",{attrs:{href:"#"}})])])])],1),t._v(" "),e("li",{staticClass:"nav-item active"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/brandpage"}},[t._v("Women's")])],1),t._v(" "),e("li",{staticClass:"nav-item active"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/brandpage"}},[t._v("The brand")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/productpage"}},[t._v("Local Stories")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/signuppage"}},[t._v("Lookbook")])],1),t._v(" "),t._m(3)])])])]),t._v(" "),e("section",{staticClass:"main-view container-fluid"},[e("router-view")],1),t._v(" "),t._m(4)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("ul",{staticClass:"dropdown pt-1"},[s("li",[this._v("\n            Currency : DKK "),s("i",{staticClass:"fas fa-angle-down"}),this._v(" "),s("ul",[s("li",{staticClass:"active"},[s("a",{attrs:{href:"#"}},[this._v("DKK")])]),this._v(" "),s("li",[s("a",{attrs:{href:"#"}},[this._v("EU")])]),this._v(" "),s("li",[s("a",{attrs:{href:"#"}},[this._v("SK")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"total d-flex jf-center bg-cyan"},[s("p",{staticClass:"py-1"},[this._v("GO TO PAYMENT "),s("i",{staticClass:"ml-1 fas fa-arrow-right"})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"d-flex"},[a("div",{staticClass:"sub-cat__sub-item"},[a("p",{staticClass:"uppercase"},[t._v("Casual")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Jackets")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("Hoodies & Sweatshirts")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("Polo Shirts")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("Sportswear")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("Trousers & Chinos")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("T-Shirts")])])])]),t._v(" "),a("div",{staticClass:"sub-cat__sub-item"},[a("p",{staticClass:"uppercase"},[t._v("Formal")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v("Jackets")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("Shirts")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("Suits")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("Trousers")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("form",{staticClass:"search",attrs:{action:"index.html",method:"post"}},[s("input",{attrs:{type:"text",name:"search",placeholder:"Search.."}}),this._v(" "),s("i",{staticClass:"fas fa-search"})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("footer",{staticClass:"bg-light py-5 mt-5"},[a("div",{staticClass:"container-s"},[a("div",{staticClass:"grid-container"},[a("div",{},[a("h2",[t._v("Information")]),t._v(" "),a("ul",{staticClass:"ml-0"},[a("li",[a("a",{attrs:{href:"#"}},[t._v("The brand")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("Local stores")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("Customer service")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("Privacy & cookies")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("Site map")])])])]),t._v(" "),a("div",{},[a("h2",[t._v("Why buy form us")]),t._v(" "),a("ul",{staticClass:"ml-0"},[a("li",[a("a",{attrs:{href:"#"}},[t._v("Shipping & returns")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("Secure shopping")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("Testimonials")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("Award winning")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("Ethical trading")])])])]),t._v(" "),a("div",{},[a("h2",[t._v("Your account")]),t._v(" "),a("ul",{staticClass:"ml-0"},[a("li",[a("a",{attrs:{href:"#"}},[t._v("Sign in")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("Register")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("View cart")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("View your lookbook")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("Track an order")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("Update information")])])])]),t._v(" "),a("div",{},[a("h2",[t._v("Lookbook")]),t._v(" "),a("ul",{staticClass:"ml-0"},[a("li",[a("a",{attrs:{href:"#"}},[t._v("Latest posts")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("Men’s lookbook")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("Women’s lookbook")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("Lookbooks RSS feed")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("View your lookbook")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#"}},[t._v("Delete your lookbook")])])])]),t._v(" "),a("div",{},[a("h2",[t._v("Contact details")]),t._v(" "),a("p",{staticClass:"mb-1"},[t._v("\n              Head Office: Avenue Fashion,"),a("br"),t._v("\n              180-182 Regent Street, London.\n            ")]),t._v(" "),a("a",{attrs:{href:"tel:0123-456-789"}},[t._v("Telephone: 0123-456-789")]),t._v(" "),a("a",{attrs:{href:"mailto:support@yourwebsite.com"}},[t._v("Email: support@yourwebsite.com")])])])])])}]};var h=a("VU/8")(L,f,!1,function(t){a("ubbO")},null,null).exports,g=a("/ocq"),j=a("jKqc"),w=a.n(j),y=a("sUu7");e.a.use(y.a),e.a.use(w.a),e.a.use(g.a);var b=new g.a({routes:[{path:"/",name:"HomePage",component:u},{path:"/brandpage",name:"brand",component:_},{path:"/product/:id",name:"product",component:M},{path:"/signuppage",name:"signup",component:p}]});new e.a({router:b,components:{App:h},template:"<App/>"}).$mount("#app")},jKqc:function(t,s){},qLFm:function(t,s){},"qz/U":function(t,s){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9ImxvZ29fMV8iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyMzcgMTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDIzNyAxOTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiMyMjIyMjI7fQo8L3N0eWxlPgo8ZyBpZD0ibG9nbyI+Cgk8Zz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNy4xLDEuMkwtMC4xLDE4aDQuNWwxLjItM2g3LjNsMS4yLDNoNC43TDExLjYsMS4ySDcuMXogTTYuOSwxMS43bDIuNC02bDIuMyw2SDYuOXogTTI3LjEsMTMuM0wyMi45LDEuMgoJCQloLTQuN0wyNC43LDE4aDQuNmw2LjYtMTYuOGgtNC41TDI3LjEsMTMuM3ogTTQzLjQsMTEuM2w4LDBWNy44aC04VjQuN2g4LjlWMS4ySDM5VjE4aDEzLjV2LTMuNWgtOS4xVjExLjN6IE02Ny44LDExLjNMNjAuMSwxLjIKCQkJaC0zLjlWMThoNC4xVjcuOUw2OCwxOGgzLjhWMS4yaC00LjFMNjcuOCwxMS4zeiBNODcsMTEuMWMwLDEuMS0wLjMsMS45LTAuOSwyLjZjLTAuNiwwLjYtMS4zLDAuOS0yLjMsMC45Yy0xLDAtMS44LTAuMy0yLjQtMQoJCQljLTAuNi0wLjYtMC45LTEuNS0wLjktMi41VjEuMmgtNC40djkuOWMwLDEuNSwwLjMsMi43LDAuOSwzLjhjMC42LDEuMSwxLjUsMS45LDIuNywyLjVjMS4yLDAuNiwyLjUsMC45LDQsMC45CgkJCWMxLjUsMCwyLjktMC4zLDQtMC45YzEuMS0wLjYsMi0xLjQsMi42LTIuNWMwLjYtMS4xLDAuOS0yLjQsMC45LTMuOFYxLjJIODdWMTEuMXogTTEwMCwxMS4zbDgsMFY3LjhoLThWNC43aDguOVYxLjJIOTUuNlYxOGgxMy41CgkJCXYtMy41SDEwMFYxMS4zeiBNMTIwLjgsMThoMi4zdi03LjFoNy44VjguOGgtNy44VjMuM2g4LjZsMC0yLjFoLTEwLjlWMTh6IE0xNDAuMSwxLjJMMTMyLjcsMThoMi40bDEuOC00LjFoOC45bDEuOCw0LjFoMi41CgkJCWwtNy40LTE2LjhIMTQwLjF6IE0xMzcuOCwxMS44bDMuNS04LjJsMy42LDguMkgxMzcuOHogTTE2MS44LDkuNGMtMC43LTAuMy0xLjYtMC43LTIuOC0xYy0wLjktMC4zLTEuNi0wLjUtMi4xLTAuOAoJCQljLTAuNS0wLjItMC45LTAuNS0xLjMtMC45Yy0wLjQtMC40LTAuNS0wLjktMC41LTEuNWMwLTAuNywwLjMtMS4yLDAuOS0xLjVjMC42LTAuNCwxLjQtMC42LDIuMy0wLjZjMC43LDAsMS41LDAuMSwyLjMsMC40CgkJCWMwLjgsMC4yLDEuNywwLjYsMi40LDEuMWwxLTIuMWMtMC44LTAuNS0xLjYtMC45LTIuNi0xLjJjLTEtMC4zLTItMC40LTMtMC40Yy0xLjIsMC0yLjIsMC4yLTMuMSwwLjZjLTAuOSwwLjQtMS42LDAuOS0yLjEsMS42CgkJCWMtMC41LDAuNy0wLjcsMS41LTAuNywyLjRjMCwxLDAuMiwxLjgsMC43LDIuNWMwLjUsMC42LDEuMSwxLjEsMS44LDEuNGMwLjcsMC4zLDEuNiwwLjYsMi43LDFjMC45LDAuMywxLjYsMC41LDIuMiwwLjcKCQkJYzAuNSwwLjIsMSwwLjUsMS4zLDAuOWMwLjQsMC40LDAuNSwwLjksMC41LDEuNWMwLDAuOC0wLjMsMS4zLTEsMS44Yy0wLjYsMC40LTEuNSwwLjctMi43LDAuN2MtMC45LDAtMS45LTAuMi0yLjktMC42CgkJCWMtMS0wLjQtMS45LTEtMi43LTEuOGwtMSwyYzAuOCwwLjgsMS45LDEuNCwzLDEuOWMxLjIsMC41LDIuNCwwLjcsMy42LDAuN2MxLjIsMCwyLjMtMC4yLDMuMi0wLjZjMC45LTAuNCwxLjctMC45LDIuMi0xLjcKCQkJYzAuNS0wLjcsMC44LTEuNiwwLjgtMi41YzAtMS0wLjItMS45LTAuNy0yLjVDMTYzLjEsMTAuMiwxNjIuNSw5LjgsMTYxLjgsOS40eiBNMTgxLjMsOC43aC05LjZWMS4yaC0yLjNWMThoMi4zdi03LjJoOS42VjE4aDIuMwoJCQlWMS4yaC0yLjNWOC43eiBNMTg5LjYsMThoMi4zVjEuMmgtMi4zVjE4eiBNMjA5LjYsMi4yYy0xLjQtMC44LTIuOC0xLjEtNC41LTEuMWMtMS42LDAtMy4xLDAuNC00LjUsMS4xYy0xLjMsMC44LTIuNCwxLjgtMy4yLDMuMQoJCQljLTAuOCwxLjMtMS4yLDIuNy0xLjIsNC4zYzAsMS42LDAuNCwzLDEuMiw0LjNjMC44LDEuMywxLjksMi40LDMuMiwzLjFjMS40LDAuOCwyLjgsMS4xLDQuNSwxLjFjMS42LDAsMy4xLTAuNCw0LjUtMS4xCgkJCWMxLjQtMC44LDIuNC0xLjgsMy4yLTMuMWMwLjgtMS4zLDEuMi0yLjgsMS4yLTQuM2MwLTEuNi0wLjQtMy0xLjItNC4zQzIxMiw0LDIxMC45LDIuOSwyMDkuNiwyLjJ6IE0yMTAuNywxMi44CgkJCWMtMC42LDEtMS40LDEuOC0yLjQsMi40Yy0xLDAuNi0yLjEsMC45LTMuMiwwLjljLTEuMiwwLTIuMy0wLjMtMy4zLTAuOWMtMS0wLjYtMS44LTEuNC0yLjQtMi40Yy0wLjYtMS0wLjktMi4xLTAuOS0zLjMKCQkJYzAtMS4yLDAuMy0yLjMsMC45LTMuM2MwLjYtMSwxLjQtMS44LDIuNC0yLjNjMS0wLjYsMi4xLTAuOSwzLjMtMC45YzEuMiwwLDIuMiwwLjMsMy4yLDAuOXMxLjgsMS40LDIuNCwyLjMKCQkJYzAuNiwxLDAuOSwyLjEsMC45LDMuM0MyMTEuNiwxMC44LDIxMS4zLDExLjgsMjEwLjcsMTIuOHogTTIzMCwxLjJ2MTNsLTkuNi0xM0gyMThWMThoMi4zVjVsOS42LDEzaDIuM1YxLjJIMjMweiIvPgoJPC9nPgo8L2c+Cjwvc3ZnPgo="},ubbO:function(t,s){},zSOr:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.d8cdde1764b194ab443f.js.map