"use client";
import { useState } from "react";

export default function QueryParameters() {
  const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return (
    <div>
      <h3 className="text-xl font-bold">Path Parameters</h3>
      <input
        className="border rounded m-3 mb-5"
        type="number"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />
      <input
        className="border rounded m-3 mb-5"
        type="number"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />
      <br />
      <a
        id="wd-path-parameter-add"
        className="rounded bg-blue-600 text-white p-2 m-1"
        href={`${HTTP_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}
      >
        Add {a} + {b}
      </a>
      <a
        id="wd-path-parameter-subtract"
        className="rounded bg-red-600 text-white p-2 m-1"
        href={`${HTTP_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}
      >
        Subtract {a} - {b}
      </a>
      <a
        id="wd-path-parameter-multiply"
        className="rounded bg-green-600 text-white p-2 m-1"
        href={`${HTTP_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}
      >
        Multiply {a} * {b}
      </a>
      <a
        id="wd-path-parameter-divide"
        className="rounded bg-orange-600 text-white p-2 m-1"
        href={`${HTTP_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}
      >
        Divide {a} / {b}
      </a>
    </div>
  );
}
