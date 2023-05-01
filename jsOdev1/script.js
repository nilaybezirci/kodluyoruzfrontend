let name = prompt("Adınız nedir");
let textInfo;
let info = document.querySelector("#info");
info.innerHTML = ` ${name}! `;

function tarihSaat() {
  var date = new Date().toLocaleString("tr-TR");
  document.getElementById("zaman").innerHTML = date;
}
// her 1 saniyede tarihSaat fonksiyonunu yeniden çalıştır
setInterval(tarihSaat, 1000);
