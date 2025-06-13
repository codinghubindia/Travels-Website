import axios from 'axios';
import { Destination } from '../data/destinations';
import { TourPackage } from '../data/tourPackages';

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Destinations API endpoints
export const fetchDestinations = async (): Promise<Destination[]> => {
  const response = await api.get<Destination[]>('/destinations');
  return response.data;
};

export const fetchDestinationById = async (id: string): Promise<Destination> => {
  const response = await api.get<Destination>(`/destinations/${id}`);
  return response.data;
};

// Tour Packages API endpoints
export const fetchTourPackages = async (): Promise<TourPackage[]> => {
  const response = await api.get<TourPackage[]>('/packages');
  return response.data;
};

export const fetchTopSellingTourPackages = async (): Promise<TourPackage[]> => {
  const response = await api.get<TourPackage[]>('/packages/top-selling');
  return response.data;
};

export const fetchTourPackageById = async (id: string): Promise<TourPackage> => {
  const response = await api.get<TourPackage>(`/packages/${id}`);
  return response.data;
};

export default api; 