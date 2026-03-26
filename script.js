console.log("Script started");

function start(){
    console.log("click");
    
    //create an h1 heading 
    let heading = document.createElement("h1");

    //txt and styles
    heading.innerText = "attendance";
    heading.style.color = "red"

    // add the h1 to the page 
    document.body.appendChild(heading);
    let username = prompt("what is your name");
    console.log(username)
}

function addName(newName){
    let h2 = document.createElement("h2")

}
