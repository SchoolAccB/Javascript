var plaatjes = [1,2,3];
var teller = 0;

var slideholder1 = document.getElementById("slideholder1");
slideholder1.style.backgroundImage = "url('../Resources/crookeyes1.png')";

var slideholder2 = document.getElementById("slideholder2");
slideholder2.style.backgroundImage = "url('../Resources/crooknose1.png')";

var slideholder3 = document.getElementById("slideholder3");
slideholder3.style.backgroundImage = "url('../Resources/crookmouth1.png')";


slideholder1.addEventListener("click", function() {
    slideholder1.style.backgroundImage = "url('../Resources/crookeyes" + getCrookeyes() + ".png')";
});

slideholder2.addEventListener("click", function() {
    slideholder2.style.backgroundImage = "url('../Resources/crooknose" + getCrooknose() + ".png')";
});

slideholder3.addEventListener("click", function() {
    slideholder3.style.backgroundImage = "url('../Resources/crookmouth" + getCrookmouth() + ".png')";
});


function getCrookeyes() {
    if(teller >= plaatjes.length) {
        teller = 1;
    } else {
        teller++;
    }
    console.log(teller);
    return teller;
}

function getCrooknose() {
    if(teller >= plaatjes.length) {
        teller = 1;
    } else {
        teller++;
    }
    console.log(teller);
    return teller;
}

function getCrookmouth() {
    if(teller >= plaatjes.length) {
        teller = 1;
    } else {
        teller++;
    }
    console.log(teller);
    return teller;
}

