const ingredients = [
  {
    name: "Seville Orange Peel (p-Synephrine)",
    desc: "Seville orange peel contains natural compounds that support thermogenic activity in the body. It is traditionally used to promote metabolic efficiency and calorie utilization. This ingredient helps encourage the body's natural fat-burning processes without overstimulation. It also supports sustained energy levels throughout the day."
  },
  {
    name: "Spanish Red Apple Vinegar",
    desc: "Spanish red apple vinegar is known for supporting digestion and appetite balance. It may help promote a feeling of fullness, reducing unnecessary snacking. This ingredient also supports healthy blood sugar responses. Its role in Citrus Burn is to encourage better dietary control and metabolic stability."
  },
  {
    name: "Andalusian Red Pepper Extract",
    desc: "Andalusian red pepper contains natural compounds associated with increased calorie expenditure. It supports the body's thermogenic response after meals. This ingredient may help improve how efficiently calories are used for energy. It also contributes to metabolic warmth and circulation support."
  },
  {
    name: "Himalayan Mountain Ginger",
    desc: "Himalayan mountain ginger has long been used to support digestion and metabolic comfort. It may help reduce cravings while promoting feelings of satiety. Ginger also supports healthy blood sugar balance. Its inclusion helps Citrus Burn remain gentle and digestion-friendly."
  },
  {
    name: "Ceremonial Green Tea Extract",
    desc: "Ceremonial green tea provides natural antioxidants that support fat oxidation. It is associated with clean energy production without harsh stimulation. This ingredient also supports cardiovascular and metabolic wellness. Green tea contributes to sustained focus and daily vitality."
  },
  {
    name: "Berberine",
    desc: "Berberine is widely researched for its role in metabolic and glucose support. It helps promote efficient energy utilization within the body. This ingredient supports overall metabolic balance. Its inclusion strengthens Citrus Burn's comprehensive approach to wellness."
  },
  {
    name: "Korean Red Ginseng",
    desc: "Korean red ginseng is known for supporting energy, stress balance, and metabolic resilience. It may help the body adapt to daily physical and mental demands. This ingredient supports hormonal balance and vitality. It complements the other botanicals in Citrus Burn for full-spectrum support."
  }
];

export default function Ingredients() {
  return (
    <section id="ingredients" className="py-20 bg-orange-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">What Are the Powerful Ingredients in Citrus Burn?</h2>
        <p className="text-xl text-center text-gray-700 mb-16">
          Each serving of Citrus Burn contains a blend of botanicals chosen for their complementary roles in metabolic and wellness support.
        </p>
        
        <div className="space-y-8">
          {ingredients.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                {idx + 1}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.name}</h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
