class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    toggleCheckedOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }

    getAverageRating() {
        const totalRatings = this.ratings.reduce(function(a, b){
            return a + b;
        }, 0);

        return totalRatings/this._ratings.length;
    }

    addRating(value) {
        this._ratings.push(value);
    }
}

class Book extends Media {
    constructor(title, author, pages) {
        super(title); 
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(title, director, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }
}

const blitzed = new Book('Blitzed', 'Norman Ohler', 368);
blitzed.toggleCheckedOutStatus(true);
blitzed.addRating(5);
blitzed.addRating(5);
blitzed.addRating(4.5);
blitzed.getAverageRating(); // 4.833333


const speed = new Movie('Speed', 'Jan de Bont', 116);
speed.toggleCheckOutStatus();
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);


console.log(blitzed.getAverageRating());