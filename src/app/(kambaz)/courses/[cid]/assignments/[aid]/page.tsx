"use client";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Assignment } from "@/app/(kambaz)/store/assignmentsStore";
import { useAssignmentsStore } from "../../../../store/assignmentsStore";

export default function AssignmentEditor() {
  const router = useRouter();
  const { cid, aid } = useParams();

  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore(
    (state) => state.updateAssignment,
  );

  const assignments = useAssignmentsStore((state) => state.assignments);

  const handleSave = (assignment: Assignment) => {
    if (aid === "new") {
      addAssignment(assignment);
    } else {
      updateAssignment(assignment);
    }
    router.push(`/courses/${cid}/assignments`)
  };

  let assignment = assignments.find((a) => a._id === aid);

  if (aid === "new") {
    assignment = {
      _id: "",
      title: "",
      course: String(cid),
      description: "",
      points: 100,
      due: "",
      available: "",
    };
  }
  const [assignmentInfo, setAssignment] = useState<Assignment>(
    assignment ?? {
      _id: "",
      title: "",
      course: String(cid),
      description: "",
      points: 100,
      due: "",
      available: "",
    },
  );

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input
        id="wd-name"
        defaultValue={assignmentInfo.title}
        onChange={(e) =>
          setAssignment({ ...assignmentInfo, title: e.target.value })
        }
      />{" "}
      <br />
      <br />
      <p>Assignment id: {aid}</p>
      <textarea
        id="wd-description"
        defaultValue={assignmentInfo.description}
        onChange={(e) =>
          setAssignment({ ...assignmentInfo, description: e.target.value })
        }
        rows={8}
        className="w-full"
      />{" "}
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input
                type="number"
                id="wd-points"
                defaultValue={assignmentInfo.points}
                onChange={(e) =>
                  setAssignment({
                    ...assignmentInfo,
                    points: Number(e.target.value),
                  })
                }
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input
                type="date"
                id="wd-due-date"
                defaultValue={assignmentInfo.due}
                onChange={(e) =>
                  setAssignment({ ...assignmentInfo, due: e.target.value })
                }
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td>
              <input
                type="date"
                id="wd-available-from"
                defaultValue={assignmentInfo.available}
                onChange={(e) =>
                  setAssignment({
                    ...assignmentInfo,
                    available: e.target.value,
                  })
                }
              />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <button onClick={() => router.push(`/courses/${cid}/assignments`)}>
        Cancel
      </button>
      <button
        onClick={() =>
          handleSave(assignmentInfo)
        }
      >
        Save
      </button>
    </div>
  );
}
