import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", message: "", app: "ActLocal" });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    const serviceId = import.meta.env.VITE_SERVICEID;
    const templateId = import.meta.env.VITE_TEMPLATEID;
    const publicKey = import.meta.env.VITE_PUBLICKEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("Missing EmailJS environment variables.");
      setStatus({ type: "error", message: "Email service not configured." });
      setSending(false);
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      () => {
        setStatus({ type: "success", message: "Message sent. I will get back to you shortly." });
        setFormData({ name: "", email: "", message: "" });
        setSending(false);
      },
      (error) => {
        console.error("FAILED...", error.text);
        setStatus({ type: "error", message: "Failed to send message. Please try again." });
        setSending(false);
      }
    );
  };

  return (
    <section id="contact" className="py-16 scroll-mt-28">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.h2 initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="text-3xl font-bold mb-6">Contact Me</motion.h2>

        <motion.form ref={form} onSubmit={sendEmail} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-2xl shadow-lg p-6">
          {status && (
            <div className={`mb-4 px-4 py-3 rounded-md ${status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`} role="status">
              {status.message}
            </div>
          )}

          <label className="block text-sm font-medium mb-1">Name</label>
          <input name="name" value={formData.name} onChange={handleChange} required className="w-full mb-4 px-3 py-2 border rounded-lg" placeholder="Your name" />

          <label className="block text-sm font-medium mb-1">Email</label>
          <input name="email" value={formData.email} onChange={handleChange} required type="email" className="w-full mb-4 px-3 py-2 border rounded-lg" placeholder="you@company.com" />

          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} rows={5} required className="w-full mb-4 px-3 py-2 border rounded-lg" placeholder="Brief project summary or inquiry" />

          <div className="flex items-center justify-between">
            <button type="submit" disabled={sending} className="px-4 py-2 rounded-full bg-gradient-to-r from-brand-cyan to-brand-violet text-white font-semibold">{sending ? 'Sending...' : 'Send Message'}</button>
            <div className="text-sm text-gray-500">Typical response time: 24-48 hours</div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
