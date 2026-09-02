# Apex Sports — E-Commerce Platform

![Apex Sports](https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1200)

Apex Sports is a modern, high-performance sports and fitness retail e-commerce web application. Built with React 18, Vite, TypeScript, and a custom CSS Design System, it delivers a smooth, energetic, and responsive shopping experience across all device form factors.

---

## 🚀 Key Features

### 1. Product Discovery & Navigation
- **Hero Banner**: Engaging sports imagery, tagline ("Gear Up. Get Moving."), and primary CTAs.
- **8 Sports Categories**: Interactive category grid for Running, Football, Cricket, Cycling, Fitness, Hiking, Swimming, and Yoga.
- **Featured Products**: Handpicked athlete-grade equipment and apparel with quick add-to-cart and wishlist toggles.
- **Promotional Sales**: Banner highlighting seasonal discounts (e.g. "Summer Sports Sale - Up to 30% Off").
- **Live Search & Autocomplete**: Real-time product search with instant suggestion dropdown and partial keyword matching.

### 2. Product Catalogue & Multi-Faceted Filtering
- **Real-Time Multi-Filter System**:
  - Filter by Sport / Discipline (All, Running, Football, Cricket, Cycling, Fitness, Hiking, Swimming, Yoga).
  - Filter by Product Type (Footwear, Apparel, Equipment, Accessories, Protective Gear).
  - Dual-range Max Price slider ($0 – $350).
  - Brand selection (Apex Pro, Velocity Sports, Zenith Athletics, Pulse Fitness, TerraTrek, AeroCycle, HydroStream, ZenFlow).
  - Size pills (XS, S, M, L, XL, US 8, US 9, US 10, etc.).
  - Gender selector (Men, Women, Unisex).
  - Minimum Rating filter (4.5★+, 4.0★+).
  - Stock availability toggle ("In Stock Only").
- **6 Sorting Options**: Relevance & Featured, Price Low to High, Price High to Low, Customer Rating, Newest Arrivals, and Popularity.
- **Responsive Controls**: Sidebar layout on Desktop, slide-out modal drawer on Mobile.
- **Empty States**: Helpful zero-result handling with 1-click filter reset.

### 3. Product Details Page
- **Interactive Gallery**: Main image viewer with thumbnail selector.
- **Variant Selectors**: Size pills and color swatches with active selection states.
- **Quantity Stepper**: Precise increment/decrement controls.
- **Direct Purchase Actions**: "Add to Cart" with toast feedback, "Buy Now" for fast checkout, and Wishlist toggle.
- **Tabbed Information**: Key Features, Technical Specifications table, and Shipping/30-Day Return policy.
- **Contextual Related Products**: Recommended items from the same sport category.

### 4. Shopping Cart & Checkout
- **Interactive Cart**: Modify quantities, remove items, view per-item subtotals.
- **Summary Calculations**: Subtotal, product savings/discount sum, free express shipping threshold indicator ($75+), and total.
- **Promo Code Engine**: Test code `APEX15` for 15% discount.
- **Simulated Checkout Flow**:
  - Customer contact information collection.
  - Delivery address form with validation.
  - Payment method choices (Credit/Debit Card, UPI ID, Cash on Delivery).
  - Inline error feedback on invalid inputs.
  - Simulated payment processing animation before order confirmation.
- **Order Confirmation Page**: Unique generated order ID (`#AS-XXXXX`), item breakdown, shipping recap, and estimated delivery window.

### 5. Wishlist & Account Management
- **Persistent Wishlist**: Save items, move items directly into cart, or remove from wishlist.
- **Simulated Account & Auth**: Demo login/sign-up view with order history timeline, address book, and account status.
- **Local Persistence**: Shopping cart, wishlist items, user profile, and order history persist seamlessly across browser reloads via `localStorage`.

---

## 🛠️ Technology Stack

- **Core**: React 18, TypeScript, Vite
- **Styling**: Vanilla CSS with custom CSS variable design system, Google Fonts (`Inter` & `Outfit`), glassmorphism utilities, dark mode tokens, and mobile-first responsive layout math
- **Icons**: `lucide-react`
- **State Management**: React Context (`StoreContext`) with `localStorage` synchronization
- **Build & Tooling**: Vite, TypeScript (`tsc`)

---

## 📂 Project Structure

```text
apex-stores/
├── index.html                  # Main HTML entry with SEO meta tags & fonts
├── package.json                # Dependencies and build scripts
├── tsconfig.json               # Strict TypeScript configuration
├── vite.config.ts              # Vite bundler configuration
├── requirements.md             # Client specification document
├── instructions.md             # Development instructions & guidelines
└── src/
    ├── main.tsx                # Application mounting entry point
    ├── App.tsx                 # Root layout, routing & skip link
    ├── index.css               # Global CSS design system, variables & animations
    ├── types/
    │   └── index.ts            # TypeScript interfaces (Product, Cart, Order, User, etc.)
    ├── data/
    │   └── products.ts         # Mock dataset of 40 products across 8 categories
    ├── context/
    │   └── StoreContext.tsx    # State provider (Cart, Wishlist, Filters, Auth, Orders, Toasts)
    ├── components/
    │   ├── Header.tsx          # Nav, logo, live search, mobile menu drawer & counters
    │   ├── Footer.tsx          # Benefits trust bar, category links, newsletter & copyright
    │   ├── ProductCard.tsx     # Reusable product card with rating, price, wishlist & add-to-cart
    │   └── Toast.tsx           # Floating action feedback notification banner
    └── views/
        ├── HomeView.tsx        # Homepage (Hero, Sports Grid, Promo, Featured, Benefits)
        ├── CatalogueView.tsx   # Product Catalogue (Sidebar filters, Sorting, Product Grid)
        ├── ProductDetailView.tsx # Product details, gallery, variants, specs & recommendations
        ├── CartView.tsx        # Cart list, subtotal calculations, promo codes & checkout CTA
        ├── CheckoutView.tsx    # Multi-step checkout form, validation & simulated payment
        ├── OrderConfirmationView.tsx # Order success summary screen with order ID
        ├── WishlistView.tsx    # Saved wishlist products grid
        └── AccountView.tsx     # Demo user profile, order history & address book
```

---

## ⚙️ Local Development Instructions

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Setup & Run
1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:3000`.

3. Type-check TypeScript code:
   ```bash
   npx tsc --noEmit
   ```

4. Build for production:
   ```bash
   npm run build
   ```

---

## 📌 Simulated Functionality Disclosures

Per project requirements:
1. **Payment Processing**: Payment options (Credit Card, UPI, Cash on Delivery) are **simulated**. No real payment gateways or credit cards are charged.
2. **User Authentication**: Login and registration flows are **simulated** for demonstration purposes. Enter any email address to test account management and order history features.
3. **Mock Product Dataset**: 40 realistic mock products spanning 8 sports categories are pre-loaded in `src/data/products.ts` with high-resolution imagery and specifications.
