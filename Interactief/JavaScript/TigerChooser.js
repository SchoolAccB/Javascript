pics = document.getElementById("pics");
createPicsHolders();
createTigerImages();

function createPicsHolders() {
    for(var i = 0; i < 9; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder-" + i;
        pics.appendChild(pictureHolder);
    }
}
function createTigerImages() {
    pictureHolders = document.getElementsByClassName("picture-holder");
    for(var i = 0; i < pictureHolders.length; i++) {
        favoriet = document.createElement("div");
        favoriet.className = "favoriet";
        favoriet.id = "favoriet_" + (i + 1);
        tigerPlaatje = document.createElement("img");
        tigerPlaatje.src = "../Resources/tiger" + (i + 1) + ".jpg";
        tigerPlaatje.id = (i+1);
        tigerPlaatje.addEventListener("click", function() {
            maakFavoriet(this.id);
        });
        pictureHolders[i].appendChild(favoriet);
        pictureHolders[i].appendChild(tigerPlaatje);

    }
}
function maakFavoriet(id) {
    console.log("Maak mij favoriet! Het gaat om aap... " + id);
    favoriet = document.getElementById("favoriet_" + id);
    notsofavoriet = document.getElementsByClassName("favoriet");
    for (var i = 0; i <notsofavoriet.length ; i++) {
        notsofavoriet[i].style.backgroundImage = "none" ;
    }
    favoriet = document.getElementById("favoriet_" + id);
    favoriet.style.backgroundImage = "url('../Resources/heart.png')";

}


