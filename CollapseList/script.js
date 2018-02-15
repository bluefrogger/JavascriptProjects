const names = {
    init: function() {
        this.AddEvents();
    },
    AddEvents: function() {
        let sectionBoys = document.querySelector('.h1-boys');
        sectionBoys.addEventListener('click', this.toggleDisplay);
        let sectionGirls = document.querySelector('.h1-girls');
        sectionGirls.addEventListener('click', this.toggleDisplay);

        let listItems = document.querySelectorAll('li');
        for (let i = 0; i < listItems.length; ++i) {
            listItems[i].addEventListener('click', this.moveListItem);
        }
    },
    toggleDisplay: function(event) {
        const displayValue = 'block';
        let list = event.currentTarget.parentNode.querySelector('.unordered-list');
        let displayValueCurrent = window.getComputedStyle(list).display;
        
        const upTriangle = '\u25B2';
        const downTriangle = '\u25BC';
        let header = event.currentTarget;

        if (displayValueCurrent === 'none') {
            list.style.display = displayValue;
            header.innerText = header.innerText.substring(0, header.innerText.length - 1) + upTriangle;
        } else {
            list.style.display = 'none';
            header.innerText = header.innerText.substring(0, header.innerText.length - 1) + downTriangle;
        }
    },
    moveListItem: function(event) {
        let listItem = event.target;
        let listClasses = event.target.parentNode.classList;
        if (listClasses.contains('unordered-list-boys')) {
            document.querySelector('.unordered-list-boys').removeChild(listItem);
            document.querySelector('.unordered-list-girls').appendChild(listItem);
        } else {
            document.querySelector('.unordered-list-girls').removeChild(listItem);
            document.querySelector('.unordered-list-boys').appendChild(listItem);
        }
    }
};

document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        names.init();
  }
}

