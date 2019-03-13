class Reviews {
    constructor(element) {
        this.element = element;
        // console.log(this.element);

        this.elements = element.querySelectorAll('.review');
        // console.log(this.elements);

        this.currentIndex = 0;
        // console.log(this.currentIndex);

        this.elements.forEach(element => {
            element.classList.add('review-hide');
            // console.log(this.elements);
        });

        this.elements[this.currentIndex].classList.add('review');
        this.elements[this.currentIndex].classList.remove('review-hide');
        // console.log(this.elements);

        setInterval(() => this.slide(), 3000);

    }

    slide() {
        if(this.currentIndex === 3) {
            this.elements[this.currentIndex].classList.add('review-hide');
            this.elements[this.currentIndex].classList.remove('review');
            this.currentIndex = 0
            this.elements[this.currentIndex].classList.add('review');
            this.elements[this.currentIndex].classList.remove('review-hide');
            // console.log(this.elements);
        } else {
            this.elements[this.currentIndex].classList.add('review-hide');
            this.elements[this.currentIndex].classList.remove('review');
            this.currentIndex = this.currentIndex + 1;
            this.elements[this.currentIndex].classList.add('review');
            this.elements[this.currentIndex].classList.remove('review-hide');
            // console.log(this.elements);
        }
    }
}


let reviews = document.querySelector('.customer-reviews');
// console.log(reviews);

new Reviews(reviews);

