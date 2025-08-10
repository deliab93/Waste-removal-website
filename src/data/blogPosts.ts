import homeWasteImage from "@/assets/blog/home-waste-management.jpg";
import environmentalImpactImage from "@/assets/blog/environmental-impact.jpg";
import commercialWasteImage from "@/assets/blog/commercial-waste.jpg";
import recyclingCenterImage from "@/assets/blog/recycling-center.jpg";
import hazardousWasteImage from "@/assets/blog/hazardous-waste.jpg";
import constructionDebrisImage from "@/assets/blog/construction-debris.jpg";
import wasteEconomicsImage from "@/assets/blog/waste-economics.jpg";
import compostingGardenImage from "@/assets/blog/composting-garden.jpg";
import eWasteElectronicsImage from "@/assets/blog/e-waste-electronics.jpg";
import smallBusinessWasteImage from "@/assets/blog/small-business-waste.jpg";
import futureTechnologyImage from "@/assets/blog/future-technology.jpg";
import medicalWasteImage from "@/assets/blog/medical-waste.jpg";
import springCleaningImage from "@/assets/blog/spring-cleaning.jpg";
import zeroWasteLivingImage from "@/assets/blog/zero-waste-living.jpg";
import industrialWasteImage from "@/assets/blog/industrial-waste.jpg";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "10 Essential Tips for Effective Waste Management at Home",
    excerpt: "Learn how to reduce, reuse, and recycle effectively in your daily life with these practical waste management strategies.",
    content: "Effective waste management starts at home. Here are 10 essential tips to help you reduce your environmental footprint while managing waste more efficiently...",
    author: "Sarah Johnson",
    date: "2024-01-15",
    category: "Home Tips",
    image: homeWasteImage,
    readTime: "5 min read",
    slug: "effective-waste-management-home-tips"
  },
  {
    id: "2",
    title: "The Environmental Impact of Proper Waste Disposal",
    excerpt: "Discover how proper waste disposal practices can significantly impact our environment and contribute to a sustainable future.",
    content: "Proper waste disposal is crucial for environmental protection. When waste is handled correctly, it prevents pollution of air, water, and soil...",
    author: "Michael Chen",
    date: "2024-01-20",
    category: "Environment",
    image: environmentalImpactImage,
    readTime: "7 min read",
    slug: "environmental-impact-proper-waste-disposal"
  },
  {
    id: "3",
    title: "Commercial Waste Management: Best Practices for Businesses",
    excerpt: "A comprehensive guide to implementing effective waste management strategies in commercial settings.",
    content: "Commercial waste management requires strategic planning and implementation. Businesses generate various types of waste that need specialized handling...",
    author: "Jennifer Davis",
    date: "2024-01-25",
    category: "Business",
    image: commercialWasteImage,
    readTime: "6 min read",
    slug: "commercial-waste-management-best-practices"
  },
  {
    id: "4",
    title: "Recycling 101: What Can and Cannot Be Recycled",
    excerpt: "Clear guidelines on recyclable materials and common recycling mistakes to avoid.",
    content: "Understanding what can and cannot be recycled is fundamental to effective waste management. Many people unknowingly contaminate recycling streams...",
    author: "David Rodriguez",
    date: "2024-02-01",
    category: "Recycling",
    image: recyclingCenterImage,
    readTime: "4 min read",
    slug: "recycling-guidelines-what-can-cannot-be-recycled"
  },
  {
    id: "5",
    title: "Hazardous Waste Disposal: Safety First",
    excerpt: "Essential safety guidelines for handling and disposing of hazardous waste materials.",
    content: "Hazardous waste requires special handling and disposal methods to protect human health and the environment. Common household hazardous wastes include...",
    author: "Lisa Thompson",
    date: "2024-02-05",
    category: "Safety",
    image: hazardousWasteImage,
    readTime: "8 min read",
    slug: "hazardous-waste-disposal-safety-guidelines"
  },
  {
    id: "6",
    title: "Construction Debris Management: A Contractor's Guide",
    excerpt: "Efficient strategies for managing construction and demolition waste on job sites.",
    content: "Construction projects generate significant amounts of waste that must be managed responsibly. Proper planning can reduce costs and environmental impact...",
    author: "Robert Wilson",
    date: "2024-02-10",
    category: "Construction",
    image: constructionDebrisImage,
    readTime: "6 min read",
    slug: "construction-debris-management-contractors-guide"
  },
  {
    id: "7",
    title: "The Economics of Waste Management: Cost vs. Benefit",
    excerpt: "Analyzing the financial aspects of effective waste management systems.",
    content: "While waste management involves costs, proper implementation can lead to significant savings and revenue opportunities through recycling and efficiency...",
    author: "Amanda Foster",
    date: "2024-02-15",
    category: "Economics",
    image: wasteEconomicsImage,
    readTime: "7 min read",
    slug: "economics-waste-management-cost-benefit-analysis"
  },
  {
    id: "8",
    title: "Composting Basics: Turning Organic Waste into Garden Gold",
    excerpt: "Learn how to create nutrient-rich compost from organic waste materials.",
    content: "Composting is an excellent way to reduce organic waste while creating valuable fertilizer for gardens. The process involves decomposing organic matter...",
    author: "Garden Expert Tom",
    date: "2024-02-20",
    category: "Composting",
    image: compostingGardenImage,
    readTime: "5 min read",
    slug: "composting-basics-organic-waste-to-garden-gold"
  },
  {
    id: "9",
    title: "E-Waste Management: Disposing of Electronics Responsibly",
    excerpt: "Guidelines for proper disposal and recycling of electronic devices and components.",
    content: "Electronic waste is one of the fastest-growing waste streams globally. Proper e-waste management prevents toxic materials from entering landfills...",
    author: "Tech Specialist Alex",
    date: "2024-02-25",
    category: "E-Waste",
    image: eWasteElectronicsImage,
    readTime: "6 min read",
    slug: "e-waste-management-electronics-disposal-guide"
  },
  {
    id: "10",
    title: "Waste Reduction Strategies for Small Businesses",
    excerpt: "Practical approaches for small businesses to minimize waste and reduce costs.",
    content: "Small businesses can implement various strategies to reduce waste generation and disposal costs. These include source reduction, employee training...",
    author: "Business Consultant Mary",
    date: "2024-03-01",
    category: "Business",
    image: smallBusinessWasteImage,
    readTime: "5 min read",
    slug: "waste-reduction-strategies-small-businesses"
  },
  {
    id: "11",
    title: "The Future of Waste Management Technology",
    excerpt: "Exploring innovative technologies reshaping the waste management industry.",
    content: "Emerging technologies are revolutionizing waste management, from AI-powered sorting systems to advanced recycling processes...",
    author: "Innovation Team",
    date: "2024-03-05",
    category: "Technology",
    image: futureTechnologyImage,
    readTime: "8 min read",
    slug: "future-waste-management-technology-innovations"
  },
  {
    id: "12",
    title: "Medical Waste Disposal: Regulations and Best Practices",
    excerpt: "Understanding the strict requirements for medical waste handling and disposal.",
    content: "Medical waste requires specialized handling due to potential health risks. Healthcare facilities must follow strict regulations for collection, treatment...",
    author: "Healthcare Expert Dr. Smith",
    date: "2024-03-10",
    category: "Medical",
    image: medicalWasteImage,
    readTime: "7 min read",
    slug: "medical-waste-disposal-regulations-best-practices"
  },
  {
    id: "13",
    title: "Seasonal Waste Management: Spring Cleaning Edition",
    excerpt: "Tips for managing increased waste during spring cleaning and seasonal transitions.",
    content: "Spring cleaning generates large amounts of waste. Planning ahead can help manage disposal efficiently while maximizing recycling opportunities...",
    author: "Seasonal Expert Jane",
    date: "2024-03-15",
    category: "Seasonal",
    image: springCleaningImage,
    readTime: "4 min read",
    slug: "seasonal-waste-management-spring-cleaning-tips"
  },
  {
    id: "14",
    title: "Zero Waste Living: A Practical Approach",
    excerpt: "Step-by-step guide to reducing household waste and moving toward zero waste lifestyle.",
    content: "Zero waste living involves minimizing waste generation through conscious consumption and disposal practices. Start with simple changes...",
    author: "Sustainability Coach Emma",
    date: "2024-03-20",
    category: "Lifestyle",
    image: zeroWasteLivingImage,
    readTime: "6 min read",
    slug: "zero-waste-living-practical-approach-guide"
  },
  {
    id: "15",
    title: "Industrial Waste Management Solutions",
    excerpt: "Comprehensive strategies for managing large-scale industrial waste streams.",
    content: "Industrial facilities face unique waste management challenges requiring specialized solutions. Effective programs combine waste minimization...",
    author: "Industrial Consultant Paul",
    date: "2024-03-25",
    category: "Industrial",
    image: industrialWasteImage,
    readTime: "9 min read",
    slug: "industrial-waste-management-comprehensive-solutions"
  },
  {
    id: "16",
    title: "Food Waste Reduction in Restaurants",
    excerpt: "Strategies for restaurants to minimize food waste and improve profitability.",
    content: "Food waste is a significant issue in the restaurant industry. Implementing proper inventory management, portion control, and staff training...",
    author: "Restaurant Consultant Chris",
    date: "2024-03-30",
    category: "Food Service",
    image: commercialWasteImage,
    readTime: "5 min read",
    slug: "food-waste-reduction-restaurants-strategies"
  },
  {
    id: "17",
    title: "Plastic Waste Crisis: Solutions and Alternatives",
    excerpt: "Addressing the global plastic waste problem with innovative solutions and alternatives.",
    content: "Plastic waste poses a significant environmental challenge. Understanding the problem and implementing solutions like alternative materials...",
    author: "Environmental Scientist Dr. Lee",
    date: "2024-04-01",
    category: "Environment",
    image: environmentalImpactImage,
    readTime: "8 min read",
    slug: "plastic-waste-crisis-solutions-alternatives"
  },
  {
    id: "18",
    title: "Waste Audit: How to Assess Your Waste Stream",
    excerpt: "Conducting a comprehensive waste audit to identify improvement opportunities.",
    content: "A waste audit provides valuable insights into waste generation patterns and identifies opportunities for reduction and cost savings...",
    author: "Audit Specialist Karen",
    date: "2024-04-05",
    category: "Assessment",
    image: wasteEconomicsImage,
    readTime: "6 min read",
    slug: "waste-audit-assess-waste-stream-guide"
  },
  {
    id: "19",
    title: "Green Building and Waste Management",
    excerpt: "Integrating sustainable waste management practices in green building design.",
    content: "Green buildings incorporate waste management considerations from design through operation. Features include waste reduction systems...",
    author: "Green Building Expert Sam",
    date: "2024-04-10",
    category: "Green Building",
    image: constructionDebrisImage,
    readTime: "7 min read",
    slug: "green-building-sustainable-waste-management"
  },
  {
    id: "20",
    title: "Community Recycling Programs: Getting Involved",
    excerpt: "How to participate in and support community-based recycling initiatives.",
    content: "Community recycling programs play a vital role in waste reduction. Getting involved can multiply your environmental impact...",
    author: "Community Leader Beth",
    date: "2024-04-15",
    category: "Community",
    image: recyclingCenterImage,
    readTime: "4 min read",
    slug: "community-recycling-programs-getting-involved"
  },
  {
    id: "21",
    title: "Waste Management During Natural Disasters",
    excerpt: "Emergency waste management protocols and disaster cleanup procedures.",
    content: "Natural disasters create unique waste management challenges requiring special protocols. Emergency response includes debris removal...",
    author: "Emergency Response Team",
    date: "2024-04-20",
    category: "Emergency",
    image: constructionDebrisImage,
    readTime: "8 min read",
    slug: "waste-management-natural-disasters-emergency-protocols"
  },
  {
    id: "22",
    title: "The Role of AI in Modern Waste Management",
    excerpt: "How artificial intelligence is transforming waste sorting and management efficiency.",
    content: "AI technology is revolutionizing waste management through automated sorting, route optimization, and predictive analytics...",
    author: "AI Researcher Dr. Kim",
    date: "2024-04-25",
    category: "Technology",
    image: futureTechnologyImage,
    readTime: "6 min read",
    slug: "ai-artificial-intelligence-waste-management-transformation"
  },
  {
    id: "23",
    title: "Waste-to-Energy: Converting Waste into Power",
    excerpt: "Understanding waste-to-energy technologies and their environmental benefits.",
    content: "Waste-to-energy facilities convert non-recyclable waste into electricity, reducing landfill use while generating renewable energy...",
    author: "Energy Expert Dr. Martinez",
    date: "2024-04-30",
    category: "Energy",
    image: futureTechnologyImage,
    readTime: "7 min read",
    slug: "waste-to-energy-converting-waste-power-renewable"
  },
  {
    id: "24",
    title: "Pharmaceutical Waste Disposal Guidelines",
    excerpt: "Safe and legal methods for disposing of expired or unused medications.",
    content: "Pharmaceutical waste requires special handling to prevent environmental contamination and drug diversion. Take-back programs provide safe disposal...",
    author: "Pharmacy Expert Lisa",
    date: "2024-05-05",
    category: "Pharmaceutical",
    image: medicalWasteImage,
    readTime: "5 min read",
    slug: "pharmaceutical-waste-disposal-guidelines-medications"
  },
  {
    id: "25",
    title: "Sustainable Packaging: Reducing Waste at the Source",
    excerpt: "How sustainable packaging design can minimize waste throughout the supply chain.",
    content: "Sustainable packaging reduces waste generation while maintaining product protection. Design considerations include material selection...",
    author: "Packaging Designer Mike",
    date: "2024-05-10",
    category: "Packaging",
    image: zeroWasteLivingImage,
    readTime: "6 min read",
    slug: "sustainable-packaging-reducing-waste-source-design"
  }
];
