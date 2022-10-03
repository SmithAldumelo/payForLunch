function randomName() {

   
    var name = ["Dumelo","Grace","Smart","Deborah", "Aminat","Spiff","Mutiu","Muniru"]
    var random = name[Math.floor(Math.random() *name.length)];

    alert(random +":" + " you are paying for lunch")

}

randomName()