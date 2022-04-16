import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/firebase";


export default function useAuth() {

    function registerUser(email: string, password: string) {
        console.log("inside");
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("success!", userCredential);
            })
            .catch((error) => {
                console.log("fail!", error);
            });
    }

    return {
        registerUser,
    }
}