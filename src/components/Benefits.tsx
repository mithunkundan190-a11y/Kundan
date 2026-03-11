import { CheckCircle2 } from 'lucide-react';

const benefits = [
  "Supports Healthy Metabolism & Natural Thermogenesis",
  "Helps Burn Calories More Efficiently Throughout the Day",
  "Reduces Cravings & Supports Appetite Control Naturally",
  "Promotes Steady, Clean Energy Without Jitters or Crashes",
  "Supports Fat Utilization Instead of Fat Storage",
  "Helps Maintain Balanced Blood Sugar Levels",
  "Enhances Digestive Comfort & Nutrient Absorption",
  "Supports Long-Term Weight Management & Wellness",
  "100% Natural, Non-GMO & Stimulant-Free Formula",
  "Safe, Gentle & Suitable for Daily Adult Use"
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Key Benefits of Using Citrus Burn</h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="assets/images/citrusburn-reviews-1.webp" 
              alt="CitrusBurn benefits" 
              className="w-full rounded-2xl shadow-lg object-cover"
              onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1498837167922-41c543210940?auto=format&fit=crop&q=80&w=800"; }}
            />
          </div>
          <div className="lg:w-1/2">
            <ul className="space-y-6">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <a href="#pricing" className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-xl font-bold px-8 py-4 rounded-full shadow-lg transform transition hover:scale-105">
                Get CitrusBurn™ Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
