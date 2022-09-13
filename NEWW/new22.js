function res(){
    var u=parseInt(document.getElementById("mark").value);
    
    if(u >=91){
        document.getElementById("resl").value ="A+";
     // document.write('A+');
   }
   else if(u>=80 && u<=90){
    document.getElementById("resl").value ="A";
   }
   else{
    document.getElementById("resl").value ="fail";
   }

}
//if(u>=81 && u<=90){
 //   document.write('A+');
//}