import Link from "next/link";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name" className="block">
        Assignment Name
      </label>
      <input
        id="wd-name"
        className="w-full h-10 border border-gray-400 rounded-sm p-3"
        defaultValue="A1 - ENV + HTML"
      />
      <br />
      <br />
      <textarea
        id="wd-description"
        className="w-full h-10 border border-gray-400 rounded-sm p-3"
      >
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table className="ml-5">
        <tbody>
          <tr>
            <td align="right" valign="top" className="p-3">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td className="py-3">
              <input
                id="wd-points"
                className="w-full h-10 border border-gray-400 rounded-sm p-3"
                defaultValue={100}
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top" className="p-3">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td className="py-3">
              <select
                id="wd-group"
                className="w-full h-10 border border-gray-400 rounded-sm p-3"
                defaultValue="assignments"
              >
                <option value="assignments">ASSIGNMENTS</option>
                <option value="quizzes">QUIZZES</option>
                <option value="exams">EXAMS</option>
                <option value="projects">PROJECT</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top" className="p-3">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td className="py-3">
              <select
                id="wd-display-grade-as"
                className="w-full h-10 border border-gray-400 rounded-sm p-3"
                defaultValue="percentage"
              >
                <option value="percentage">Percentage</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top" className="p-3">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td className="w-full h-10 border border-gray-400 rounded-sm p-3">
              <select
                id="wd-submission-type"
                className="w-full h-10 border border-gray-400 rounded-sm p-3"
                defaultValue="online"
              >
                <option value="online">Online</option>
              </select>
              <br />
              <br />
              <label className="block font-bold">Online Entry Options</label>
              <input
                type="checkbox"
                name="check-online-entry-options"
                id="wd-text-entry"
              />
              <label htmlFor="wd-text-entry">Text Entry</label>
              <br />
              <input
                type="checkbox"
                name="check-online-entry-options"
                id="wd-website-url"
              />
              <label htmlFor="wd-website-url">Website URL</label>
              <br />
              <input
                type="checkbox"
                name="check-online-entry-options"
                id="wd-media-recordings"
              />
              <label htmlFor="wd-media-recordings">Media Recordings</label>
              <br />
              <input
                type="checkbox"
                name="check-online-entry-options"
                id="wd-student-annotation"
              />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
              <br />
              <input
                type="checkbox"
                name="check-online-entry-options"
                id="wd-file-upload"
              />
              <label htmlFor="wd-file-upload">File Uploads</label>
            </td>
          </tr>
          <div className="p-2"></div>
          <tr>
            <td align="right" valign="top" className="p-3">
              <label>Assign</label>
            </td>
            <td className="w-full h-10 border border-gray-400 rounded-sm p-3">
              <div>
                <label className="block font-bold " htmlFor="wd-assign-to">
                  Assign to
                </label>
                <input
                  id="wd-assign-to"
                  type="text"
                  className="w-full h-10 border border-gray-400 rounded-sm p-3"
                />
              </div>
              <br />
              <div>
                <label className="block font-bold" htmlFor="wd-due-date">
                  Due
                </label>
                <input
                  id="wd-due-date"
                  type="date"
                  className="w-full h-10 border border-gray-400 rounded-sm p-3"
                />
              </div>
              <br />
              <div className="flex">
                <div className="pr-2">
                  <label
                    className="block font-bold"
                    htmlFor="wd-available-from"
                  >
                    Available from
                  </label>
                  <input
                    id="wd-available-from"
                    type="date"
                    className="w-full h-10 border border-gray-400 rounded-sm p-3"
                  />
                </div>
                <div className="pl-2">
                  <label
                    className="block font-bold"
                    htmlFor="wd-available-until"
                  >
                    Until
                  </label>
                  <input
                    id="wd-available-until"
                    type="date"
                    className="w-full h-10 border border-gray-400 rounded-sm p-3"
                  />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <label htmlFor="wd-ai-editor-notes" className="block">
        Sample notes
      </label>
      <textarea
        id="wd-ai-editor-notes"
        className="w-full h-10 border border-gray-400 rounded-sm p-3"
      />
      <br />
      <Link
        href="/courses/1234/assignments"
        id="wd-cancel"
        className="bg-gray-200 text-gray-700 rounded border border-gray-400 p-2 px-3"
      >
        Cancel
      </Link>{" "}
      <Link
        href="/courses/1234/assignments"
        id="wd-save"
        className="bg-red-700 text-gray-200 rounded border border-red-800 p-2 px-4"
      >
        Save
      </Link>
    </div>
  );
}
