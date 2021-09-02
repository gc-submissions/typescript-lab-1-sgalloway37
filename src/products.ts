export interface Product {
  name: string;
  price: number;
}

const products: Product[] = [
  { name: "Earrings", price: 25.99 },
  { name: "Necklace", price: 28.99 },
  { name: "Braclet", price: 7.99 },
];

export function calcAverageProductPrice(productArray: Product[]): number {
  let total = 0;
  let average = 0;
  if (productArray.length > 0) {
    productArray.forEach((element) => {
      total += element.price;
    });
    average = total / productArray.length;
  }
  return average;
}

const result = calcAverageProductPrice(products);
console.log(result);
