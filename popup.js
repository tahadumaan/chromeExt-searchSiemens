document.getElementById("urunKodu").focus();

document.addEventListener(
  "DOMContentLoaded",
  function () {
    document.querySelector("button").addEventListener("click", onclick, false);
    function onclick() {
      chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        var urunKodu = document.getElementById("urunKodu").value;
        document.getElementById("demo").innerHTML = urunKodu;
        chrome.tabs.create({
          url: `https://mall.industry.siemens.com/mall/en/WW/Catalog/Product/${urunKodu}`,
        });
      });
    }
  },
  false
);

document.addEventListener(
  "keyup",
  function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("search").click();
    }
  },
  false
);

//BU PROGRAMI TAHA DUMAN YAPMIŞTIR
//BİRAZ DA ONUR ERDEMİROGLU YAPMIŞTIR
//AMA ÇOK AZ BAYA AZ
