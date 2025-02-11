import Image from "next/image";

export const Demo = () => {
  return (
    <section className="container max-w-screen-xl mx-auto px-6 py-24">
      <div className="bg-gradient-to-r from-[#D2DCFF] via-white to-[#D2DCFF] p-16 rounded-3xl shadow-xl flex flex-col lg:flex-row items-center gap-16">
      
        <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
          <h1 className="text-6xl font-bold tracking-tight text-gray-900 leading-tight">
            Start Your Dream Career!
          </h1>
          <h2 className="text-3xl font-semibold text-gray-700">
            The most effective way to begin your journey
          </h2>
          <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
            Our AI-powered platform helps you get career guidance, build a standout CV, and apply for top jobs effortlessly.
          </p>
          <div className="flex justify-center lg:justify-start gap-6 mt-8">
            <button className="bg-black text-white px-10 py-4 rounded-xl text-lg font-medium hover:bg-gray-800 transition-transform transform hover:scale-105">
              Request the Demo
            </button>
            <button className="bg-gray-200 text-black px-10 py-4 rounded-xl text-lg font-medium hover:bg-gray-300 transition-transform transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 w-full overflow-hidden rounded-2xl shadow-lg">
          <div className="relative pb-[56.25%] h-0">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-2xl"
              src="https://www.youtube.com/watch?v=7hi5zwO75yc&t=1957s"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
