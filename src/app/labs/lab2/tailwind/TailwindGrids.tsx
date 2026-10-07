export default function TailwindGrids() {
  return (
    <div>
      <h2>Tailwind Grids</h2>
      <div>
        <h3 className="mt-6 text-3xl font-bold">4 Columns Grid</h3>
        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: 9 }, (_, i) => (
            <div key={i} className="text-center bg-blue-300 p-3">
              {String(i + 1).padStart(2, "0")}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}