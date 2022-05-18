import { defineStore } from "pinia";
import { IUserStore } from "@/types/User";
import { isObject } from "@/helpers";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/firebase";

export const useUserStore = defineStore("user", {
    persist: true,

    state: () => ({
        userData: null,
    } as IUserStore),

    getters: {
        isLogged: (state) => isObject(state.userData),
    },

    actions: {
        async signUp(email: string, password: string): Promise<boolean> | never {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                this.userData = userCredential.user;
                return true;
            } catch (error) {
                console.error("SignUp error", error);
                throw error;
            }
        },

        async signIn(email: string, password: string): Promise<boolean> | never {
            try {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                this.userData = userCredential.user;
                return true;
            } catch (error) {
                console.error("SignIn error", error);
                throw error;
            }
        },
    },
});