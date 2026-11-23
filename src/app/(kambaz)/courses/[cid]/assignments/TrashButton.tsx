import { FaTrash } from "react-icons/fa";
import { useAssignmentsStore } from "../../../store/assignmentsStore";

export default function TrashButton({
  assignmentId,
}: {
  assignmentId: string;
}) {
  const deleteAssignment = useAssignmentsStore((state) => state.deleteAssignment);
  return (
    <button className="flex items-center gap-2">
      <FaTrash
        className="cursor-pointer text-red-600"
        onClick={() => deleteAssignment(assignmentId)}
        title="Delete module"
      />
    </button>
  );
}