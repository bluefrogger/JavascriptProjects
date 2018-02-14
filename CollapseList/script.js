const names = {
    init: function() {
        this.collapseListEvent();
    },
    collapseListEvent: function() {
        //let sectionBoys = document.querySelector('.section-boys');
        let sectionBoys = document.querySelector('.h1-boys');
        sectionBoys.addEventListener('click', this.toggleDisplay);
        //let sectionGirls = document.querySelector('.section-girls');
        let sectionGirls = document.querySelector('.h1-girls');
        sectionGirls.addEventListener('click', this.toggleDisplay);
    },
    toggleDisplay: function(event) {
        const displayValue = 'block';
        let list = event.currentTarget.parentNode.querySelector('.unordered-list');
        let displayValueCurrent = window.getComputedStyle(list).display;
        
        const upTriangle = '\u25B2';
        const downTriangle = '\u25BC';
        //let header = event.currentTarget.querySelector('.h1-names');
        let header = event.currentTarget;

        if (displayValueCurrent === 'none') {
            list.style.display = displayValue;
            header.innerText = header.innerText.substring(0, header.innerText.length - 1) + upTriangle;
        } else {
            list.style.display = 'none';
            header.innerText = header.innerText.substring(0, header.innerText.length - 1) + downTriangle;
        }
    },
};

document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        names.init();
  }
}

