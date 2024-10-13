import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Ray Li</h1>
      <p className="mb-4">
        {`Enginer, builder, investor, gym bro. I'm passionate about web dev, serverless infrastructure, open source, and generative AI, and venture building.`}
      </p>
      <p className="mb-4">
        Finished my undergrad CS@Columbia, now I'm working at Facebook to
        deliver experiences for business users.
      </p>
      <p className="mb-4">
        Occasiaonlly building {``}
        <a
          href="https://filegpt.app"
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          FileGPT
        </a>
        {`, `}
        <a
          href="https://offerplz.app"
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          Offerplz
        </a>
        {`, and more on.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
