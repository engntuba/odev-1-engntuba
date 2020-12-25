import axios from 'axios';

const endpoint = "https://jsonplaceholder.typicode.com";

async function getData(usersId){
    try{
        const{ data: users}=await axios.get(`${endpoint}/users/${usersId}`);
        const{ data: posts}=await axios.get(`${endpoint}/users/${usersId}`)
        return {users:users, posts:posts}


    }
    catch(e){
        console.log(e);
    }
}
export default getData;