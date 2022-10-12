export async function Post(endpoint, body, callback, token) {
console.log("post.js")
    let bodyObject = JSON.stringify(body);


    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    //if there is a token
if(token) {
    myHeaders.append("Authorization" , token);
}

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: bodyObject,
    };

    try {
        const response = await fetch(endpoint, requestOptions);
        const data = await response.json();

        //just send back the data, instead of data.token
        console.log(data);
        callback(data);
    } catch (error) {
        console.error(error);
    }

}