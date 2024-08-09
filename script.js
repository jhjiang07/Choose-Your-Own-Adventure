function start(){
  alert("Welcome to Choose Your Own Adventure.");
  var name = prompt("What is your name?");
  alert(name + " is at a field trip in a cementery. There is a suspicious, antique lighthouse that " + name + " finds a bit far away.");
  var enterBuilding = prompt("Does " + name + " go in the lighthouse?");

// Enter the lighthouse
  if (enterBuilding == "yes"){
    alert(name + " enters the lighthouse. The door locks. The lighthouse is full of spiraling stairs, going down and up.");
    var stairs = prompt("Does " + name + " go up or down the stairs?");
    // Go up the stairs
      if(stairs== "up"){
        alert(name +  "  has gone up the stairs. " + name +  " reaches a dead end with two doors. The one on the left looks shiny. The right one looks crusty.");
        var doors = prompt("Does " + name +  " open the left or right door?");
          //Left door
          if (doors == "left"){
            alert("As " + name + " opens the shiny, left door, they see a white, misty ghost. " + name + " screams. That is the last sound ever heard from " + name + ".");
          }
          //Right door
          if (doors == "right"){
            alert("When " + name + " opens the crusty door, they see a bright room full of beautiful lushish plants, friendly animals, and lots of food and water. " + name + " decides to stay in this room forever.");
          } 
    // Go down the stairs
      } if (stairs== "down"){
        alert(name +  " has gone down the stairs. " + name + " hears a beautiful voice singing faintly farther down.")
        var voice = prompt("Does " + name + " follow the voice?");
          //Follow voice
          if (voice=="yes"){
            alert(name + " has followed the voice. The voice keeps on going, and " + name + " never reaches the voice. " + name + " gets tired from going down and faint.");
            //Dont follow voice
          } if (voice=="no"){
              alert(name +  " does not follow the voice. " + name + " can slowly see the outline of a door. An escape! " + name + " has escaped the lighthouse. Congratulations!");
          } 
      } 
      



// Does not enter the lighthouse
  } if (enterBuilding == "no") {
    alert(name + " decides not to go to the lighthouse. When walking away from it, " + name + " sees a pretty, glittery tombstone.");
    var tombstone = prompt("Does " + name + " approach the tombstone?");
    //Approach the tombstone
      if(tombstone == "yes"){
        alert("Next to the tombstone, there is an old piece of paper.");
        var paper = prompt("Does " + name + " approach the paper?");
          //Approach paper
          if (paper=="yes"){
            alert(" When picking the paper up, it prints out the name " + name + ". " + name + "  runs away from the letter and never sees the cementary again.")
            //Dont approach paper
          } if (paper=="no"){
            alert("When walking away, " + name + " hears a screaming voice from the lighthouse. It doesn't concern " + name + ", so they walk away. Until it is on the news.");
          } 
      }
      //Dont approach the tombstone
      if(tombstone =="no"){
        alert(name + " decides not to approach the tombstone. " + name + " sees a jewel pop next to them.")
        var jewel = prompt("Does " + name + " pick up the sparkling jewel?");
        //Pick up jewel
          if (jewel=="yes"){
            alert(name + " picks up the jewel. It is shiny. " + name + " decides to keep it and continue with their day.");
          //Don't pick up jewel
          } if (jewel=="no"){
            alert(name + " walks away from the jewel. Hearing the teacher calling them, " + name + " hops safely on the bus and hopes to never reencounter this situation again.");
          } 
          }
       
      



// None
  } 
   else if (enterBuilding == null){
    alert("User error. Input validation.");
  } else if (enterBuilding != "yes" && enterBuilding != "no"){
    alert("User error. Input validation.");
  }
   
}



 

