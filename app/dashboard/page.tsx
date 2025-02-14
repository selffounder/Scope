"use client";
import { Header } from "@/components/header_content"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Footer } from "@/components/footer_content"

export default function Dashboard() {
  const [currentTab, setCurrentTab] = useState("Career Orientation");

  const renderContent = () => {
    switch (currentTab) {
      case "Career Orientation":
        return <CareerOrientation />;
      case "Resume Builder":
        return <ResumeBuilder />;
      case "Ongoing Applications":
        return <OngoingApplications />;
      default:
        return <CareerOrientation />;
    }
  };

  return (
    <>
    <Header />
    <section className="min-h-screen bg-black text-white py-16 px-6">
      <div className="container max-w-screen-xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 text-center">Your Career Dashboard</h1>

        <div className="flex justify-center gap-8 mb-12">
          {["Career Orientation", "Resume Builder", "Ongoing Applications"].map((tab) => (
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
