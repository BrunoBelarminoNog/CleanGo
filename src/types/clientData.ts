export interface ClientData {
  // partner?: boolean;
  // name: string;
  // email: string;
  // cpf: string;
  // password: string;
  // id?: number;

  partner?: boolean;
  name: string;
  email: string;
  password?: string;
  cpf: string;
  address?: string;
  cep?: string;
  uf?: string;
  district?: string;
  complement?: string;
  gender?: string;
  birthday?: number;
  phone?: string;
  city?: string;
  services?: Array<string>[];
  id?: number;
}
