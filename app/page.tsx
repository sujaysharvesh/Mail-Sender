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
  const [text, setText] = useState("SEND REQUEST");

  const handleInputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
        setText("SENT SUCCESSFULLY!");
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
        setText("SEND REQUEST");
        setSubmitStatus("");
      }, 3000);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      <div className="w-full max-w-2xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-light text-black mb-3 tracking-tight">
            Request a Referral
          </h1>
          <p className="text-base text-gray-600 font-light">
            Fill in the details below to send a referral request
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white border border-black p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Company Name Field */}
            <div className="relative group">
              <input
                type="text"
                id="companyName"
                placeholder=" "
                value={formData.companyName}
                onChange={handleInputChanges}
                disabled={isSubmitting}
                required
                className="w-full px-4 py-3 text-black bg-white border border-gray-300 outline-none transition-all duration-200
                  focus:border-black
                  peer disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <label
                htmlFor="companyName"
                className="absolute left-4 top-3 text-gray-500 transition-all duration-200 pointer-events-none text-sm font-light
                  peer-focus:top-[-10px] peer-focus:left-3 peer-focus:text-xs peer-focus:text-black peer-focus:bg-white peer-focus:px-2
                  peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-black peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2"
              >
                Company Name
              </label>
            </div>

            {/* Position Field */}
            <div className="relative group">
              <input
                type="text"
                id="position"
                placeholder=" "
                value={formData.position}
                onChange={handleInputChanges}
                disabled={isSubmitting}
                required
                className="w-full px-4 py-3 text-black bg-white border border-gray-300 outline-none transition-all duration-200
                  focus:border-black
                  peer disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <label
                htmlFor="position"
                className="absolute left-4 top-3 text-gray-500 transition-all duration-200 pointer-events-none text-sm font-light
                  peer-focus:top-[-10px] peer-focus:left-3 peer-focus:text-xs peer-focus:text-black peer-focus:bg-white peer-focus:px-2
                  peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-black peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2"
              >
                Position / Role
              </label>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 py-4">
              <div className="flex-1 h-px bg-black"></div>
              <span className="text-xs font-light text-gray-500 uppercase tracking-widest">Recipient Details</span>
              <div className="flex-1 h-px bg-black"></div>
            </div>

            {/* To Name Field */}
            <div className="relative group">
              <input
                type="text"
                id="toName"
                placeholder=" "
                value={formData.toName}
                onChange={handleInputChanges}
                disabled={isSubmitting}
                required
                className="w-full px-4 py-3 text-black bg-white border border-gray-300 outline-none transition-all duration-200
                  focus:border-black
                  peer disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <label
                htmlFor="toName"
                className="absolute left-4 top-3 text-gray-500 transition-all duration-200 pointer-events-none text-sm font-light
                  peer-focus:top-[-10px] peer-focus:left-3 peer-focus:text-xs peer-focus:text-black peer-focus:bg-white peer-focus:px-2
                  peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-black peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2"
              >
                Recipient Name
              </label>
            </div>

            {/* To Mail Field */}
            <div className="relative group">
              <input
                type="email"
                id="toMail"
                placeholder=" "
                value={formData.toMail}
                onChange={handleInputChanges}
                disabled={isSubmitting}
                required
                className="w-full px-4 py-3 text-black bg-white border border-gray-300 outline-none transition-all duration-200
                  focus:border-black
                  peer disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <label
                htmlFor="toMail"
                className="absolute left-4 top-3 text-gray-500 transition-all duration-200 pointer-events-none text-sm font-light
                  peer-focus:top-[-10px] peer-focus:left-3 peer-focus:text-xs peer-focus:text-black peer-focus:bg-white peer-focus:px-2
                  peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-black peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2"
              >
                Recipient Email
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-8 text-sm font-light uppercase tracking-widest transition-all duration-200 
                border disabled:opacity-50 disabled:cursor-not-allowed
                ${
                  submitStatus === "success"
                    ? "bg-black text-white border-black"
                    : submitStatus === "error"
                    ? "bg-white text-black border-black"
                    : "bg-black text-white border-black hover:bg-white hover:text-black"
                }`}
            >
              {text}
            </button>

            {/* Status Message */}
            {submitStatus && (
              <div className={`text-center text-sm font-light ${
                submitStatus === "success" ? "text-black" : "text-black"
              }`}>
                {submitStatus === "success" 
                  ? "Your referral request has been sent successfully" 
                  : "Something went wrong. Please try again"}
              </div>
            )}
          </form>
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-gray-500 mt-8 font-light">
          Your request will be sent directly to the recipient's inbox
        </p>
      </div>
    </div>
  );
  
}