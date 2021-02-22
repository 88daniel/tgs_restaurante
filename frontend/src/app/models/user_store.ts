import { ProfileSocial } from './profile_social';
import { Store } from './store';
import { User } from './user';

export class UserStore {
    id: number;
    nombre: string;
    apellido: string;
    alias: string;
    password: string;
    is_active: boolean;
    rol_id: number;
    created_at: string;
    email: string;
    store: string;
    store_id: number;

}
