SQL Version
1.create table Books(title varChar(20), author varChar(20), isbn INT, isCheckedOut Boolean primary key(title))
2.create table Members(name varChar(20), memberId INT, borrowedBooks varChar(40))


1.For Book, below are the columns
~title(varChar)
~author(varChar)
~isbn(int)
~isCheckOut(boolean)
~borrower_id(INT)


2.For Member, below are the columns
~name(varChar)
~memberId(Int)
~borrowBooks(varChar)

2.NoSQL
Book
{
    title:"Lies",
    author:"Kimani"
    isbn:34
    isCheckout:false
    borrower:{
        "name":"Mercy",
        memberId:12,        
    }
}

Member{
    name"Job",
    memberId:123
    borrowedBooks:{
        "title":"Kiamni",
        "author:"Paul",
        isbn:60,
        isCheckout:true
    }
}
