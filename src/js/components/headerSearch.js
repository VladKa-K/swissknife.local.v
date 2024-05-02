document.addEventListener("DOMContentLoaded", function() { 
    const searchHeaderBtn = document.querySelector('.js--search-header-btn');
    const searchInputWrap = document.querySelector('.js--search-input-wrap');
    const searchInput = document.querySelector('.js--search-input-wrap input');
    const HEADER = document.querySelector('header');
    const headerSearchResults = document.querySelector('.js--header-search-results');
    const pagesJson = 'data/pages.json';
    const pages = [];

    fetch(pagesJson)
        .then(blob => blob.json())
        .then(data => pages.push(...data));

    function findMatches(wordToMatch, pages) {
        return pages.filter(place => {
            const regex = new RegExp(wordToMatch, 'gi');
            return place.name.match(regex);
        });
    }
    
    // function numberWithCommas(x) {
    //     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    // }

    function searchHeaderBtnClick() {
        searchInputWrap.classList.toggle('is-active');
        searchInput.value = '';
        headerSearchResults.innerHTML = '';
        searchInput.focus();
    }

    function searchOnChanged() {
        if(this.value === '') {
            headerSearchResults.innerHTML = '';
        } else {
            const matchArray = findMatches(this.value, pages);
            const html = matchArray.map(place => {
                const regex = new RegExp(this.value, 'gi');
                const pageName = place.name.replace(regex, `<span class="bg-light-green">${this.value}</span>`);
                return `
                <li>
                    <a class="name" href="${place.url}">${pageName}</a>
                </li>
                `;
            }).join('');
            headerSearchResults.innerHTML = html;
        }
    }

    function clickAnywhere(e) {
        if(HEADER.contains(e.target)) return;
        searchFormClose();
    }

    function searchFormClose() {
        searchInputWrap.classList.remove('is-active');
    }

    
    searchHeaderBtn.addEventListener('click', searchHeaderBtnClick);
    // searchInput.addEventListener('change', searchOnChanged);
    searchInput.addEventListener('keyup', searchOnChanged);
    window.addEventListener('click', clickAnywhere);
    window.addEventListener('keyup', (e) => {
        if(e.keyCode === 27) {
            searchFormClose();
        }
    });
});