import { ReactNode } from 'react';

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  images: string[];
  amenities: string[];
  rating: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  profilePicture: string;
  bookings: Booking[];
}

export interface Booking {
  id: string;
  propertyId: string;
  userId: string;
  startDate: Date;
  endDate: Date;
  totalPrice: number;
}

export interface Review {
  id: string;
  propertyId: string;
  userId: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

export interface AppContext {
  user: User | null;
  properties: Property[];
  bookings: Booking[];
  reviews: Review[];
  setUser: (user: User | null) => void;
  setProperties: (properties: Property[]) => void;
  setBookings: (bookings: Booking[]) => void;
  setReviews: (reviews: Review[]) => void;
}

export type ChildrenProps = {
  children: ReactNode;
};

export default {}; // Default export for module completeness