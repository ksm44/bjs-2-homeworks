/* Задача 1. Печатное издание */

class PrintEditionItem{
    constructor (name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = state;
        this.type = type;
    }
    
    fix() {
        this.state *= 1.5;
    }
    
    set state(number) {
        if (number < 0){
            this._state = 0;
        } else if(number > 100){
            this._state = 100;
        } else {
            this._state = number;
        }
    }
    
    get state() {
        return this._state;
    }
    
}

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state, type);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state, type);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);
        this.type = "novel";
    }
}

class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);
        this.type = "detective";
    }
}

/* Задача 2. Библиотека */
class Library{
    constructor(name){
        this.name = name;
        this.books = [];
    }
    
    addBook(book){
        if (book.state > 30){
            this.books.push(book);
        }
    }
    
    findBookBy(type, value){
        for (const book of this.books) {
            if(book[type] === value) {
                return book;
            }
        }
        return null;
    }
    
    giveBookByName(bookName){
        for (let i = 0; i < this.books.length; i++) {
            const book = this.books[i];
            if(book.name === bookName) {
                return this.books.splice(i, 1)[0];
            }
        }
        return null;
    }
}

/* Задача 3. Журнал успеваемости */
class Student{
    constructor(name){
        this.name = name;
        this.marks = {}; 
    }
    
    addMark(mark, subject){
        if (mark >= 2 && mark <= 5) {
            if (!this?.marks[subject]) {
                this.marks[subject] = [];
            }
            this.marks[subject].push(mark);
        }
    }
    
    getAverageBySubject(subject){
        if (this?.marks[subject]){
            const result = this.marks[subject].reduce((acc, item, index, arr) => {
                acc += item;
                
                if (index === arr.length - 1){
                    return acc / arr.length;
                }
                return acc;
           }, 0);
           
           return result; 
        } else {
            return 0;
        }
    }
    
    getAverage(){
        const result = Object.keys(this.marks).reduce((acc, item, index, arr) => {
            acc += this.getAverageBySubject(item);
            
            if(index === arr.length - 1) {
                return acc / arr.length;
            }
            return acc;
        }, 0);
        
        return result;
    }
}