const misProductos = [
  {
    id: "1",
    nombre: "Cacha Honda Cg 150",
    precio: 5000,
    img: "../img/img-cacha1.jpg",
    idCat: "1",
  },
  {
    id: "2",
    nombre: "Cacha Honda Wave",
    precio: 300,
    img: "../img/img-cacha6.jpg",
    idCat: "1",
  },
  {
    id: "3",
    nombre: "Cacha Motomel Skua 150",
    precio: 5500,
    img: "../img/img-cacha5.jpg",
    idCat: "1",
  },
  {
    id: "4",
    nombre: "Cacha Motomel Skua 150",
    precio: 8000,
    img: "../img/img-cacha4.jpg",
    idCat: "1",
  },
  {
    id: "5",
    nombre: "Cacha Honda Ks 125",
    precio: 6000,
    img: "../img/img-cacha3.jpg",
    idCat: "1",
  },
  {
    id: "6",
    nombre: "Cacha Honda Ks 125",
    precio: 5000,
    img: "../img/img-cacha2.jpg",
    idCat: "1",
  },
  {
    id: "7",
    nombre: "Guardabarro Ktm Sx",
    precio: 12000,
    img: "../img/guardabarro1.webp",
    idCat: "2",
  },
  {
    id: "8",
    nombre: "Guardabarro Ktm Sxf",
    precio: 15000,
    img: "../img/guardabarro2.webp",
    idCat: "2",
  },
  {
    id: "9",
    nombre: "Guardabarro Skua 150",
    precio: 9090,
    img: "../img/guardabarro3.jpg",
    idCat: "2",
  },
  {
    id: "10",
    nombre: "Guardabarro Honda Wave",
    precio: 8800,
    img: "../img/guardabarro4.jpg",
    idCat: "2",
  },
  {
    id: "11",
    nombre: "Guardabarro Honda Wave 110",
    precio: 19000,
    img: "../img/guardabarro5.jpg",
    idCat: "2",
  },
  {
    id: "12",
    nombre: "Guardabarro Honda Cg 150",
    precio: 16000,
    img: "../img/guardabarro6.webp",
    idCat: "2",
  },
];

export const getProductos = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(misProductos);
    }, 100);
  });
};

export const getUnproducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = misProductos.find((prod) => prod.id === id);
      resolve(producto);
    });
  }, 100);
};

export const getProductoPorCategoria = (idCategoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosCategoria = misProductos.filter(
        (prod) => prod.idCat === idCategoria
      );
      resolve(productosCategoria);
    }, 100);
  });
};
