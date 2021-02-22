import { UserFirebase } from './user_firebase';
import { ProfileSocial } from './profile_social';
export class User {
    id: number;
    uid: string;
    alias: string;
    password: string;
    is_active: boolean;
    rol_id: number;
    created_at: string;
    email: string;

}
