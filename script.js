function goToSecondPage() {
  window.location.href = "metar.html";
}

document.addEventListener("DOMContentLoaded", function() {
  // Example METAR report
  var metarExample = "METAR KJFK 011751Z 23012KT 10SM FEW030 BKN250 30/20 A2992 RMK AO2 SLP131 T03000200 10311 20200 51010";

  // Display the METAR example on the second page
  var metarExampleElement = document.getElementById("metarExample");
  metarExampleElement.textContent = metarExample;
});
