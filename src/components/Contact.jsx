import { createElement, useRef } from "react";
import { content } from "../Content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tdc4cza",
        "template_x4gtehq",
        form.current,
        "VFV9gbCVhYGuLmVm_"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clear all input field values
          form.current.reset();
          // Success toast message
          toast.success("Email send Successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <section className="bg-white" id="contact">
      <Toaster />
      <div className="md:container px-5 sm:py-14 py-10">
        <h2 className="title" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5"
          >
            {/* Input Name as same as email js templates values */}
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="border border-slate-300 bg-[#F5F9FD] p-3 rounded text-dark_primary placeholder:text-dark_primary/50"
            />
            <input
              type="email"
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Email Id"
              required
              className="border border-slate-300 bg-[#F5F9FD] p-3 rounded text-dark_primary placeholder:text-dark_primary/50"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-slate-300 bg-[#F5F9FD] p-3 rounded h-44 text-dark_primary placeholder:text-dark_primary/50"
              required
            ></textarea>
            <button className="btn self-start bg-[#EAF2FA] text-dark_primary hover:bg-[#D5E3F1] transition-colors">
              Submit
            </button>
          </form>
          <div className="flex-1 flex flex-col gap-5">
            {Contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-2"
              >
                <h4 className="text-dark_primary">{createElement(content.icon)}</h4>
                <a className="font-Poppins text-dark_primary hover:text-dark_primary/70 transition-colors" href={content.link} target="_blank">
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
