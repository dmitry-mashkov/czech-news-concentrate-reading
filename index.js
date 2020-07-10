// Ceskenoviny

(function () {
    const aheadEl = document.getElementById('ahead');
    if (aheadEl) {
        aheadEl.style.display = 'none';
    }

    const brandingEl = document.getElementById('branding');
    if (brandingEl) {
        brandingEl.style.display = 'none';
    }

    const motherEl = document.getElementById('mother');
    if (motherEl) {
        motherEl.style.top = 'auto';
    }
})();


// Zpravy.aktualne
setTimeout(function () {
    const reklamaEls = document.getElementsByClassName('sa-show');

    for (let el of reklamaEls) {
        el.classList.remove('sa-show');
        el.style.display = 'none';
    }
}, 2000);


// e15
(function () {
    const topBannerEl = document.getElementById('topSite');
    if (topBannerEl) {
        topBannerEl.style.display = 'none';
    }

    setTimeout(function () {
        const clickableBannerEl = document.getElementById('brandingCreativeWrapper');
        if (clickableBannerEl) {
            clickableBannerEl.style.display = 'none';
        }
    }, 500);
})();

// Novinky.cz
(function () {
    const ogmBrandingEl = document.querySelector('.ogm-branding');

    if (ogmBrandingEl) {
        const config = {childList: true, subtree: true};

        const callback = function () {
            const brandingEl = document.querySelector('.ogm-branding > div > div > div > div');
            if (brandingEl) {
                brandingEl.parentNode.removeChild(brandingEl);
            }

            const sidebarEl = document.querySelector('#accessibility-sidebar~div');
            if (sidebarEl) {
                sidebarEl.parentNode.removeChild(sidebarEl);
            }
        };

        const observer = new MutationObserver(callback);

        observer.observe(document.body, config);
    }
})();
