import { lazy, Suspense, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { profile } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import HudCorners from "./HudCorners";

// Decorative 3D scene, loaded in its own chunk with three.js.
const ContactVisual = lazy(() => import("./canvas/ContactVisual"));

/*
 * EmailJS identifiers. These are designed to be public: EmailJS restricts
 * sending by allowed origin in its dashboard, not by keeping the key secret.
 */
const EMAILJS_SERVICE_ID = "service_p3cbrfd";
const EMAILJS_TEMPLATE_ID = "template_p7kya7t";
const EMAILJS_PUBLIC_KEY = "WsGSsTMtDsl1WEk4R";

const EMPTY_FORM = { name: "", email: "", message: "" };

const STATUS_MESSAGES = {
  sent: "Thanks — I'll get back to you as soon as I can.",
  error: "Something went wrong sending that. Please try again, or email me directly.",
};

const Contact = () => {
  const [form, setForm] = useState(EMPTY_FORM);
  /** idle | sending | sent | error */
  const [status, setStatus] = useState("idle");
  const sending = status === "sending";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Anand Ramnarain",
          from_email: form.email,
          to_email: "anandram0207@gmail.com",
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setForm(EMPTY_FORM);
      setStatus("sent");
    } catch (error) {
      console.error("Contact form failed to send:", error);
      setStatus("error");
    }
  };

  const inputClasses =
    "bg-bg border border-line focus:border-accent py-3 px-4 placeholder:text-faint text-ink outline-none transition-colors";

  return (
    <SectionWrapper id="contact">
      <div className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="relative flex-[0.75] border border-line bg-surface/30 p-8"
        >
          <HudCorners />

          <div className="hud-label mb-6 flex justify-between text-faint">
            <span>CHANNEL · EMAIL</span>
            <span className="flex items-center gap-1.5 text-accent-2">
              <span
                className={`h-1.5 w-1.5 rounded-full bg-accent-2 ${sending ? "animate-pulse" : ""}`}
              />
              {sending ? "SENDING" : "READY"}
            </span>
          </div>

          <p className={styles.sectionSubText}>Get in touch</p>
          <h2 className={styles.sectionHeadText}>Contact.</h2>

          <p className="mt-6 max-w-[48ch] text-[15px] leading-[25px] text-dim">
            I&apos;m looking for graduate, internship and junior roles. The quickest way to reach me
            is email; the form below sends to the same inbox.
          </p>
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="text-[15px] text-ink underline decoration-accent underline-offset-4 hover:text-accent"
              >
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hud-label text-dim hover:text-accent"
              >
                LinkedIn ↗
              </a>
            </li>
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="hud-label text-dim hover:text-accent"
              >
                GitHub ↗
              </a>
            </li>
            <li>
              <a
                href={profile.cv}
                target="_blank"
                rel="noreferrer"
                className="hud-label text-dim hover:text-accent"
              >
                CV (PDF) ↓
              </a>
            </li>
          </ul>

          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
            <label className="flex flex-col">
              <span className="hud-label mb-3 text-dim">Your Name</span>
              <input
                type="text"
                name="name"
                required
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className={inputClasses}
              />
            </label>
            <label className="flex flex-col">
              <span className="hud-label mb-3 text-dim">Your Email</span>
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className={inputClasses}
              />
            </label>
            <label className="flex flex-col">
              <span className="hud-label mb-3 text-dim">Your Message</span>
              <textarea
                rows={7}
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className={inputClasses}
              />
            </label>

            <button
              type="submit"
              disabled={sending}
              className="hud-label w-fit bg-accent px-8 py-3 text-bg transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {sending ? "Sending..." : "Send"}
            </button>

            <p role="status" aria-live="polite" className="min-h-[1.5em] text-[14px] text-dim">
              {STATUS_MESSAGES[status]}
            </p>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="relative hidden h-[550px] border border-line md:block xl:h-auto xl:flex-1"
          aria-hidden="true"
        >
          <div className="hud-label pointer-events-none absolute inset-0 z-10 flex flex-col justify-between p-4 text-faint">
            <div className="flex justify-between">
              <span>SIGNAL · TRANSMITTER</span>
              <span className="text-accent-2">● LIVE</span>
            </div>
            <span className="self-end">click to ping</span>
          </div>
          <Suspense fallback={null}>
            <ContactVisual />
          </Suspense>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
