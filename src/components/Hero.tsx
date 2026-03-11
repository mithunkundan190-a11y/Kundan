export default function Hero() {
  return (
    <section className="pt-32 pb-16 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="assets/images/citrus-burn.webp" 
              alt="Citrus Burn" 
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1550828520-4cb496926fc9?auto=format&fit=crop&q=80&w=800";
              }}
            />
          </div>
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Citrus Burn – Natural Support for Metabolism, Energy, and Weight Management
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Citrus Burn is a natural wellness formula designed to support healthy metabolism, balanced energy, and sustainable weight management. Created for people who feel stuck despite diet and exercise efforts, Citrus Burn works with your body's natural processes to promote fat utilization, appetite awareness, and overall metabolic efficiency.
            </p>
            <ul className="space-y-4 text-lg font-semibold text-gray-800">
              <li className="flex items-center gap-3">
                <span className="text-2xl">🔥</span> Break Through Thermogenic Resistance
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl">🔥</span> Support Natural Thermogenesis
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl">🔥</span> Help Your Body Burn Stored Fat More Efficiently
              </li>
            </ul>
            <div>
              <a href="#pricing" className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-xl font-bold px-8 py-4 rounded-full shadow-lg transform transition hover:scale-105">
                Order Now & Save 75% Off
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
