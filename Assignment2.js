import fetch from "node-fetch";

async function externalApiCall() {
    try {
        let response= await fetch(api); //getting the response from the API
        let jsonObject= await response.json(); //converting the response from API in json format
        let dataArray= await jsonObject.data; //getting the data array from the json repsonse
        let extractedObject= dataArray.map( element => { //returning the required details only to extractedObject
            return {
                "id": element.id,
                "email": element.email,
                "firstName": element.first_name,
                "lastName": element.last_name
            }
        });
        return await extractedObject;
    }
    catch(error) {
        console.log(error)
    }
}
 let api= 'https://reqres.in/api/users'; //required API
 let requiredResponse= await externalApiCall(api); //function call
 console.log(requiredResponse);