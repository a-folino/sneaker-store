export type CartItemState = {
    shoe: string;
    price: number;
    id: number;
    sizes: string[];
    image: string;
};

export type Sneaker = CartItemState & { color: string, desc: string, brand: string };