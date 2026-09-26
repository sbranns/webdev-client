export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/Starship_S20.jpg/960px-Starship_S20.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.png"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />
      AI sample image:
      <br />
      <img
        id="wd-ai-image"
        width="200px"
        alt="Laptop on a desk"
        src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80"
      />
      <br />
      The cutest dog in the world:
      <br />
      <img
        id="wd-your-image"
        src="/images/juni.png"
        height="400px"
        alt="A cute dog named Juni"
      />
    </div>
  );
}
