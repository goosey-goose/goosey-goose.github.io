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


/////////////////////////////////////////////////////////////////////////////////////

let medievalBNBDiv = document.getElementById("medieval-bnb");

medievalBNBDiv.addEventListener('click', () => {
    window.open('https://medieval-bnb.herokuapp.com/', '_blank').focus();
})


/////////////////////////////////////////////////////////////////////////////////////

// let viewMyResume = document.getElementById("view_my_resume");

// viewMyResume.children[0].innerText.addEventListener('click', () => {
//     console.log(viewMyResume.children[0].innerText);
// })

let resumeSpan = document.getElementById("resume_span");

resumeSpan.addEventListener('click', () => {
    console.log("resume clicked");
})
