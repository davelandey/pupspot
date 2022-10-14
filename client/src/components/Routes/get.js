export async function Get(endpoint, callback, token) {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", token);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    //no body needs to be sent in a GET
  };

  try {
    const response = await fetch(endpoint, requestOptions);

    const data = await response.json();
    //to make universal, you could just supply the data (don't be so specific data.movie)
    console.log(data);
    callback(data);
  } catch (error) {
    console.error(error);
  }
}
