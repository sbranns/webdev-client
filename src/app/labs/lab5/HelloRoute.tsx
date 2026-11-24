"use client";
import { useEffect, useState } from "react";
import * as client from "./client";

export default function HelloRoute() {
  const [hello, setHello] = useState<{ message?: string }>({});
  useEffect(() => {
    client.fetchHello().then(setHello);
  }, []);
  return (
    <>
    <h3 className="text-xl font-bold">Hello Route</h3>
    <pre>{JSON.stringify(hello)}</pre>
    </>
  );
}
