let card = document.getElementsByClassName("card")[0];
let cardBody = document.getElementsByClassName("card-body")[0];
let button = document.getElementsByClassName("btn btn-primary")[0];
let colors = ["#ff7eb9","#ff65a3","#7afcff", "#feff9c", "fff740"];
let color = 0;


button.addEventListener("click", function(){
    console.log("Button clicked!"); // test

    let title = document.getElementById("form-title").value;

    let noteContent = document.getElementsByClassName("post-area")[0].value;
    //Making the new card and adding it
    if (title && noteContent){ //ensures it makes a new note only if both title and noteContent have been filled out. Can test with ||
        //creating the added note container
        let newNote = document.createElement("div"); //basic foundation of the new note. (parent)
        newNote.classList.add("card");
        newNote.style.width = "18rem"; //new notes will all have the same width
        newNote.style.backgroundColor = colors[color % colors.length];
        color++;

        
                // switch (color) {
        //     case 1:
        //         color = color + 1;
        //         newNote.style.backgroundColor = "#ff7eb9";
        //         break;
        //     case 2:
        //         newNote.style.backgroundColor = "#ff65a3";
        //         color+=1;
        //         break;
        //     case 3:
        //         newNote.style.backgroundColor = "#7afcff";
        //         color+=1;
        //         break;
        
        //     default:
        //         newNote.style.backgroundColor="white";
        //         break;
        // }




        //creating cardbody for card that shows up when we psot
        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        //creating html element for posted note title
        let noteTitle = document.createElement("h2"); //making an html element "noteTitle" be a h2. 
        noteTitle.classList.add("note-title");
        noteTitle.innerText = title; //displaying the value of title (user input) as text within a tag, which is h2 in this case.

        //creating html element for posted note content
        let noteText = document.createElement("p")
        noteText.classList.add("note-text");
        noteText.innerText = noteContent; //displaying the value of noteContent (user input) as text within a tag, which is a <p> tag in this case.

        //Creating Burn Button
        let burnButton = document.createElement("button");
        burnButton.classList.add("btn", "btn-danger"); //applying bootstrap elements
        burnButton.innerText = "🔥";

        //Add event listener for burn button
        burnButton.addEventListener("click", function(){
            newNote.remove(); //removes the note when button is clicked
        });

        //Display for newNOTE
        //We are essentially connecting all of the components together
        cardBody.appendChild(noteTitle);
        cardBody.appendChild(noteText);
        cardBody.appendChild(burnButton);
        newNote.appendChild(cardBody);

        document.getElementsByClassName("posted-notes")[0].appendChild(newNote); //displays the new note
    }
});