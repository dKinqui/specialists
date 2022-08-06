export interface Specialist {
    id: number;
    name: string;
    speciality: string;
    experience: number;
    gender: Gender;
    reviewsCount: number;
    acceptNew: boolean;
    address: string;
    insurances: string;
    telehealth: boolean;
    telehealth_available: string;
    offline_available: string;
    price: number;
}

type Gender = 'Male' | 'Female';
