export const ValueBar = () => {
  return (
    <section className="bg-verge-green py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <p className="text-white/80 text-lg md:text-xl lg:text-2xl font-light text-center max-w-3xl mx-auto leading-relaxed">
          Vergé turns complex data into <span className="text-white font-medium">clear insights</span>, helping you{' '}
          <span className="text-white font-medium">retain customers</span> and{' '}
          <span className="text-white font-medium">drive growth</span>.
        </p>

        {/* Mini dashboard preview bar */}
        <div className="mt-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 md:p-6 overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Total Users', value: '24,589' },
              { label: 'Active Now', value: '1,847' },
              { label: 'Engagement', value: '72.4%' },
              { label: 'Revenue', value: '$48,921.00' }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-white/50 text-xs font-medium uppercase tracking-wider">{stat.label}</p>
                <p className="text-white text-lg md:text-xl font-serif mt-1">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
