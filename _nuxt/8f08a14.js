(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{297:function(t,e,o){var content=o(314);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(44).default)("57285300",content,!0,{sourceMap:!1})},313:function(t,e,o){"use strict";o(297)},314:function(t,e,o){var n=o(43)((function(i){return i[1]}));n.push([t.i,"strong{color:#dc2626}.modal{transition:opacity .25s ease}",""]),t.exports=n},321:function(t,e,o){"use strict";o.r(e);var n,r,l=o(2);o(23),o(38),o(107),o(106),o(45),o(304);n=o(307),r=o(312);var c={layout:"gallerie",data:function(){return{galleries:[],images:[],masonry:{},imageloaded:{},modalImage:{},loadcounter:0}},methods:{toggleModal:function(t){var image=this.images[t.target.id];if(image){this.modalImage={};t.target.currentSrc;this.modalImage=image.formats.large}var e=document.querySelector(".modal");e.classList.toggle("opacity-0"),e.classList.toggle("pointer-events-none")},showImage:function(t){var e=document.querySelector(".modal-content");console.log("show"),e.classList.remove("opacity-0")},hideImage:function(t){var e=document.querySelector(".modal-content");console.log("hide"),e.classList.add("opacity-0")},updateMason:function(t){if(this.loadcounter++,!(this.loadcounter<this.images.length)){var e=document.querySelector("#mason");this.masonry=new n(e,{itemSelector:".mason-item",percentPosition:!0,columnWidth:5,gutter:5})}}},fetch:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$route.path.split("/"),t.slug=o[o.length-1],e.next=4,t.$strapi.find("galleries",{slug:t.slug});case 4:t.galleries=e.sent,t.$nextTick((function(){})),t.images=t.galleries[0].content.map((function(image){return{src:image.formats.small.url,height:image.formats.small.height,width:image.formats.small.width,formats:image.formats}}));case 7:case"end":return e.stop()}}),e)})))()},mounted:function(){var t=this,e=document.querySelector("#mason");e&&(this.imgloaded=new r(e,(function(o){t.masonry=new n(e,{itemSelector:".mason-item",percentPosition:!0,columnWidth:5,gutter:5}),e.classList.remove("opacity-0")})))}},m=(o(313),o(12)),component=Object(m.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"w-full"},[o("div",{staticClass:"flex w-full z-40 inset-0"},[o("div",{staticClass:"modal flex fixed sm:pl-64 z-50 sm:pin inset-0 overflow-y-auto flex opacity-0 w-screen h-screen bg-black bg-opacity-75 pointer-events-none items-center justify-center",on:{click:t.toggleModal}},[o("div",{staticClass:"modal-content bg-white p-4 sm:p-14"},[o("img",{ref:t.modalImage,staticClass:"max-width-full max-height-full",attrs:{height:t.modalImage.height,width:t.modalImage.width,src:t.modalImage.url,alt:""},on:{loadstart:t.hideImage,load:t.showImage}}),t._v("\n      Copyright © Victor Dyotte\n    ")])]),t._v(" "),t._l(t.galleries,(function(e){return o("div",{key:e.id,staticClass:"p-2 w-full"},[o("div",{staticClass:"pl-4"},[o("h1",{staticClass:"text-3xl"},[t._v(t._s(e.name))]),t._v(" "),o("div",{domProps:{innerHTML:t._s(e.Description)}})]),t._v(" "),o("div",{staticClass:"mason m-2 flex flex-wrap",attrs:{id:"mason"}},t._l(t.images,(function(content,e){return o("div",{key:content.name,staticClass:" w-32 sm:w-96 sm:max-width-none sm:max-height-none"},[o("img",{staticClass:" border-2 shadow-lg hover:border-0 border-black m-2 bg-white mason-item hover:cursor-pointer w-32 sm:w-96 sm:max-width-none sm:max-height-none",attrs:{id:e,src:content.src,alt:""},on:{load:t.updateMason,click:t.toggleModal}})])})),0)])}))],2)])}),[],!1,null,null,null);e.default=component.exports}}]);