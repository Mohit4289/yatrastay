"use client";
import Image from "next/image";
import { Search, MapPin, Headset, FileText } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <Image src="/logo.webp" alt="Logo" width={400} height={250} />
      </div>
      
      <div className={styles.navbar_location}>
        <MapPin size={20} className={styles.icon_color} />
        <input 
          type="text" 
          placeholder="Nainital" 
          className={styles.navbar_location_input} 
        />
      </div>
      
      <div className={styles.navbar_search}>
        <Search size={20} className={styles.icon_color} />
        <input 
          type="text" 
          placeholder="Search" 
          className={styles.navbar_search_input} 
        />
      </div>
      
      <div className={styles.navbar_add_listing}>
        <button className={styles.navbar_add_listing_button}>Add listing</button>
      </div>
      
      <div className={styles.navbar_support}>
        <div className={styles.support_icon}>
          <Headset size={20} className={styles.icon_color} />
        </div>
        <span>Support</span>
      </div>
      
      <div className={styles.auth_buttons}>
        <button className={styles.login_button}>
          Login
        </button>
        <span className={styles.auth_divider}>/</span>
        <button className={styles.signup_button}>
          Sign Up
        </button>
      </div>
    </div>
  );
}
