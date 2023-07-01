// // 动态心跳
// $(document).ready(function(e) {
//     $('.copyright').html('©2021 <i class="fa-fw fas fa-heartbeat card-announcement-animation cc_pointer"></i> By 竹山一叶');
// })
//
// $(document).ready(function(e) {
//     show_date_time();
// })
//
// //本站运行时间
// function show_date_time() {
//     $('.framework-info').html('本站已运行<span id="span_dt_dt" style="color: #fff;"></span>');
//     window.setTimeout("show_date_time()", 1000);
//     BirthDay=new Date("1/20/2021 0:0:0");
//     today=new Date();
//     timeold=(today.getTime()-BirthDay.getTime());
//     sectimeold=timeold/1000
//     secondsold=Math.floor(sectimeold);
//     msPerDay=24*60*60*1000
//     e_daysold=timeold/msPerDay
//     daysold=Math.floor(e_daysold);
//     e_hrsold=(e_daysold-daysold)*24;
//     hrsold=Math.floor(e_hrsold);
//     e_minsold=(e_hrsold-hrsold)*60;
//     minsold=Math.floor((e_hrsold-hrsold)*60);
//     seconds=Math.floor((e_minsold-minsold)*60);
//     span_dt_dt.innerHTML='<font style="color:#afb4db">'+daysold+'</font> 天 <font style="color:#f391a9">'+hrsold+'</font> 时 <font style="color:#fdb933">'+minsold+'</font> 分 <font style="color:#a3cf62">'+seconds+'</font> 秒';
// }
//
// // 动态心跳
// $(document).ready(function(e) {
//     $('.copyright').html('©2021 <i class="fa-fw fas fa-heartbeat card-announcement-animation cc_pointer"></i> By 竹山一叶');
// })
//
// $(document).ready(function(e) {
//     show_date_time();
// })
//
// //本站运行时间
// function show_date_time() {
//     $('.framework-info').html('本站已运行<span id="span_dt_dt" style="color: #fff;"></span>');
//     window.setTimeout("show_date_time()", 1000);
//     BirthDay=new Date("1/20/2021 0:0:0");
//     today=new Date();
//     timeold=(today.getTime()-BirthDay.getTime());
//     sectimeold=timeold/1000
//     secondsold=Math.floor(sectimeold);
//     msPerDay=24*60*60*1000
//     e_daysold=timeold/msPerDay
//     daysold=Math.floor(e_daysold);
//     e_hrsold=(e_daysold-daysold)*24;
//     hrsold=Math.floor(e_hrsold);
//     e_minsold=(e_hrsold-hrsold)*60;
//     minsold=Math.floor((e_hrsold-hrsold)*60);
//     seconds=Math.floor((e_minsold-minsold)*60);
//     span_dt_dt.innerHTML='<font style="color:#afb4db">'+daysold+'</font> 天 <font style="color:#f391a9">'+hrsold+'</font> 时 <font style="color:#fdb933">'+minsold+'</font> 分 <font style="color:#a3cf62">'+seconds+'</font> 秒';
// }
//
function dark() {window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;var n,e,i,h,t=.05,s=document.getElementById("universe"),o=!0,a="180,184,240",r="226,225,142",d="226,225,224",c=[];function f(){n=window.innerWidth,e=window.innerHeight,i=.216*n,s.setAttribute("width",n),s.setAttribute("height",e)}function u(){h.clearRect(0,0,n,e);for(var t=c.length,i=0;i<t;i++){var s="c[i];s.move(),s.fadeIn(),s.fadeOut(),s.draw()}}function" y(){this.reset="function(){this.giant=m(3),this.comet=!this.giant&&!o&&m(10),this.x=l(0,n-10),this.y=l(0,e),this.r=l(1.1,2.6),this.dx=l(t,6*t)+(this.comet+1-1)*t*l(50,120)+2*t,this.dy=-l(t,6*t)-(this.comet+1-1)*t*l(50,120),this.fadingOut=null,this.fadingIn=!0,this.opacity=0,this.opacityTresh=l(.2,1-.4*(this.comet+1-1)),this.do=l(5e-4,.002)+.001*(this.comet+1-1)},this.fadeIn=function(){this.fadingIn&&(this.fadingIn=!(this.opacity">this.opacityTresh),this.opacity+=this.do)},this.fadeOut=function(){this.fadingOut&&(this.fadingOut=!(this.opacity<0),this.opacity-=this.do 2,(this.x>n||this.y<0)&&(this.fadingOut=!1,this.reset()))},this.draw=function(){if(h.beginPath(),this.giant)h.fillStyle="rgba("+a+","+this.opacity+")",h.arc(this.x,this.y,2,0,2*Math.PI,!1);else if(this.comet){h.fillstyle="rgba(" +d+","+this.opacity+")",h.arc(this.x,this.y,1.5,0,2*math.pi,!1);for(var t="0;t<30;t++)h.fillStyle="rgba("+d+","+(this.opacity-this.opacity/20*t)+")",h.rect(this.x-this.dx/4*t,this.y-this.dy/4*t-2,2,2),h.fill()}else" h.fillstyle="rgba(" +r+","+this.opacity+")",h.rect(this.x,this.y,this.r,this.r);h.closepath(),h.fill()},this.move="function(){this.x+=this.dx,this.y+=this.dy,!1===this.fadingOut&&this.reset(),(this.x">n-n/4||this.y</0)&&(this.fadingOut=!1,this.reset()))},this.draw=function(){if(h.beginPath(),this.giant)h.fillStyle="rgba("+a+","+this.opacity+")",h.arc(this.x,this.y,2,0,2*Math.PI,!1);else></0),this.opacity-=this.do></t;i++){var>