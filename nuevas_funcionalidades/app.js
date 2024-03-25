class productManager {
    constructor (){
    this.products = [];
    this.lastid = 0;
    }

addProduct(producto) {
    if (!producto.title || !producto.description || !producto.price || !producto.thumbnail || !producto.code || !producto.stock ) {
        console.log("Todos los campos son obligatorios");
        return;
    
    }

    if (this.products.some(p => p.code === producto.code)) {
        console.log("Ya existe un producto con el codigo proporcionado");
        return;
    }
    producto.id = ++this.lastid;
    this.products.push(producto);
}

getProducts() {
    return this.products;
}
getProductById(id) {
 const product = this.products.find (p => p.id === id);
 if (!product) {
    console.log("No se encontro un producto con ese ID");
     }
     return product;
}
}

const manager = new productManager();
manager.addProduct ({
    titulo: "Producto 1",
    descripcion: "Descripción del producto 1",
    precio: 100,
    thumbnail: "ruta/imagen1.jpg",
    codigo: "001",
    stock: 10
});

manager.addProduct({
    title: "Producto 2",
    description: "Descripción del producto 2",
    price: 150,
    thumbnail: "ruta/imagen2.jpg",
    code: "002",
    stock: 5
});

console.log(manager.getProducts());
console.log(manager.getProductById(1));
console.log(manager.getProductById(3)); 
