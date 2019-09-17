/*var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';*/

/*document.querySelector('html').onclick = function() {
	alert('You have clicked on my html page');
}*/

var myTestImage = document.querySelector('img');

function multiply(a, b) {
	var result = a * b;
	return result;
}

myTestImage.onclick = function() {
    var mySrc = myTestImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myTestImage.setAttribute ('src','images/firefox2.png');
    } else {
      myTestImage.setAttribute ('src','images/firefox-icon.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var name = prompt('Please enter a username.');
  if (!name || name === null) {
  	setUserName();
  }
  else {
    localStorage.setItem('name', name);
    myHeading.textContent = 'Hello there, ' + name + '. Have a good day.';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello there, ' + storedName + '. Have a good day.';
}

myButton.onclick = function() {
	setUserName()
}