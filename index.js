const pets = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

function init() {
  const root = document.querySelector("#root");
  console.dir(root);

  //adds h1 element to #root div
  const h1 = document.createElement("h1");
  h1.innerHTML = "Freelancer Forum";
  root.append(h1);

  /**
   * 👉 STEP 3:
   *    Create and add a container div to hold our pets in
   */
  const petsContainer = document.createElement("div");
  petsContainer.id = "petsContainer";
  petsContainer.classList.add("pets");
  petsContainer.classList.add("dogs");
  petsContainer.classList.remove("dogs");
  root.append(petsContainer);

  console.dir(petsContainer);

  /**
   * 👉 STEP 5:
   *    Call the function you created in step 4
   */
  renderPets();
} //end init

/**
 * 👉 STEP 4:
 *    Create a function to render the pets in our pets array
 */

function renderPets() {
  //targeted the petsContaier created in the init function
  const container = document.querySelector("#petsContainer");
  container.innerHTML = "";

  //looped over our pet array
  pets.forEach((pet) => {
    //for each pet, we created a div to hold the pet details
    const petDiv = document.createElement("div");
    //added the class of pet to each div
    petDiv.classList.add("pet");
    // inside each div we created, we add the pet details - name, type and age
    petDiv.innerHTML = `<h1><strong>Name:</strong> ${pet.name} </h1>
                            <p><strong>price:</strong> ${pet.price}</p>
                            <p><strong> occupation:</strong> ${pet.occupation}</p>
         `;

    container.append(petDiv);
  });
} //end renderPets()

//add new pet to the array
const addPet = () => {
  const randomIndex = Math.floor(Math.random() * pets.length);
  console.log(randomIndex);
  const pets = pets[randomIndex];
  pets.push(newPet);
};

//call init function
init();
