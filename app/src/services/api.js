import axios from "axios";

export const getAvatars = async () => {
    console.log('calling with axios');
    let response = await axios.get('http://localhost:3000/avatars');
    return response.data;
}