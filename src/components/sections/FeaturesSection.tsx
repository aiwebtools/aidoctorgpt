
import React from 'react';
import FeatureCard from '../ui/FeatureCard';
import { 
  Stethoscope, 
  FileSearch, 
  Calendar, 
  Image, 
  AlertCircle, 
  Award
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: "Personalized Consultations",
      description: "Get personalized medical advice based on your symptoms, age, gender, and medical history."
    },
    {
      icon: <FileSearch className="h-6 w-6" />,
      title: "Detailed Information",
      description: "Receive comprehensive information about medical conditions, medications, side effects, and interactions."
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Daily Health Tips",
      description: "Access daily health tips and insights to promote well-being and preventive measures."
    },
    {
      icon: <Image className="h-6 w-6" />,
      title: "Visual Analysis",
      description: "Upload images of injuries, rashes, or conditions for AI-powered analysis and diagnosis suggestions."
    },
    {
      icon: <AlertCircle className="h-6 w-6" />,
      title: "Emergency Guidance",
      description: "Receive immediate advice on whether to seek emergency care for potentially serious conditions."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Holistic Approach",
      description: "Get both pharmaceutical and holistic remedies for a comprehensive treatment approach."
    }
  ];

  return (
    <section id="features" className="section-padding bg-black/30 backdrop-blur-md relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl" style={{animationDelay: '1s', animationDuration: '6s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-purple-900/50 text-purple-300 mb-4 backdrop-blur-sm border border-purple-500/20">
            <span className="flex h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
            Comprehensive AI Healthcare
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient">Powerful Features for Your Health</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Doctor GPT combines advanced AI technology with medical expertise to provide you with a comprehensive virtual healthcare experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
