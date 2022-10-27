import http from "@/controllers/http";
import { IArtwork, IArtworksPagination } from "@/types/artworks";


const getArtworksList = async () => {
    const response = await http.get("/artworks");

    return response.data;
};

interface IArtworkPageResponse {
    data: IArtwork[],
    pagination: IArtworksPagination,
}

const getArtworksPage = async (page: number, limit: number): Promise<IArtworkPageResponse> => {
    const response = await http.get("/artworks", { params: { page, limit }});

    return response.data;
}

export default {
    getArtworksList,
    getArtworksPage,
};
