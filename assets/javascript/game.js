var targetNumber = 50;

var score = counter;

$("#number-to-guess").text(targetNumber);

var counter = 0;

var numberOptions = [12,4,7,3];

for (var i = 0; i < numberOptions.length; i++){
   
    var imageCrystal = $("<img>");

    imageCrystal.addClass("crystal-image");

    imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    $("#crystals").append(imageCrystal);
}

$(".crystal-image").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);

        counter += crystalValue;

         $("#score-counter").html(counter);

    if (counter === targetNumber){
        
    }

});
    
   




