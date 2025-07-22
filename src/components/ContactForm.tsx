'use client';
import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xnnzpdqy");
  const [countdown, setCountdown] = useState(5);

  // If the form was submitted successfully, start countdown
  useEffect(() => {
    if (state.succeeded) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      const reloadTimeout = setTimeout(() => {
        window.location.reload();
      }, 5000);

      return () => {
        clearInterval(timer);
        clearTimeout(reloadTimeout);
      };
    }
  }, [state.succeeded]);

  if (state.succeeded) {
    return (
      <div className="bg-black text-white py-24 px-6 text-center min-h-[50vh] flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-2">Thanks for reaching out!</h2>
        <p className="text-gray-400 text-lg mb-2">
          I&apos;ll get back to you as soon as possible.
        </p>
        <p className="text-gray-500 text-sm">
          Reloading page in {countdown} second{countdown !== 1 ? 's' : ''}...
        </p>
      </div>
    );
  }

  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-2xl mx-auto bg-[#121212] rounded-xl border border-[#00bfa6]/30 shadow-[0_0_30px_rgba(0,191,166,0.1)] p-10">
        <h2 className="text-4xl font-semibold text-white text-center mb-4">
          Contact Me
        </h2>
        <p className="text-gray-400 text-center mb-10">
          Have an idea or want to collaborate? Let’s talk!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-[#1a1a1a] text-white border border-[#00bfa6]/20 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#008080] transition"
              placeholder="yourname@example.com"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full px-4 py-3 bg-[#1a1a1a] text-white border border-[#00bfa6]/20 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#008080] transition"
              placeholder="Write your message here..."
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full py-3 bg-[#008080] hover:bg-[#008080] text-white font-medium rounded-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
