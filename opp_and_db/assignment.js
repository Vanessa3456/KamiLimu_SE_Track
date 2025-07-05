class Book{
    constructor(title, author, isbn, borrower){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
        this.isCheckOut=false;
        this.borrower=null;
    }
    checkOut(member){
        if(this.isCheckOut == true){
            return false;
        }
        console.log(`Book checked out by ${member}`);
    }
    returnBook(){
    }
}

class Member{
    constructor(name,memberId){
        this.name=name;
        this.memberId=memberId;
        this.borrowedBooks=[];
    }

    borrow(book){        
    }
    return(book){

    }
}