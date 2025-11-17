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
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-2xl">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-3 tracking-tight">
            Request a Referral
          </h1>
          <p className="text-lg text-gray-600">
            Fill in the details below to send a referral request
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 backdrop-blur-sm">
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
                className="w-full px-4 py-4 text-gray-900 bg-gray-50 border-2 border-gray-200 rounded-xl outline-none transition-all duration-200
                  focus:border-indigo-500 focus:bg-white focus:shadow-md
                  peer disabled:opacity-50 disabled:cursor-not-allowed
                  group-hover:border-gray-300"
              />
              <label
                htmlFor="companyName"
                className="absolute left-4 top-4 text-gray-500 transition-all duration-200 pointer-events-none
                  peer-focus:top-[-10px] peer-focus:left-3 peer-focus:text-xs peer-focus:text-indigo-600 peer-focus:bg-white peer-focus:px-2 peer-focus:font-semibold
                  peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-indigo-600 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:font-semibold"
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
                className="w-full px-4 py-4 text-gray-900 bg-gray-50 border-2 border-gray-200 rounded-xl outline-none transition-all duration-200
                  focus:border-indigo-500 focus:bg-white focus:shadow-md
                  peer disabled:opacity-50 disabled:cursor-not-allowed
                  group-hover:border-gray-300"
              />
              <label
                htmlFor="position"
                className="absolute left-4 top-4 text-gray-500 transition-all duration-200 pointer-events-none
                  peer-focus:top-[-10px] peer-focus:left-3 peer-focus:text-xs peer-focus:text-indigo-600 peer-focus:bg-white peer-focus:px-2 peer-focus:font-semibold
                  peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-indigo-600 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:font-semibold"
              >
                Position / Role
              </label>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 py-2">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Recipient Details</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
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
                className="w-full px-4 py-4 text-gray-900 bg-gray-50 border-2 border-gray-200 rounded-xl outline-none transition-all duration-200
                  focus:border-indigo-500 focus:bg-white focus:shadow-md
                  peer disabled:opacity-50 disabled:cursor-not-allowed
                  group-hover:border-gray-300"
              />
              <label
                htmlFor="toName"
                className="absolute left-4 top-4 text-gray-500 transition-all duration-200 pointer-events-none
                  peer-focus:top-[-10px] peer-focus:left-3 peer-focus:text-xs peer-focus:text-indigo-600 peer-focus:bg-white peer-focus:px-2 peer-focus:font-semibold
                  peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-indigo-600 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:font-semibold"
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
                className="w-full px-4 py-4 text-gray-900 bg-gray-50 border-2 border-gray-200 rounded-xl outline-none transition-all duration-200
                  focus:border-indigo-500 focus:bg-white focus:shadow-md
                  peer disabled:opacity-50 disabled:cursor-not-allowed
                  group-hover:border-gray-300"
              />
              <label
                htmlFor="toMail"
                className="absolute left-4 top-4 text-gray-500 transition-all duration-200 pointer-events-none
                  peer-focus:top-[-10px] peer-focus:left-3 peer-focus:text-xs peer-focus:text-indigo-600 peer-focus:bg-white peer-focus:px-2 peer-focus:font-semibold
                  peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-indigo-600 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:font-semibold"
              >
                Recipient Email
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-8 text-lg font-bold rounded-xl transition-all duration-300 
                transform hover:scale-[1.02] active:scale-95 
                disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                shadow-lg hover:shadow-xl
                ${
                  submitStatus === "success"
                    ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                    : submitStatus === "error"
                    ? "bg-gradient-to-r from-red-500 to-rose-600 text-white"
                    : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700"
                }`}
            >
              {text}
            </button>

            {/* Status Message */}
            {submitStatus && (
              <div className={`text-center text-sm font-medium ${
                submitStatus === "success" ? "text-green-600" : "text-red-600"
              }`}>
                {submitStatus === "success" 
                  ? "✓ Your referral request has been sent successfully!" 
                  : "✗ Something went wrong. Please try again."}
              </div>
            )}
          </form>
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Your request will be sent directly to the recipient's inbox
        </p>
      </div>
    </div>
  );
}