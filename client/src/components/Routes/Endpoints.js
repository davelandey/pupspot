const APIURL = "https://pupspot-2022.herokuapp.com";

export const Endpoints = {
  user: {
    signup: `${APIURL}/user/signup`,
    login: `${APIURL}/user/login`,
  },
  location: {
    getall: `${APIURL}/location/`,
  },
  petProfile: {
    getall: `${APIURL}/petProfile/`,
    getById: `${APIURL}/petProfile/:id`,
    //EDIT DELETE FUNCTION?
    delete: `${APIURL}/petProfile/:id`,
    create: `${APIURL}/petProfile/add`,
    update: `${APIURL}/petProfile/update/:id`,
  },
};
