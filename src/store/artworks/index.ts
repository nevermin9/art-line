import { defineStore } from "pinia";
import { IArtworksStore } from "@/types/Artworks";
import artworks from "@/api/artworks";

export const useArtworksStore = defineStore("artworks", {
    persist: true,

    state: () => ({

    } as IArtworksStore),

    actions: {
        getArtworksPage(page: number, limit: number = 12) {
            return artworks.getArtworksPage(page, limit);
        }
    }
});