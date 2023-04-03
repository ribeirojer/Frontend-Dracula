import { IReview } from "./Review";

export interface IElectronicProduct {
  id: number;
  name: string;
  brand: string;
  price: number;
  oldPrice?: number;
  description: string;
  image: string;
  stock: number;
  rating: number;
  salePercentage: number;
  isNew: boolean;
  category: string;
  comments?: IReview[];
  features: {
    screen?: string;
    processor?: string;
    ram?: string;
    storage?: string;
    os?: string;

    type?: string;
    connectivity?: string;
    impedance?: string;
    frequencyResponse?: string;
    sensitivity?: string;

    resolution?: string;
    sensor?: string;
    isoRange?: string;
    videoResolution?: string;
  };
}

export type ProductExtract = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export interface CartExtract {
  id: number;
  quantity: number;
}
