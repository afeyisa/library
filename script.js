const myLibrary = [];

function Book(author,title,numberOfPages,isRead=false) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.isRead = isRead;
}

const summit = document.querySelector("#submit");
summit.addEventListener("click",(e)=>{
    
    e.preventDefault();
    const form = document.querySelector("#form-data");
 
    const payload = new FormData(form);
    const formData = {};

    payload.forEach((value, key) => {
        formData[key] = value;
    });

    let author = formData.author;
    let title  = formData.title;
    let pages  = formData.pages;
   let  status  = formData.status;
   if (status){
    status = true
   }
   else status = false;
    
    addBookToLibrary(author,title,pages,status);

})

const book1 = new Book('J.K. Rowling', 'Harry Potter and the Sorcerer\'s Stone', 309, true);
const book2 = new Book('George Orwell', '1984', 328, false);
const book3 = new Book('J.R.R. Tolkien', 'The Hobbit', 310, true);
const book4 = new Book('Harper Lee', 'To Kill a Mockingbird', 281, false);

myLibrary.push(book1);
myLibrary.push(book2);

myLibrary.push(book3);

myLibrary.push(book4);

function addBookToLibrary(author,title,numberOfPages,isRead=false) {
    
    const book5 = new Book(author,title,numberOfPages,isRead);

    myLibrary.push(book5);


    displayBooks();

 
}


const table = document.getElementById("table");


//displays books which are inside array mayLibrary
function displayBooks(){
   

    table.innerHTML = '';
   

    const  Author = document.createElement("th");
    const authorNode = document.createTextNode("Author");
    Author.appendChild(authorNode);

    const  Title = document.createElement("th");
    const TitleNode = document.createTextNode("Title");
    Title.appendChild(TitleNode);

    const  Pages = document.createElement("th");
    const PagesNode = document.createTextNode("Pages");
    Pages.appendChild(PagesNode);

    const  Reading = document.createElement("th");
    const ReadingNode = document.createTextNode("Reading status");
    Reading.appendChild(ReadingNode);

    const  Action = document.createElement("th");
    const ActionNode = document.createTextNode("Action");
    Action.appendChild(ActionNode);

    
    const topRow = document.createElement("tr");
    topRow.appendChild(Author);
    topRow.appendChild(Title);
    topRow.appendChild(Pages);
    topRow.appendChild(Reading);
    topRow.appendChild(Action);
    table.appendChild(topRow);


    for(let i = 0; i < myLibrary.length; i++){
        let book   = myLibrary[i];
        const row = document.createElement("tr");

        //1 Author column
        const  dataAuthor = document.createElement("td");
        const authorNode = document.createTextNode(book.author);
        dataAuthor.appendChild(authorNode);

        //2 tittle column
        const  dataTitle = document.createElement("td");
        const titleNode = document.createTextNode(book.title);
        dataTitle.appendChild(titleNode);

        //3 page column
        const  dataPages = document.createElement("td");
        const  pageNode = document.createTextNode(book.numberOfPages);
        dataPages.appendChild(pageNode);

        //4 status column
        const  dataReadStatus = document.createElement("td");
        const statusNode = document.createTextNode(book.isRead);
        dataReadStatus.appendChild(statusNode);

        //5 action column
        const  dataActions = document.createElement("td");
        // remove button 1
        const  remove = document.createElement("button");
        const removeNode = document.createTextNode("remove");
        remove.appendChild(removeNode);

        remove.addEventListener("click",()=>{
            console.log("hello remove");
            const index = myLibrary.indexOf(book);
             myLibrary.splice(index,1);
            row.innerHTML= ''
        });
        // change status button
        const  readStatus = document.createElement("button");
        readStatus.addEventListener('click',()=>{
            const index = myLibrary.indexOf(book);

            myLibrary[index].isRead = !myLibrary[index].isRead; 
            console.log(myLibrary[index]);
            statusNode.textContent = myLibrary[index].isRead;

            console.log("hello read status");
        });

        const changeStatusNode = document.createTextNode("read");
        readStatus.appendChild(changeStatusNode);
        dataActions.appendChild(remove);
        dataActions.appendChild(readStatus);

        row.appendChild(dataAuthor);
        row.appendChild(dataTitle);
        row.appendChild(dataPages);
        row.appendChild(dataReadStatus);
        row.appendChild(dataActions);

        table.appendChild(row);

    }
}

// addBookToLibrary();
 displayBooks();


