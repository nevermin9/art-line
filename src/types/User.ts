import { User } from "firebase/auth";

export interface IUserStore {
    userData: User | null;
}
