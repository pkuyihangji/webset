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
    <section id="growth" className="bg-white text-black">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="grid gap-12 border-t border-black pt-6 lg:grid-cols-[0.28fr_0.72fr]">
          <div>
            <p className="section-kicker">05 / Growth</p>
          </div>
          <div>
            <h2 className="max-w-4xl text-4xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
              Building what works next.
            </h2>
          </div>
        </div>

        <div className="mt-20 grid border-y border-black lg:grid-cols-2">
          <PriorityList code="GROW / 01" title="Growth strategy" items={growth} />
          <PriorityList code="CAP / 02" title="Fundraising" items={fundraising} bordered />
        </div>

        <div className="mt-24 bg-[#315efb] px-7 py-10 text-white sm:px-10 sm:py-14 lg:flex lg:items-end lg:justify-between lg:gap-12">
          <p className="section-kicker text-[#d7ff43]">Positive Research Ltd.</p>
          <p className="mt-7 max-w-4xl text-3xl font-bold leading-tight sm:text-5xl lg:mt-0 lg:text-right">
            Building scalable and consistent market-neutral alpha on crypto market.
          </p>
        </div>
      </div>
    </section>
  );
}

function PriorityList({ code, title, items, bordered = false }: { code: string; title: string; items: string[]; bordered?: boolean }) {
  return (
    <article className={`py-9 lg:px-10 ${bordered ? "border-t border-black lg:border-l lg:border-t-0 lg:pr-0" : "lg:pl-0"}`}>
      <p className="mono text-[10px] font-bold uppercase text-[#315efb]">{code}</p>
      <h3 className="mt-4 text-3xl font-bold">{title}</h3>
      <ol className="mt-8 border-t border-black/20">
        {items.map((item, index) => (
          <li key={item} className="grid grid-cols-[2.5rem_1fr] border-b border-black/15 py-4 text-sm font-bold">
            <span className="mono text-[9px] text-[#7a827e]">{String(index + 1).padStart(2, "0")}</span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    </article>
  );
}
