


    function checkVotingEligibility() {
    
      let name = prompt("What is your name?");
      let age = prompt("How old are you?");
      
      // Convert age from string to number
      age = Number(age);

      // Variable to hold the message
      let message = "";

      // Conditional statements
      if (age >= 18) {
        message = "congratulations " + name + "! You are eligible to vote.";
      } else {
        message = "Hello " + name + "! You are not eligible to vote yet.";
      }

    
      for (let i = 0; i < 1; i++) {
        if (age < 13) {
          message += "\nYou're still a kid. Enjoy your childhood!";
        } else if (age >= 13 && age < 18) {
          message += "\nYou're a teenager—almost there!";
        } else if (age >= 18 && age < 30) {
          message += "\nYoung adult life can be exciting!";
        } else {
          message += "\nLife experience is on your side!";
        }
      }

      alert(message);
    }