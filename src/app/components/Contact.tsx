"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";

type FormData = {
  name: string;
  email: string;
  message: string;
};

function ContactForm() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("submit formData=", formData);

    emailjs
      .send(
        "service_7uxwgnv",
        "template_k8xbx9l",
        formData,
        "ri2zM5TR8tF00VTDn"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSubmitted(true);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return isClient ? (
    <section
      id="contact"
      className="p-8 max-w-lg mx-auto text-center cursor-pointer bg-gray-100 dark:bg-gray-800 text-lightText dark:text-darkText transition-colors duration-300"
    >
      <h2 className="text-3xl font-bold mb-4 cursor-pointer hover:text-orange-400">
        Contact Me
      </h2>

      <p>
        {" "}
        If you&apos;d like to connect, feel free to reach out via my social
        media links or send me a message using the form below:
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>

      {submitted && (
        <p className="mt-4 text-green-500">Thank you for your message!</p>
      )}
    </section>
  ) : (
    <div>Loading...</div>
  );
}

export default ContactForm;
