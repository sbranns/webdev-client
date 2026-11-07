"use client";

import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ContextExamples from "./context/ContextExamples";
import ContextProfileForm from "./context/ContextProfileForm";
import Counter from "./Counter";
import CounterBroken from "./CounterBroken";
import DateStateVariable from "./DateStateVariable";
import Effect from "./Effect";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import PropDrilling from "./PropDrilling";
import ReduxExamples from "./redux/ReduxExamples";
import StringStateVariables from "./StringStateVariables";
import UrlEncoding from "./UrlEncoding";
import ZustandExamples from "./zustand/ZustandExamples";

function sayHello(message: string) {
  alert(message);
}

function alert_name() {
  alert("Sam Brannstrom");
}

function sampleFromParent() {
  alert("Sample from parent");
}

export default function Lab4() {
  return (
    <div id="wd-lab4">
      <h2>Lab 4</h2>
      <PassingDataOnEvent />
      <PassingFunctions
        theFunction={sayHello}
        name_func={alert_name}
        theOtherFunction={sampleFromParent}
        message="Hello from Lab 4"
      />
      <CounterBroken />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ParentStateComponent />
      <PropDrilling />
      <UrlEncoding />
      <ContextExamples />
      <ContextProfileForm />
      <ZustandExamples />
      <ReduxExamples />
      <Effect />
    </div>
  );
}