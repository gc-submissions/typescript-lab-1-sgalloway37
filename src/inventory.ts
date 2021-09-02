import { Product } from "./products";

interface InventoryItem{
    product: Product;
    quantity: number;
}

const inventory : InventoryItem[] = [
    {product: {name: 'motor', price: 10.00}, quantity: 10},
    {product: {name: 'sensor', price: 12.50}, quantity: 4},
    {product: {name: 'LED', price: 1.00}, quantity: 20}
];

export function calcInventoryValue(inventoryItems:InventoryItem[]): number {
    let total = 0;
    if(inventoryItems.length > 0){
        inventoryItems.forEach(element => {
            total += (element.product.price * element.quantity);
        });
    }
    return total;
}

const result = calcInventoryValue(inventory);
console.log(result);