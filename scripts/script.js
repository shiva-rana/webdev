let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox1.jpg')
    {
        myImage.setAttribute('src', 'images/firefox2.jpg');
    }
    if(mySrc === 'images/firefox2.jpg')
    {
        myImage.setAttribute('src', 'images/firefox1.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setName()
{
    let myName = prompt('Please enter your name');
    if(!myName)
    {
        setName();
    }
    else
    {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla: Hi ' + myName;
    }
}

if(!localStorage.getItem('name')) 
{
    setName();
}
else
{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla: Hi ' + storedName;
}

myButton.onclick = function()
{
    setName();
}
