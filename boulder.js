
const boulders = [];
class Boulder {
  constructor(
    name,
    grade,
    url_image,
    general_details,
    beta,
    url_video,
    coordinates,
    conditions
  ) {
    this._id = 0;
    this.name = name;
    this.grade = grade;
    this.url_image = url_image;
    this.general_details = general_details;
    this.beta = beta;
    this.url_video = url_video;
    this.coordinates = coordinates;
    this.conditions = conditions;
  }
}


// Create
function createBoulder(
  name,
  grade,
  url_image,
  general_details,
  beta,
  url_video,
  coordinates,
  conditions
) {
  const boulder = new Boulder(
    name,
    grade,
    url_image,
    general_details,
    beta,
    url_video,
    coordinates,
    conditions
  );

  boulders.push(boulder);
  console.log(`Boulder ${name} created!`);
}

// Read
function readBoulder(name) {

}

// Update
function updateBoulder(
  name,
  grade,
  url_image,
  general_details,
  beta,
  url_video,
  coordinates,
  conditions
  ) {
      if (boulders.find((boulder) => boulder.name === name)) {
          this.name = name;
          this.grade = grade;
          this.url_image = url_image;
          this.general_details = general_details;
          this.beta = beta;
          this.url_video = url_video;
          this.coordinates = coordinates;
          this.conditions = conditions;
          
          console.log(`Boulder ${name} updated!`);
      } else {
          console.log("Boulder not find");
      }
  }

// Delete  (incompleto)
function deleteBoulder(name) {

  const positionDelete = boulders.indexOf(name);

  const deletedBoulder = boulders.splice(positionDelete, 1);

}

createBoulder('Fiapos',9);
createBoulder('Batente',1);
boulders.forEach( (boulder) => {
  console.log(`Boulder: ${boulder.name}, Grau: V${boulder.grade}`);
})




