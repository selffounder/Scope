"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/header_content";
import { Footer } from "@/components/footer_content";

export default function Dashboard() {
  const [currentTab, setCurrentTab] = useState("Career Orientation");
  const [user, setUser] = useState<{ fullName: string; institution: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/auth/me", { credentials: "include" });
        if (!res.ok) throw new Error("Not authenticated");

        const data = await res.json();
        setUser({ fullName: data.fullName, institution: data.institution || "No institution provided" });
      } catch (error) {
        router.push("/login"); 
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-black text-white">
        <p>Loading...</p>
      </div>
    );
  }

  const renderContent = () => {
    switch (currentTab) {
      case "Career Orientation":
        return <CareerOrientation />;
      case "Resume Builder":
        return <ResumeBuilder />;
      case "Ongoing Applications":
        return <OngoingApplications />;
      case "New Job Application":
        return <NewJobApplication />;
      default:
        return <CareerOrientation />;
    }
  };

  return (
    <>
      <Header />
      <section className="min-h-screen bg-black text-white py-16 px-6">
        <div className="container max-w-screen-xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-center">Your Career Dashboard</h1>

          <div className="text-center mb-8">
            <p className="text-lg">👤 <strong>Name:</strong> {user?.fullName}</p>
            <p className="text-lg">🏛 <strong>Institution:</strong> {user?.institution}</p>
          </div>

          <div className="flex justify-center gap-6 mb-12">
            {["Career Orientation", "Resume Builder", "Ongoing Applications", "New Job Application"].map((tab) => (
              <button
                key={tab}
                onClick={() => setCurrentTab(tab)}
                className={`px-6 py-3 rounded-lg text-lg font-medium transition-all ${
                  currentTab === tab ? "bg-blue-600 text-white" : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      <Footer />
    </>
  );
}

const CareerOrientation = () => (
  <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
    <h2 className="text-3xl font-bold mb-4">Career Orientation</h2>
    <p className="text-gray-300">
      Receive personalized guidance to help you choose the right career path. Our AI will analyze your interests and
      suggest suitable career options.
    </p>
  </div>
);

const ResumeBuilder = () => (
  <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
    <h2 className="text-3xl font-bold mb-4">Resume Builder</h2>
    <p className="text-gray-300">
      Create a standout resume in minutes. Customize your CV to fit different roles and get tips on how to improve it.
    </p>
  </div>
);

const OngoingApplications = () => (
  <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
    <h2 className="text-3xl font-bold mb-4">Ongoing Applications</h2>
    <p className="text-gray-300">
      Track the status of your job applications in one place. Stay updated on where you stand with each opportunity.
    </p>
  </div>
);

const NewJobApplication = () => {
  const [formData, setFormData] = useState({ jobTitle: "", company: "", description: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/jobs/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to submit job application");

      setMessage("🎉 Job application submitted successfully!");
      setFormData({ jobTitle: "", company: "", description: "" });
    } catch (error) {
      setMessage("❌ Error submitting job application.");
    }
  };

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4">New Job Application</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="jobTitle"
          placeholder="Job Title"
          value={formData.jobTitle}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none"
          required
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none"
          required
        />
        <textarea
          name="description"
          placeholder="Job Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none"
          required
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-3 rounded-lg font-semibold hover:scale-105 transition-all"
        >
          Submit Application
        </button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
};
