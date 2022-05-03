import http from "@/controllers/http";

const getArtworksList = async () => {
    const response = await http.get("/artworks");

    return response.data;
};

export default {
    getArtworksList,
};
