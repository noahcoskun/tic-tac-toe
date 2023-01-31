function openPlayerConfig(event) {
    // playerid is a string assigned by data-playerid="1", by adding it's converted to an integer +'1' = 1
    const selectedPlayerId = +event.target.dataset.playerid;
    editedPlayer = selectedPlayerId;
    playerConfigOverlayElement.style.display = 'block';
    backDropElement.style.display = 'block';
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backDropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
    // I don't have to send the user information by default when submitted, instead I will save it in a variable
    event.preventDefault();

    //Object blueprints
    // event.target is the submitted form itself
    // an Object of the form is created
    const formData = new FormData(event.target);

    //Once an object is created, the name can be extracted by selecting the name of the input element, the value will be assigned to the constant value
    const enteredPlayerName = formData.get('playername').trim();

    // Check and validate user-name
    if(!enteredPlayerName) {
        // Add a class to the firt div in the form
        event.target.firstElementChild.classList.add('error');
        errorsOutputElement.textContent = 'Please Enter a Valid Name';
        return;
    }

    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer +'-data');

    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

    players[editedPlayer - 1].name = enteredPlayerName;

    closePlayerConfig();

}
