export interface IElectronicProduct {
    id: number;
    name: string;
    brand: string;
    price: number;
    description: string;
    image: string;
    stock: number;
    features: {
      screen: string;
      processor: string;
      ram: string;
      storage: string;
      os: string;
    };
  }
  