import { Star } from 'lucide-react';

const reviews = [
  {
    text: "I bought CitrusBurn™ on a whim. I've tried powders, shakes, and all the latest trends, but I wasn't expecting much. Within a week, I noticed my jeans were looser and my energy was stable all day. No jitters, no weird feelings. Just calm, steady progress. I've lost 22 pounds and feel in control for the first time in years.",
    name: "Tasha M., age 41 – Austin, TX",
    img: "assets/images/citrusburn-review-1.webp",
    fallback: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
  },
  {
    text: "The late-night eating was killing me. CitrusBurn™ made the difference almost immediately. I'm not constantly thinking about food anymore. I've dropped 17 pounds, my doctor noticed my improved overall wellness markers, and I'm not falling asleep at my desk by 3pm. It's subtle, but powerful. I feel younger than I have in a decade.",
    name: "Neil C., age 57 – Asheville, NC",
    img: "assets/images/citrusburn-buy-online-1.webp",
    fallback: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  },
  {
    text: "I used to wake up foggy, bloated, and dragging myself through the day. Now, I take CitrusBurn™ with water when I wake up and within 30 minutes I'm moving with purpose. I've lost 14 pounds, but more than that, I'm back to being the version of myself I actually like.",
    name: "Elizabeth V, age 62 – Boise, ID",
    img: "assets/images/orange-peel-trick-1.webp",
    fallback: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
  }
];

export default function Reviews() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Citrus Burn Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <img 
                src={review.img} 
                alt={review.name}
                className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-sm"
                onError={(e) => { e.currentTarget.src = review.fallback; }}
              />
              <p className="text-gray-600 italic mb-6 text-center">"{review.text}"</p>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-center font-bold text-gray-900">Verified Purchase</p>
              <p className="text-center text-gray-500 text-sm mt-1">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
