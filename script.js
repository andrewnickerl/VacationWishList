document.getElementById("submit_btn").addEventListener("click", () => {
  let dest = document.getElementById("destination").value;
  let loc = document.getElementById("location").value;
  let pic = document.getElementById("photo").value;
  let desc = document.getElementById("description").value;

  let card = createCard(dest, loc, pic, desc);
  document.getElementById("destinations_container").appendChild(card);
});

function createCard(destination, location, photo, description) {
  // create card element
  let card = document.createElement("div");
  card.setAttribute("class", "card");

  // create card img element and set URL from Photo, append it to card
  let cardPic = document.createElement("img");
  cardPic.setAttribute("class", "card-img-top");
  cardPic.setAttribute("src", photo);
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
  cardTitle.setAttribute("class", "card-subtitle");
  cardTitle.innerHTML = location;
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
  btnField.appendChild(editBtn);

  // create delete button and append it to button container
  let deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "btn btn-warning");
  deleteBtn.innerHTML = "Delete";
  btnField.appendChild(deleteBtn);

  // append completed button container to card body
  cardBody.appendChild(btnField);

  // append completed card body to card
  card.appendChild(cardBody);

  return card;
}
