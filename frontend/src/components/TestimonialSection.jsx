import { Star } from 'lucide-react';
import { testimonialData } from '../data/mock';

export const TestimonialSection = () => {
  return (
    <section className="bg-verge-cream py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Stars */}
            <div className="flex items-center gap-1 mb-8">
              {Array.from({ length: testimonialData.stars }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-zinc-900 fill-zinc-900" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="font-serif text-3xl md:text-4xl lg:text-[2.8rem] text-zinc-900 leading-[1.15] tracking-tight">
              <span>{testimonialData.quote.split('—')[0]}—</span>
              <span className="italic">{testimonialData.quote.split('—')[1]}</span>
            </blockquote>

            {/* Attribution */}
            <p className="mt-8 text-zinc-500 text-base font-light">
              — {testimonialData.author} at {testimonialData.company}
            </p>

            {/* Brand Logos */}
            <div className="mt-12 flex items-center gap-8 flex-wrap">
              <span className="flex items-center gap-1.5 text-zinc-400 text-sm font-semibold">
                <span className="w-4 h-4 rounded-full border-2 border-zinc-300 inline-block" />
                Amsterdam
              </span>
              <span className="text-zinc-400 text-sm font-semibold">venice.</span>
              <span className="text-zinc-400 text-lg italic font-serif">theo</span>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[3/4] max-h-[600px]">
              <img
                src={testimonialData.image}
                alt={`${testimonialData.author} testimonial`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
