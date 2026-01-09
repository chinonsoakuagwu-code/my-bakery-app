// src/components/Products.js
import cake1 from '../assets/Cake1.png'
import cake2 from '../assets/Cake 2.png'
import cake3 from '../assets/Cake 3.png'
import cake4 from '../assets/Cake 4.png'
import cake5 from '../assets/Cake 5.png'
import cake6 from '../assets/Cake 6.png'
import meatpie from '../assets/meatpie.png'
import bread from '../assets/bread.png'
import bbread from '../assets/bana bread.png'
import breadrolls from '../assets/breadrolls.png'
import sausage from '../assets/sus rolls.png'
import cinnamon from '../assets/cinrolls.png'
import cookies from '../assets/cookies.png'
import sectslice from '../assets/sectslice.png'

export const cakeProducts = [
  { 
    id: 'iced-chocolate', 
    name: "Iced Chocolate Cake", 
    price: "₦ 60,000", 
    img: cake1,
    ingredients: "All-purpose flour, cocoa powder, sugar, eggs, butter, dairy...",
    allergenInfo: "Contains gluten, eggs, dairy. May contain soy."
  },
  { 
    id: 'vanilla-tripple', 
    name: "Vanilla Tripple Decker", 
    price: "₦ 45,000", 
    img: cake2,
    ingredients: "All-purpose flour, cocoa powder, sugar, eggs, butter, dairy...",
    allergenInfo: "Contains gluten, eggs, dairy. May contain soy."
  },
  { 
    id: 'double-chocolate', 
    name: "Double Chocolate Cake", 
    price: "₦ 35,000", 
    img: cake3,
    ingredients: "All-purpose flour, cocoa powder, sugar, eggs, butter, dairy...",
    allergenInfo: "Contains gluten, eggs, dairy. May contain soy."
  },
  { 
    id: 'strawberry', 
    name: "Iced Strawbery", 
    price: "₦ 45,000", 
    img: cake4,
    ingredients: "All-purpose flour, cocoa powder, sugar, eggs, butter, dairy...",
    allergenInfo: "Contains gluten, eggs, dairy. May contain soy."
  },
  { 
    id: 'redvelvet', 
    name: "Red Velvet Cake", 
    price: "₦ 35,000", 
    img: cake5,
    ingredients: "All-purpose flour, cocoa powder, sugar, eggs, butter, dairy...",
    allergenInfo: "Contains gluten, eggs, dairy. May contain soy."
  },
  { 
    id: 'wedding', 
    name: "Wedding Cake", 
    price: "₦ 189,000", 
    img: cake6,
    ingredients: "All-purpose flour, cocoa powder, sugar, eggs, butter, dairy...",
    allergenInfo: "Contains gluten, eggs, dairy. May contain soy."
  },
  
];


export const allProducts = [
  // Pastries Category
  { id: 'beef-meatpie', name: "Beef Meatpie", price: "₦ 1,500", img: meatpie, category: 'pastries' },
  { id: 'sliced-bread', name: "Sliced Bread", price: "₦ 1,800", img: bread, category: 'pastries' },
  { id: 'sausage-rolls', name: "Sausage rolls", price: "₦ 1,500", img: sausage, category: 'pastries' },
  { id: 'bana Bread', name: "Bananna bread", price: "₦ 1,500", img: bbread, category: 'pastries' },
  
  // Snacks Category
  { id: 'cinnamon-rolls', name: "Cinnamon Rolls", price: "₦ 2,000", img: cinnamon, category: 'snacks' },
  { id: 'cookies', name: "Cookies", price: "₦ 5,000", img: cookies, category: 'snacks' },
  { id: 'breadrolls', name: "breadrolls", price: "₦ 5,000", img: breadrolls, category: 'snacks' },
  { id: 'sectslice', name: "sectslice", price: "₦ 5,000", img: sectslice, category: 'snacks' },
];