
function restart(){
   location.reload();
}

flag=1;
function myfn(btnval){
   if(flag==1){
      document.getElementById("txtmsg").innerHTML="Player O Turn";
      document.getElementById(btnval).innerHTML="X";
      document.getElementById(btnval).classList.add('disabledbutton');
      flag=0;
   }
   else{
      document.getElementById("txtmsg").innerHTML="Player X Turn"
      document.getElementById(btnval).innerHTML="O";
      document.getElementById(btnval).classList.add('disabledbutton');
      flag=1;
      
   }  
}

function checkwin(){
   var b1,b2,b3,b4,b5,b6,b7,b8,b9;
   b1=document.getElementById("btn1").innerHTML;
   b2=document.getElementById("btn2").innerHTML;
   b3=document.getElementById("btn3").innerHTML;
   b4=document.getElementById("btn4").innerHTML;
   b5=document.getElementById("btn5").innerHTML;
   b6=document.getElementById("btn6").innerHTML;
   b7=document.getElementById("btn7").innerHTML;
   b8=document.getElementById("btn8").innerHTML;
   b9=document.getElementById("btn9").innerHTML;
   
   //Chances for Player X or Player O to won
   chance1Player1=(b1=="X" && b2=="X" && b3=="X");
   chance1Player2=(b1=="O" && b2=="O" && b3=="O");
   chance2Player1=(b1=="X" && b4=="X" && b7=="X");
   chance2Player2=(b1=="O" && b4=="O" && b7=="O");
   chance3Player1=(b7=="X" && b8=="X" && b9=="X");
   chance3Player2=(b7=="O" && b8=="O" && b9=="O");
   chance4Player1=(b3=="X" && b6=="X" && b9=="X");
   chance4Player2=(b3=="O" && b6=="O" && b9=="O");
   chance5Player1=(b1=="X" && b5=="X" && b9=="X");
   chance5Player2=(b1=="O" && b5=="O" && b9=="O");
   chance6Player1=(b2=="X" && b5=="X" && b8=="X");
   chance6Player2=(b2=="O" && b5=="O" && b8=="O");
   chance7Player1=(b4=="X" && b5=="X" && b6=="X");
   chance7Player2=(b4=="O" && b5=="O" && b6=="O");
   chance8Player1=(b3=="X" && b5=="X" && b7=="X");
   chance8Player2=(b3=="O" && b5=="O" && b7=="O");

   if(chance1Player1 == true){
      printresult("btn1","btn2","btn3","X");
      disablebutton("btn4","btn5","btn6","btn7","btn8","btn9");
   }
   else if(chance1Player2 == true){
      printresult("btn1","btn2","btn3","O")
      disablebutton("btn4","btn5","btn6","btn7","btn8","btn9");
   }
   else if(chance2Player1 == true){
      printresult("btn1","btn4","btn7","X")
      disablebutton("btn2","btn3","btn5","btn6","btn8","btn9");
   }
   else if(chance2Player2 == true){
      printresult("btn1","btn4","btn7","O")
      disablebutton("btn2","btn3","btn5","btn6","btn8","btn9");
   }
   else if(chance3Player1 == true){
      printresult("btn7","btn8","btn9","X")
      disablebutton("btn1","btn2","btn3","btn4","btn5","btn6");
   }
   else if(chance3Player2 == true){
      printresult("btn7","btn8","btn9","O")
      disablebutton("btn1","btn2","btn3","btn4","btn5","btn6");
   }
   else if(chance4Player1 == true){
      printresult("btn3","btn6","btn9","X")
      disablebutton("btn1","btn2","btn4","btn5","btn7","btn8");
   }
   else if(chance4Player2 == true){
      disablebutton("btn1","btn2","btn4","btn5","btn7","btn8");
   }
   else if(chance5Player1 == true){
      printresult("btn1","btn5","btn9","X")
      disablebutton("btn2","btn3","btn4","btn6","btn7","btn8");
   }
   else if(chance5Player2 == true){
      printresult("btn1","btn5","btn9","O")
      disablebutton("btn2","btn3","btn4","btn6","btn7","btn8");
   }
   else if(chance6Player1 == true){
      printresult("btn2","btn5","btn8","X")
      disablebutton("btn1","btn3","btn4","btn6","btn7","btn9");
   }
   else if(chance6Player2 == true){
      printresult("btn2","btn5","btn8","O")
      disablebutton("btn1","btn3","btn4","btn6","btn7","btn9");
   }
   else if(chance7Player1 == true){
      printresult("btn4","btn5","btn6","X")
      disablebutton("btn1","btn2","btn3","btn7","btn8","btn9");
   }
   else if(chance7Player2 == true){
      printresult("btn4","btn5","btn6","O")
      disablebutton("btn1","btn2","btn3","btn7","btn8","btn9");
   }
   else if(chance8Player1 == true){
      printresult("btn3","btn5","btn7","X")
      disablebutton("btn1","btn2","btn4","btn6","btn8","btn9");
   }
   else if(chance8Player2 == true){
      printresult("btn3","btn5","btn7","O")
      disablebutton("btn1","btn2","btn4","btn6","btn8","btn9");
   }
   else if((b1=="X" || b1=="O") && (b2=="X" || b2=="O") &&
   (b3=="X" || b3=="O") && (b4=="X" || b4=="O") && 
   (b5=="X" || b5=="O") && (b6=="X" || b6=="O") && 
   (b7=="X" || b7=="O") && (b8=="X" || b8=="O") && (b9=="X" || b9=="O")){
      document.getElementById("txtmsg").innerHTML="Match Tie!Game Finished"
      document.getElementById("container").classList.add("disabledbutton");
   }

}

function printresult(winbtn1,winbtn2,winbtn3,player){

   document.getElementById(winbtn1).style.color="red";
   document.getElementById(winbtn2).style.color="red";
   document.getElementById(winbtn3).style.color="red";

   if(player == "X"){
      document.getElementById("txtmsg").innerHTML="Congrats!Player X Won";
      
   }
   else{
      document.getElementById("txtmsg").innerHTML="Congrats!Player O Won";
      
   }
}
 function disablebutton(losebtn1,losebtn2,losebtn3,losebtn4,losebtn5,losebtn6){
   document.getElementById(losebtn1).classList.add('disabledbutton');
   document.getElementById(losebtn2).classList.add('disabledbutton');
   document.getElementById(losebtn3).classList.add('disabledbutton');
   document.getElementById(losebtn4).classList.add('disabledbutton');
   document.getElementById(losebtn5).classList.add('disabledbutton');
   document.getElementById(losebtn6).classList.add('disabledbutton');
 }

