import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Ray Li</h1>
      <p className="mb-4">
        {`Engineer, builder, investor, gym bro. I'm passionate about web dev, serverless infrastructure, open source, and generative AI, and venture building.`}
      </p>
      <p className="mb-4">
        Finished my undergrad CS@Columbia, now I'm working at Facebook to
        deliver experiences for business users.
      </p>
      <p className="mb-4">
        Occasionally building {``}
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
        {`, and more on.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
