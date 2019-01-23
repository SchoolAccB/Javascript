var mijnAuto = {
    kleur: "matzwart",
    merk: "Mercedes-AMG",
    snelheid: 0,

    gasgeven: function () {
        this.snelheid += 5
        console.log(this.snelheid);
    },

    toeteren: function () {
        console.log("Toet!")
    }
}

console.log(mijnAuto.kleur);
console.log(mijnAuto.gasgeven());
console.log(mijnAuto.gasgeven());
console.log(mijnAuto.gasgeven());
console.log(mijnAuto.gasgeven());
console.log(mijnAuto.gasgeven());
mijnAuto.toeteren();
