# NextWear

[Live Website](https://nextwear.vercel.app/)

NextWear is a modern **eCommerce platform** designed for a seamless and stylish shopping experience. Built with **Next.js 15** and **TypeScript**, it ensures a **scalable, maintainable, and high-performance** shopping experience for users.

The platform integrates **Redux** for state management, **Stripe** for secure payment processing, and **Clerk** for authentication. The UI is powered by **Next UI**.

---

## 🚀 Features

### 1. **Dynamic Homepage**

- **Hero Section**: Showcasing the latest fashion trends.
- **New Arrivals**: Discover the latest products.
- **Top Selling**: Highlighting best-selling items.
- **Browse by Styles**: A stylish **Bento Grid** categorizing fashion styles.
- **Customer Reviews**: A carousel featuring customer testimonials.
- **Newsletter Signup**: Stay updated with the latest fashion deals.

### 2. **Product Exploration**

- **Collections Page (`/collections`)**
  - Browse all products with **filters** for:
    - **Name** search.
    - **Price Range** selection.
    - **Categories**: Casual, Formal, Gym, Party.
    - **Clothing Type**: Topwear, Bottomwear.
  - **Pagination** for easy navigation.

### 3. **Product Details**

- **Product Page (`/collections/:id`)**
  - View detailed information about a product.
  - Select **color, size, and quantity** before adding to cart.
  - See related products for better shopping choices.

### 4. **Shopping Cart**

- **Cart Page (`/cart`)**
  - View all added products.
  - **Modify quantity or remove items** from the cart.
  - **Clear cart fully** with a single click.
  - Apply discount coupons (**Use "ADIB20" for 20% off**).
  - **Proceed to checkout**, redirecting to **Stripe checkout**.

### 5. **Secure Payment & Order Management**

- **Checkout with Stripe**
  - Securely pay with **test cards** (e.g., `4242 4242 4242 4242` with any future expiry date & CVC).
- **Purchases Page (`/purchases`)**
  - View all successfully purchased products after checkout.

### 6. **Additional Pages**

- **About Page (`/about`)**: Learn about NextWear and its mission.
- **Contact Page (`/contact`)**: Reach out for support or inquiries.

---

## 📌 Routes

| Route              | Description                                                       |
| ------------------ | ----------------------------------------------------------------- |
| `/`                | Homepage with featured sections & promotions.                     |
| `/collections`     | Browse all products with filtering & sorting options.             |
| `/collections/:id` | View individual product details and add to cart.                  |
| `/cart`            | Manage cart items, apply discount codes, and proceed to checkout. |
| `/purchases`       | View order history after a successful purchase.                   |
| `/about`           | Learn more about NextWear.                                        |
| `/contact`         | Contact NextWear for support.                                     |

---

## 🛠️ Tech Stack

### **Frontend**

- **Next.js 15**: Modern React framework with **App Router architecture**.
- **React 19**: Enhanced UI experience with concurrent features.
- **TypeScript**: Type-safe and scalable codebase.
- **Redux**: State management for a smooth shopping experience.
- **Next UI**: Elegant and accessible UI components.
- **TailwindCSS** & **tailwindcss-animate**: Utility-first styling with smooth animations.

### **Backend & Database**

- **MongoDB**: NoSQL database for efficient product & order management.
- **Mongoose**: Schema-based modeling for structured data.
- **Stripe**: Secure and seamless payment processing.

### **Authentication & Security**

- **Clerk**: Advanced authentication platform for secure user sign-in.
- **Secure Stripe Integration**: Protects transactions with robust payment gateways.

---

NextWear is built to redefine **eCommerce** with an intuitive, fast, and modern shopping experience. Shop now at **[NextWear](https://nextwear.vercel.app/)!** 🛍️
