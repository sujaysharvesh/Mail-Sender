"use client";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    companyName: "",
    toName: "",
    toMail: "",
    position: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [text, setText] = useState("SEND MESSAGE");

  const handleInputChanges = (e:
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e:
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");
    setText("SENDING...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setText("SENT!");
        setFormData({
          companyName: "",
          toName: "",
          toMail: "",
          position: "",
        });
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
      setText("ERROR - TRY AGAIN");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setText("SEND MESSAGE");
        setSubmitStatus("");
      }, 3000);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <div className="flex-2 bg-gray-200 rounded-3xl flex flex-col justify-between px-10 py-10 p-8 shadow-md">
        {/* <div>
          <h2 className="text-4xl md:text-6xl font-black mb-2 mt-2 text-gray-900 font-anton tracking-tight">
            DROP ME A LINE
          </h2>
          <p className="text-gray-600 font-oswald text-lg mb-8">
            I'll get back to you soon
          </p>
        </div> */}

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 flex-1"
        >
          {/* Company Name Field */}
          <div className="relative">
            <input
              type="text"
              id="companyName"
              placeholder=" "
              value={formData.companyName}
              onChange={handleInputChanges}
              disabled={isSubmitting}
              className="w-full border-b-2 border-gray-300 bg-transparent focus:border-gray-900 outline-none py-3 pt-6 peer text-gray-900 text-lg transition-all"
            />
            <label
              htmlFor="companyName"
              className="absolute left-0 top-3 text-gray-500 text-base transition-all pointer-events-none font-oswald
              peer-focus:top-0 peer-focus:text-sm peer-focus:text-gray-900 peer-focus:font-semibold
              peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-gray-900 peer-[:not(:placeholder-shown)]:font-semibold"
            >
              Company Name
            </label>
          </div>

          {/* To Name Field */}
          <div className="relative">
            <input
              type="text"
              id="toName"
              placeholder=" "
              value={formData.toName}
              onChange={handleInputChanges}
              disabled={isSubmitting}
              className="w-full border-b-2 border-gray-300 bg-transparent focus:border-gray-900 outline-none py-3 pt-6 peer text-gray-900 text-lg transition-all"
            />
            <label
              htmlFor="toName"
              className="absolute left-0 top-3 text-gray-500 text-base transition-all pointer-events-none font-oswald
              peer-focus:top-0 peer-focus:text-sm peer-focus:text-gray-900 peer-focus:font-semibold
              peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-gray-900 peer-[:not(:placeholder-shown)]:font-semibold"
            >
              Recipient Name
            </label>
          </div>

          {/* To Mail Field */}
          <div className="relative">
            <input
              type="email"
              id="toMail"
              placeholder=" "
              value={formData.toMail}
              onChange={handleInputChanges}
              disabled={isSubmitting}
              className="w-full border-b-2 border-gray-300 bg-transparent focus:border-gray-900 outline-none py-3 pt-6 peer text-gray-900 text-lg transition-all"
            />
            <label
              htmlFor="toMail"
              className="absolute left-0 top-3 text-gray-500 text-base transition-all pointer-events-none font-oswald
              peer-focus:top-0 peer-focus:text-sm peer-focus:text-gray-900 peer-focus:font-semibold
              peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-gray-900 peer-[:not(:placeholder-shown)]:font-semibold"
            >
              Email Address
            </label>
          </div>

          {/* Position Field */}
          <div className="relative flex-1">
            <input
              type="text"
              id="position"
              placeholder=" "
              value={formData.position}
              onChange={handleInputChanges}
              disabled={isSubmitting}
              className="w-full border-b-2 border-gray-300 bg-transparent focus:border-gray-900 outline-none py-3 pt-6 peer text-gray-900 text-lg transition-all"
            />
            <label
              htmlFor="position"
              className="absolute left-0 top-3 text-gray-500 text-base transition-all pointer-events-none font-oswald
              peer-focus:top-0 peer-focus:text-sm peer-focus:text-gray-900 peer-focus:font-semibold
              peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-gray-900 peer-[:not(:placeholder-shown)]:font-semibold"
            >
              Position
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`mt-auto text-white py-4 px-8 text-2xl rounded-2xl font-anton transition-all duration-200 active:scale-95 tracking-wide hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed
              ${
                submitStatus === "success"
                  ? "bg-green-600 hover:bg-green-700"
                  : submitStatus === "error"
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-gray-900 hover:bg-gray-800"
              }`}
          >
            {text}
          </button>
        </form>
      </div>
    </div>
  );
}