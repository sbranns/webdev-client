
"use client";
import { useEffect, useState } from "react";
import * as client from "./client";

export default function WorkingWithRemoteObjectsAsync() {
  const [assignment, setAssignment] = useState({title: ""});
  const fetchAssignment = async () => {
    setAssignment(await client.fetchAssignment());
  };
  const updateTitle = async () => {
    setAssignment(await client.updateTitle(assignment.title));
  };
  useEffect(() => {
    fetchAssignment();
  }, []);

  return (
    <>
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
