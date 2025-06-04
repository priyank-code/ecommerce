import { createContext } from "react";
import pop1 from "../assets/pop1.png";
import pop2 from "../assets/pop2.png";
import pop3 from "../assets/pop3.png";
import pop4 from "../assets/pop4.png";
import pop5 from "../assets/pop5.png";
import pop6 from "../assets/pop6.png";
import pop7 from "../assets/pop7.png";
import pop8 from "../assets/pop8.png";
import pop9 from "../assets/pop9.png";
import pop10 from "../assets/pop10.png";
import truke from "../assets/truke.png";
import boult from "../assets/boult.png";
import Adidas from "../assets/adidas.png";
import Apple from "../assets/apple.png";
import Philips from "../assets/philips.png";
import Puma from "../assets/puma.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag} from "@fortawesome/free-regular-svg-icons";
import { faBox, faTag, faHeadphones, faTruck } from "@fortawesome/free-solid-svg-icons";

export const myContext = createContext();

export const MyContextProvider = ({ children }) => {
  const cardData = [
    {title: "Electronics and Accessories",image: pop1},
    {title: "Grocery Products",image: pop2},
    {title: "Home Appliances",image: pop3},
    {title: "Beauty Products",image: pop4},
    {title: "Mobiles and Accessories",image: pop5},
    {title: "Mens Fashion",image: pop6},
    {title: "Womens Fashion",image: pop7},
    {title: "Kids Fashion",image: pop8},
    {title: "Beverages",image: pop9},
    {title: "Oil and Ghee",image: pop10},
  ];

  const TBDeal = [{id: 1,img: truke, title: 'Truke BTG1 Gaming earbuds with 60ms Low Latency 13mm drivers with AAC codec Bluetooth Headset  (Black, True Wireless)...', rating: 4.4, des: 'Black True Wireless', price: 'Rs 1499', tprice: 'Rs. 3499', discount: '(57% off)', heart: true},
  {
    id: 2,img: boult, title: 'Boult Audio AirBass GearPods with 32H Playtime Bluetooth Headset  (Black, True Wireless)', rating: 4.4, des: 'Black True Wireless', price: 'Rs 1299', tprice: 'Rs. 3499', discount: '(78% off)', heart: false
  },{
    id: 3, img: truke, title: 'Truke BTG1 Gaming earbuds with 60ms Low Latency 13mm drivers with AAC codec Bluetooth Headset  (Black, True Wireless)...', rating: 4.4, des: 'Black True Wireless', price: 'Rs 1499', tprice: 'Rs. 3499', discount: '(57% off)', heart: true
  },{
    id: 4, img: boult, title: 'Boult Audio AirBass GearPods with 32H Playtime Bluetooth Headset  (Black, True Wireless)', rating: 4.4, des: 'Black True Wireless', price: 'Rs 1299', tprice: 'Rs. 3499', discount: '(78% off)', heart: false
  }
]

const BSeller = [
  {
    id: 1,
    name: 'Adidas',
    img: Adidas
  },
  {
    id: 2,
    name: 'Apple',
    img: Apple
  },
  {
    id: 3,
    name: 'Philips',
    img: Philips
  },
  {
    id :4,
    name: 'Puma',
    img: Puma
  },
]

  const signupData = [
    {id: 1, text: 'Duties and Taxes Guaranteed'},
    {id: 2, text: 'Free Express Shipping'},
    {id: 3, text: 'Customer Love'},
    {id: 4, text: 'Easy Returns'},
    {id: 5, text: 'Secure Payment'},
  ]

  const featureBlog = [
    {id: 1, icon: faFlag, title: 'Locally Owned', desc: 'We have local business and sell best quality clothes'},
    {id: 2, icon: faTruck, title: 'Fast Delivery', desc: 'We provide fast delivery to our customers'},
    {id: 3, icon: faBox, title: 'Easy Return', desc: 'We provide easy return policy. '},
    {id: 4, icon: faHeadphones, title: 'Online Support', desc: 'We give 24/7 online support'},
    {id: 5, icon: faTag, title: 'Best Offers', desc: 'We give best offers to our customers'}
  ]
  return (
    <myContext.Provider value={{ cardData, TBDeal, BSeller, signupData, featureBlog}}>{children}</myContext.Provider>
  );
};

export default MyContextProvider;
