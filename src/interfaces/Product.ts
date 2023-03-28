export interface IElectronicProduct {
  id: number;
  name: string;
  brand: string;
  price: number;
  oldPrice?: number;
  description: string;
  image: string;
  stock: number;
  salePercentage: number;
  isNew: boolean;
  category: string;
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
