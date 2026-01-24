let messageBox = document.getElementById("messageBox");
function sendMessage(){
    let userInput = document.getElementById("userInput").value;
    messageBox.innerHTML+=`<div class="message user" id="userMessage">${userInput}</div>`
    getResponse(userInput)
    document.getElementById("userInput").value=""
}

function getResponse(prompt){
    fetch(`https://posttraumatic-preterlegal-chante.ngrok-free.dev/api/message/${prompt}`)
    .then(data=>data.text())
    .then(data=>messageBox.innerHTML+=`<div class="message bot"><pre>${data.replace(/\*/g, "")}</pre></div>`)
    .catch(error=>{
        console.log("Error"+error)
    })

}
