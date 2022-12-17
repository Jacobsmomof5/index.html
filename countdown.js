/* countdown function with alerts and blastoff on 0  */ 

function countdown() {
    for (let i = 11; i >= 0; i--) {
      console.log(i);
  
      if (i === 5) {
        setTimeout(function() {
          alert("Halfway there!");
        }, 1000);
      }
  
      if (i === 0) {
        console.log("Blastoff!");
        setTimeout(function() {
          alert("Blast Off!");
        }, 5000);
      }
    }
  }

