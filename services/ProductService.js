const PRODUCTS = [
    {
        id: 100,
        name: 'Hoodie with Custom Style',
        price: 4500,
        image: "https://store.akadigital.net/wp-content/uploads/2021/07/hoodie-with-logo.jpg",
        description: 'A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).'
    },
    {
        id: 101,
        name: 'Beanie',
        price: 18000000,
        image: "https://store.akadigital.net/wp-content/uploads/2021/07/beanie.jpg",
        description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
    },
    {
        id: 102,
        name: 'Sunglasses',
        price: 90000000,
        image: "https://store.akadigital.net/wp-content/uploads/2021/07/sunglasses.jpg",
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    }
];
export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}