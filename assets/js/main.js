function calcTip(ordSub, tRate){
  return ordSub * tRate;
}
function calcResult(){
  var orderSubtotal=parseFloat(document.forms["tipForm"]["orderSubtotal"].value);
  var nSplit=parseFloat(document.forms["tipForm"]["nSplit"].value);
  var tipRate=parseFloat(document.forms["tipForm"]["tipRate"].value);

  var orderTotal=orderSubtotal + calcTip(orderSubtotal, tipRate);
  var tipTotal=calcTip(orderSubtotal, tipRate);
  var splitTotal=orderTotal/nSplit;

  var result = ("The total bill with tip is: " + (orderTotal.toFixed(2)) +
                ". The total tip amount is: " + (tipTotal.toFixed(2)) +
               ". The total amount owed per person is: " + (splitTotal.toFixed(2)) );

  document.getElementById("result").innerHTML = result;
}
