import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface AdvantageItem {
  id: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  company: string;
  avatar: string;
}

export interface ProcessItem {
  title: string;
  description: string;
  timeframe: string;
  icon: LucideIcon;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  highlight?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}