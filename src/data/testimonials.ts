import sarahImg from "@/assets/testimonial-sarah.jpg";
import mikeImg from "@/assets/testimonial-mike.jpg";
import jenniferImg from "@/assets/testimonial-jennifer.jpg";
import robertImg from "@/assets/testimonial-robert.jpg";
import emilyImg from "@/assets/testimonial-emily.jpg";
import davidImg from "@/assets/testimonial-david.jpg";
import lisaImg from "@/assets/testimonial-lisa.jpg";
import markImg from "@/assets/testimonial-mark.jpg";
import amandaImg from "@/assets/testimonial-amanda.jpg";
import jamesImg from "@/assets/testimonial-james.jpg";
import karenImg from "@/assets/testimonial-karen.jpg";
import thomasImg from "@/assets/testimonial-thomas.jpg";

export interface Testimonial {
  id: string;
  name: string;
  company?: string;
  rating: number;
  comment: string;
  date: string;
  image: string;
  service: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    company: "Johnson Family",
    rating: 5,
    comment: "EcoWaste Pro has been amazing! They're always on time, professional, and their eco-friendly approach aligns perfectly with our family values. Highly recommend!",
    date: "2024-01-15",
    image: sarahImg,
    service: "Residential Waste Removal"
  },
  {
    id: "2",
    name: "Michael Chen",
    company: "Tech Solutions Inc.",
    rating: 5,
    comment: "As a growing tech company, we needed reliable commercial waste management. EcoWaste Pro delivered beyond our expectations with their comprehensive recycling program.",
    date: "2024-01-20",
    image: mikeImg,
    service: "Commercial Waste Management"
  },
  {
    id: "3",
    name: "Jennifer Davis",
    company: "Davis Construction",
    rating: 5,
    comment: "Their construction debris removal service is top-notch. Fast, efficient, and they handle everything according to regulations. Great value for money!",
    date: "2024-01-25",
    image: jenniferImg,
    service: "Construction Debris"
  },
  {
    id: "4",
    name: "Robert Wilson",
    company: "Green Valley Restaurant",
    rating: 4,
    comment: "Professional service with excellent customer support. They helped us implement a comprehensive waste reduction program that saved us money.",
    date: "2024-02-01",
    image: robertImg,
    service: "Commercial Waste Management"
  },
  {
    id: "5",
    name: "Emily Thompson",
    company: "Thompson Household",
    rating: 5,
    comment: "Exceptional service! They helped us with a major cleanout project and handled everything professionally. The team was courteous and efficient.",
    date: "2024-02-05",
    image: emilyImg,
    service: "Residential Cleanup"
  },
  {
    id: "6",
    name: "David Rodriguez",
    company: "Rodriguez Auto Shop",
    rating: 5,
    comment: "EcoWaste Pro understands the unique needs of automotive businesses. Their hazardous waste disposal service is reliable and compliant with all regulations.",
    date: "2024-02-10",
    image: davidImg,
    service: "Hazardous Waste Disposal"
  },
  {
    id: "7",
    name: "Lisa Anderson",
    company: "City Medical Center",
    rating: 5,
    comment: "We trust EcoWaste Pro with our medical waste disposal. They're always professional, punctual, and maintain the highest safety standards.",
    date: "2024-02-15",
    image: lisaImg,
    service: "Medical Waste Disposal"
  },
  {
    id: "8",
    name: "Mark Foster",
    company: "Foster Manufacturing",
    rating: 4,
    comment: "Great industrial waste management solutions. They helped streamline our waste processes and significantly reduced our disposal costs.",
    date: "2024-02-20",
    image: markImg,
    service: "Industrial Waste Management"
  },
  {
    id: "9",
    name: "Amanda Martinez",
    company: "Martinez Real Estate",
    rating: 5,
    comment: "Perfect for property cleanouts! They handle everything from furniture removal to debris cleanup. Professional and affordable service.",
    date: "2024-02-25",
    image: amandaImg,
    service: "Property Cleanout"
  },
  {
    id: "10",
    name: "James Wilson",
    company: "Wilson Family",
    rating: 5,
    comment: "Outstanding customer service! They worked with our schedule and provided exactly what we needed. Will definitely use them again.",
    date: "2024-03-01",
    image: jamesImg,
    service: "Residential Waste Removal"
  },
  {
    id: "11",
    name: "Karen Brown",
    company: "Brown's Bakery",
    rating: 4,
    comment: "Reliable and consistent service. They help us manage our food waste responsibly and always arrive as scheduled.",
    date: "2024-03-05",
    image: karenImg,
    service: "Commercial Waste Management"
  },
  {
    id: "12",
    name: "Thomas Lee",
    company: "Lee Electronics",
    rating: 5,
    comment: "Their e-waste recycling program is excellent. They handle all our electronic waste disposal with proper certification and environmental responsibility.",
    date: "2024-03-10",
    image: thomasImg,
    service: "E-Waste Recycling"
  }
];