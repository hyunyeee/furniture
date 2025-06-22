export interface Histories {
  id?: number;
  title: string;
  content: string;
  imageUrl1: string;
  imageUrl2: string;
}

export interface CompanyImage {
  imageUrl: number;
  description: string;
}

export interface CompanyDetail {
  companyName: string;
  ceo: string;
  establishmentDate: string;
  businessArea: string;
  scale: string;
  mainClient: string;
}

export interface CompanyAddress {
  id: number;
  address: string;
  phone: string;
  fax: string;
  email: string;
  subway: string;
  bus: string;
  walk: string;
  car: string;
}

export interface Certificate {
  id: number;
  imageUrl: string;
  tag: string;
  description: string;
}
