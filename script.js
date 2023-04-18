// Constants
const taxRate = 0.15;

// Fetching JSON data from info.json file
fetch("./info.json")
  .then((response) => response.json())
  .then((data) => {
    // Loop through each person inside of the info.json file using a forEach loop
    data.forEach((person) => {
      console.log(FullName(person));
      console.log(position(person));
      console.log(salaryCalc(person));
      console.log(person.quote);
      console.log(alternateName(person));
      console.log("\n");

      displayPerson(person);
    });
  })
  .catch((error) => {
    console.log("Something has went wrong!");
    console.log(error);
  });

function FullName(person) {
  return `${person.firstName} ${person.lastName}`;
}

function position(person) {
  switch (person.title) {
    case "Manager":
      return `${person.firstName} is the ${person.title} at the ${person.branch} location`;
      break;
    case "Sales person":
      return `${person.firstName} is a ${person.title} at the ${person.branch} location`;
      break;
    case "Receptionist":
      return `${person.firstName} is the only ${person.title} at the ${person.branch} location`;
      break;
    default:
      return `We have no idea what ${person.firstName} does`;
  }
}

function salaryCalc(person) {
  return `${person.firstName} makes ${
    person.salary
  } but after taxes they take home ${person.salary * (1 - taxRate)}`;
}

function alternateName(person) {
  return `${person.firstName} also goes by ${person.alterEgo}`;
}

function displayPerson(person) {
  // Function used to create HTML elements from JSON data

  // Creating each HTML element
  let nameText = document.createElement("h2");
  let personPic = document.createElement("img");
  let altEgoText = document.createElement("h3");
  let positionText = document.createElement("p");
  let salaryText = document.createElement("p");
  let quoteText = document.createElement("p");

  //  Giving text and style to each element
  nameText.innerText = FullName(person);
  nameText.style.marginTop = "100px";

  altEgoText.innerText = alternateName(person);
  positionText.innerText = position(person);
  salaryText.innerText = salaryCalc(person);

  quoteText.innerText = person.quote;
  quoteText.style.fontStyle = "italic";

  //   Adding the person's picture, location of picture is contained in JSON file
  personPic.src = person.picture;
  personPic.style.width = "300px";
  personPic.style.height = "auto";

  //   Appending each element to the HTML body
  document.body.append(
    nameText,
    personPic,
    altEgoText,
    positionText,
    salaryText,
    quoteText
  );
}
