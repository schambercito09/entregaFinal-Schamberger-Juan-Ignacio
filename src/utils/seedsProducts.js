import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

const products = [
    {
        
        "name": "CAMISETA ARQUERO ARGENTINA 24",
        "price": "51.999",
        "category": "REMERA",
        "talle": "S",
        "stock": 3,
        "url": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/97eefaf616f846d4be156fe23a0f3125_9366/Camiseta_Arquero_Argentina_24_Negro_IP8380_01_laydown.jpg",
        "url2": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fa8c718bce0748038254dda38ba5d382_9366/Remera_AFA_WC_Aniversario_4_Blanco_IV1930_02_laydown_hover.jpg",
        "incrementadorCantidad": 0,
        "mostrar":true,
    },
    {
        
        "name": "MUSCULOSA ARGENTINA TIRO 24",
        "price": "69.999",
        "category": "MUSCULOSA",
        "talle": "M",
        "stock": 2,
        "url": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/87125fb55f734c1ca0e986d0c3e7ba85_9366/Musculosa_Argentina_Tiro_24_Gris_IQ0813_01_laydown.jpg",
        "url2": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c0987e0d1c404825bb54af0200e5a1d3_9366/Musculosa_Adizero_Negro_HN8009_23_hover_model.jpg",
        "incrementadorCantidad": 0,
        "mostrar":false,
    },
    {
        
        "name": "CAMISETA TITULAR ARGENTINA 24",
        "price": "51.999",
        "category": "REMERA",
        "talle": "S",
        "stock": 3,
        "url": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c4c8dee7623f4209b76dfd333a68c812_9366/Camiseta_Titular_Argentina_24_Blanco_IP8400_01_laydown.jpg",
        "url2": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1c3c2a836ae04fda835b2fc99f9c4c43_9366/Remera_AFA_WC_Aniversario_2_Blanco_IV1928_02_laydown_hover.jpg",
        "incrementadorCantidad": 0,
        "mostrar":true,
    },
    
    {
        
        "name": "CAMISETA ALTERNATIVA AUTHENTIC ARGENTINA 24",
        "price": "54.999",
        "category": "REMERA",
        "talle": "S",
        "stock": 3,
        "url": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/430623aec3f54f6c8ee3f3fb1615e841_9366/Camiseta_Alternativa_Authentic_Argentina_24_Azul_IP8384_21_model.jpg",
        "url2": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/52b86405cae2431e832c7516fbef9c06_9366/Remera_AFA_WC_Aniversario_5_Negro_IV1931_02_laydown_hover.jpg",
        "incrementadorCantidad": 0,
        "mostrar":true,
    },
    {
        
        "name": "MUSCULOSA ARGENTINA TIRO 24",
        "price": "67.999",
        "category": "MUSCULOSA",
        "talle": "M",
        "stock": 2,
        "url": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f69892e65c46417f87764d6c4f833530_9366/Musculosa_Argentina_Tiro_24_Beige_IQ0814_01_laydown.jpg",
        "url2": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f7b1a26e96a24593acbfaf0900db7376_9366/Musculosa_Adizero_Running_Blanco_HZ9033_23_hover_model.jpg",
        "incrementadorCantidad": 0,
        "mostrar":false,
    },
    
    {
        
        "name": "MUSCULOSA BOCA JUNIORS",
        "price": "69.999",
        "category": "MUSCULOSA",
        "talle": "M",
        "stock": 3,
        "url": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4a6389081ab0473fbe9344d75cb5faef_9366/Musculosa_Boca_Juniors_Turquesa_HY0405_01_laydown.jpg",
        "url2": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d4506379023748108135af1c0100340e_9366/Musculosa_Adizero_Blanco_IA9340_23_hover_model.jpg",
        "incrementadorCantidad": 0,
        "mostrar":false,
    },
    
    {
       
        "name": "MUSCULOSA DE ENTRENAMIENTO TECHFIT",
        "price": "44.999",
        "category": "MUSCULOSA",
        "talle": "M",
        "stock": 2,
        "url": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/eb67230654f9469b94faae55009b58a0_9366/Musculosa_de_Entrenamiento_Techfit_Negro_HK2338_01_laydown.jpg",
        "url2": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c62b9b098cf841da8403af350110f8a7_9366/Musculosa_de_Entrenamiento_Yoga_Base_Negro_IB7888_23_hover_model.jpg",
        "incrementadorCantidad": 0,
        "mostrar":false,
    },
    {
        
        "name": "CAMISETA BECKENBAUER ARGENTINA",
        "price": "51.999",
        "category": "REMERA",
        "talle": "S",
        "stock": 8,
        "url": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f39eb57181614ca98cb88ad445bd7730_9366/Camiseta_Beckenbauer_Argentina_Negro_IU2154_HM1.jpg",
        "url2": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/93a7b7202f5249f1bdde3bb52ddf64ea_9366/RP_CO_TEE_Rojo_HY0428_02_laydown_hover.jpg",
        "incrementadorCantidad": 0,
        "mostrar":true,
    },
    {
        
        "name": "MUSCULOSA DE RUNNING NYC (UNISEX)",
        "price": "60.999",
        "category": "MUSCULOSA",
        "talle": "M",
        "stock": 4,
        "url": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ea562a742b064845bdd1ffeaa1f5a6c0_9366/Musculosa_de_Running_NYC_Unisex_Turquesa_IK6885_HM1.jpg",
        "url2": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9cc10e38b1be40db968daf4f012a1d79_9366/Musculosa_de_Entrenamiento_HIIT_AEROREADY_Quickburn_Negro_HY5395_23_hover_model.jpg",
        "incrementadorCantidad": 0,
        "mostrar":false,
    },
];

export const seedProducts = () => { 
    products.forEach( product =>{
        addDoc( collection(db, "products"), product )

    })
 }