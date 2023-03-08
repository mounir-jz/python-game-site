// Get the button
const myButton = document.getElementById('myBtn');

// When you scroll down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    myButton.style.display = "block";
    } 
    else {
        myButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
myButton.addEventListener('click', () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})