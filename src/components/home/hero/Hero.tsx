"use client";
import Image from "next/image";
import { 
  FaHotel, 
  FaHome, 
  FaUmbrellaBeach, 
  FaCampground, 
  FaWater, 
  FaTaxi, 
  FaUtensils, 
  FaMountain, 
  FaCity, 
  FaTree 
} from 'react-icons/fa';
import styles from "./Hero.module.css";
import { useState } from 'react';

// Category backgrounds
const categoryBackgrounds = {
  hotel: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  homestay: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  beach: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  camping: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6de93a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
  mountain: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  taxi: 'https://images.unsplash.com/photo-1531934788018-04c3cd417b80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  restaurants: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
};

const Hero = () => {
  const [activeCategory, setActiveCategory] = useState('hotel');
  const [backgroundImage, setBackgroundImage] = useState(categoryBackgrounds.hotel);
  
  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    setBackgroundImage(categoryBackgrounds[categoryId as keyof typeof categoryBackgrounds] || categoryBackgrounds.hotel);
  };

  const categories = [
    { id: "hotel", name: "Hotel", icon: <FaHotel /> },
    { id: "homestay", name: "Homestay", icon: <FaHome /> },
    { id: "resorts", name: "Resorts", icon: <FaUmbrellaBeach /> },
    { id: "campsites", name: "Campsites", icon: <FaCampground /> },
    { id: "riversides", name: "Riversides", icon: <FaWater /> },
    { id: "taxi", name: "Taxi", icon: <FaTaxi /> },
    { id: "restaurants", name: "Restaurants", icon: <FaUtensils /> },
  ];

  return (
    <div className={styles.heroContainer}>
      <div className={styles.backgroundImageContainer}>
        <Image
          src={backgroundImage}
          alt="Background image based on selected category"
          fill
          sizes="100vw"
          className={styles.backgroundImage}
          priority
          quality={100}
        />
      </div>
      <div className={styles.overlay}></div>

      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Your journey, your stay - simplified.
        </h1>
      </div>
      
      <div className={styles.categoryNav}>
        {categories.map((category) => (
          <button 
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`${styles.categoryButton} ${category.id === activeCategory ? styles.active : ''}`}
            aria-label={`Show ${category.name} options`}
          >
            <span className={styles.icon}>{category.icon}</span>
            <span className={styles.buttonText}>{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
