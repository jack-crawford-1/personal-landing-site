import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef(null);

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          to_name: 'Jack',
          from_email: form.email,
          to_email: 'chook0879@gmail.com',
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setLoading(false);
      alert('Your message was sent');
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert('Failed to send message');
    }
  };

  return (
    <div className=" w-full bg-dark text-light flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl mx-auto md:p-8 ">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-dark p-8 rounded-md flex flex-col gap-4"
        >
          <label className="flex flex-col">
            <span>Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="bg-gray-200    text-dark p-2 rounded-md"
            />
          </label>
          <br />
          <label className="flex flex-col">
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="bg-gray-200 text-dark  p-2 rounded-md"
            />
          </label>
          <br />
          <label className="flex flex-col">
            <span>Your Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="bg-gray-200 text-dark  p-2 rounded-md"
            />
          </label>
          <br />
          <button
            type="submit"
            disabled={loading}
            className="flex border-2 border-gray-600 py-3 px-3 w-[190px] rounded-md justify-center items-center hover:scale-105 transition-all duration-200"
          >
            {loading ? 'Sending...' : 'Send Message →'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
