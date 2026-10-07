export default function TailwindFilters() {
  // reactjs.jpg is used here so the lab runs out of the box.
  const src = "/images/juni.png";
  return (
    <div>
      <h2>Blurs</h2>
      <div className="flex">
        <img className="blur-none w-1/4" src={src} alt="blur none" />
        <img className="blur-sm w-1/4" src={src} alt="blur sm" />
        <img className="blur-lg w-1/4" src={src} alt="blur lg" />
        <img className="blur-2xl w-1/4" src={src} alt="blur 2xl" />
      </div>
      <h3>Grayscale and brightness</h3>
      <div id="wd-ai-filters" className="flex">
        <img className="grayscale w-1/4" src={src} alt="grayscale" />
        <img className="grayscale-0 w-1/4" src={src} alt="grayscale zero" />
        <img className="brightness-50 w-1/4" src={src} alt="brightness 50" />
        <img className="brightness-150 w-1/4" src={src} alt="brightness 150" />
      </div>
      <div className="flex">
        <img className="grayscale-[0%] w-1/4" src={src} alt="grayscale" />
        <img className="grayscale-[25%] w-1/4" src={src} alt="grayscale" />
        <img className="grayscale-[75%] w-1/4" src={src} alt="grayscale" />
        <img className="grayscale w-1/4" src={src} alt="grayscale" />
      </div>
    </div>
  );
}