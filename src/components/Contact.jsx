import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { ContactVisual } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_p3cbrfd',
        'template_p7kya7t',
        {
          from_name: form.name,
          to_name: "Anand Ramnarain",
          from_email: form.email,
          to_email: "anandram0207@gmail.com",
          message: form.message,
        },
        'WsGSsTMtDsl1WEk4R'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  const inputClasses =
    "bg-bg border border-line focus:border-accent py-3 px-4 placeholder:text-faint text-ink outline-none transition-colors";

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='relative flex-[0.75] border border-line bg-surface/30 p-8'
      >
        <span className='absolute -top-px -left-px w-3 h-3 border-t-2 border-l-2 border-accent' />
        <span className='absolute -top-px -right-px w-3 h-3 border-t-2 border-r-2 border-accent' />
        <span className='absolute -bottom-px -left-px w-3 h-3 border-b-2 border-l-2 border-accent' />
        <span className='absolute -bottom-px -right-px w-3 h-3 border-b-2 border-r-2 border-accent' />

        <div className='hud-label flex justify-between text-faint mb-6'>
          <span>CHANNEL · EMAIL</span>
          <span className='flex items-center gap-1.5 text-accent-2'>
            <span
              className={`w-1.5 h-1.5 rounded-full bg-accent-2 ${
                loading ? "animate-pulse" : ""
              }`}
            />
            {loading ? "SENDING" : "READY"}
          </span>
        </div>

        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-6'
        >
          <label className='flex flex-col'>
            <span className='hud-label text-dim mb-3'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className={inputClasses}
            />
          </label>
          <label className='flex flex-col'>
            <span className='hud-label text-dim mb-3'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className={inputClasses}
            />
          </label>
          <label className='flex flex-col'>
            <span className='hud-label text-dim mb-3'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What do you want to say?'
              className={inputClasses}
            />
          </label>

          <button
            type='submit'
            disabled={loading}
            className='hud-label bg-accent text-bg py-3 px-8 w-fit hover:opacity-90 transition-opacity disabled:opacity-50'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='relative xl:flex-1 xl:h-auto md:h-[550px] h-[350px] border border-line'
      >
        <div className='absolute inset-0 z-10 pointer-events-none p-4 hud-label flex justify-between text-faint'>
          <span>NODE · STANDBY</span>
          <span className='text-accent-2'>● LIVE</span>
        </div>
        <ContactVisual />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
