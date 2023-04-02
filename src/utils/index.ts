import { ProductExtract } from "../interfaces/Product";

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

export const saveProductToCart = (id: number) => {
  const existingCart = localStorage.getItem("Cart");

  if (existingCart) {
    const parsedCart: number[] = JSON.parse(existingCart);
    parsedCart.push(id);
    localStorage.setItem("Cart", JSON.stringify(parsedCart));
  } else {
    const newCart: number[] = [id];
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
