
const stats = [
    { number: "10K+", label: "Total Downloads" },
    { number: "1+", label: "Years Experience" },
    { number: "95%", label: "Success Rate" },
    { number: "100K+", label: "Visits" },
  ];
  
  const StatsSection = () => {
    return (
      <section className="py-12 bg-primary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default StatsSection;
  