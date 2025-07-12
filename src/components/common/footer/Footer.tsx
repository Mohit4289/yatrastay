import Image from "next/image";
import {
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsTelephone,
  BsEnvelope,
  BsArrowRight,
} from "react-icons/bs";
import {
  FaHotel,
  FaHome,
  FaCampground,
  FaWater,
  FaTaxi,
  FaMapMarkerAlt,
  FaStar,
} from "react-icons/fa";
import { BiInfoCircle, BiNews, BiPhoneCall, BiUser } from "react-icons/bi";
import { RiFilePaper2Line } from "react-icons/ri";
import { AiOutlineFileText } from "react-icons/ai";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerLogo}>
          <div className={styles.logo}>
            <Image
              src="/logo.webp"
              alt="YatraStay Logo"
              width={400}
              height={250}
            />
          </div>
          <p className={styles.tagline}>Your journey, your stay-simplified.</p>
          <p className={styles.description}>
            YatraStay is a travel discovery and booking platform where travelers
            connect directly with hosts of hotels, homestays, campsites,
            riverside stays, and taxis across India.
          </p>
          <div className={styles.socialLinks}>
            <Link
              href="https://facebook.com/yatrastay"
              target="_blank"
              aria-label="Facebook"
            >
              <BsFacebook size={20} />
            </Link>
            <Link
              href="https://instagram.com/yatrastay"
              target="_blank"
              aria-label="Instagram"
            >
              <BsInstagram size={20} />
            </Link>
            <Link
              href="https://youtube.com/yatrastay"
              target="_blank"
              aria-label="YouTube"
            >
              <BsYoutube size={20} />
            </Link>
          </div>
          <div className={styles.footerBottom}>
            <p>All Rights Reserved © {new Date().getFullYear()} YatraStay</p>
            <p>
              Made with <span className={styles.heart}>❤️</span> in India
            </p>
          </div>
        </div>

        <div className={styles.linkColumn}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link href="/about">
                <BiInfoCircle className={styles.icon} /> About Us
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <BiNews className={styles.icon} /> Blog
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <BiPhoneCall className={styles.icon} /> Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy">
                <RiFilePaper2Line className={styles.icon} /> Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms">
                <AiOutlineFileText className={styles.icon} /> Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.linkColumn}>
          <h3>Start Listing Free</h3>
          <ul>
            <li>
              <Link href="/list/hotels">
                <FaHotel className={styles.icon} /> Hotels
              </Link>
            </li>
            <li>
              <Link href="/list/homestays">
                <FaHome className={styles.icon} /> Homestays
              </Link>
            </li>
            <li>
              <Link href="/list/campsites">
                <FaCampground className={styles.icon} /> Campsites
              </Link>
            </li>
            <li>
              <Link href="/list/riverside-stays">
                <FaWater className={styles.icon} /> Riverside Stays
              </Link>
            </li>
            <li>
              <Link href="/list/taxis">
                <FaTaxi className={styles.icon} /> Taxis
              </Link>
            </li>
            <li>
              <Link href="/locations">
                <FaMapMarkerAlt className={styles.icon} /> Popular Locations
              </Link>
            </li>
            <li>
              <Link href="/featured">
                <FaStar className={styles.icon} /> Featured Listings
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <h4>24/7 Customer Support</h4>
            <div className={styles.contactDetail}>
              <BsTelephone className={styles.contactIcon} />
              <Link href="tel:+919876543210">+91 98765 43210</Link>
            </div>
          </div>
          <div className={styles.contactItem}>
            <h4>Email</h4>
            <div className={styles.contactDetail}>
              <BsEnvelope className={styles.contactIcon} />
              <Link href="mailto:support@yatrastay.com">
                support@yatrastay.com
              </Link>
            </div>
          </div>

          <div className={styles.ownerSection}>
            <h4>For Owners</h4>
            <p>
              <span className={styles.highlight}>List Your Stay or Taxi</span>
              Do you own a homestay, hotel, campsite, riverside stay, or offer
              local taxi service? Join YatraStay and get bookings directly from
              travelers.
            </p>
            <Link href="/owner/register" className={styles.ownerLink}>
              Start Listing Now <BsArrowRight className={styles.arrowIcon} />
            </Link>
          </div>
        </div>
      </div>

   
    </footer>
  );
}
