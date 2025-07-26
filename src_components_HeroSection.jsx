import React from "react";
import styles from "../styles/layout.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <h1>Welcome to Papa's Pastries!</h1>
      <p>
        Freshly baked every morning from treasured family recipes.<br />
        Discover our warm, inviting bakery and taste the difference!
      </p>
      <div className={styles.features}>
        <div>
          <h3>🥐 Baked Fresh Daily</h3>
          <p>Croissants, danishes, muffins & more, straight from our ovens.</p>
        </div>
        <div>
          <h3>👨‍👩‍👧‍👦 Family Recipes</h3>
          <p>Tradition and love in every bite, passed down through generations.</p>
        </div>
        <div>
          <h3>🕒 Visit Us</h3>
          <p>Mon–Sat: 7am–4pm<br />123 Main St, Hometown</p>
        </div>
      </div>
    </section>
  );
}