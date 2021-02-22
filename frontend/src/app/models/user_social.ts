import { UserStore } from './user_store';
import { ProfileSocial } from './profile_social';
import { UserFirebase } from './user_firebase';
export class UserSocial {
    additionalUserInfo: ProfileSocial;
    credential: any;
    operationType: string;
    user: UserFirebase;
}
