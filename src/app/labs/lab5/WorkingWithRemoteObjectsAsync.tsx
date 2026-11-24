"use client";
import { useEffect, useState } from "react";
import * as client from "./client";

export default function WorkingWithRemoteObjectsAsync() {
  const [assignment, setAssignment] = useState({ title: "" });
  const updateTitle = async () => {
    setAssignment(await client.updateTitle(assignment.title));
  };
  useEffect(() => {
    const loadAssignment = async () => {
      const data = await client.fetchAssignment();
      setAssignment(data);
    };

    loadAssignment();
  }, []);

  return (
    <>
    <h3 className="text-xl font-bold">Working with remote objects async</h3>
      <button
        id="wd-update-assignment-title"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        onClick={updateTitle}
      >
        Update Title
      </button>
      <input
        className="border rounded"
        id="wd-assignment-title"
        value={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <pre>{JSON.stringify(assignment)}</pre>
    </>
  );
}
