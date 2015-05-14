var randomNumber = Math.floor(Math.random() * 10 + 1);

var h2 = document.querySelector('h2');
var toolow = document.querySelector(".toolow");
var toohigh = document.querySelector(".toohigh");
var correct = document.querySelector(".correct");

h2.textContent = randomNumber;

toolow.addEventListener('click', function () {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  var secGuess = getRandomInt(randomNumber, 10);
    h2.textContent = secGuess;

      toolow.addEventListener('click', function () {
        var thirdGuess = getRandomInt(secGuess, 10);
        h2.textContent = thirdGuess;

          toolow.addEventListener('click', function () {
          var fourthGuess = getRandomInt(thirdGuess, 10);
          h2.textContent = fourthGuess;
            toolow.addEventListener('click', function () {
            var fithGuess = getRandomInt(fourthGuess, 10);
            h2.textContent = fithGuess;
            });

            toohigh.addEventListener('click', function () {
            var fithGuess = getRandomInt(thirdGuess, fourthGuess);
            h2.textContent = fithGuess;
            });
          });

          toohigh.addEventListener('click', function () {
          var fourthGuess = getRandomInt(secGuess, thirdGuess);
          h2.textContent = fourthGuess;
            toolow.addEventListener('click', function () {
            var fithGuess = getRandomInt(fourthGuess, thirdGuess);
            h2.textContent = fithGuess;
            });

            toohigh.addEventListener('click', function () {
            var fithGuess = getRandomInt(secGuess, fourthGuess);
            h2.textContent = fithGuess;
            });
          });
      });
      toohigh.addEventListener('click', function () {
      var thirdGuess = getRandomInt(randomNumber, secGuess);
      h2.textContent = thirdGuess;

          toolow.addEventListener('click', function () {
          var fourthGuess = getRandomInt(secGuess, thirdGuess);
          h2.textContent = fourthGuess;
            toolow.addEventListener('click', function () {
            var fithGuess = getRandomInt(fourthGuess, thirdGuess);
            h2.textContent = fithGuess;
            });

            toohigh.addEventListener('click', function () {
            var fithGuess = getRandomInt(secGuess, fourthGuess);
            h2.textContent = fithGuess;
            });
          });


          toohigh.addEventListener('click', function () {
          var fourthGuess = getRandomInt(randomNumber, thirdGuess);
          h2.textContent = fourthGuess;
            toolow.addEventListener('click', function () {
            var fithGuess = getRandomInt(fourthGuess, thirdGuess);
            h2.textContent = fithGuess;
            });

            toohigh.addEventListener('click', function () {
            var fithGuess = getRandomInt(randomNumber, fourthGuess);
            h2.textContent = fithGuess;
            });
          });
      });
});

toohigh.addEventListener('click', function () {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  var secGuess = getRandomInt(1, randomNumber);
    h2.textContent = secGuess;

    toolow.addEventListener('click', function () {
      var thirdGuess = getRandomInt(secGuess, randomNumber);
      h2.textContent = thirdGuess;

        toolow.addEventListener('click', function () {
        var fourthGuess = getRandomInt(thirdGuess, randomNumber);
        h2.textContent = fourthGuess;
          toolow.addEventListener('click', function () {
          var fithGuess = getRandomInt(fourthGuess, randomNumber);
          h2.textContent = fithGuess;
          });

          toohigh.addEventListener('click', function () {
          var fithGuess = getRandomInt(thirdGuess, fourthGuess);
          h2.textContent = fithGuess;
          });
        });

        toohigh.addEventListener('click', function () {
        var fourthGuess = getRandomInt(secGuess, thirdGuess);
        h2.textContent = fourthGuess;
          toolow.addEventListener('click', function () {
          var fithGuess = getRandomInt(fourthGuess, thirdGuess);
          h2.textContent = fithGuess;
          });

          toohigh.addEventListener('click', function () {
          var fithGuess = getRandomInt(secGuess, fourthGuess);
          h2.textContent = fithGuess;
          });
        });
    });
    toohigh.addEventListener('click', function () {
    var thirdGuess = getRandomInt(1, secGuess);
    h2.textContent = thirdGuess;

        toolow.addEventListener('click', function () {
        var fourthGuess = getRandomInt(thirdGuess, secGuess);
        h2.textContent = fourthGuess;
          toolow.addEventListener('click', function () {
          var fithGuess = getRandomInt(fourthGuess, secGuess);
          h2.textContent = fithGuess;
          });

          toohigh.addEventListener('click', function () {
          var fithGuess = getRandomInt(thirdGuess, fourthGuess);
          h2.textContent = fithGuess;
          });
        });

        toohigh.addEventListener('click', function () {
        var fourthGuess = getRandomInt(1, thirdGuess);
        h2.textContent = fourthGuess;
          toolow.addEventListener('click', function () {
          var fithGuess = getRandomInt(fourthGuess, thirdGuess);
          h2.textContent = fithGuess;
          });

          toohigh.addEventListener('click', function () {
          var fithGuess = getRandomInt(1, fourthGuess);
          h2.textContent = fithGuess;
          });
        });
    });
});

correct.addEventListener('click', function () {
  h2.textContent = "I'm so smart!";
});

// return Math.floor(Math.random() * (max - min + 1)) + min;
