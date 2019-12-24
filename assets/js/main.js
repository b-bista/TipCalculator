function calcTip(ordSub, tRate){
  return ordSub * tRate;
}
function calcResult(){
  var orderSubtotal=document.forms["tipForm"]["orderSubtotal"].value;
  var nSplit=document.forms["tipForm"]["nSplit"].value;
  var tipRate=document.forms["tipForm"]["tipRate"].value;
  
  var orderTotal=orderSubtotal + calcTip(orderSubtotal, tipRate);
  var tipTotal=calcTip(orderSubtotal, tipRate);
  var splitTotal=orderTotal/nSplit;
  
  var result = ("The total bill with tip is: " + orderTotal + 
                "\nThe total tip amount is: " + tipTotal +
               "\nThe total amount owed per person is: " +splitTotal);
  
  document.getElementById("result").innerHTML = result;
}