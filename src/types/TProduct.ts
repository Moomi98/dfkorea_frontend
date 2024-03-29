import { Tid } from "@/src/types/TCommon";

export type TProductCard = {
  id: Tid;
  thumbnail: string;
  title: string;
  subtitle: string;
  to: string;
  createdAt: number;
};

export type TProductAdminColumn = {
  id: Tid;
  order: number;
  title: string;
  createdAt: number;
};

export type TProduct = {
  id: Tid;
  thumbnail: string;
  title: string;
  productDetail: string;
  subtitle?: string;
  createdAt: number;
};
