import { Trophy, History, Layers, Users, ShieldCheck } from 'lucide-react';

const WhyAlphalib = () => {
  return (
    <section className="relative py-24 transition-colors duration-500 bg-[#E7E9F0] dark:bg-[#051747] overflow-hidden">
      {/* Background Decorative Element using Pearl/Navy mix */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[#535F80]/10 dark:bg-[#081F62]/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Highlight */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            
            <h3 className="text-4xl md:text-5xl font-black leading-[1.1] mb-8 uppercase tracking-tighter text-[#051747] dark:text-[#FEFEFE]">
              Why Choose <br />
              <span className="text-[#535F80]">Alphalib?</span>
            </h3>

            {/* Main Highlight Box using #081F62 */}
            <div className="p-8 rounded-3xl text-[#FEFEFE] shadow-2xl relative overflow-hidden group bg-[#081F62]">
              <div className="relative z-10">
                <p className="text-5xl font-black mb-2 italic">17+ Years</p>
                <p className="text-[#E7E9F0]/70 font-medium">of trusted experience in the field</p>
              </div>
              <History className="absolute -bottom-4 -right-4 h-32 w-32 text-[#FEFEFE]/5 group-hover:scale-110 transition-transform duration-700" />
            </div>
          </div>

          {/* Right Column: Feature Cards */}
          <div className="lg:col-span-7 grid gap-6">
            
            {[
              {
                title: "National Pioneer",
                icon: <Trophy className="h-7 w-7" />,
                desc: "The first company in Cambodia to offer comprehensive, professional library services, setting the benchmark for the industry.",
                accent: "group-hover:text-[#081F62] dark:group-hover:text-[#FEFEFE]"
              },
              {
                title: "End-to-End Ecosystem",
                icon: <Layers className="h-7 w-7" />,
                desc: "From initial system setup and custom development to cloud hosting and 24/7 technical support.",
                accent: "group-hover:text-[#081F62] dark:group-hover:text-[#FEFEFE]"
              },
              {
                title: "Proven Expertise",
                icon: <Users className="h-7 w-7" />,
                desc: "Trusted by hundreds of libraries and prestigious institutions across all 25 provinces of Cambodia.",
                accent: "group-hover:text-[#081F62] dark:group-hover:text-[#FEFEFE]"
              },
              {
                title: "Global Standards",
                icon: <ShieldCheck className="h-7 w-7" />,
                desc: "Deep understanding of local needs combined with rigorous international technology standards.",
                accent: "group-hover:text-[#081F62] dark:group-hover:text-[#FEFEFE]"
              }
            ].map((feature, i) => (
              <div 
                key={i}
                className="group p-8 rounded-3xl border transition-all duration-300 bg-[#FEFEFE] dark:bg-[#081F62]/40 border-[#535F80]/10 dark:border-white/5 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  {/* Icon Box using #051747 */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-[#FEFEFE] shadow-lg bg-[#051747] group-hover:bg-[#081F62] transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className={`text-xl font-bold mb-2 transition-colors text-[#051747] dark:text-[#FEFEFE] ${feature.accent}`}>
                      {feature.title}
                    </h4>
                    <p className="leading-relaxed text-[#535F80] dark:text-[#E7E9F0]/70">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAlphalib;