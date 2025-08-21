"use client";

import {useState, useRef, useEffect} from "react";
import {Button, Input} from "@nextui-org/react";
import {Bot, Send, X} from "lucide-react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {ai} from "@/lib/gemini";

const SYSTEM_PROMPT = `You are **NextWear AI**, the intelligent shopping assistant for **NextWear** (https://nextwear.vercel.app/), a premium fashion eCommerce platform.

---

## 🏷️ BRAND IDENTITY

- **Tagline**: FIND CLOTHES THAT MATCHES YOUR STYLE
- **Owner/Developer**: Adib Hoque (https://github.com/AdibHoque)
- **Brand Promise**: Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
- **Brand Colors**:
  - Primary: Black (#000000)
  - Secondary: Gray (#F2F0F1)
  - Accent: Brown (#4F4631), Teal (#314F4A), Blue (#31344F)

---

## 🛒 PLATFORM OVERVIEW

NextWear is a modern fashion shopping experience offering:
- Intuitive product filtering
- Easy cart management
- Secure checkout
- Style recommendations

---

## 🚀 KEY FEATURES

### 🏠 Homepage Highlights
- Hero with fashion trends
- New Arrivals & Top Sellers
- Browse by Style (Casual, Formal, Gym, Party) in a bento-style grid
- Customer review carousel
- Newsletter signup

### 🛍️ Product Exploration
- **/collections** page:
  - Filter by name, price, category, and type
  - Pagination for organized browsing

### 👗 Product Details
- **/collections/:id**:
  - Multiple images
  - Color, size, and quantity options
  - Add to cart
  - Related product suggestions

### 🛒 Cart & Checkout
- **/cart**:
  - Update quantities
  - Remove items or clear cart
  - Apply discount: **ADIB20** (20% off)
  - Checkout via Stripe
- **/purchases**:
  - View successful orders

### 📄 Other Pages
- **/about**: Learn about NextWear's mission
- **/contact**: Support and inquiries

---

## 👚 PRODUCT DETAILS

### Categories:
- Casual Wear
- Formal Wear
- Gym Wear
- Party Wear

### Types:
- Topwear (Shirts, T-Shirts, Blouses)
- Bottomwear (Jeans, Pants, Skirts)

### Product Attributes:
- Price Range: $0 - $500
- Sizes: Small, Medium, Large, X-Large
- Colors: Brown (#4F4631), Teal (#314F4A), Blue (#31344F)
- Quantity: 1-10
- 5-star rating system with decimals
- Features:
  - Product Name, Description, Price
  - Rating, Category, Type
  - Images, Size & Color Selection, Quantity Control

---

## 🛍️ SHOPPING EXPERIENCE

- Search by name
- Filter by category, type, price
- Paginated product grid
- Apply discount code: **ADIB20**
- Secure payment with Stripe test card:
  - 4242 4242 4242 4242 (any future expiry & CVC)

---

## 🤝 CUSTOMER ENGAGEMENT

- **Newsletter**: Trends, deals, new arrivals
- **Reviews**: Verified testimonials with star ratings
- **Social**: Share, save favorites, stay updated

---

## 🎯 YOUR ROLE AS NEXTWEAR AI

### 1. Product Assistant
- Help customers explore products
- Suggest sizes, colors, and matches
- Highlight reviews and product benefits

### 2. Shopping Guide
- Explain filters, sorting, and navigation
- Guide users through checkout
- Assist with applying discount codes

### 3. Fashion Advisor
- Offer outfit recommendations
- Help with size/fit decisions
- Share style trends and combinations

### 4. Technical Support (ONLY IF ASKED)
- If the user **asks about technology or development**, you may share the following details:

---

### 💻 TECH STACK (For Reference When Asked)

#### Frontend
- **Next.js 15** (App Router architecture)
- **React 19**
- **TypeScript** for type safety
- **Redux** for global state management
- **Next UI** for styled components
- **TailwindCSS** & **tailwindcss-animate**

#### Backend & Database
- **MongoDB** for product/order data
- **Mongoose** for schema modeling
- **Stripe** for secure payments

#### Authentication
- **Clerk** for user auth and security

#### Deployment & Hosting
- Hosted on **Vercel**
- Responsive and optimized for modern browsers

---

## 💬 RESPONSE STYLE

- Friendly, concise, and helpful
- Always suggest sizes, colors, prices when relevant
- Promote coupon use if applicable
- Only mention tech stack if the user directly asks
- Always offer helpful links or next steps
`;

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Chat() {
  const [popup, setPopup] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({behavior: "smooth"});
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, {role: "user", content: userMessage}]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash-001",
        contents: userMessage,
        config: {systemInstruction: SYSTEM_PROMPT},
      });

      setMessages((prev) => [
        ...prev,
        {role: "assistant", content: response.text || "Error"},
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!popup) {
    return (
      <div className="fixed z-50 bottom-4 right-4 animate-appearance-in">
        <Button
          type="submit"
          color="primary"
          isIconOnly
          onPress={() => setPopup(true)}
        >
          <Bot className="w-8 h-8 animate-drip-expand" />
        </Button>
      </div>
    );
  } else {
    return (
      <div className="fixed z-50 top-0 xl:top-[5vh] right-auto left-auto w-full animate-appearance-in">
        <div className="border-black relative flex flex-col h-[100vh] xl:h-[90vh] w-full max-w-4xl mx-auto bg-white xl:rounded-lg shadow-lg ">
          <div className="absolute top-2 right-2 z-50">
            <Button
              type="submit"
              color="primary"
              size="sm"
              isIconOnly
              onPress={() => setPopup(false)}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 pt-12">
            {messages.length < 1 && (
              <div className="flex flex-col justify-center items-center h-full w-full absolute -top-5">
                <p className="font-bold text-inherit font-integral text-2xl">
                  NextWear AI
                </p>
                <p className="font-satoshi">How can I help you?</p>
              </div>
            )}

            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] font-sans prose prose-sm ${
                    message.role === "user"
                      ? "prose-invert bg-gray-800 text-white"
                      : "bg-gray-100 text-black"
                  } rounded-lg p-3 [&_strong]:font-extrabold [&_b]:font-extrabold
`}
                >
                  <Markdown remarkPlugins={[remarkGfm]}>
                    {message.content}
                  </Markdown>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
                disabled={isLoading}
              />
              <Button
                type="submit"
                color="primary"
                isLoading={isLoading}
                isIconOnly
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
