import { featuresData } from '../data/mock';
import { Target, Globe, CheckSquare, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const iconMap = {
  'target': Target,
  'globe': Globe,
  'check-square': CheckSquare,
};

const FeatureCard = ({ feature, index }) => {
  const isImageLeft = feature.imagePosition === 'left';
  const [ref, isInView] = useInView();

  return (
    <div ref={ref} className="py-16 md:py-24">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
        isImageLeft ? '' : 'lg:[direction:rtl]'
      }`}>
        {/* Image Side */}
        <div
          className={`relative lg:[direction:ltr] transition-all duration-700 ${
            isInView ? 'opacity-100 translate-x-0' : `opacity-0 ${isImageLeft ? '-translate-x-10' : 'translate-x-10'}`
          }`}
        >
          <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-h-[550px]">
            <img
              src={feature.image}
              alt={feature.tagline}
              className="w-full h-full object-cover"
              loading="lazy"
            />

            {/* Multiple overlay cards (journey steps) */}
            {feature.overlays && feature.overlays.length > 1 && (
              <div className="absolute bottom-8 left-6 flex flex-col gap-3">
                {feature.overlays.map((overlay, i) => {
                  const Icon = iconMap[overlay.icon];
                  return (
                    <div
                      key={i}
                      className={`bg-zinc-900/70 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2.5 flex items-center gap-3 shadow-lg transition-all duration-500 ${
                        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                      style={{ transitionDelay: `${(i + 1) * 200 + 400}ms` }}
                    >
                      <div className="w-7 h-7 bg-verge-accent/90 rounded-full flex items-center justify-center flex-shrink-0">
                        {Icon && <Icon className="w-3.5 h-3.5 text-white" />}
                      </div>
                      <span className="text-white text-sm font-medium whitespace-nowrap">{overlay.text}</span>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Single overlay (churn risk / checkout) */}
            {feature.overlays && feature.overlays.length === 1 && feature.overlays[0].value && (
              <div
                className={`absolute bottom-8 left-1/2 -translate-x-1/2 bg-zinc-900/70 backdrop-blur-xl border border-white/10 rounded-xl px-6 py-4 text-center shadow-lg min-w-[200px] transition-all duration-500 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <p className="text-white/70 text-xs font-medium uppercase tracking-wider">{feature.overlays[0].label}</p>
                <p className="text-white text-2xl font-serif mt-1">{feature.overlays[0].value}</p>
                {feature.overlays[0].sublabel && (
                  <p className="text-verge-accent text-xs mt-2 font-medium">{feature.overlays[0].sublabel}</p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Text Side */}
        <div
          className={`lg:[direction:ltr] transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <span className="text-verge-accent text-sm font-medium tracking-wide">{feature.tagline}</span>
          <h2 className="mt-4 leading-[1.1]">
            <span className="font-serif text-3xl md:text-4xl lg:text-[3.2rem] text-zinc-900 block">
              {feature.title}
            </span>
            <span className="font-serif text-3xl md:text-4xl lg:text-[3.2rem] text-zinc-900 italic block mt-1">
              {feature.titleItalic}
            </span>
          </h2>
          <p className="text-zinc-500 text-base md:text-lg mt-6 max-w-[440px] leading-relaxed font-light">
            {feature.description}
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 mt-8 text-verge-accent font-medium text-sm group"
          >
            Learn more <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export const FeaturesSection = () => {
  return (
    <section className="bg-verge-cream">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {featuresData.map((feature, index) => (
          <div key={feature.id}>
            <FeatureCard feature={feature} index={index} />
            {index < featuresData.length - 1 && (
              <div className="border-t border-zinc-200" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
