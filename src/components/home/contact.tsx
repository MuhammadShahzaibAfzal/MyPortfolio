import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const { error } = await res.json();
        setStatus(error || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <div id="contact" className="scroll-mt-20 py-10">
      <div className="container">
        <p className="text-center font-ovo mb-2 text-lg">Contact with me</p>
        <h1 className="text-center text-5xl font-ovo">Get in touch</h1>
        <p className="text-center max-w-2xl mx-auto">
          I&apos;d love to hear from you! If you have any questions, comments or feedback,
          please use the form below.
        </p>
        <br />
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8">
          <div className="flex gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full outline-none rounded-lg py-2 px-4 border-[#A4A4A4] dark:border-[#A4A4A4] border bg-transparent"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full outline-none rounded-lg py-2 px-4 border-[#A4A4A4] dark:border-[#A4A4A4] border bg-transparent"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={(e) => {
                handleChange(e as unknown as React.ChangeEvent<HTMLInputElement>);
              }}
              placeholder="Enter your message"
              className="w-full outline-none rounded-lg py-2 px-4 border-[#A4A4A4] dark:border-[#A4A4A4] border bg-transparent"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex items-center w-fit dark:bg-transparent gap-3 px-6 py-2.5 bg-black text-white border border-gray-500 rounded-full capitalize mx-auto"
          >
            Contact
            <FaArrowRight />
          </button>
        </form>
        {status && <p className="text-center mt-4">{status}</p>}

        <div className="flex justify-center flex-col gap-3 mt-10 items-center">
          {" "}
          <a href="#top">
            <h1 className="text-2xl font-bold logo">Shahzaib</h1>
          </a>
          <div className="flex items-center gap-3 ">
            <MdMail className="text-2xl" />
            <a href="mailto:ishahzaibafzal@gmail.com">ishahzaibafzal@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
