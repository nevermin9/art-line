import { defineStore } from "pinia";
import { IArtworksStore } from "@/types/Artworks";



export const useArtworksStore = defineStore("artworks", {
    persist: true,

    state: () => ({

    } as IArtworksStore),
});