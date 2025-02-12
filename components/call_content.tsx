"use client";

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 relative overflow-hidden">
      <div className="container max-w-screen-xl mx-auto text-center space-y-8 z-10 relative">
        <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
          Sign Up Today for Free
        </h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Join thousands of professionals who are using our platform to accelerate their career growth. Get personalized career guidance, build an impressive CV, and connect with top companies.
        </p>
        <div className="flex justify-center gap-6 mt-8">
          <button
            className="bg-black text-white px-10 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-transform transform hover:scale-105 shadow-md"
            onClick={() => window.open("/signup", "_blank")}
          >
            🚀 Sign Up Now!
          </button>

          <button className="bg-gray-200 text-black px-10 py-4 rounded-lg text-lg font-medium hover:bg-gray-300 transition-transform transform hover:scale-105 shadow-md">
            Learn More
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-6">
          No credit card required. Join for free and cancel anytime.
        </p>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-300 rounded-full opacity-20 blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-300 rounded-full opacity-20 blur-3xl transform translate-x-1/3 translate-y-1/3"></div>
    </section>
  );
};
