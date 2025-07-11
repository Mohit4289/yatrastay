"use client";
import Image from "next/image";
import { MapPin, Star, Heart } from "lucide-react";
import styles from "./Card.module.css";

interface CardProps {
  title: string;
  location: string;
  price: number;
  rating: number;
  discount?: number;
  imageUrl: string;
  reviews?: number;
  amenities?: string[];
}

const sampleHotels: CardProps[] = [
  {
    title: "Luxury Mountain Resort",
    location: "Manali, Himachal Pradesh",
    price: 7999,
    rating: 4.8,
    reviews: 128,
    discount: 15,
    imageUrl:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    amenities: [
      "Free WiFi",
      "Swimming Pool",
      "Spa",
      "Restaurant",
      "Mountain View",
      "Room Service",
    ],
  },
  {
    title: "Beachfront Villa",
    location: "Goa",
    price: 12999,
    rating: 4.9,
    reviews: 245,
    discount: 20,
    imageUrl:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    amenities: [
      "Private Beach",
      "Sea View",
      "Free Breakfast",
      "Bar",
      "Free Parking",
      "AC",
    ],
  },
  {
    title: "Heritage Haveli",
    location: "Udaipur, Rajasthan",
    price: 9999,
    rating: 4.7,
    reviews: 189,
    imageUrl:
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    amenities: [
      "Lake View",
      "Heritage Stay",
      "Spa",
      "Fine Dining",
      "Cultural Shows",
      "Garden",
    ],
  },
];

export default function Cards() {
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.cards}>
        {sampleHotels.map((hotel, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardImage}>
              <Image
                src={hotel.imageUrl}
                alt={hotel.title}
                width={400}
                height={200}
                className={styles.image}
                priority={index < 2}
              />

              {hotel.discount && (
                <div className={styles.discountBadge}>
                  {hotel.discount}% OFF
                </div>
              )}
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.title}>{hotel.title}</h3>
              <div className={styles.location}>
                <MapPin size={14} />
                <span>{hotel.location}</span>
              </div>
              <div className={styles.rating}>
                <Star size={16} fill="#FFC107" color="#FFC107" />
                <span>{hotel.rating}</span>
                <span>({hotel.reviews} reviews)</span>
              </div>
              <div className={styles.amenities}>
                {hotel.amenities?.slice(0, 3).map((amenity, i) => (
                  <span key={i} className={styles.amenity}>
                    {amenity}
                  </span>
                ))}
              </div>
              <button className={styles.getDetailsBtn}>
                Get Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
