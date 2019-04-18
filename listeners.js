// Practice: Mirror, Mirror in the Code
// The learning objective for this exercise is to listen for the keyup event, and update the DOM when it is broadcast.

// Create an input field in your DOM. Give it an id of message.
// Create two article elements with unique id values. Use Flexbox to display them in a row, each taking 50% of the width of the browser.
// Give each article a different border color.
// Write an event listener that listens for the keyup event on the input field.
// The event handler function should update the textContent property of both sections.

const inputBox = document.querySelector("#message");

inputBox.addEventListener("keyup", () => {
    console.log(event);
    let textCont1 = document.querySelector("#art1");
    let textCont2 = document.querySelector("#art2");

    textCont1.textContent += event.key;
    textCont2.textContent += event.key; 
});

// NEW SECTION //
const audreyContainer = document.getElementById("container");
const audrey = document.getElementById("audrey");

/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
document.addEventListener("scroll", (e) => {
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */
    let y = window.scrollY;
    console.log(e);
    let newY = (y * 0.33);
    audrey.style.width = `${newY}px`;
    audrey.style.minWidth = "50px";
    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */
   let newX = (y * 0.25);
   audrey.style.height = `${newX}px`;
   audrey.style.minHeight = "100px";
});

