export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">What is Citrus Burn?</h2>
        
        <div className="space-y-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3">
              <img 
                src="assets/images/s2-modl-1.webp" 
                alt="CitrusBurn for weightloss" 
                className="w-full rounded-2xl shadow-lg object-cover"
                onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800"; }}
              />
            </div>
            <div className="lg:w-2/3">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Citrus Burn is a carefully formulated dietary supplement created to support metabolic health using a blend of plant-based ingredients traditionally associated with thermogenesis, digestion, and energy balance. It is designed for adults who want a natural way to help their bodies manage weight, energy levels, and overall wellness without relying on extreme measures.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At its core, Citrus Burn works by supporting the body's natural calorie-burning processes. As people age or experience long-term stress, metabolic efficiency may slow down, making it harder to maintain a healthy weight. Citrus Burn is designed to gently encourage metabolic activity while supporting appetite awareness and energy consistency throughout the day.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/3">
              <img 
                src="assets/images/citrusburn-1.webp" 
                alt="CitrusBurn" 
                className="w-full rounded-2xl shadow-lg object-cover"
                onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800"; }}
              />
            </div>
            <div className="lg:w-2/3">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Citrus Burn is suitable for both men and women who feel that traditional weight-loss methods are no longer effective or sustainable. Rather than focusing on short-term results, Citrus Burn emphasizes daily metabolic support that aligns with the body's natural rhythms. This makes it easier to maintain healthy habits without feeling deprived or overwhelmed.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                What sets Citrus Burn apart is its focus on simplicity and safety. The formula is built around naturally sourced ingredients, free from genetically modified components, and does not rely on artificial stimulants. This makes Citrus Burn an appealing option for individuals seeking a more balanced, long-term approach to metabolic wellness and overall vitality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
