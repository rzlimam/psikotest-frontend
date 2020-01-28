export class Profile {
    
    profileId: string;
    profileName: string;
    gender: string;
    dateOfBirth: Date;
    address: string;
    phone: string;
    email: string;
    isActive: Boolean;
    appliedPosition: any;


    constructor(
        profileId: any,
        profileName: any,
        gender: any,
        dateOfBirth: Date,
        address: any,
        phone: any,
        email: any,
        isActive: Boolean,
        appliedPosition: any){}
}