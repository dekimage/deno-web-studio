"use client";

import type React from "react";
import { useState } from "react";
import {
  Phone,
  Mail,
  Copy,
  Check,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import ProcessSteps from "./ProcessSteps";

const formatDate = (date: Date): string => {
  const day = date.getDate();
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const year = date.getFullYear();

  let suffix = "th";
  if (day === 1 || day === 21 || day === 31) suffix = "st";
  else if (day === 2 || day === 22) suffix = "nd";
  else if (day === 3 || day === 23) suffix = "rd";

  return `${month} ${day}${suffix}, ${year}`;
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [copyStatus, setCopyStatus] = useState({
    phone: false,
    email: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCopy = async (text: string, type: "phone" | "email") => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus((prev) => ({ ...prev, [type]: true }));
      setTimeout(() => {
        setCopyStatus((prev) => ({ ...prev, [type]: false }));
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      // Show success message
      alert(
        "Thank you for your message! I'll review it within 24 hours and get back to you with a personalized response. If you haven't provided all the details about your project, don't worry - I'll follow up with specific questions to better understand your needs."
      );
    } catch (error) {
      console.error("Error sending message:", error);
      alert(
        "There was an error sending your message. Please try again or contact me directly via email or phone."
      );
    }
  };

  const today = new Date();
  const targetDate = new Date();
  targetDate.setDate(today.getDate() + 14);

  const phoneNumber = "+38977889537";
  const cleanPhoneNumber = phoneNumber.replace(/\\D/g, "");
  const emailAddress = "denowebstudio@gmail.com";

  const [showSteps, setShowSteps] = useState(false);

  return (
    <section className="py-16 bg-white" id="contact">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">LET&apos;S WORK TOGETHER</h2>
          <p className="section-subtitle mx-auto">
            Ready to get started? Reach out and let&apos;s discuss your project.
          </p>
        </div>

        <div className="mt-12 mb-12 p-6 bg-light-gray rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold text-center text-dark-gray font-oswald mb-6">
            How It Works - Get Your Website Live in 14 Days!
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center p-4">
              <div className="flex items-center justify-center w-12 h-12 mb-3 font-bold text-white rounded-full bg-primary-blue text-xl">
                1
              </div>
              <h4 className="mb-2 text-lg font-semibold text-dark-gray font-oswald">
                Contact Us
              </h4>
              <p className="text-sm text-dark-gray/80">
                Send us a message using the form below or{" "}
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-primary-blue hover:underline"
                >
                  email us
                </a>{" "}
                directly. Briefly describe your project (e.g., "I need a website
                for my pizza business").
              </p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="flex items-center justify-center w-12 h-12 mb-3 font-bold text-white rounded-full bg-primary-blue text-xl">
                2
              </div>
              <h4 className="mb-2 text-lg font-semibold text-dark-gray font-oswald">
                Discovery Call
              </h4>
              <p className="text-sm text-dark-gray/80">
                We&apos;ll contact you within 24 hours to schedule a quick call.
                We&apos;ll discuss your needs in detail and answer all your
                questions.
              </p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="flex items-center justify-center w-12 h-12 mb-3 font-bold text-white rounded-full bg-primary-blue text-xl">
                3
              </div>
              <h4 className="mb-2 text-lg font-semibold text-dark-gray font-oswald">
                Launch!
              </h4>
              <p className="text-sm text-dark-gray/80">
                After our call, we begin development. You can expect your brand
                new website to be live and running by{" "}
                <span className="font-semibold text-primary-blue">
                  {formatDate(targetDate)}
                </span>
                !
              </p>
            </div>
          </div>
        </div>

        <div className="text-center my-8">
          <button
            onClick={() => setShowSteps(!showSteps)}
            className="inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold text-white bg-primary-blue rounded-lg hover:bg-primary-blue/90 transition-colors"
          >
            {showSteps ? (
              <>
                Hide Steps
                <ChevronUp className="w-5 h-5" />
              </>
            ) : (
              <>
                See the Entire Process (Timeline)
                <ChevronDown className="w-5 h-5" />
              </>
            )}
          </button>
        </div>

        {showSteps && <ProcessSteps />}

        <div className="grid grid-cols-1 gap-12 mt-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-dark-gray font-oswald">
                CONTACT INFORMATION
              </h3>
              <p className="text-dark-gray/80">
                Have questions or ready to start your project? Reach out through
                any of these channels:
              </p>

              <div className="p-4 transition duration-300 ease-in-out bg-white border border-light-gray rounded-lg shadow-sm hover:shadow-md hover:border-primary-blue/50">
                <div className="flex items-center justify-between">
                  <a
                    href={`https://wa.me/${cleanPhoneNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center flex-grow"
                  >
                    <Phone className="flex-shrink-0 w-6 h-6 text-primary-blue" />
                    <div className="ml-4">
                      <p className="text-base font-medium text-dark-gray font-oswald">
                        Phone (WhatsApp 24/7)
                      </p>
                      <p className="mt-1 text-sm text-dark-gray/80">
                        {phoneNumber}
                      </p>
                    </div>
                  </a>
                  <button
                    onClick={() => handleCopy(phoneNumber, "phone")}
                    className="p-2 text-dark-gray/60 hover:text-primary-blue transition-colors"
                    title="Copy phone number"
                  >
                    {copyStatus.phone ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="p-4 transition duration-300 ease-in-out bg-white border border-light-gray rounded-lg shadow-sm hover:shadow-md hover:border-primary-blue/50">
                <div className="flex items-center justify-between">
                  <a
                    href={`mailto:${emailAddress}`}
                    className="flex items-center flex-grow"
                  >
                    <Mail className="flex-shrink-0 w-6 h-6 text-primary-blue" />
                    <div className="ml-4">
                      <p className="text-base font-medium text-dark-gray font-oswald">
                        Email
                      </p>
                      <p className="mt-1 text-sm text-dark-gray/80">
                        {emailAddress}
                      </p>
                    </div>
                  </a>
                  <button
                    onClick={() => handleCopy(emailAddress, "email")}
                    className="p-2 text-dark-gray/60 hover:text-primary-blue transition-colors"
                    title="Copy email address"
                  >
                    {copyStatus.email ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="p-6 space-y-6 bg-light-gray rounded-lg shadow-sm border border-light-gray/50">
              <h3 className="text-3xl font-semibold text-dark-gray font-oswald">
                LET'S TALK ABOUT YOUR PROJECT
              </h3>
              <p className="text-dark-gray/80">
                I personally review every message within 24 hours. Don't worry
                if you're not sure about all the details - I'll help you figure
                out what's best for your business. Just tell me what you're
                looking to achieve, and I'll guide you through the next steps.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-lg font-semibold text-dark-gray font-oswald mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="block w-full px-4 py-3 mt-1 bg-white border border-light-gray rounded-md shadow-sm focus:ring-primary-blue focus:border-primary-blue text-base"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-lg font-semibold text-dark-gray font-oswald mb-1"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="block w-full px-4 py-3 mt-1 bg-white border border-light-gray rounded-md shadow-sm focus:ring-primary-blue focus:border-primary-blue text-base"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-lg font-semibold text-dark-gray font-oswald mb-1"
                  >
                    Phone Number{" "}
                    <span className="text-sm font-normal text-dark-gray/60">
                      (Optional - but helps me reach you faster)
                    </span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(435) 901-9804"
                    className="block w-full px-4 py-3 mt-1 bg-white border border-light-gray rounded-md shadow-sm focus:ring-primary-blue focus:border-primary-blue text-base"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-lg font-semibold text-dark-gray font-oswald mb-1"
                  >
                    Tell Me About Your Project
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="What kind of website do you need? What's your business about? What are your goals? Don't worry if you're not sure about all the details - I'll help you figure it out!"
                    className="block w-full px-4 py-3 mt-1 bg-white border border-light-gray rounded-md shadow-sm focus:ring-primary-blue focus:border-primary-blue text-base"
                  />
                </div>

                <div>
                  <button type="submit" className="w-full primary-button">
                    Send Message - I'll Reply Within 24 Hours
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
