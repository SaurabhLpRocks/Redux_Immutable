console.clear();
var str='{\"a\":\"a\"}&&{\"a\":\"a\"}&&((({\"a\":\"a\"})||{\"a\":\"a\"}||{\"a\":\"a\"})&&{\"a\":\"a\"}&&{\"a\":\"a\"})&&{\"a\":\"a\"}'

function  stringtoObje(str,addObj){
  if(!str) return false;

   var obj=addObj||{rules:[],isGroup:true,oparator:''}
  if(str.indexOf('(')>-1){
  
    var tt=removePartOfString(str,str.indexOf('('),str.lastIndexOf(')'));
    
    console.log(tt)
    tt.map(function(e){
      if(e.startsWith('(')){
        obj.rules.push( stringtoObje(e.substr(1,e.length-2)))
      }else{
        stringtoObje(e,obj)
      }
  return ;
    })
  }else{

  if(str.indexOf('|')>-1){
   str.split('||').map(function(a){if(a) obj.rules.push(JSON.parse(a)); return '';})
 obj.oparator='and';
  }else{
       str.split('&&').map(function(a){if(a) obj.rules.push(JSON.parse(a)); return '';})
    obj.oparator='or';
  }
    }
  return obj;
} 

function removePartOfString(str,start,end){
  return [str.substring(0,start),str.substring(start,end+1),str.substring(end+1,str.length)];
}
console.log(stringtoObje(str));