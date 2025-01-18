import React, { useState } from "react";
import FaqItem from "./FaqItem";
const faq = [
  {
    id: 1,
    question: "What services does your website offer?",
    answer:
      "Our website provides a wide range of services, including online shopping, educational resources, or booking platforms. We aim to deliver high-quality solutions tailored to your needs.",
  },
  {
    id: 2,
    question: "How can I contact customer support?",
    answer:
      "You can reach our customer support team through email at support@example.com or by calling 1-800-123-4567. We’re available Monday to Friday, from 9:00 AM to 6:00 PM.",
  },
  {
    id: 3,
    question: "Is my personal information secure?",
    answer:
      "Yes, we prioritize your privacy and security. All personal data is encrypted and processed following strict data protection regulations. For more details, please read our Privacy Policy.",
  },
  {
    id: 4,
    question: "Do you offer refunds or cancellations?",
    answer:
      "Yes, we have a flexible refund and cancellation policy. You can request a refund or cancel your order within 7 days of purchase. For specific terms, visit our Refund Policy.",
  },
];

const Faq = () => {
  const [activeItem, setActiveItem] = useState(null);
  return (
    <section className="my-10">
      <h2 className="text-[#FD7E14] font-semibold text-4xl text-center mb-8">
        Frequently Asked Questions About Electronics
      </h2>

      {faq.map((item, i) => (
        <FaqItem
          key={item.id}
          item={item}
          setActiveItem={setActiveItem}
          activeItem={activeItem}
        />
      ))}
    </section>
  );
};

export default Faq;
