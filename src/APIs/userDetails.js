import axios from "axios";

export const getUserDetails = async () => {
    try {
        console.log("Server url : ", import.meta.env.VITE_SERVER_URL);
        const response = await axios.get(`https://deepfakedetection-new.onrender.com/api/getUserDetails`, {
            withCredentials: true,
        });
        console.log(response);
        // No need to return anything
        if(response.data === "") {
            window.location.href = "/login";
            return null;
        }
        return response.data;
    } catch (err) {
        console.error(err);
        return null; // Return null in case of error
    }
};
