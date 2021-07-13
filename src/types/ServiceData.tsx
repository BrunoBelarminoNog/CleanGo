export interface ServiceData {
  userId: number;
  date: number;
  price: number;
  serviceDetails: {
    class: string;
    hours: number;
    type?: string;
    bedroom?: number;
    bathroom?: number;
  };
  opened: boolean;
  completed: boolean;
  partnerId: number;
  formatedPrice?: string;
  id?: number;
}
export interface AcceptService {
  partnerId: number;
  opened: boolean;
  serviceId: number;
}
