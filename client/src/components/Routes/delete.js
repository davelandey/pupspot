//Not sure if this is correct
//Still async function still needs to be put in a JSX file

export async function Delete(endpoint, body, callback, token){

    let bodyObject = JSON.stringify(body);

    let myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: bodyObject,
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