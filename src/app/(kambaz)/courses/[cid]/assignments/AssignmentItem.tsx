import Link from "next/link";
import { useState } from "react";
import { FaFileAlt } from "react-icons/fa";
import { useAssignmentsStore } from "../../../store/assignmentsStore";
import { FaTrash } from "react-icons/fa";

export default function AssignmentItem({
  cid,
  aid,
  title,
  details,
  isFaculty
}: {
  cid: string;
  aid: string;
  title: string;
  details: string;
  isFaculty: boolean;
}) {
  const [show, setShow] = useState(false);
  const deleteAssignment = useAssignmentsStore(
    (state) => state.deleteAssignment,
  );
  return (
    <li className="wd-assignment-list-item mb-3 flex gap-3 border border-neutral-300 border-l-[3px] border-l-green-600 bg-white p-3">
      <FaFileAlt className="mt-1 shrink-0 text-xl text-green-700" />
      <div>
        {isFaculty ? (
        <Link
          href={`/courses/${cid}/assignments/${aid}`}
          className="wd-assignment-link font-semibold text-neutral-900 no-underline"
        >
          {title}
        </Link>) : (
          <span className="font-semibold text-neutral-900">{title}</span>)}
        <div className="mt-1 text-sm text-neutral-600">{details}</div>
      </div>
      <div className="ml-auto">
        {isFaculty && (
        <button>
          <FaTrash
            className="cursor-pointer text-red-600"
            onClick={() => setShow(true)}
            title="Delete module"
          />
        </button>
        )}
      </div>
      {show && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          id="wd-add-module-dialog"
        >
          <div className="w-full max-w-md rounded-lg bg-white shadow-lg">
            <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3">
              <h3 className="m-0 text-lg font-semibold">Delete assignment?</h3>
              <button
                type="button"
                onClick={() => setShow(false)}
                className="text-2xl leading-none text-neutral-500"
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <div className="flex justify-end gap-2 border-t border-neutral-200 px-4 py-3">
              <button
                type="button"
                onClick={() => setShow(false)}
                className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
                id="wd-add-module-cancel"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  deleteAssignment(aid);
                  setShow(false);
                }}
                className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
                id="wd-add-module-submit"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </li>
  );
}
