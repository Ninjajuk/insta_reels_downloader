
import { Lightbulb, Book, Clock } from 'lucide-react';

const features = [
  {
    icon: Lightbulb,
    title: 'Smart Preparation',
    description: 'AI-powered study plans tailored to your goals',
  },
  {
    icon: Book,
    title: 'Comprehensive Resources',
    description: 'Access to past papers, syllabi, and study materials',
  },
  {
    icon: Clock,
    title: 'Time-Tested',
    description: 'Practice with papers from 2010-2024',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-accent/50">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-3xl font-bold font-jakarta mb-12 text-center">Why Choose ExamNinja?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center p-6 rounded-lg hover:bg-background transition-colors">
              <div className="mb-4 flex justify-center">
                <feature.icon className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
