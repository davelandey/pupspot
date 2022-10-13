const APIURL = "https://pupspot-2022.herokuapp.com";

export const Endpoints = {
  user: {
    signup: `${APIURL}/user/signup`,
    login: `${APIURL}/user/login`,
  },
  location: {
    getall: `${APIURL}/location/`,
    getIndividual: `${APIURL}/location/:id`
  
  },
  message: {
    add: `${APIURL}/message/add/:locationId`,
    getByLocation: `${APIURL}/message/:locationId`,
    edit: `${APIURL}/message/update/:id`,
    delete: `${APIURL}/message/:id`
  }
};
