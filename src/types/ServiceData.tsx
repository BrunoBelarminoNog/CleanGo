export interface ServiceData {
  userId: number;
  contractor?: string;
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
  address: string;
  addressNumber: string;
  complement?: string;
  cep: string;
  uf: string;
  district: string;
  city: string;
}
export interface AcceptService {
  partnerId: number | undefined;
  opened: boolean;
  serviceId: number | undefined;
}
