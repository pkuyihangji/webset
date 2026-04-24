export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Invest With Us</h2>
        <p className="text-gray-400 max-w-lg mx-auto mb-8">
          We are currently accepting external capital. Minimum investment and terms available upon request.
        </p>
        <a href="mailto:contact@positiveresearch.io"
          className="inline-block bg-amber-400 text-gray-950 font-semibold px-8 py-3 rounded-lg hover:bg-amber-300 transition-colors">
          Get in Touch
        </a>
        <p className="text-gray-600 text-xs mt-8">
          For informational purposes only. Past performance does not guarantee future results.
        </p>
      </div>
    </section>
  );
}
