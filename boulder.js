/*
Boulder
    name
    grade
    url_image
    general_details
    beta
    url_video
    cordinates
    conditions

*/

const boulders = [];
class Boulder {

    constructor(name, grade, url_image, general_details, beta, url_video, coordinates, conditions) {
        
        this._id = 0
        this.name = name
        this.grade = grade
        this.url_image = url_image
        this.general_details = general_details
        this.beta = beta
        this.url_video = url_video
        this.coordinates = coordinates
        this.conditions = conditions
    }


    // deleteBoulder(name) {

    // }

    updateBoulder(
        name, grade, url_image, general_details, beta, url_video, coordinates, conditions) {
        
            if(boulders.find(boulder => boulder.name === name)){

                this.name = name
                this.grade = grade
                this.url_image = url_image
                this.general_details = general_details
                this.beta = beta
                this.url_video = url_video
                this.coordinates = coordinates
                this.conditions = conditions
            } else {
                console.log("Boulder não encontrado");
            }
        }

}

function createBoulder(
    name, grade, url_image, general_details, beta, url_video, coordinates, conditions) {
        
        const boulder = new Boulder(name, grade, url_image, general_details, beta, url_video, coordinates, conditions);

        boulders.push(boulder);
    }
