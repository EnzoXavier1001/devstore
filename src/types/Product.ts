export type Product = {
    title: string;
    category: string;
    description: string;
    id: number;
    image:  string;
    price: number;
    rating: {
        rate: number;
        count: number;
    }
}