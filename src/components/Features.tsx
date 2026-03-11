import { ShieldCheck, Leaf, Award, Flag } from 'lucide-react';

const features = [
  {
    title: "Made In The USA",
    desc: "Citrus Burn is formulated in the United States of America.",
    icon: Flag,
    img: "assets/images/prodentim-made-in-usa.webp"
  },
  {
    title: "GMP Certified",
    desc: "We are proud to say that This Formula is All Natural, Non-GMO and Gluten-Free.",
    icon: Award,
    img: "assets/images/prodentim-gmp-certified.webp"
  },
  {
    title: "FDA APPROVED",
    desc: "Citrus Burn is formulated in a FDA registered facility which adheres to strict FDA regulations.",
    icon: ShieldCheck,
    img: "assets/images/prodentim-fda-approved.webp"
  },
  {
    title: "100% Natural",
    desc: "We are proud to say that Citrus Burn is an All Natural, Non-GMO and Gluten-Free supplement.",
    icon: Leaf,
    img: "assets/images/prodentim-all-natural-product.webp"
  }
];

export default function Features() {
  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Citrus Burn?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="w-20 h-20 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4 text-orange-500">
                <feature.icon size={40} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
