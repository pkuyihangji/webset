const growth = [
  "Introduce multi-period strategies",
  "Add low-correlation strategies",
  "Launch higher-frequency trading",
  "Expand AUM",
];

const fundraising = [
  "Scaling capacity",
  "Expanding infrastructure",
  "Recruiting senior talent",
  "External capital allocation",
];

export default function Growth() {
  return (
    <section id="growth" className="bg-[#58b6e7] text-[#07111a]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div>
          <p className="section-kicker text-[#164d6d]">05 / Growth</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">Expanding strategies, infrastructure and capacity.</h2>
        </div>
        <div className="mt-12 grid gap-px border border-[#1a668f] bg-[#1a668f] lg:grid-cols-2">
          <GrowthList title="Growth strategy" items={growth} light />
          <GrowthList title="Fundraising" items={fundraising} />
        </div>
      </div>
    </section>
  );
}

function GrowthList({ title, items, light = false }: { title: string; items: string[]; light?: boolean }) {
  return (
    <article className={light ? "bg-[#c7e9fa] p-7 sm:p-9" : "bg-[#07111a] p-7 text-white sm:p-9"}>
      <p className={`section-kicker ${light ? "text-[#164d6d]" : "text-[#58b6e7]"}`}>{title}</p>
      <ul className="mt-6 grid gap-3 text-sm font-semibold sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className={`border-t pt-3 ${light ? "border-[#88bfd9]" : "border-white/20"}`}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
