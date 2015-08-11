 function Time(a,b){
  var t=Date, o=new t(t.now()), s=a||'en-US', f=b||{year:'numeric',month:'2-digit',day:'2-digit'};

  return {'time':o,'locale':s,'format':f,'toString':function(){return o.toLocaleDateString(s,f);}};

 };

Today=Time();
console.log(Today+'');
console.dir(Today);


date2hms=function(t){var o=t,f=function(x){var n=x;return n<10?'0'+n:n;};return [f(o.getHours()),f(o.getMinutes()),f(o.getSeconds())].join(':');},
