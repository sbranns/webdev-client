export default function VariableTypes() {
  let numberVariable = 123;
  let myNumber = 1111;
  let floatingPointNumber = 234.345;
  let stringVariable = "Hello World!";
  let myString = "My string";
  let booleanVariable = true;
  let isNumber = typeof numberVariable;
  let isString = typeof stringVariable;
  let isBoolean = typeof booleanVariable;
  let myNumType = typeof myNumber;
  let myStrType = typeof myString;
  let sampleCount = 42;
  let sampleLabel = "Lab 3";
  let sampleCountType = typeof sampleCount;
  let sampleLabelType = typeof sampleLabel;
  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable}
      <br />
      floatingPointNumber = {floatingPointNumber}
      <br />
      myNumber = {myNumber}
      <br />
      stringVariable = {stringVariable}
      <br />
      myString = {myString}
      <br />
      booleanVariable = {booleanVariable + ""}
      <br />
      isNumber = {isNumber}
      <br />
      isString = {isString}
      <br />
      isBoolean = {isBoolean}
      <br />
      myNumType = {myNumType}
      <br />
      myStrType = {myStrType}
      <br />
      sampleCount = {sampleCount}
      <br />
      typeof sampleCount = {sampleCountType}
      <br />
      sampleLabel = {sampleLabel}
      <br />
      typeof sampleLabel = {sampleLabelType}
      <hr />
    </div>
  );
}