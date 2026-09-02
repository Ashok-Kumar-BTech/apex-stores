export type SportCategory = 
  | 'Running' 
  | 'Football' 
  | 'Cricket' 
  | 'Cycling' 
  | 'Fitness' 
  | 'Hiking' 
  | 'Swimming' 
  | 'Yoga';

export type ProductType = 
  | 'Footwear' 
  | 'Apparel' 
  | 'Equipment' 
  | 'Accessories' 
  | 'Protective Gear';

export type Gender = 'Men' | 'Women' | 'Unisex' | 'Kids';

export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  sport: SportCategory;
  productType: ProductType;
  brand: string;
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  rating: number;
  reviewCount: number;
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  sizes?: string[];
  colors?: ProductColor[];
  inStock: boolean;
  stockQuantity: number;
  specifications: Record<string, string>;
  gender: Gender;
  isFeatured?: boolean;
  isNew?: boolean;
  popularityScore?: number;
}

export interface CartItem {
  id: string; // Unique cart item ID (combines product id, size, color)
  product: Product;
  selectedSize?: string;
  selectedColor?: string;
  quantity: number;
}

export interface FilterState {
  sport: string; // 'All' or specific SportCategory
  productTypes: string[];
  priceRange: [number, number]; // [min, max]
  brands: string[];
  sizes: string[];
  genders: string[];
  minRating: number;
  inStockOnly: boolean;
  searchQuery: string;
  sortBy: 'relevance' | 'price-asc' | 'price-desc' | 'rating' | 'newest' | 'popularity';
}

export interface CustomerInfo {
  fullName: string;
  email: string;
  phone: string;
}

export interface ShippingAddress {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export type PaymentMethod = 'card' | 'upi' | 'cod';

export interface PaymentDetails {
  method: PaymentMethod;
  cardNumber?: string;
  cardExp?: string;
  upiId?: string;
}

export interface Order {
  orderId: string;
  date: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  customer: CustomerInfo;
  shippingAddress: ShippingAddress;
  paymentMethod: PaymentMethod;
  status: 'Processing' | 'Shipped' | 'Delivered';
  estimatedDelivery: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  addresses: (ShippingAddress & { id: string; name?: string; isDefault?: boolean })[];
}

export interface ToastMessage {
  id: string;
  text: string;
  type?: 'success' | 'info' | 'warning' | 'error';
}

export type ViewName = 
  | 'home'
  | 'catalogue'
  | 'product-detail'
  | 'cart'
  | 'checkout'
  | 'order-confirmation'
  | 'wishlist'
  | 'account'
  | 'login'
  | 'register';
