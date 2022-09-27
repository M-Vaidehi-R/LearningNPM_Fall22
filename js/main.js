// imports go at the top of of the JS file

import {profs} from  "./modules/data.js";  

//this is an IIFE (immeadiately invoked function expression)
//this is great for encapsulating code / making it private
// and is also a Javascript programming pattern (the module pattern)

(() => {
    console.log("fired");

      // get a reference to the template's contents and the target container
      //into which we will clone a copy of the markup

      let theTemplate = document.querySelector("#user-template").content,
          theTeam = document.querySelector("#team-section");

    function changeCopy() {
        //parse the top-level props from the profs objects (the prof names)
        const theProfs = Object.keys(profs);

        //this JS creates keys like [trevor, justin etc]

        theProfs.forEach(prof => {

            //debugger;
            let panel = theTemplate.cloneNode(true),
                containers= panel.firstElementChild.children;  // the section tags contents

                containers[0].querySelector("img").src = `images/${profs[prof].avatar}`;
                
                containers[1].textContent = profs[prof].name;
                containers[2].textContent = profs[prof].role;
                containers[3].textContent = profs[prof].nickname;

                theTeam.appendChild(panel);
        })
       

    }   

    changeCopy();
})();