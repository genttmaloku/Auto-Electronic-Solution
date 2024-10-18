import images from "./images";
import {FaMicrochip, FaTools,FaTachometerAlt   ,FaCog, FaFileAlt, FaPhoneAlt, FaEnvelopeOpen, FaMapMarkerAlt} from "react-icons/fa";
import {FaCar} from "react-icons/fa";
import {ImMagicWand, ImKey, ImWrench} from "react-icons/im";
import {AiOutlineReload, } from "react-icons/ai";
import {AiOutlineKey } from "react-icons/ai";

const gradient = "url(#blue-gradient)" ;

const services = [
    {
        id: 1,
        icon: <FaMicrochip style = {{ fill: '#f11a28' }} />,
        title: "CHIP TUNING",
        text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    },
    {
        id: 2,
        icon: <FaCar style = {{fill: '#f11a28' }} />,
        title: "DPF EGR ADBLUE",
        text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    },
    {
        id: 3,
        icon: <FaTools style = {{ fill: '#f11a28' }} />,
        title: "Diagnostifikim dhe Riprogramim ECU te Kamioneve",
        text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    },
    {
        id: 4, 
        icon: <ImKey  style = {{ fill: '#f11a28' }} />,
        title: "Riparim dhe Shumezimi i Celesave",
        text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    },
    {
        id: 5,
        icon: <ImWrench style = {{fill: '#f11a28' }} />,
        title: "Diagnostifikim dhe Riprogramim ECU",
        text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    },
    {
        id: 6,
        icon: <FaTachometerAlt  style = {{ fill: '#f11a28' }} />,
        title: "Retrofit",
        text: "Lorem ipsum dolor sit mattis amet consectetur adipiscing"
    }
];

const about = [
    {
        id: 7,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus leo et diam fermentum ullamcorper. Nulla venenatis nibh sollicitudin tincidunt gravida. Nam convallis justo et ligula luctus suscipit. Etiam eu nisi turpis. Donec sollicitudin accumsan quam, rhoncus sagittis metus semper quis. Praesent convallis mauris sed ipsum lobortis facilisis. Nulla cursus sem non nunc sagittis, a volutpat mauris lobortis. Nulla ut feugiat tellus. Nam dictum nisi nec scelerisque auctor"
    }
]

const qualities = [
    {
        id: 8,
        icon: <FaFileAlt style = {{ fill: '#f11a28' }} />,
        title: "Ideas & Plans",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod."
    },
    {
        id: 9,
        icon: <AiOutlineReload style = {{ fill: '#f11a28' }}  />,
        title: "Prompt Strategies",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod."
    }
];

const features = [
    {
        id: 10,
        title: "CHIP TUNING",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc."
    },
    {
        id: 11,
        title: "DPF EGR ADBLUE",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc."
    },
    {
        id: 12,
        title: "Diagnostifikim dhe Riprogramim ECU te Kamioneve",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc."
    },
    {
        id: 13,
        title: "Riparim dhe Shumezimi i Celesav",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc."
    }, 
    {
        id: 14,
        title: "Diagnostifikim dhe Riprogramim ECU",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc."
    },
    {
        id: 15,
        title: "Retrofit",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et elit vitae lectus convallis scelerisque. Cras vestibulum blandit lorem, at fringilla nisl sollicitudin ac. Nunc venenatis nec neque sed semper. Mauris viverra, sapien sed fringilla egestas, sem felis condimentum augue, vitae sodales sem metus in ex. Aenean massa velit, sollicitudin quis elementum sit amet, vehicula sed nunc."
    }
];

const portfolio = [
    {
        id: 16,
        title: "Ndrimi i Retrofitit",
        text: "Kliko për ta shikuar videon!",
        image: images.Tiktok1,
        tiktokUrl: 'https://www.tiktok.com/@aes_center/video/7400693926174149893'
    },
    {
        id: 17,
        title: "Golf 8 GTE. Add key. Lost key deleted",
        text: "Kliko për ta shikuar videon!",
        image: images.Tiktok2,
        tiktokUrl: 'https://www.tiktok.com/@aes_center/photo/7350618616238214406'
       
    },
    {
        id: 18,
        title: "Ndrimi i Retrofitit",
        text: "Kliko për ta shikuar videon!",
        image: images.Tiktok1,
        tiktokUrl: 'https://www.tiktok.com/@aes_center/video/7400693926174149893'
    }
];

const testimonials = [
    {
        id: 19,
    
        image: images.Tiktok1,
       
    },
    {
        id: 20,
      
        image: images.Tiktok1,
   
    },
    {
        id: 21,
       
        image: images.Tiktok1,
      
    },
    {
        id: 22,
       
        image: images.Tiktok1,
       
    },
    {
        id: 23,
       
        image: images.Tiktok1,
      
    },
    {
        id: 24,
       
        image: images.Tiktok1,
     
    }
]

const contact = [
    {
        id: 25,
        icon: <FaPhoneAlt style = {{ fill: '#f11a28' }} />,
        info: "+383 48 660 065",
        text: "Na telefononi ose kontaktoni përmes WhatsApp-it."
    },
    {
        id: 26,
        icon: <FaEnvelopeOpen style = {{ fill: '#f11a28' }} />,
        info: "dreni33@gmail.com",
       
    },
    {
        id: 27,
        icon: <FaMapMarkerAlt style = {{ fill: '#f11a28' }} />,
        info: "Prizren, Arbana  Rr.Wesley Clark",
       
    }
]

const sections = {services, about, qualities, features, portfolio, testimonials, contact};

export default sections;