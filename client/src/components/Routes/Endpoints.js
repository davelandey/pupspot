const APIURL = "https://pupspot-2022.herokuapp.com";

export const Endpoints = {
  user: {
    signup: `${APIURL}/user/signup`,
    login: `${APIURL}/user/login`,
  },
  location: {
    getall: `${APIURL}/location/`,
    getIndividual: `${APIURL}/location/`
  
  },
  message: {
    add: `${APIURL}/message/add/`,
    getByLocation: `${APIURL}/message/`,
    edit: `${APIURL}/message/update/`,
    delete: `${APIURL}/message/`
  }
};
