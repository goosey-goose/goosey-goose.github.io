let watchItDiv = document.getElementById("watch-it");

watchItDiv.addEventListener('click', () => {
    // window.location.href = "https://www.google.com";
    window.open('https://watch-it-app.herokuapp.com/login', '_blank').focus();
})


/////////////////////////////////////////////////////////////////////////////////////


let ketchupDiv = document.getElementById("ketchup");

ketchupDiv.addEventListener('click', () => {
    window.open('https://aa-ketchup.herokuapp.com/', '_blank').focus();
})


/////////////////////////////////////////////////////////////////////////////////////


let pbrainDiv = document.getElementById("pbrain");

pbrainDiv.addEventListener('click', () => {
    window.open('https://pbrain-app.herokuapp.com/', '_blank').focus();
})
