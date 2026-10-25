import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import ArrowFunctions from "./ArrowFunctions";
import BooleanVariables from "./BooleanVariables";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import FilterFunction from "./FilterFunction";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import ForLoops from "./ForLoops";
import House from "./House";
import IfElse from "./IfElse";
import ImpliedReturn from "./ImpliedReturn";
import IncludesSomeEvery from "./IncludesSomeEvery";
import JsonStringify from "./JsonStringify";
import LegacyFunctions from "./LegacyFunctions";
import MapFunction from "./MapFunction";
import NullUndefined from "./NullUndefined";
import ReduceFunction from "./ReduceFunction";
import SimpleArrays from "./SimpleArrays";
import TemplateLiterals from "./TemplateLiterals";
import TernaryOperator from "./TernaryOperator";
import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import Spreader from "./Spreader";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
import DestructingImports from "./DestructingImports";
import OptionalChaining from "./OptionalChaining";
import Classes from "./Classes";
import Styles from "./Styles";
import ClientComponentDemo from "./ClientComponentDemo";
import ServerComponentDemo from "./ServerComponentDemo";
import Add from "./Add";
import Square from "./Square";
import Highlight from "./Highlight";
import BoxDemo from "./children/BoxDemo";
import BoxModelDemo from "./children/BoxModelDemo";
import NestingOrderDemo from "./children/NestingOrderDemo";
import CardDemo from "./children/CardDemo";
import PathParameters from "./PathParameters";
import TodoList from "./todos/TodoList";

export default function Lab2() {
  console.log("Hello World!");
  return (
    <div id="wd-lab3">
      <h1>Lab3</h1>
      <VariablesAndConstants />
      <VariableTypes />
      <BooleanVariables />
      <IfElse />
      <TernaryOperator />
      <ConditionalOutputIfElse />
      <ConditionalOutputInline />
      <NullUndefined  />
      <LegacyFunctions />
      <ArrowFunctions />
      <ImpliedReturn />
      <TemplateLiterals />
      <SimpleArrays />
      <ArrayIndexAndLength />
      <AddingAndRemovingToFromArrays />
      <ForLoops />
      <MapFunction />
      <FindFunction />
      <FindIndex />
      <FilterFunction />
      <IncludesSomeEvery />
      <ReduceFunction />
      <JsonStringify />
      <House />
      <Spreader />
      <Destructing />
      <FunctionDestructing />
      <DestructingImports />
      <OptionalChaining />
      <Classes />
      <Styles />
      <ClientComponentDemo />
      <ServerComponentDemo />
      <Add a={3} b={4} />
      <Add a={10} b={20} />
      <Add a={7} b={8} />
      <h4>Square of 4</h4>
      <Square>{4}</Square>
      <p>Square of 5 = <Square>5</Square></p>
      <h4>Square of 9</h4>
      <Square>9</Square>
      <hr />
      <Highlight>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Highlight>
      <br />
      <Highlight>
        This  is my highlighted sentence.
      </Highlight>
      <br />
      <Highlight>Children can be any JSX</Highlight>
      <hr />
      <BoxDemo />
      <hr />
      <BoxModelDemo />
      <hr />
      <NestingOrderDemo />
      <hr />
      <CardDemo />
      <hr />
      <PathParameters />
      <hr />
      <TodoList />
    </div>
  );
}
