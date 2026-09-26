import Module from "./Module";
import Lesson from "./Lesson";

export default function Modules() {
  return (
    <div>
      <button>Collapse All</button> <button>View Progress</button>{" "}
      <select defaultValue="publish-all">
        <option value="publish-all">Publish All</option>
      </select>{" "}
      <button>+ Module</button>
      <ul id="wd-modules">
        <Module title="Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">Introduction to the course</li>
            <li className="wd-content-item">Learn what is Web Development</li>
          </Lesson>
          <Lesson title="READING">
            <li className="wd-content-item">
              Full Stack Developer - Chapter 1 - Introduction
            </li>
            <li className="wd-content-item">
              Full Stack Developer - Chapter 2 - Creating User Interfaces
            </li>
          </Lesson>
          <Lesson title="SLIDES">
            <li className="wd-content-item">Introduction to Web Development</li>
            <li className="wd-content-item">
              Creating an HTTP server with Node.js
            </li>
            <li className="wd-content-item">Creating a React Application</li>
          </Lesson>
        </Module>
        <Module title="Week 2">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">Create reusable React components</li>
            <li className="wd-content-item">Use props and state effectively</li>
          </Lesson>
          <Lesson title="READING">
            <li className="wd-content-item">
              Full Stack Developer - Chapter 3 - React Fundamentals
            </li>
            <li className="wd-content-item">
              Full Stack Developer - Chapter 4 - Component Design
            </li>
          </Lesson>
          <Lesson title="SLIDES">
            <li className="wd-content-item">Component architecture</li>
            <li className="wd-content-item">Props, state, and events</li>
            <li className="wd-content-item">UI composition patterns</li>
          </Lesson>
        </Module>
        <Module title="Week 3">
          <Lesson title="LEARNING OBJECTIVES">
            <li className="wd-content-item">Build server-side APIs</li>
            <li className="wd-content-item">Connect front-end and back-end systems</li>
          </Lesson>
          <Lesson title="READING">
            <li className="wd-content-item">
              Full Stack Developer - Chapter 5 - Node.js Servers
            </li>
            <li className="wd-content-item">
              Full Stack Developer - Chapter 6 - REST API Basics
            </li>
          </Lesson>
          <Lesson title="SLIDES">
            <li className="wd-content-item">Express.js overview</li>
            <li className="wd-content-item">Routing and middleware</li>
            <li className="wd-content-item">Data flow between client and server</li>
          </Lesson>
        </Module>
      </ul>
    </div>
  );
}