     (function(){
        //Declare variables for animation
        var leftSquare = document.querySelector(".cls-1"),
            rightSquare = document.querySelector(".cls-2"),
            avlText = document.querySelector(".cls-3"),

            beatButton = document.getElementById("heartBeat-button"),
            jelloButton = document.getElementById("jello-button"),
            boxButton = document.getElementById("jackInTheBox-button"),

            beatAction = document.querySelector(".heartBeat"),
            jelloAction = document.querySelector(".jello"),
            boxAction = document.querySelector(".jackInTheBox"),

            svg = document.getElementById("avl");

        //For Heart Beat Button
        beatButton.onclick = function(){
          svg.classList.add(beatAction);
        };

        //For Jello Button
        jelloButton.onclick = function(){
          svg.classList.add("jello");
        };

        //For Jack In the Box 
        boxButton.onclick = function(){
          svg.classList.add("jackInTheBox");
        };

        svg.addEventListener("animationend", function(e){
          svg.classList.remove(beatAction, "jello", "jackInTheBox");
        });

      })();