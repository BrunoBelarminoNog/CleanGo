export interface UserData {
  partner?: boolean;
  name: string;
  email: string;
  password?: string;
  cpf: string;
  address: string;
  cep: string;
  uf: string;
  district: string;
  complement?: string;
  gender: string;
  birthday: number;
  phone: string;
  city: string;
  services: Array<string>[];
}

export interface PartnerData {
  partner?: boolean;
  name?: string;
  email?: string;
  password?: string;
  cpf?: string;
  address?: string;
  cep?: string;
  uf?: string;
  district?: string;
  complement?: string;
  gender?: string;
  birthday?: number;
  phone?: string;
  city?: string;
  about?: string;
  service?: string;
}

export interface FeedData {
  userId: number;
  likesFeed: number;
  bodyFeed: string;
  dataFeed: string;
}
