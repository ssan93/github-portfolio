import { useState } from "react";
import { renderToString } from 'react-dom/server';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const ContactMe = ({ Text }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/submit-form", {
      method: "POST",
      body: JSON.stringify({ name, email, subject, message }),
    });

    // Success if status code is 201
    if (res.status === 201) {
      toast("Thank you for contacting us!", { type: "success" });
    } else {
      toast("Please re-check your inputs.", { type: "error" });
    }
  };
  

  return (
    <div className="mt-4 p-6 bg-[#161b22] rounded">
      <ToastContainer />
      <form onSubmit={onSubmit} className="px-3 py-5">
        <h2 className="text-gray-500 text-3xl  my-2 font-semibold">
          <Text tid="contactMe" />
        </h2>
        <div className="grid grid-flow-col grid-cols-2 gap-4">
          <input
            type="text"
            placeholder={renderToString(<Text tid="name" />)}
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-[#0d1117] border focus:outline-none rounded text-sm py-2 px-2 border-gray-500"
          />
          <input
            type="email"
            placeholder={renderToString(<Text tid="email" />)}
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#0d1117] border focus:outline-none  rounded text-sm py-2 px-2 border-gray-500"
          />
        </div>

        <input
          type="text"
          name="subject"
          placeholder={renderToString(<Text tid="subject" />)}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="bg-[#0d1117] border focus:outline-none  w-full mt-3 rounded text-sm py-2 px-2 border-gray-500"
        />

        <textarea
          placeholder={renderToString(<Text tid="message" />)}
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="bg-[#0d1117] border focus:outline-none  w-full mt-3 h-40 rounded text-sm py-2 px-2 border-gray-500"
        />
        <button
          type="submit"
          className="bg-[#238636] w-full py-2 font-semibold text-sm text-center focus:outline-none mt-2 rounded"
        >
          {<Text tid="submit" />}
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
