export default function VariablesAndConstants() {
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  let myName = "Sam"
  const greeting = "Hello there, "
  const sampleSum = functionScoped + blockScoped
  return (
    <div id="wd-variables-and-constants">
      <h4>Variables and Constants</h4>
      functionScoped = {functionScoped}
      <br />
      blockScoped = {blockScoped}
      <br />
      constant1 = {constant1}
      <br />
      {greeting}{myName}
      <br />
      sampleSum = {sampleSum}
      <hr />
    </div>
  );
}
