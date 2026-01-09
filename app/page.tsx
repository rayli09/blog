import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Ray Li</h1>
      <p className="mb-4">
        {`Building `}
        <a
          href="https://openpromo.app"
          className="underline"
          target="_blank"
          rel="noreferrer"
        >
          OpenPromo
        </a>
        {` — we make AI ads that win. Senior Eng @Meta building business/advertiser products at scale with >$200M revenue.`}
      </p>
      <p className="mb-4">
        {`CS & AI @Columbia. Passionate about agentic ai, derivatives trading, gym rat.`}
      </p>
      <p className="mb-4">
        {`Other projects: `}
        <a
          href="https://filegpt.app"
          className="underline"
          target="_blank"
          rel="noreferrer"
        >
          FileGPT
        </a>
        {`, `}
        <a
          href="https://offerplz.app"
          className="underline"
          target="_blank"
          rel="noreferrer"
        >
          Offerplz
        </a>
        {`, `}
        <a
          href="https://unis.fyi"
          className="underline"
          target="_blank"
          rel="noreferrer"
        >
          unis.fyi
        </a>
        {`, `}
        <a
          href="https://www.onlyfinance.today"
          className="underline"
          target="_blank"
          rel="noreferrer"
        >
          onlyfinance.today
        </a>
        {`.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
