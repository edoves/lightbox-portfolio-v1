class LightBox {
    constructor() {
        this.lightBoxContainer = document.querySelector('.lightbox__items');
        this.body = document.body;

        // overlay markup
        this.overlay = document.createElement('div');
        this.overlay__content = document.createElement('div');
        this.image = document.createElement('img');
        this.close = document.createElement('a')
        this.events();
    }

    events() {
        this.lightBoxContainer.addEventListener('click', this.lighBoxInfo.bind(this), false);
        this.close.addEventListener('click', this.closeBox.bind(this));
    }

    lighBoxInfo(e) {
        e.preventDefault();
        // console.log(e);
        if (e.target.tagName === 'IMG') {
            // console.log(e.target.src);
            const imgaSrc = e.target.src
            this.overlay.className = 'overlay';
            this.overlay__content.className = 'overlay__content';
            this.image.setAttribute('src', imgaSrc);

            this.close.id = 'close';
            this.close.textContent = 'X';
            this.close.setAttribute('href', '#');

            this.overlay__content.appendChild(this.image);
            this.overlay__content.appendChild(this.close);
            this.overlay.appendChild(this.overlay__content);
            console.log(this.overlay);
            this.body.appendChild(this.overlay);
        }
    }

    closeBox() {
        this.body.removeChild(this.overlay).style.transform = 'transform: translate(-2%, -11%) scale(0)';
    }
}


const lightBox = new LightBox();