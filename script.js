// Gebruik een click event en attach het click event aan de button
document.getElementById('mybutton').addEventListener("click", function () {
    // Wanneer er op de button geklikt wordt, geef een alert: button clicked
    alert("Button clicked")
});

// Maak een klik event vast aan de nieuwe button
// document.getElementById('mysecondbutton').addEventListener("click", function (changeColor) {
//     // Wanneer er op de change-background-button geklikt wordt ga je de class "red-background" toevoegen aan je body element. 
//     mysecondbutton.classList.add("red-background");
// });

// Pas de functie aan zodat het een toggle wordt
document.getElementById('mysecondbutton').addEventListener("click", function (toggleColor) {
    mysecondbutton.classList.toggle("red-background");
});
