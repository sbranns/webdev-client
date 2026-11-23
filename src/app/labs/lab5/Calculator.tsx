"use client";

import { useState } from "react";
import * as client from "./client";

export default function CalculatorNextWebApiClient() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [operation, setOp] = useState("add");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const fetchResult = async () => {
    try {
      const data = await client.fetchResult(a, b, operation);
      let op = "";
      switch (data.operation) {
        case "add":
          op = "+";
          break;
        case "subtract":
          op = "-";
          break;
        case "multiply":
          op = "*";
          break;
        case "divide":
          op = "/";
          break;
        default:
          op = "";
      }
      setError("")
      setResult(`${data.a} ${op} ${data.b} = ${data.result}`);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
        setResult("");
      }
    }
  };

  return (
    <div>
      <label>
        A:{" "}
        <input
          type="number"
          value={a}
          onChange={(e) => setA(parseInt(e.target.value))}
          className="border"
        />
      </label>
      <br />
      <label>
        B:{" "}
        <input
          type="number"
          value={b}
          onChange={(e) => setB(parseInt(e.target.value))}
          className="border"
        />
      </label>
      <br />
      <label>
        Operation:
        <select
          value={operation}
          onChange={(e) => setOp(e.target.value)}
          className="border"
        >
          <option value="add">+</option>
          <option value="subtract">-</option>
          <option value="multiply">*</option>
          <option value="divide">/</option>
        </select>
      </label>
      <br />
      <button className="border" onClick={fetchResult}>
        Calculate
      </button>
      <br />
      <label>{result}</label>
      <p>{error}</p>
    </div>
  );
}
