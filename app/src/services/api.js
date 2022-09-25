import axios from "axios";

export const getAvatars = async () => {
    console.log('calling with axios');
    let response = await axios.get('http://localhost:3000/avatars');
    return response.data;
}

export const claimAvatar = async (avatar, name, superpower) => {
    const body = {
            "avatar": avatar,
            "name": name,
            "superpower": superpower
    };
    let response = await axios.post('http://localhost:3000/claim', body, {
        headers: {
          'Content-Type': 'application/json'
        }});
    return response;
}