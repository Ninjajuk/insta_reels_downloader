


const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-jakarta mb-6 text-primary ">
        Welcome to InstaNinja!
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
        Easily download Instagram reels, videos, DPs,  all in one place.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button size="lg" className="p-2  text-white bg-purple-700 rounded-full cursor-pointer">
            Download Reels
            {/* <ChevronRight className="ml-2 h-4 w-4" /> */}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
