function calculateSum() {
    var sum = 0;
    var number = 0;
    
    while (true) {
        number = parseInt(prompt("Enter a number:"));
        
        if (number < 0) {
            break;
        }
        
        sum += number;
    }
    
    alert("Sum of the numbers: " + sum);
}



var randomNumber = Math.floor(Math.random() * 10) + 1;

var remainingGuesses = 3;

function checkGuess() {
  var userGuess = parseInt(document.getElementById("guessInput").value);

  if (userGuess === randomNumber) {
    document.getElementById("resultMessage").innerHTML = "Congratulations! You won!";
  } else {
    remainingGuesses--;

    if (remainingGuesses > 0) {
      document.getElementById("resultMessage").innerHTML = "Wrong guess! Try again. Remaining guesses: " + remainingGuesses;
    } else {
      document.getElementById("resultMessage").innerHTML = "You lose! The number was: " + randomNumber;
      document.getElementById("guessInput").disabled = true; 
    }
  }
}




var person = {
    name: "Akshat garg",
    age: 18,
    address: {
      city: "Shamli",
      state: "UP",
      pincode: "247776"
    },
    hobbies: ["Reading", "Gaming", "Traveling"]
  };
  
  function displayInfo() {
    var name = person.name;
    var age = person.age;
    var city = person.address.city;
    var state = person.address.state;
    var pincode = person.address.pincode;
    var hobbies = person.hobbies;
    
    var infoElement = document.getElementById("info");
    
    infoElement.innerHTML = "<h1>" + name + "</h1>" +
                            "<p>Age: " + age + "</p>" +
                            "<p>Address: " + city + ", " + state + " - " + pincode + "</p>" +
                            "<p>Hobbies: " + hobbies.join(", ") + "</p>";
  }