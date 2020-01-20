import { Role } from './Role';
import { Profile } from './Profile';

export class User {
    userId: string;
    password: string;
    role: Role;
    profile: Profile;
    isActive: Boolean;
}