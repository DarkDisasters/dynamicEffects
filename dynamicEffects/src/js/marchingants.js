!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){e.exports=function(e){return this._functionHub=e,this._mapDomMetaInfo={},this._mapDomOffsetAntMap={},this._liIntervals=[],this._liIntervalInfo=[],this.clearAnimateDomsbyIndex=function(e){this._mapDomMetaInfo[e]={},this._mapDomOffsetAntMap={}},this.update=function(e,t,n){this._mapDomMetaInfo[e]=n,this._mapDomOffsetAntMap[e]={}},this.addMetaInfo=function(e,t){null!=t&&(this._mapDomMetaInfo[e]=t)},this.updateMetaInfo=function(e,t){this._mapDomMetaInfo[e]=t},this.resetMetaInfo=function(e,t){var n=this._mapDomOffsetAntMap[e];Object.values(n).forEach(function(e){e.remove()}),this._mapDomOffsetAntMap[e]={},this._mapDomMetaInfo[e]=t},this.removeAntsbyIndex=function(e){for(var t=this._mapDomOffsetAntMap[e],n=Object.keys(t),r=0;r<n.length;r++){var a=t[n[r]];null!=a&&a.remove()}},this.getMetaInfos=function(){return this._mapDomMetaInfo},this.getMetaInfobyIndex=function(e){return this._mapDomMetaInfo[e]},this.getAnt=function(e,t){var n=void 0,r=this._mapDomOffsetAntMap[e];return null==r?(n=this.createAnt(e,t),this.addAnt(e,t,n)):null==(n=r[t])&&(n=this.createAnt(e,t),this.addAnt(e,t,n)),n},this.createAnt=function(e,t){var n,r=this.getMetaInfobyIndex(e),a=r.antmodel,i=r.boundaryPath,l=r.perimeter,o=r.cenPosDisplace,s=r.dots.join(";"),c=r.lengthperlist,u=r.normalanglelist,d=r.liuninormalvector,h=a.clone(),g=function(e,t,n){for(var r=t.length-2,a=0;a<t.length;a++)if(+t[a]>=n){r=0==a?0:a-1;break}var i=r+1,l=(n-+t[r])/(+t[i]-+t[r]);return{pos:function(e,t,n){var r=t.x-e.x,a=t.y-e.y;return{x:e.x+r*n,y:e.y+a*n}}({x:+e.split(";")[r].split(",")[0],y:+e.split(";")[r].split(",")[1]},{x:+e.split(";")[i].split(",")[0],y:+e.split(";")[i].split(",")[1]},l),beginIndex:r}}(s,c,t/l),v=g.pos,p=g.beginIndex;return v.x+=o*d[p][0],v.y+=o*d[p][1],h.position=new Point(v.x,v.y),h.rotate(-u[p]),(n=null!=i?h.intersect(i):h.clone()).visible=!0,h.remove(),n},this.addAnt=function(e,t,n){null==this._mapDomOffsetAntMap[e]?this._mapDomOffsetAntMap[e]={offset:n}:this._mapDomOffsetAntMap[e][t]=n},this.clearAnimateIntervals=function(){console.log(" clear ",this._liIntervalInfo);for(var e=0;e<this._liIntervals.length;e++)clearInterval(this._liIntervals[e]);this._liIntervals=[]},this.addAnimateIntervals=function(e){this._liIntervals.push(e)},this.newAnimateIntervalInfo=function(e){return this._liIntervalInfo[e]={},this._liIntervalInfo[e]},this}},function(e,t){e.exports=function(e){var t=this;return this._functionHub=e,this._currentEditGeometryType=void 0,$("#groupid").on("input",function(){var e=this.value;if(NaN!=e){var n=document.querySelector("#groupli-"+e+" span");if(null!=n){var r=+n.innerText;console.log(" ma list ",r),console.log(" !!! ",t._functionHub._animateDomManager._mapDomMetaInfo);var a=t._functionHub._animateDomManager.getMetaInfobyIndex(r);console.log("maInfo_previous ",a),document.getElementById("interval").value=+a.antinterval,document.getElementById("manual-antgap").value=+a.antgap,document.getElementById("antcolor").jscolor.fromString(a.antcolor),document.getElementById("groupid").value=a.groupid}}}),this.addMADoms=function(e,n){var r=e,a=(document.getElementById("maarea"),document.getElementById("magroupul"),document.getElementById("groupli-"+n.groupid));if(null==a){n.groupid;n.groupid,n.groupid}else a.innerHTML+="<span> "+r+"</span>";d3.selectAll(".mabutton").on("click",function(){var e=d3.select(this).attr("groupid"),n=[];document.querySelectorAll("#groupli-"+e+" span").forEach(function(e){n.push(+e.innerText)}),console.log(" ma list ",n);var r=t._functionHub._animateDomManager.getMetaInfobyIndex(n[0]);t.editAnimate(r,n)})},this.editGroupAnimate=function(e){},this.editAnimate=function(e,n){if(null!=n&&0!=n.length||null!=t._functionHub._geometrySaver.getCurrentMAGeometry()){null!=e&&(document.getElementById("interval").value=+e.antinterval,document.getElementById("manual-antgap").value=+e.antgap,document.getElementById("antcolor").jscolor.fromString(e.antcolor),document.getElementById("groupid").value=e.groupid);var r=document.getElementById("aeModal");r.style.display="block",document.getElementById("aecancel").onclick=function(){r.style.display="none"},document.getElementById("aeok").onclick=function(){var e,a,i;if(e={ae:"MA",groupid:document.getElementById("groupid").value,antgap:+document.getElementById("manual-antgap").value<.05?.05:+document.getElementById("manual-antgap").value,antshape:$('input[name="anttype"]:checked').val(),antcolor:"#"+document.getElementById("antcolor").value,antinterval:+document.getElementById("interval").value},r.style.display="none",null==n||0==n.length){a=t._functionHub._geometrySaver.getCurrentMAGeometry(),i=t._functionHub._geometrySaver.addMAGeometry(a);var l=t._functionHub._animateEnhancer.activateDOM(a,e).metainfo;t._functionHub._geometrySaver.clearCurrentMAGeometry(),d3.selectAll(".define_geometry").style("visibility","hidden"),t._functionHub._animateDomManager.addMetaInfo(i,l),t.addMADoms(i,l)}else for(var o=0;o<n.length;o++)i=n[o],a=t._functionHub._geometrySaver.getMAGeometrybyIndex(i),l=t._functionHub._animateEnhancer.activateDOM(a,e).metainfo,t._functionHub._animateDomManager.resetMetaInfo(i,l);t._functionHub._type="animate",t._functionHub.initFunc()}}else alert("Marching Ant Definer Error ")},this}},function(e,t){e.exports=function(){return this.activateDOM=function(e,t){switch(t.ae){case"MA":return this.marchingAnt(e,t)}},this.marchingAnt=function(e,t){var n=e.path,r=e.boundary,a=e.ant,i=+t.antinterval,l={cenPosDisplace:0},o=void 0;if(null!=r){o=new Path;for(var s=r.geometry,c=0;c<s.length;c++)o.add(new Point(s[c]));o.closed=!0,o.visible=!1}var u=n.geometry;console.log(" liGeometry = ",u);var d,h,g=n.lengthperlist,v=[],p=[],f=!0,y=n.liUniNormal_right,m=n.liUniNormal_left,_=n.perimeter,b=+t.antgap,M=t.antshape;if("self-defined"==M){var w=[(d=null!=a&&null!=a.paperdom?a.paperdom.clone():new Path(a.geometry)).position._x-u[0][0],d.position._y-u[0][1]],x=m[0],k=!0;w[0]*x[0]+w[1]*x[1]<0&&(k=!1),k?(p=m,v=n.liClockAngle_left):(f=!1,p=y,v=n.liClockAngle_right);var C=[u[1][0]-u[0][0],u[1][1]-u[0][1]],A=Math.sqrt(C[0]*C[0]+C[1]*C[1]),E=Math.sqrt(w[0]*w[0]+w[1]*w[1]),D=(C[0]*w[0]+C[1]*w[1])/A,H=Math.sqrt(E*E-D*D);l.cenPosDisplace=H,console.log("firstSegLength",A),console.log("cenPosLength",E),console.log("b1",D),console.log("antDomInfo",l);var O=[d.bounds.topLeft,d.bounds.topRight,d.bounds.bottomRight,d.bounds.bottomLeft];for(h=1e6,c=0;c<O.length;c++){var B=O[c],I=[B.x-u[0][0],B.y-u[0][1]],S=(I[0]*C[0]+I[1]*C[1])/A;h>S&&(h=S)}d.rotate(v[0]),h=h<0?-h:h,d.fillColor="black"}else"rect"==M?h=(d=new Path.Rectangle({position:new Point(0,0),size:new Size(5,50),fillColor:"black"})).bounds.width:"circle"==M?((d=new Path.Circle(new Point(0,0),20)).fillColor="black",h=d.bounds.width):((d=new Path([[-9.463,25.068],[-8.729,-25.067],[25.166,0]])).closed=!0,d.fillColor="black",h=d.bounds.width);for(var F=0,j=[];!(F>_);)j.push(F),F+=b;return d.fillColor=t.antcolor,d.opacity=.6,d.visible=!1,{metainfo:{antmodel:d,antwidth:h,antdots:a.geometry,antoffsets:j,cenPosDisplace:l.cenPosDisplace,dots:u,lengthperlist:g,normalanglelist:v,normalLeft:f,liuninormalvector:p,perimeter:_,antinterval:i,antgap:b,groupid:t.groupid,antcolor:t.antcolor,boundaryPath:o}}},this}},function(e,t){e.exports=function(){var e=this;return this._geometryType=null,this._newClick=!0,this._currectSelectId=null,this._validNextId=0,this._moveVertex=!1,this._moveCenter=!1,this._resizeCenter=!1,this._rotateCenter=!1,this._init=function(){},this.beginMode=function(e){this.clearMode(),this._geometryType=e.geotype;var t=e.liGeometryPos;null!=e.type&&(document.querySelectorAll("#geometryFinish input").forEach(function(e){e.checked=!1}),document.querySelector("#geometryFinish [value="+e.type+"]").checked=!0),this.initPreviewPath(t),this.enableClick()},this.clearMode=function(){console.log(" clear mode "),d3.selectAll(".define_helper").remove(),d3.select("#previewGeo").remove(),this._geometryType=null,this._newClick=!0,this._moveCenter=!1,this._moveVertex=!1,this._resizeCenter=!1,this._rotateCenter=!1,d3.select("#geometryFinish").style("visibility","hidden")},this.getNextId=function(){return this._validNextId++},this.initPreviewPath=function(e){if(console.log(" edit li init pos ",e),null==e)switch(this._geometryType){case"rect":for(e=[[200,200],[300,200],[300,300],[200,300]],a=0;a<e.length;a++)this.addVertexDot(e[a]);this.updatePreviewPath();break;case"circle":var t=[250,250];for(a=0;a<360;a+=30){var n=t[0]+50*Math.sin(Math.PI*a/180),r=t[1]+50*Math.cos(Math.PI*a/180);this.addVertexDot([n,r])}this.updatePreviewPath()}else{for(var a=0;a<e.length;a++)this.addVertexDot(e[a]);this.updatePreviewPath()}},this.updatePreviewPath=function(){var e=this.getGeometry();"polyline"!=this._geometryType&&e.push(e[0]),console.log(" liDot length ",e.length);var t=d3.line(),n=d3.select("#previewGeo");1==n.empty()&&(n=d3.select("#coversvg").append("path").attr("id","previewGeo").style("stroke",function(){return"gray"}).style("stroke-width","2px").style("stroke-dasharray","5 5").style("fill","none")),n.attr("d",t(e)),d3.selectAll(".define_circle").each(function(){d3.select(this).attr("originx",function(){return+d3.select(this).attr("cx")}).attr("originy",function(){return+d3.select(this).attr("cy")})}),this.updateCenterMoveDot(),this.updateBoundBoxMoveDots()},this.enableClick=function(){console.log(" enable click ",d3.select("#coversvg"),e._newClick),d3.select("#coversvg").on("mousedown",function(){console.log(" log click ");var t=d3.mouse(this);e._newClick&&e.addVertexDot(t)}).on("mousemove",function(){if(e._moveVertex&&null!=e._currectSelectId)d3.select("#"+e._currectSelectId).attr("cx",d3.mouse(this)[0]).attr("cy",d3.mouse(this)[1]),e.updatePreviewPath();else if(e._moveCenter&&null!=e._currectSelectId){var t=[+d3.select("#"+e._currectSelectId).attr("cx"),+d3.select("#"+e._currectSelectId).attr("cy")],n=[d3.mouse(this)[0]-t[0],d3.mouse(this)[1]-t[1]];e.moveVertexDots(n)}else if(e._resizeCenter&&null!=e._currectSelectId){var r=+d3.select("#"+e._currectSelectId).attr("originx"),a=+d3.select("#"+e._currectSelectId).attr("originy"),i=+d3.select("#boundbox_rect").attr("width"),l=+d3.select("#boundbox_rect").attr("height");n=[1+(d3.mouse(this)[0]-r)/i,1+(a-d3.mouse(this)[1])/l],console.log(" displayXY ",n),e.resizeVertexDots(n),d3.select("#"+e._currectSelectId).attr("cx",d3.mouse(this)[0]).attr("cy",d3.mouse(this)[1])}}).on("mouseup",function(){e._resizeCenter&&(d3.select("#"+e._currectSelectId).attr("originx",function(){return+d3.select(this).attr("cx")}).attr("originy",function(){return+d3.select(this).attr("cy")}),d3.selectAll(".define_circle").each(function(){d3.select(this).attr("originx",function(){return+d3.select(this).attr("cx")}).attr("originy",function(){return+d3.select(this).attr("cy")})})),null!=e._currectSelectId&&(e._currectSelectId=null),e._newClick=!0,e._moveCenter=!1,e._resizeCenter=!1,e._rotateCenter=!1,e._moveVertex=!1,e.updatePreviewPath()})},this.updateCenterMoveDot=function(){var t=this.getGeometry(),n=this.computeCentriod(t),r=d3.select("#centermove_circle");1==r.empty()&&(r=d3.select("#coversvg").append("circle").attr("id","centermove_circle").attr("class","define_helper").attr("r","2px").style("fill","blue").on("mousedown",function(){e._moveCenter=!0,e._newClick=!1,e._resizeCenter=!1,e._rotateCenter=!1,e._moveVertex=!1,e._currectSelectId=d3.select(this).attr("id")}).on("mouseenter",function(){d3.select(this).style("fill","red")}).on("mouseleave",function(){d3.select(this).style("fill","blue")})),r.attr("cx",n[0]).attr("cy",n[1])},this.updateBoundBoxMoveDots=function(){var t=this.getGeometry();if(console.log(" lidot ",t.length),!(t.length<=2)){var n=this.computeBoundbox(t),r=d3.select("#boundbox_rect"),a=d3.select("#resize_circle");1==r.empty()&&(r=d3.select("#coversvg").append("rect").attr("id","boundbox_rect").attr("class","define_helper").style("fill","none").style("stroke","red").style("stroke-width","1px").style("opacity","0.8"),a=d3.select("#coversvg").append("circle").attr("id","resize_circle").attr("class","define_helper").attr("r","2px").style("fill","orange").on("mousedown",function(){e._resizeCenter=!0,e._moveCenter=!1,e._newClick=!1,e._moveVertex=!1,e._rotateCenter=!1,e._currectSelectId=d3.select(this).attr("id")}).on("mouseenter",function(){d3.select(this).style("fill","red")}).on("mouseleave",function(){d3.select(this).style("fill","orange")})),r.attr("width",n.width).attr("height",n.height).attr("x",n.x).attr("y",n.y),a.attr("cx",n.x+n.width).attr("cy",n.y).attr("originx",n.x+n.width).attr("originy",n.y)}},this.computeCentriod=function(e){for(var t=[0,0],n=0;n<e.length;n++)t[0]+=e[n][0],t[1]+=e[n][1];return e.length>0&&(t[0]/=e.length,t[1]/=e.length),t},this.computeBoundbox=function(e){for(var t={left:1e5,right:0,top:1e5,bottom:0},n=0;n<e.length;n++)t.left>e[n][0]&&(t.left=e[n][0]),t.right<e[n][0]&&(t.right=e[n][0]),t.top>e[n][1]&&(t.top=e[n][1]),t.bottom<e[n][1]&&(t.bottom=e[n][1]);return{x:t.left,y:t.top,width:t.right-t.left,height:t.bottom-t.top}},this.moveVertexDots=function(e){d3.selectAll(".define_circle").each(function(){var t=+d3.select(this).attr("cx"),n=+d3.select(this).attr("cy");d3.select(this).attr("cx",t+e[0]).attr("cy",n+e[1])}),this.updatePreviewPath()},this.resizeVertexDots=function(e){var t=[+d3.select("#centermove_circle").attr("cx"),+d3.select("#centermove_circle").attr("cy")];d3.selectAll(".define_circle").each(function(){var n=+d3.select(this).attr("originx"),r=+d3.select(this).attr("originy");d3.select(this).attr("cx",t[0]+(n-t[0])*e[0]).attr("cy",t[1]+(r-t[1])*e[1])})},this.addVertexDot=function(t){console.log(" new circle ");var n="dot-"+e.getNextId();d3.select("#coversvg").append("circle").attr("class","define_circle define_helper").attr("id",function(){return n}).attr("r","3px").attr("cx",t[0]).attr("cy",t[1]).attr("originx",t[0]).attr("originy",t[1]).style("fill","green").on("mousedown",function(){e._moveVertex=!0,e._newClick=!1,e._moveCenter=!1,e._resizeCenter=!1,e._rotateCenter=!1,e._currectSelectId=d3.select(this).attr("id")}).on("mouseenter",function(){d3.select(this).style("fill","red")}).on("mouseleave",function(){console.log(" mouse leave !"),d3.select(this).style("fill","green")}),d3.select("#geometryFinish").style("visibility","visible")},this.getGeometry=function(){var e=[];return d3.selectAll(".define_circle").each(function(){e.push([+d3.select(this).attr("cx"),+d3.select(this).attr("cy")])}),e},this._init(),this}},function(e,t){e.exports=function(e){var t=this;return this._functionHub=e,this._currentMA={},this._liMAGeometry=[],this._init=function(){},this.addMAGeometry=function(e){return this._liMAGeometry.push(e),this.addAntDom(this._liMAGeometry.length-1),this._liMAGeometry.length-1},this.addAntDom=function(e){document.getElementById("antarea"),d3.selectAll(".antbutton").on("click",function(){var e=+d3.select(this).attr("index"),n=t._currentMA.path;if(null!=n){var r=t._functionHub._animateDomManager.getMetaInfobyIndex(e),a=t.getMAGeometrybyIndex(e).ant,i=r.antmodel;t.fitAnt(i,n,a.geotype,r.cenPosDisplace,r.normalLeft)}})},this.fitAnt=function(e,t,n,r,a){var i=t.geometry,l=(t.lengthperlist,1==a?t.liClockAngle_left:t.liClockAngle_right),o=1==a?t.liUniNormal_left:t.liUniNormal_right,s=e.clone(),c={x:i[0][0],y:i[0][1]};c.x+=r*o[0][0],c.y+=r*o[0][1],s.position=new Point(c.x,c.y),s.rotate(-l[0]);var u=[];s.segments.forEach(function(e){u.push([e.point._x,e.point._y])}),console.log("new ant",c),console.log("liAntPos",u),this.saveGeometryNew({type:"ant",geotype:"area"},u,s)},this.getMAGeometrybyIndex=function(e){if(e<this._liMAGeometry.length)return this._liMAGeometry[e]},this.updateGeometrybyEdit=function(e,t,n){var r=e[t];this.updateDom(r.dom,n);var a=this.computeLineSegInfoList(n),i=a.liUniNormal_left,l=a.liUniNormal_right,o=a.lengthPer,s=a.normalAngle,c=a.liUniNormal,u=this.computePerimeter(n);r={dom:r.dom,geometry:n,lengthperlist:o,normalanglelist:s,liUniNormal:c,liUniNormal_right:l,liUniNormal_left:i,liClockAngle_left:a.liClockAngle_left,liClockAngle_right:a.liClockAngle_right,perimeter:u},e[t]=r},this.saveGeometryNew=function(e,t,n,r){console.log(" SAVE ",e.type,t);for(var a="[",i=0;i<t.length;i++)a+="["+t[i][0]+","+t[i][1]+"],";a+="]",console.log(" liGeometry ",e.type,a);var l=document.getElementsByTagName("canvas");console.log("canvasid",n);var o=l[0].getBoundingClientRect(),s=[];for(i=0;i<t.length;i++){var c=t[i],u=[c[0]-o.left,c[1]];s.push(u)}t=s,console.log("Global Geo=",t,o);var d=$('input[name="geometrytype"]:checked').val();null!=e.type&&(d=e.type);var h=this.createDom(e.geotype,t,d),g=this.computeLineSegInfoList(t),v=g.liUniNormal_left,p=g.liUniNormal_right,f=g.lengthPer,y=g.normalAngle,m=g.liUniNormal,_=this.computePerimeter(t),b={geotype:e.geotype,dom:h,geometry:t,paperdom:r,lengthperlist:f,normalanglelist:y,liUniNormal:m,liUniNormal_right:p,liUniNormal_left:v,liClockAngle_left:g.liClockAngle_left,liClockAngle_right:g.liClockAngle_right,perimeter:_};this._currentMA[d]=b,console.log(" current ma ",this._currentMA)},this.fakeGeometryNew=function(e,t,n){var r=n,a={type:e,dom:this.createDom(e,t,r),geometry:t,lengthperlist:this.computeLengthPerList(t),perimeter:this.computePerimeter(t)};this._currentMA[r]=a},this.getCurrentMAGeometry=function(){if(null!=this._currentMA.path)return this._currentMA},this.clearCurrentMAGeometry=function(){this._currentMA={}},this.setCurrentMAGeometry=function(e){for(var t=Object.keys(this._currentMA),n=0;n<t.length;n++){var r=t[n];this._currentMA[r].dom.remove()}this._currentMA=e},this.setVisibleofGeometries=function(e){d3.selectAll(".define_geometry").style("visibility",function(e){return 1==e?"visible":"hidden"})},this.updateDom=function(e,t){if(0==e.empty()){var n=d3.line();e.attr("d",n(t))}return e},this.createDom=function(e,t,n){switch(e){case"polyline":var r=d3.line();return d3.select("#coversvg").append("path").attr("d",r(t)).attr("class",n+" define_geometry").style("stroke",function(){return"path"==n?"#03A9F4":"boundary"==n?"gray":"ant"==n?"black":void 0}).style("stroke-width","2px").style("fill","none");case"area":case"rect":case"circle":return console.log(" create area "),r=d3.line(),t.push(t[0]),d3.select("#coversvg").append("path").attr("class",n+" define_geometry").attr("d",r(t)).style("fill",function(){return"none"}).style("stroke",function(){return"path"==n?"#03A9F4":"boundary"==n?"orange":"ant"==n?"black":void 0})}return null},this.computePerimeter=function(e){for(var t=0,n=0;n<e.length-1;n++){var r=e[n],a=e[n+1];t+=Math.sqrt((r[0]-a[0])*(r[0]-a[0])+(r[1]-a[1])*(r[1]-a[1]))}return t},this.computeLineSegInfoList=function(e){for(var t=[],n=[0],r=[],a=[],i=[],l=[],o=[],s=[],c=0,u=0;u<e.length-1;u++){var d=e[u],h=e[u+1];c+=w=Math.sqrt((d[0]-h[0])*(d[0]-h[0])+(d[1]-h[1])*(d[1]-h[1])),t.push(w);var g={x:d[1]-h[1],y:h[0]-d[0]},v={x:-g.x,y:-g.y},p=g,f=Math.sqrt(p.x*p.x+p.y*p.y),y=[v.x/f,v.y/f],m=180*Math.acos(y[0])/Math.PI;y[1]>0&&(m=360-m),o.push(m);var _=[-y[0],-y[1]],b=180*Math.acos(_[0])/Math.PI;_[1]>0&&(b=360-b),s.push(b),a.push(y),i.push(y),l.push(_),p.y<0&&(p={x:-p.x,y:-p.y});var M=180*Math.acos(p.x/f)/Math.PI;r.push(M-90)}var w=0;for(u=0;u<t.length;u++)w+=t[u],n.push(w/c);return{lengthPer:n,normalAngle:r,liUniNormal:a,liUniNormal_left:i,liUniNormal_right:l,liClockAngle_left:o,liClockAngle_right:s}},this.computeLengthPerList=function(e){for(var t=[],n=[0],r=0,a=0;a<e.length-1;a++){var i=e[a],l=e[a+1];r+=o=Math.sqrt((i[0]-l[0])*(i[0]-l[0])+(i[1]-l[1])*(i[1]-l[1])),t.push(o)}var o=0;for(a=0;a<t.length;a++)o+=t[a],n.push(o/r);return n},this.setMAGeometryVisible=function(e,t){for(var n=1==t?"visible":"hidden",r=Object.keys(e),a=0;a<r.length;a++)e[r[a]].dom.style("visibility",n)},this._init(),this}},function(e,t,n){n(0),n(1),n(2);var r=n(6),a=(n(3),n(4),!1);window.loadMa=function(e,t){d3.json(e,function(e,n){(e&&console.log(e),console.log("json",n),console.log("loadcanvas",t),null==t)&&((a=document.createElement("canvas")).width=800,a.height=800,a.id="hhhcanvas",t=a.id,document.body.append(a));if(null!=t)var a=document.getElementById(t);console.log("canvas",a),paper.setup(a),paper.install(window),this._functionHub=r();for(var i=n.magroups,l=n.drawpath,o=Object.keys(i),s=0;s<o.length;s++){var c=o[s];this._functionHub.addMAbyGroupInfo(i[c],l,t)}this._functionHub._type="animate",this._functionHub.initFunc()})},window.MA_Start=function(){a=!0},window.MA_End=function(){this._functionHub._type="animate",this._functionHub.initFunc(),!1},window.marchingAnt=function(e,t,n,i,l,o,s,c){1==a&&(this._functionHub=r(),a=!1);var u=[],d={},h={};if(1==c){antModal=e,antModal.visible=!1;var g={dots:n},v={dots:t};u.push({boundary:g,path:v}),d.antinterval=30-i}else{antModal=void 0;var p=document.getElementsByTagName("canvas")[0];paper.setup(p),paper.install(window),console.log(" PATH ",t);v={geotype:"line",dots:t};var f={geotype:"area",dots:e};g={geotype:"area",dots:n};u.push({path:v,ant:f,boundary:g}),d.antinterval=35-i}d.ae="MA",d.antcolor=s,d.antgap=l,d.groupid=o,d.antshape="self-defined",h.malist=u,h.mainfo=d,null!=antModal?this._functionHub.addMAbyGroupwithExampleAnt(h,antModal):(void 0,this._functionHub.addMAbyGroupInfo(h,void 0,p.id))}},function(e,t,n){var r=n(0),a=n(1),i=n(2),l=n(3),o=n(4);e.exports=function(e){var t=this;return this._type=null,this._para=null,this._currentMAGeometryId=null,this._currentIntervalId=null,this._liHiddenMAIndex=[],this._liStoreMAIndex=[],this._init=function(e){console.log(" init funcHub"),this._geometryDefiner=new l,this._geometrySaver=new o(this),this._animateEditor=new a(this),this._animateEnhancer=new i,this._animateDomManager=new r(this),this._initLocal("22")},this._initLocal=function(e){(new FormData).append("name",e)},this.successSaveFunc=function(e,t){console.log("success save! ",e)},this.successFetchFunc=function(e,t){if(null!=e.ma){console.log("responsema",e.ma),document.getElementById("saveMAName").value=e.ma.name;var n=e.ma.magroups,r=e.ma.drawpath;console.log(" draw Path ",r);var a=Object.keys(n);console.log("liGroupId",a);for(var i=0;i<a.length;i++){var l=a[i];t.addMAbyGroupInfo(n[l],r)}t._type="animate",t.initFunc(),console.log(" success fetched ! ",e)}},this.addMAbyGroupwithExampleAnt=function(e,t,n){var r=e.mainfo,a=e.malist,i=["path","boundary"];if(null!=a)for(var l=0;l<a.length;l++){for(var o=a[l],s=0;s<i.length;s++){var c=i[s];null!=o[c]&&(this._geometrySaver.saveGeometryNew({type:c,geotype:o[c].geoType},o[c].dots),new Path(o[c].dots))}if(null!=n){console.log(" darw Path ",o.path.dots);var u=new Path({segments:o.path.dots});u.strokeColor="#dddddd",u.strokeWidth=.2}var d=this._geometrySaver.getCurrentMAGeometry().path;console.log("path geometry!!!",d),this._geometrySaver.fitAnt(t,d,"area",0,!1),d3.selectAll(".define_geometry").style("visibility","hidden");var h=this._geometrySaver.getCurrentMAGeometry();console.log(" MAGeometryInfo ",h,r);var g=this._geometrySaver.addMAGeometry(h);this._liStoreMAIndex.push(g);var v=this._animateEnhancer.activateDOM(h,r).metainfo;this._geometrySaver.clearCurrentMAGeometry(),this._animateDomManager.addMetaInfo(g,v),this._animateEditor.addMADoms(g,v)}},this.addMAbyGroupInfo=function(e,t,n){console.log("groupma",e);var r=e.malist,a=e.mainfo;if(null!=r)for(var i=["path","ant","boundary"],l=0;l<r.length;l++){for(var o=r[l],s=0;s<i.length;s++){var c=i[s];null!=o[c]&&(console.log(" create geo ",o[c].dots),this._geometrySaver.saveGeometryNew({type:c,geotype:o[c].geoType},o[c].dots,n))}var u=this._geometrySaver.getCurrentMAGeometry();console.log(" MAGeometryInfo ",u,a);var d=this._geometrySaver.addMAGeometry(u);this._liStoreMAIndex.push(d);var h=this._animateEnhancer.activateDOM(u,a).metainfo;this._geometrySaver.clearCurrentMAGeometry(),this._animateDomManager.addMetaInfo(d,h),this._animateEditor.addMADoms(d,h)}},this.setFunc=function(e){this._type=e.type,null!=e.para&&(this._para=e.para),console.log(" function hub ",this._type,this._para),this.initFunc()},this.setMAVisiblebyIndex=function(e,t){e?this._liHiddenMAIndex.splice(this._liHiddenMAIndex.indexOf(t),1):-1==this._liHiddenMAIndex.indexOf(t)&&this._liHiddenMAIndex.push(t)},this.stopFunc=function(e){switch(e.type){case"animate":this.setMAVisiblebyIndex(!1,e.para.maIndex)}},this.initFunc=function(){switch(this._type){case"new":case"editGeometry":this._geometryDefiner.beginMode(this._para);break;case"addGeometry":console.log(" add geo! ",this._para,this._geometryDefiner.getGeometry()),this._geometrySaver.saveGeometryNew(this._para,this._geometryDefiner.getGeometry()),this._geometryDefiner.clearMode();break;case"newadd":this._geometryDefiner.clearMode(),this._type="editanimate",this.initFunc();break;case"editanimate":console.log(" [2] begin ! edit animte ",this._currentMAGeometryId),this._animateEditor.editAnimate();break;case"stopani":console.log(" stop animate "),clearInterval(t._currentIntervalId);break;case"animate":var e=0;clearInterval(t._currentIntervalId),t._currentIntervalId=setInterval(function(){for(var n=t._animateDomManager.getMetaInfos(),r=Object.keys(n),a=0;a<r.length;a++){var i=+r[a],l=t._animateDomManager.getMetaInfobyIndex(i),o=l.antinterval;if(!(e%o>0)){var s=l.antoffsets,c=(l.antmodel,l.antwidth),u=(l.cenPosDisplace,l.perimeter),d=l.antgap,h=[];s.sort(function(e,t){return e-t});for(var g=0;g<s.length;g++){var v=s[g],p=t._animateDomManager.getAnt(i,v);if(p.visible=!1,(v+=1)>u+c/2)p.visible=!1;else if(!(t._liHiddenMAIndex.indexOf(i)>=0)){if(0==g&&v>=d-c/2){var f=-c/2;t._animateDomManager.getAnt(i,f).visible=!0,h.push(f)}t._animateDomManager.getAnt(i,v).visible=!0,h.push(v)}}l.antoffsets=h,t._animateDomManager.updateMetaInfo(i,l)}}e>1e6?e=0:e+=1},10);break;case"upload":for(var n="[",r=this._geometryDefiner.getGeometry(),a=0;a<r.length;a++)a==r.length-1?n+="["+r[a][0]+","+r[a][1]+"]":n+="["+r[a][0]+","+r[a][1]+"],";n+="]",alert(n);break;case"saveDB":var i=document.getElementById("saveMAName").value,l={};l.name=i;var o=t._animateDomManager.getMetaInfos();console.log(" save to db ",Object.keys(o).length,t._liStoreMAIndex);var s={};for(var c in o){var u={},d=t._geometrySaver.getMAGeometrybyIndex(c),h=o[c];null!=d.path&&(u.path={geotype:d.path.geotype,dots:d.path.geometry}),null!=d.ant&&(u.ant={geotype:d.ant.geotype,dots:d.ant.geometry}),null!=d.boundary&&(u.boundary={geotype:d.boundary.geotype,dots:d.boundary.geometry});var g=h.groupid;if(null==s[g]){var v={ae:"MA",groupid:g,antgap:h.antgap,antcolor:h.antcolor,antshape:"self-defined",antinterval:h.antinterval},p=[u];s[g]={mainfo:v,malist:p}}else console.log(" add! "),s[g].malist.push(u)}l.magroups=s;var f=new FormData;f.append("ma",JSON.stringify(l)),lSendUrl("POST","http://localhost:20082/saveMA",f,this.successSaveFunc,this)}},this._init(e),this}}]);