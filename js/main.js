// imports go at the top of of the JS file

import {getData} from "./modules/dataMiner.js";  

//this is an IIFE (immeadiately invoked function expression)
//this is great for encapsulating code / making it private
// and is also a Javascript programming pattern (the module pattern)

(() => {
    console.log("fired");

      // get a reference to the template's contents and the target container
      //into which we will clone a copy of the markup

      let theTemplate = document.querySelector("#user-template").content,
          theTeam = document.querySelector("#team-section");

          //judt to test if it imported correctly
          //getData();

    function buildTeam(data) {
        //get all the keys from
        debugger;
        const theProfs = Object.keys(data);

        //this JS creates keys like [trevor, justin etc]

        theProfs.forEach(prof => {

            //debugger;
            let panel = theTemplate.cloneNode(true),
                containers= panel.firstElementChild.children;  // the section tags contents

                containers[0].querySelector("img").src = `images/${data[prof].avatar}`;
                
                containers[1].textContent = data[prof].name;
                containers[2].textContent = data[prof].role;
                containers[3].textContent = data[prof].nickname;

                theTeam.appendChild(panel);
        })
       

    }   

    getData(buildTeam);
})();