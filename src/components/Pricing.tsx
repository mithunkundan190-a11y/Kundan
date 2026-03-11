export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Don't Wait Any Longer! Order Your Discounted bottle Now!</h2>
          <p className="text-2xl font-semibold text-orange-600">Only for: $49/per bottle - Limited Time Offer</p>
        </div>

        <div className="flex justify-center mb-12">
          <img 
            src="assets/images/citrusburn-pricing-table.webp" 
            alt="Citrus Burn Pricing" 
            className="w-full max-w-4xl rounded-2xl shadow-xl cursor-pointer hover:shadow-2xl transition-shadow"
            onClick={() => window.open('https://hop.clickbank.net/?affiliate=herbtime&vendor=citrusburn&tid=citrusburne5&pid=shop', '_blank')}
            onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200"; }}
          />
        </div>

        <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-sm">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Order 6 Bottles Or 3 Bottles And Get 2 Free Bonuses!</h3>
          
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-center bg-orange-50 p-6 rounded-xl">
              <img 
                src="assets/images/citrusburn-price-1.webp" 
                alt="Bonus 1" 
                className="w-48 h-48 object-cover rounded-lg shadow-sm"
                onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400"; }}
              />
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Free Bonus #1: Spanish Rapid Detox Protocol</h4>
                <p className="text-gray-700 mb-4">Keep out toxins and support thermogenesis with this 15-day Mediterranean cleanse using simple, powerful ingredients from your kitchen. Designed to jumpstart your results and reduce inflammation fast.</p>
                <p className="font-bold text-orange-600">RRP: $55 Today: FREE</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center bg-orange-50 p-6 rounded-xl">
              <img 
                src="assets/images/citrusburn-sale-1.webp" 
                alt="Bonus 2" 
                className="w-48 h-48 object-cover rounded-lg shadow-sm"
                onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=400"; }}
              />
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Free Bonus #2: Mind Over Metabolism Mastery</h4>
                <p className="text-gray-700 mb-4">Rewire your mindset with daily 5-minute visualization and craving-reset techniques. This guide helps reduce emotional eating, boost motivation, and lock in long-term transformation.</p>
                <p className="font-bold text-orange-600">RRP: $55 Today: FREE</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="https://hop.clickbank.net/?affiliate=herbtime&vendor=citrusburn&tid=citrusburne6&pid=shop" target="_blank" rel="noreferrer" className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-2xl font-bold px-12 py-6 rounded-full shadow-xl transform transition hover:scale-105">
            Order Now & Save 75% Off
          </a>
        </div>
      </div>
    </section>
  );
}
