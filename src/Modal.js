//For modal display 
var modal = document.getElementById("modal");
var addNotesBtn = document.getElementById("add-notes");
var span = document.getElementsByClassName("close")[0];
addNotesBtn.onclick = function () {
    modal.style.display = "block";
};
span.onclick = function () {
    modal.style.display = "none";
};
// When user clicks anywhere outside of the modal, modal display of the form is closed
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
