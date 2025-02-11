export const Content1 = () => {
    return (
      <section className="container max-w-screen-xl mx-auto py-16 px-6 space-y-10">
        <div className="space-y-6">
          <div className="inline-flex items-center border border-[#222]/10 px-4 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700">
            🚀 Beta Version is here
          </div>
          <h1 className="text-6xl font-extrabold tracking-tighter bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent leading-tight">
            A powerful career platform
          </h1>
          <p className="text-xl text-[#010D3E] tracking-tight mt-4">
            Scope AI is designed to help you achieve long-term success on your career journey.
          </p>
        </div>
        <div className="flex items-center gap-4 mt-8">
          <button className="rounded-lg bg-black text-white px-6 py-4 font-medium hover:bg-gray-800 transition-all">
            Get Started
          </button>
          <button className="rounded-lg border border-black text-black px-6 py-4 font-medium hover:bg-black hover:text-white transition-all">
            Learn More
          </button>
        </div>
      </section>
    );
  };
  