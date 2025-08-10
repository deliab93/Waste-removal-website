import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEOHead = ({ title, description, keywords, image, url }: SEOHeadProps) => {
  useEffect(() => {
    // Update page title
    document.title = title;

    // Update meta description
    updateMetaTag("name", "description", description);

    // Update keywords if provided
    if (keywords) {
      updateMetaTag("name", "keywords", keywords);
    }

    // Update Open Graph tags
    updateMetaTag("property", "og:title", title);
    updateMetaTag("property", "og:description", description);
    if (image) {
      updateMetaTag("property", "og:image", image);
    }
    if (url) {
      updateMetaTag("property", "og:url", url);
    }

    // Update Twitter Card tags
    updateMetaTag("name", "twitter:title", title);
    updateMetaTag("name", "twitter:description", description);
    if (image) {
      updateMetaTag("name", "twitter:image", image);
    }
  }, [title, description, keywords, image, url]);

  const updateMetaTag = (attribute: string, attributeValue: string, content: string) => {
    let element = document.querySelector(`meta[${attribute}="${attributeValue}"]`);
    
    if (!element) {
      element = document.createElement("meta");
      element.setAttribute(attribute, attributeValue);
      document.head.appendChild(element);
    }
    
    element.setAttribute("content", content);
  };

  return null;
};

export default SEOHead;