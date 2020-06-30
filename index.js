// Ceskenoviny

var aheadEl = document.getElementById('ahead');
if (aheadEl) {
  aheadEl.style.display = 'none';
}

var brandingEl = document.getElementById('branding');
if (brandingEl) {
  brandingEl.style.display = 'none';
}

var motherEl = document.getElementById('mother');
if (motherEl) {
  motherEl.style.top = 'auto';
}


// Zpravy.aktualne
setTimeout(function() {
  var reklamaEls = document.getElementsByClassName('sa-show');

  for (var el of reklamaEls) {
    el.classList.remove('sa-show');
    el.style.display = 'none';
  }
}, 2000);

