// ESERCIZIO 1

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  differentAge(singleUser) {
    if (this.age > singleUser.age) {
      return (
        this.firstName + " " + "e piu vecchio di" + " " + singleUser.firstName
      );
    } else if (this.age < singleUser.age) {
      return (
        this.firstName + " " + "e piu giovane di" + " " + singleUser.firstName
      );
    }
  }
}

const userX = new User("Herry", "Potter", 28, "Londra");
const userY = new User("Severus", "Piton", 47, "NY");

console.log("X", userX);
console.log("y", userY);

console.log(userX.differentAge(userY));
console.log(userY.differentAge(userX));

// ESERCIZIO 2

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  name(petX) {
    if (this.ownerName === petX.ownerName) {
      return true;
    } else {
      return false;
    }
  }
}
const totalpet = [];

const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const petA = new Pet(
    document.getElementById("petName").value,
    document.getElementById("ownerName").value,
    document.getElementById("species").value,
    document.getElementById("breed").value
  );
  totalpet.push(petA);
  console.log(petA.name(totalpet));
  const lista = document.createElement("p");
  lista.innerText =
    petA.petName + " " + petA.ownerName + " " + petA.species + " " + petA.breed;
  const listaanimali = document.getElementById("listaanimali");
  listaanimali.appendChild(lista);
});
