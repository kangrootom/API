var SoLog=function(){function n(){if(!window.performance)return"";var n=performance.timing,o=n.navigationStart||0,t=[n.fetchStart-o,n.domainLookupStart-o,n.domainLookupEnd-o,n.connectStart-o,n.secureConnectionStart>0?n.secureConnectionStart-o:0,n.connectEnd-o,n.requestStart-o,n.responseStart-o,n.responseEnd-o];return o+":"+t.join(",")}function o(n){return r=$.extend(r,n),SoLog}function t(o){Math.floor(100*Math.random()+1)<=parseInt(r.per)&&(monitor.setConf("sologUrl",r.url),monitor.log($.extend(o||{},{u:"",id:"",pro:r.pro,pid:r.pid,timing:n()}),"solog"))}var r={url:"//gs.s.qhupdate.com/cnt.gif",pro:"default",pid:"",per:100};return{init:o,log:t}}();