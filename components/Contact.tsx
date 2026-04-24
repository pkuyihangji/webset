export default function Contact() {
  return (
    <section id="contact" className="py-32 px-8 max-w-7xl mx-auto">
      <div className="border border-white/5 p-16">
        <p className="text-cyan-500 text-xs tracking-[0.3em] uppercase mb-4">Contact</p>
        <h2 className="text-4xl font-semibold text-white mb-4">Invest With Us</h2>
        <p className="text-white/30 text-sm max-w-md mb-12 leading-relaxed">
          We are currently accepting external capital. Minimum investment and terms available upon request.
        </p>
        <a href="mailto:contact@positiveresearch.ai"
          className="inline-block text-xs tracking-widest uppercase text-white border border-white/20 hover:border-cyan-500 hover:text-cyan-400 px-8 py-4 transition-colors">
          Get in Touch
        </a>
        <p className="text-white/15 text-xs mt-16 max-w-lg leading-relaxed">
          For informational purposes only. Past performance does not guarantee future results. This is not an offer to sell securities.
        </p>
      </div>
    </section>
  );
}
