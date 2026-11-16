"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./ChatBot.module.css";

const faq = [
  {
    keywords: ["what", "does", "brilliant", "angels", "do", "organisation", "organization", "about", "who are"],
    a: "Brilliant Angels CBO is a community-based organisation in Githogoro, Nairobi. We run a community school, environmental programmes, youth & women empowerment, health initiatives, sports & arts, and disaster management.",
  },
  {
    keywords: ["where", "location", "located", "address", "find", "directions"],
    a: "We are located in Githogoro Slums, Runda Estate, Karura Ward, Westlands, Nairobi County, Kenya.",
  },
  {
    keywords: ["donate", "donation", "money", "give", "support", "contribute", "mpesa", "m-pesa", "bank"],
    a: "You can donate via M-Pesa Pay Bill: Business Number 522533, Account Number 7902003. Or send directly to +254 796 595 995. For bank transfer: KCB Bank, Account 1332279740, Two Rivers Branch. Please include your name as the reference.",
  },
  {
    keywords: ["volunteer", "help", "join", "teach", "mentor", "coach"],
    a: "Visit our Volunteer page or send us a WhatsApp message at +254 796 595 995. We need teachers, mentors, environmental volunteers, and sports coaches.",
  },
  {
    keywords: ["sulwe", "stars", "star", "programme", "program", "makini", "scholarship", "mentorship", "sponsorship", "exposure"],
    a: "Sulwe means 'Stars'. It is our flagship mentorship and scholarship programme that identifies the top performing boy and girl from Githogoro schools each year. They are given the opportunity to visit and learn at Makini School and other international schools in Nairobi — gaining exposure, new learning experiences, and for some, full sponsorships that change their lives.",
  },
  {
    keywords: ["when", "formed", "started", "founded", "registered", "year", "established"],
    a: "Brilliant Angels CBO was formed in 2018 and officially registered in 2024.",
  },
  {
    keywords: ["programs", "programmes", "program", "what do you", "activities", "work"],
    a: "We have 6 core programmes: Education, Environment, Sports & Arts, Youth & Women Empowerment, Health & Wellness, and Disaster & Crisis Management.",
  },
  {
    keywords: ["partner", "partnership", "collaborate", "organisation", "ngo", "school"],
    a: "Email us at brilliantangels2024@gmail.com or WhatsApp +254 796 595 995. We welcome schools, NGOs, and organisations that share our vision.",
  },
  {
    keywords: ["chairperson", "chair", "team", "management", "leader", "austine", "evans", "sharon", "leila"],
    a: "Our Chairperson is Austine Omondi. The management team also includes Evans Budoi (Treasurer), Sharon Anyango (Secretary), and Leila Mirinya (HR Manager).",
  },
  {
    keywords: ["phone", "number", "contact", "whatsapp", "call", "reach"],
    a: "Our WhatsApp number is +254 796 595 995. You can also reach us via email at brilliantangels2024@gmail.com.",
  },
  {
    keywords: ["email", "mail", "inbox"],
    a: "Our email is brilliantangels2024@gmail.com. We respond to emails within 24-48 hours.",
  },
  {
    keywords: ["education", "school", "learn", "student", "children", "child", "class"],
    a: "We operate Brilliant Angels Community School, providing scholarships, school uniforms, meals, educational supplies, and support for vulnerable children in Githogoro.",
  },
  {
    keywords: ["environment", "tree", "planting", "clean", "recycle", "waste", "climate"],
    a: "Our environment programme focuses on waste management, recycling, tree planting, community cleanups, and climate awareness campaigns.",
  },
  {
    keywords: ["health", "medical", "hiv", "mental", "counseling", "wellness", "water"],
    a: "We organise medical camps, HIV awareness campaigns, mental health support, counseling, reproductive health education, sanitation projects, and clean water initiatives.",
  },
  {
    keywords: ["sport", "football", "rugby", "dance", "art", "culture", "talent"],
    a: "We operate a community football team, rugby team, and dance crew — developing talent while keeping youth away from drugs and crime.",
  },
  {
    keywords: ["disaster", "crisis", "emergency", "preparedness", "safety"],
    a: "We provide disaster preparedness training, emergency response skills, and community safety programmes for Githogoro residents.",
  },
  {
    keywords: ["adopt", "child", "three", "3 children", "family", "sponsor", "fees"],
    a: "Our Adopt a Child programme works like this: when a family brings 3 children to Brilliant Angels Community School, we fully sponsor one child — covering their school fees, daily meals, and all books and supplies. This ensures no family has to choose which child gets to learn.",
  },
  {
    keywords: ["youth", "women", "empowerment", "tailoring", "soap", "hairdressing", "entrepreneurship"],
    a: "We train women in tailoring, soap making, hairdressing, and entrepreneurship. We also educate youth about drugs, early pregnancy, leadership, and life skills.",
  },
];

const quickReplies = [
  "What does Brilliant Angels do?",
  "How can I donate?",
  "What is Sulwe?",
  "How can I volunteer?",
  "Where are you located?",
];

function findAnswer(input) {
  const lower = input.toLowerCase();
  for (const item of faq) {
    const match = item.keywords.some((kw) => lower.includes(kw));
    if (match) return item.a;
  }
  return "Thanks for your message! For specific questions, please WhatsApp us directly at +254 796 595 995 and our team will assist you.";
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi! I'm the Brilliant Angels assistant. Ask me anything about our programmes, how to donate, volunteer, or partner with us.",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEnd = useRef(null);

  useEffect(() => {
    messagesEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSend(text) {
    const question = text || input;
    if (!question.trim()) return;
    setMessages((prev) => [...prev, { role: "user", text: question }]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text: findAnswer(question) }]);
    }, 500);
  }

  function handleKey(e) {
    if (e.key === "Enter") handleSend();
  }

  return (
    <>
      <button
        className={styles.toggle}
        onClick={() => setOpen(!open)}
        aria-label="Toggle chatbot"
      >
        {open ? "✕" : "💬"}
      </button>

      {open && (
        <div className={styles.window}>
          <div className={styles.header}>
            <div>
              <strong>Brilliant Angels</strong>
              <span>Ask us anything</span>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close">✕</button>
          </div>

          <div className={styles.messages}>
            {messages.map((m, i) => (
              <div
                key={i}
                className={`${styles.msg} ${m.role === "user" ? styles.user : styles.bot}`}
              >
                {m.text}
              </div>
            ))}
            <div ref={messagesEnd} />
          </div>

          <div className={styles.quickReplies}>
            {quickReplies.map((q) => (
              <button key={q} onClick={() => handleSend(q)}>
                {q}
              </button>
            ))}
          </div>

          <div className={styles.inputRow}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Type a question..."
            />
            <button onClick={() => handleSend()}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}
