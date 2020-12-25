import getData from "./lib/servise"
const data= getData(1);
data.then((response)=>console.log(response))