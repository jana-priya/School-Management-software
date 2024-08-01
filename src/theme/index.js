import Axios from 'axios';



export const themeColors = {
    bg: '#282933',
    bgColor: opacity=> `rgba(112, 66, 20, ${opacity})`,
    bgLight: '#314147',
    bgDark: '#8c5319',
    text: '#3C2A21'
 }  


//  2976f2

// 343757

export var DataOfScl ;
const url = "https://f56d-223-187-126-51.ngrok-free.app/data/mobile";

fetch(url, {
    method: 'GET'
    //Request Type 
})
.then((response) => response.json())
//If response is in json then in success
.then((responseJson) => {
    //Success 
    // console.log(responseJson);
    DataOfScl = responseJson[0];
})
//If response is not in json then in error
.catch((error) => {
    //Error 
    console.error(error);
});