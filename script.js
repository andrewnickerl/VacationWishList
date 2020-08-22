document.getElementById("submit_btn").addEventListener("click", () => {
  let dest = document.getElementById("destination").value;
  let loc = document.getElementById("location").value;
  let pic = document.getElementById("photo").value;
  let desc = document.getElementById("description").value;

  let card = createCard(dest, loc, pic, desc);
  document.getElementById("destinations_container").appendChild(card);
  document.getElementById("destination").value = "";
  document.getElementById("location").value = "";
  document.getElementById("photo").value = "";
  document.getElementById("description").value = "";
});

function createCard(destination, location, photo, description) {
  // create card element
  let card = document.createElement("div");
  card.setAttribute("class", "card");

  // create card img element and set URL from Photo, append it to card
  let cardPic = document.createElement("img");
  cardPic.setAttribute("class", "card-img-top");
  if (photo.length == 0) {
    cardPic.setAttribute(
      "src",
      "https://i2.wp.com/thepointsguy.com/wp-content/uploads/2020/04/GettyImages-1077097080.jpg?resize=2327%2C543px&ssl=1"
    );
  } else {
    cardPic.setAttribute("src", photo);
  }
  cardPic.setAttribute(
    "onerror",
    "this.onerror=null;this.src='https://i2.wp.com/thepointsguy.com/wp-content/uploads/2020/04/GettyImages-1077097080.jpg?resize=2327%2C543px&ssl=1';"
  );
  card.appendChild(cardPic);

  // create card body element
  let cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");

  // create card title and set it to destination text, append it to card body
  let cardTitle = document.createElement("h4");
  cardTitle.setAttribute("class", "card-title");
  cardTitle.innerHTML = destination;
  cardBody.appendChild(cardTitle);

  // create card subtitle and set it to location text, append it to card body
  let cardSubtitle = document.createElement("h6");
  cardSubtitle.setAttribute("class", "card-subtitle");
  cardSubtitle.innerHTML = location;
  cardBody.appendChild(cardSubtitle);

  // create card text and set it to description text, append it to card body
  let cardText = document.createElement("p");
  cardText.setAttribute("class", "card-text");
  cardText.innerHTML = description;
  cardBody.appendChild(cardText);

  // create container for edit and delete buttons
  let btnField = document.createElement("div");
  btnField.setAttribute("class", "d-flex flex-wrap justify-content-center");

  // create edit button and append it to button container
  let editBtn = document.createElement("button");
  editBtn.setAttribute("class", "btn btn-secondary");
  editBtn.innerHTML = "Edit";
  editBtn.addEventListener("click", editDestination);
  btnField.appendChild(editBtn);

  // create delete button and append it to button container
  let deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "btn btn-warning");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.addEventListener("click", deleteDestination);
  btnField.appendChild(deleteBtn);

  // append completed button container to card body
  cardBody.appendChild(btnField);

  // append completed card body to card
  card.appendChild(cardBody);

  return card;
}

function editDestination(event) {
  let card = event.target.parentElement.parentElement.parentElement;
  let photoUrl = card.children[0];
  let cardBody = card.children[1];
  let destination = cardBody.children[0];
  let location = cardBody.children[1];
  let description = cardBody.children[2];

  let newDestination = prompt("Enter the new destination:");
  if (newDestination.length > 0) {
    destination.innerHTML = newDestination;
  }

  let newLocation = prompt("Enter the new location:");
  if (newLocation.length > 0) {
    location.innerHTML = newLocation;
  }

  let newPhotoUrl = prompt("Enter the URL of a new photo:");
  if (newPhotoUrl.length > 0) {
    photoUrl.setAttribute("src", newPhotoUrl);
  }

  let newDescription = prompt("Enter the new description:");
  if (newDescription.length > 0) {
    description.innerHTML = newDescription;
  }
}

function deleteDestination(event) {
  let card = event.target.parentElement.parentElement.parentElement;
  card.remove();
}
