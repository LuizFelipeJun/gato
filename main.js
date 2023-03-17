document.getElementById("gatos1").style.display = "none";
document.getElementById("gatos2").style.display = "none";
document.getElementById("gatos3").style.display = "none";
document.getElementById("gatos4").style.display = "none";
document.getElementById("gatos5").style.display = "none";
document.getElementById("gatos6").style.display = "none";

var numAleatorio = 0;

function gatoMudar() {
   var numAleatorio = Math.floor(Math.random() * (6 - 1 + 1) + 1);
   console.log(numAleatorio);
   if(document.getElementById("gatos1") == document.getElementById("gatos" + numAleatorio)) {
      document.getElementById("gatos" + numAleatorio).style.display = "block";
      document.getElementById("gatos" + numAleatorio).style.marginLeft = "auto";
      document.getElementById("gatos" + numAleatorio).style.marginRight = "auto";
   } else {
      document.getElementById("gatos1").style.display = "none";
   }

   if(document.getElementById("gatos2") == document.getElementById("gatos" + numAleatorio)) {
      document.getElementById("gatos" + numAleatorio).style.display = "block";
      document.getElementById("gatos" + numAleatorio).style.marginLeft = "auto";
      document.getElementById("gatos" + numAleatorio).style.marginRight = "auto";
   } else {
      document.getElementById("gatos2").style.display = "none";
   }

   if(document.getElementById("gatos3") == document.getElementById("gatos" + numAleatorio)) {
      document.getElementById("gatos" + numAleatorio).style.display = "block";
      document.getElementById("gatos" + numAleatorio).style.marginLeft = "auto";
      document.getElementById("gatos" + numAleatorio).style.marginRight = "auto";
   } else {
      document.getElementById("gatos3").style.display = "none";
   }

   if(document.getElementById("gatos4") == document.getElementById("gatos" + numAleatorio)) {
      document.getElementById("gatos" + numAleatorio).style.display = "block";
      document.getElementById("gatos" + numAleatorio).style.marginLeft = "auto";
      document.getElementById("gatos" + numAleatorio).style.marginRight = "auto";
   } else {
      document.getElementById("gatos4").style.display = "none";
   }

   if(document.getElementById("gatos5") == document.getElementById("gatos" + numAleatorio)) {
      document.getElementById("gatos" + numAleatorio).style.display = "block";
      document.getElementById("gatos" + numAleatorio).style.marginLeft = "auto";
      document.getElementById("gatos" + numAleatorio).style.marginRight = "auto";
   } else {
      document.getElementById("gatos5").style.display = "none";
   }

   if(document.getElementById("gatos6") == document.getElementById("gatos" + numAleatorio)) {
      document.getElementById("gatos" + numAleatorio).style.display = "block";
      document.getElementById("gatos" + numAleatorio).style.marginLeft = "auto";
      document.getElementById("gatos" + numAleatorio).style.marginRight = "auto";
   } else {
      document.getElementById("gatos6").style.display = "none";
   }

} 