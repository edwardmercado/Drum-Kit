//console.log(document.querySelectorAll(".drum"));

for (var i = 0; i < document.querySelectorAll(".drum").length; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
        // var audio = new Audio('sounds/tom-1.mp3');
        // audio.play();
        // this.style.color = "white";
        // console.log(this);
        var buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
            case "w":
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
            break;
            case "a":
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
            break;
        
            default:
                break;
        }


    });

}


 