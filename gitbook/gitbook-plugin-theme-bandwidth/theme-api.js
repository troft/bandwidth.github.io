require(["gitbook","jquery"],function(n,t){function e(){return"btn-"+b++}function a(n,t,e,a){var i=n.children(t).length;0>e&&(e=Math.max(0,i+1+e)),n.append(a),i>e&&n.children(t).eq(e).before(n.children(t).last())}function i(n){n.preventDefault()}function o(n){return n=t.extend({label:"",icon:"",text:"",position:"left",className:"",onClick:i,dropdown:null,index:null,id:e()},n||{}),v.push(n),c(n),n.id}function c(n){var e,i=t(".api-code-top"),o=t("<a>",{"class":"btn",text:n.text?" "+n.text:"","aria-label":n.label,href:""});o.click(n.onClick),n.icon&&t("<i>",{"class":n.icon}).prependTo(o),o.addClass(n.className),e=o,e.addClass("js-langbar-action"),a(i,".btn",n.index,e)}function l(){t(".js-langbar-action").remove(),v.forEach(c)}function s(n){v=t.grep(v,function(t){return-1==n.indexOf(t.id)}),l()}function r(t){h=n.storage.get("themeApi",{split:t.split,currentLang:null})}function g(){n.storage.set("themeApi",h),d()}function d(){t(".book").toggleClass("two-columns",h.split),f=t(".api-method-sample"),f.each(function(){var n=!(t(this).data("lang")==h.currentLang);t(this).toggleClass("hidden",n)})}function u(){s(p),p=[],f=t(".api-method-sample");var n=[],e=!1;f.each(function(){var a,i,o=!1,c=t(this).data("lang"),l=t(this).data("name");c==h.currentLang&&(e=!0,o=!0),a=t.grep(n,function(n){return n.name==l}),i=!!a.length,i||n.push({name:l,lang:c,"default":o})});var a=0;t.each(n,function(i,c){var l,s,r=c["default"]||!e&&i==n.length-1;s=0===a?"lang-switcher first-code-lang "+(r?" active ":""):a===n.length-1?"lang-switcher last-code-lang "+(r?" active ":""):"lang-switcher"+(r?" active ":""),l=o({text:c.name,position:"left",className:s,index:a,onClick:function(n){h.currentLang=c.lang,g(),t(".btn.lang-switcher.active").removeClass("active"),t(n.currentTarget).addClass("active")}}),p.push(l),a+=1,r&&(h.currentLang=c.lang)})}var f,h,p=[],m=[{config:"light",text:"Light",id:0},{config:"dark",text:"Dark",id:3}],v=[],b=0;n.events.bind("start",function(t,e){var a=e["theme-bandwidth"];n.fontsettings.setThemes(m),n.fontsettings.setTheme(a.theme),r(a)}),n.events.on("page.change",function(){u(),d()}),n.events.on("comment.toggled",function(t,e,a){if(e.parents(".api-method-definition").length){var i=n.state.$book.find(".page-wrapper");i.toggleClass("comments-open-from-definition",a&&h.split)}})});