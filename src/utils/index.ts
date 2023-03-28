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

type Product = {
  id: number;
  name: string;
  price: number;
};

export const saveProductToLocalStorage = (product: Product) => {
  const existingWishlist = localStorage.getItem("wishlist");

  if (existingWishlist) {
    const parsedWishlist: Product[] = JSON.parse(existingWishlist);
    parsedWishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(parsedWishlist));
  } else {
    const newWishlist: Product[] = [product];
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
  }
};
