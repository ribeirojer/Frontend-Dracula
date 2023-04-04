import { CartExtract, ProductExtract } from "../interfaces/Product";

export function countOccurrences(arr: number[]) {
  const counts: number[] = [];
  const total = arr.length;

  for (let i = 0; i < total; i++) {
    const num = arr[i];
    if (counts[num]) {
      counts[num]++;
    } else {
      counts[num] = 1;
    }
  }

  for (let i = 0; i <= 5; i++) {
    if (!counts[i]) {
      counts[i] = 0;
    } else {
      counts[i] = (counts[i] / total) * 100;
    }
  }

  return counts;
}

export function fillStars(rating: number, index: number): "fill" | "regular" {
  if (index < rating) {
    return "fill";
  } else {
    return "regular";
  }
}

export const saveProductToCart = (item: CartExtract) => {
  const existingCart = localStorage.getItem("Cart");

  if (existingCart) {
    const parsedCart: CartExtract[] = JSON.parse(existingCart);
    parsedCart.push(item);
    localStorage.setItem("Cart", JSON.stringify(parsedCart));
  } else {
    const newCart: CartExtract[] = [item];
    localStorage.setItem("Cart", JSON.stringify(newCart));
  }
};

export const saveProductToWishlist = (product: ProductExtract) => {
  const existingWishlist = localStorage.getItem("wishlist");

  if (existingWishlist) {
    const parsedWishlist: ProductExtract[] = JSON.parse(existingWishlist);
    parsedWishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(parsedWishlist));
  } else {
    const newWishlist: ProductExtract[] = [product];
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
  }
};

export const saveProductToCompare = (product: ProductExtract) => {
  const existingCompare = localStorage.getItem("compare");

  if (existingCompare) {
    const parsedCompare: ProductExtract[] = JSON.parse(existingCompare);
    parsedCompare.push(product);
    localStorage.setItem("compare", JSON.stringify(parsedCompare));
  } else {
    const newCompare: ProductExtract[] = [product];
    localStorage.setItem("compare", JSON.stringify(newCompare));
  }
};

export const removeProductFromCompare = (productId: number) => {
  const existingCompare = localStorage.getItem("compare");

  if (existingCompare) {
    const parsedCompare: ProductExtract[] = JSON.parse(existingCompare);
    const filteredCompare: ProductExtract[] = parsedCompare.filter(
      (product) => product.id !== productId
    );
    localStorage.setItem("compare", JSON.stringify(filteredCompare));
  }
};

export const removeProductFromWishlist = (product: ProductExtract) => {
  const existingWishlist = localStorage.getItem("wishlist");

  if (existingWishlist) {
    const parsedWishlist: ProductExtract[] = JSON.parse(existingWishlist);
    const updatedWishlist = parsedWishlist.filter((p) => p.id !== product.id);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  }
};
export function maskPhone(value: string) {
  value = value.replace(/\D/g, ""); // Remove tudo o que não é dígito
  value = value.replace(/^(\d{2})(\d)/g, "($1) $2"); // Coloca parênteses em volta dos dois primeiros dígitos
  value = value.replace(/(\d)(\d{4})$/, "$1-$2"); // Coloca hífen entre o quarto e o quinto dígitos
  return value;
}
interface CheckoutData {
  firstName: string;
  lastName: string;
  email: string;
  zipCode: string;
  logradouro: string;
  numberAddress: string;
  complemento: string;
  bairro: string;
  city: string;
  state: string;
  tel: string;
}

export function validateCheckoutData(data: CheckoutData): boolean {
  // Verifica se todos os campos obrigatórios foram preenchidos
  if (
    !data.firstName ||
    !data.lastName ||
    !data.email ||
    !data.zipCode ||
    !data.logradouro ||
    !data.city ||
    !data.state ||
    !data.numberAddress ||
    !data.complemento ||
    !data.bairro ||
    !data.tel
  ) {
    return false;
  }

  // Valida o formato do email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return false;
  }

  // Valida o formato do CEP
  const zipRegex = /^\d{5}-?\d{3}$/;
  if (!zipRegex.test(data.zipCode)) {
    return false;
  }

  return true;
}
