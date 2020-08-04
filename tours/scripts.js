//start
//function expression to select elements
const selectElement = (s) => document.querySelector(s);
//Open the menu on click
selectElement('.open').addEventListener('click', () =>{
    selectElement('.nav-list').classList.add('active');
})
//Close the menu on click
selectElement('.close').addEventListener('click', () =>{
    selectElement('.nav-list').classList.remove('active');
})