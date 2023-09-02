export type Sneaker = {
    shoe: string;
    id: number;
    sizes: string[];
    price: number;
    image: string;
}

export type CartItemState = {
    shoe: string;
    price: number;
    id: number;
    sizes: string[];
    image: string;
};