import { Accordion } from "./Accordion";

export const Faq = () => {
    const faqs = [
        {
          "id": 1,
          "question": "Why should I use EBookEngine ?",
          "answer": "EBookEngine is a user-friendly e-commerce platform designed for purchasing eBooks. It offers a vast selection of titles, competitive pricing, and secure payment options. With personalized recommendations, easy navigation, and instant downloads, EBookEngine provides a convenient and enjoyable shopping experience for book lovers and avid readers alike."
        },
        {
          "id": 2,
          "question": "Can I access my EBookEngine on mobile ?",
          "answer": "Yes, you can access EBookEngine on mobile devices. It features a responsive design, allowing you to purchase, download, and read eBooks seamlessly on the go."
        },
        {
          "id": 3,
          "question": "Do you offer refunds ?",
          "answer": "Yes, we offer refunds within 14 days of purchase if you're unsatisfied with your eBook. Simply contact our support team with your order details, and we’ll process your request promptly."
        },
        {
          "id": 4,
          "question": "Do you support International payments ?",
          "answer": "Yes, EBookEngine supports international payments. We accept major credit cards and payment gateways from various countries, ensuring a smooth and secure transaction experience for customers worldwide."
        }
    ];
    
  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">        
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">Questions in mind?</h1>    
            <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
              { faqs.map((faq) => (
                <Accordion key={faq.id} faq={faq} /> 
              )) }
            </div>
      </section>
  )
}