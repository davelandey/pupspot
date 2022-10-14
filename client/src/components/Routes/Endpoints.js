const APIURL = "https://pupspot-2022.herokuapp.com";

export const Endpoints = {
  user: {
    signup: `${APIURL}/user/signup`,
    login: `${APIURL}/user/login`,
    profilePage: `${APIURL}/user/profile`,
    // ! GET BY IF FOR PROFILE?
    getById: `${APIURL}/user/:id`,
  },
  location: {
    getall: `${APIURL}/location/`,

    getIndividual: `${APIURL}/location/`
  

  },
  petProfile: {
    getall: `${APIURL}/petProfile/movie`,
    getById: `${APIURL}/petProfile/:id`,
    //EDIT DELETE FUNCTION?
    delete: `${APIURL}/petProfile/:id`,
    create: `${APIURL}/petProfile/add`,
    update: `${APIURL}/petProfile/update/:id`,

  },
  message: {
    add: `${APIURL}/message/add/`,
    getByLocation: `${APIURL}/message/`,
    edit: `${APIURL}/message/update/`,
    delete: `${APIURL}/message/`
  }
};
