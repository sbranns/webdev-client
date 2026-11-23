export default function Environment() {
  const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
  return (
    <div id="wd-lab5-environment">
      <h4>Environment</h4>
      <p>
        <code>NEXT_PUBLIC_HTTP_SERVER</code> = <code>{HTTP_SERVER}</code>
      </p>
    </div>
  );
}