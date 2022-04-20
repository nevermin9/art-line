import { User } from "firebase/auth";

export interface UserStore {
    userData: User | null;
}
