import FeedComponent from "@components/feed.component";

function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover &amp; Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI Powered Prompts</span>
      </h1>

      <p className="desc text-center">
        Discover, create and share creative prompts for AI tools
      </p>

      <FeedComponent />
    </section>
  );
}

export default Home;
