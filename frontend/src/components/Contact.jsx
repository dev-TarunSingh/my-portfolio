import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    app: "ActLocal",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    const serviceId = import.meta.env.VITE_SERVICEID;
    const templateId = import.meta.env.VITE_TEMPLATEID;
    const publicKey = import.meta.env.VITE_PUBLICKEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("Missing EmailJS environment variables.");
      alert("Failed to send message. Please contact support.");
      setSending(false);
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      () => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setSending(false);
      },
      (error) => {
        console.error("FAILED...", error.text);
        alert("Failed to send message. Please try again.");
        setSending(false);
      }
    );
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen  text-black p-5">
        <h2 className="text-4xl text-black font-bold mb-10">Contact Me</h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full max-w-lg lg:blur-none shadow-lg backdrop-blur-md p-8 rounded-3xl shadow-lg"
        >
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full lg:blur-none shadow-lg backdrop-blur-md px-3 py-2 bg-white text-black rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              id="name"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-6">
            <label className="block  text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full lg:blur-none shadow-lg backdrop-blur-md px-3 py-2 bg-white text-black rounded-lg focus:outline-none focus:shadow-outline"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              value={formData.message}
              onChange={handleChange}
              required
              name="message"
              className="w-full lg:blur-none shadow-lg backdrop-blur-md px-3 py-2 bg-white text-black rounded-lg focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your Message"
              rows="5"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              disabled={sending}
              className="px-4 py-2 bg-blue-500 rounded-full text-white hover:bg-blue-700 transition duration-300"
              type="submit"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
