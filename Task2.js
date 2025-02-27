const colorChange = document.querySelector(".colorChange"); // refrence to the button :

function BtnColorChange(){
     console.log("Btn has been clicked");

     colorChange.style.backgroundColor = "pink"; // changing the color of the btn upon click
    }

 colorChange.addEventListener("click", BtnColorChange); // action 