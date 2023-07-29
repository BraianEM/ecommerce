import prod1 from "../../assets/img/prod1.jpg";
import prod2 from "../../assets/img/prod2.jpg";
import prod3 from "../../assets/img/prod3.jpg";
import prod4 from "../../assets/img/prod4.jpg";
import prod5 from "../../assets/img/prod5.jpg";
import prod6 from "../../assets/img/prod6.jpg";

const productos = [
    {
        imagen: prod1,
        nombre: "Barra de luces LED",
        descripcion: "Barra de luces LED para trabajo",
        precio: "$5000",
        oferta: "$2500",
        descuento: parseInt(100 - (2500 / 5000) * 100), // Calculate discount percentage as an integer
    },
    {
        imagen: prod2,
        nombre: "Bateria de Litio",
        descripcion: "Bateria de litio 12.8V-160Ah",
        precio: "$3500",
        oferta: "$1500",
        descuento: parseInt(100 - (1500 / 3500) * 100), // Calculate discount percentage as an integer
    },
    {
        imagen: prod3,
        nombre: "Cable HDMI 2.0",
        descripcion: "cable hdmi 2.0 ",
        precio: "$1350",
        oferta: "$750",
        descuento: parseInt(100 - (750 / 1350) * 100), // Calculate discount percentage as an integer
    },
    {
        imagen: prod4,
        nombre: "PCLe USB 3.0 expansion",
        descripcion: "Tarjeta de expansion PCLe USB3.0 ",
        precio: "$1500",
        oferta: "$800",
        descuento: parseInt(100 - (800 / 1500) * 100), // Calculate discount percentage as an integer
    },
    {
        imagen: prod5,
        nombre: "Sensor de movimiento",
        descripcion: "Sensor de movimiento inflarojo 2.0",
        precio: "$1500",
        oferta: "$700",
        descuento: parseInt(100 - (700 / 1500) * 100), // Calculate discount percentage as an integer
    },
    {
        imagen: prod6,
        nombre: "Sensor de Temperatura",
        descripcion: "Sensor de temperatura",
        precio: "$3121",
        oferta: "$2200",
        descuento: parseInt(100 - (2200 / 3121) * 100), // Calculate discount percentage as an integer
    },
];


export default productos;