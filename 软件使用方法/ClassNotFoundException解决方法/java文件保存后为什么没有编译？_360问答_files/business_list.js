function busData(e){var t=$(".js-bussiness-list");if(e&&e.length&&e.length>5){var n='<div class="bussiness-ajax-wrap"><span class="gallery-ico"></span><ul>';if(isLowerIE8())for(var r=1;r<e.length;r++){if(r>6)break;var i="";e[r].timgssl?i=e[r].timgssl:i=e[r].timg,n+='<li><a target="_blank" href="'+e[r].curl1+'"><img src="'+i+'"><span class="bussiness-list-mask"></span><span class="bussiness-list-text">\uffe5'+e[r].price+"</span></a></li>"}else for(var r=1;r<e.length;r++){if(r>6)break;var i="";e[r].timgssl?i=e[r].timgssl:i=e[r].timg,n+='<li><a class="buss-bg-img" target="_blank" href="'+e[r].curl1+'"style="background-image:url('+i+')"><span class="bussiness-list-mask"></span><span class="bussiness-list-text">\uffe5'+e[r].price+"</span></a></li>"}n+="</ul></div>",t.append($(n))}else{var n='<a class="bussiness-buchong" target="_blank" href="https://hao.360.cn/"></a>';t.append($(n))}}function isLowerIE8(){var e="8.0",t=navigator.userAgent.toLowerCase(),n=t.indexOf("msie")>-1,r;return n&&(r=t.match(/msie ([\d.]+)/)[1]),r<=e?!0:!1}var Ajax=Wenda.Ajax;$(function(){var e=$(".js-bussiness-list"),t="",n=e.attr("curPosition");n=="detail"?t="Ir3GZm":t="UJJ7zG";var r={type:1,of:4,showid:t,guid:Cookie.get("QiHooGUID")||Cookie.get("__guid"),jsonp:"busData"};Ajax.jsonp("getRtBusiness",r,function(){})});