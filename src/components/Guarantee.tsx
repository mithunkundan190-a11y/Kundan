export default function Guarantee() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-orange-50 border-4 border-orange-200 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <img 
              src="assets/images/citrusburn-official-1.webp" 
              alt="180 Day Guarantee" 
              className="w-full max-w-[250px] mx-auto"
              onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1614036417651-1d451f0c112e?auto=format&fit=crop&q=80&w=400"; }}
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Citrus Burn 180-Day Promise: Satisfaction Guaranteed or Get Refund</h2>
            <p className="text-lg text-gray-700 mb-4">
              Citrus Burn offers a 100% Money-Back Guarantee for 180 days. If you're not satisfied, contact us via phone or email, and we'll issue a full refund within 48 hours of receiving your return, even if the bottles are empty.
            </p>
            <p className="text-lg font-bold text-gray-900 mb-4">No questions asked!</p>
            <p className="text-lg text-gray-700">
              So what are you waiting for? Order your bottles of Citrus Burn today and start experiencing the difference!
              <br/><span className="text-sm text-gray-500 mt-2 block">Note: Shipping and handling fees are non-refundable.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
