// const APIURL = "https://pupspot-2022.herokuapp.com";
const APIURL = "http://localhost:4000";

export const Endpoints = {
  user: {
    signup: `${APIURL}/user/signup`,
    login: `${APIURL}/user/login`,
    profilePage: `${APIURL}/user/profile`,
    getById: `${APIURL}/user/`,
  },
  location: {
    getall: `${APIURL}/location/`,

    getIndividual: `${APIURL}/location/`,
  },
  petProfile: {
    getall: `${APIURL}/petProfile/`,
    getById: `${APIURL}/petProfile/`,
    //EDIT DELETE FUNCTION?
    delete: `${APIURL}/petProfile/`,
    create: `${APIURL}/petProfile/add`,
    update: `${APIURL}/petProfile/update/`,

  },
  message: {
    add: `${APIURL}/message/add/`,
    getByLocation: `${APIURL}/message/`,
    edit: `${APIURL}/message/update/`,
    delete: `${APIURL}/message/`,
  },
};
