"use client";
import * as client from "../courses/client";
import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import {
  emptyCourse,
  useCoursesStore,
  type Course,
} from "../store/coursesStore";
import { useEnrollmentsStore } from "../store/enrollmentsStore";
import { useAccountContext } from "../account/AccountContext";

export default function Dashboard() {
  const courses = useCoursesStore((state) => state.courses);
  const setCourses = useCoursesStore((state) => state.setCourses);
  const addCourse = useCoursesStore((state) => state.addCourse);
  const updateCourse = useCoursesStore((state) => state.updateCourse);
  const deleteCourse = useCoursesStore((state) => state.deleteCourse);
  const setEnrollments = useEnrollmentsStore((state) => state.setEnrollments);
  const [course, setCourse] = useState<Course>(emptyCourse);
  const [isEnrollments, setIsEnrollments] = useState(false);
  const { currentUser } = useAccountContext();

  useEffect(() => {
    const load = async () => {
      const [enrollmentData, courseData] = await Promise.all([
        client.fetchAllEnrollments(),
        isEnrollments ? client.fetchAllCourses() : client.findMyCourses(),
      ]);

      setEnrollments(enrollmentData);
      setCourses(courseData);
    };

    load();
  }, [currentUser, isEnrollments, setCourses, setEnrollments]);

  const onAddCourse = async () => {
    const newCourse = await client.createCourse(course);
    addCourse(newCourse);
  };

  const onDeleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    deleteCourse(courseId);
  };

  const onUpdateCourse = async () => {
    const saved = await client.updateCourse(course);
    updateCourse(saved);
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h5 className="flex flex-wrap items-center gap-2">
        New Course
        <button
          type="button"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
          id="wd-add-new-course-click"
          onClick={onAddCourse}
        >
          Add
        </button>
        <button
          type="button"
          className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
          id="wd-update-course-click"
          onClick={onUpdateCourse}
        >
          Update
        </button>
        <button
          type="button"
          className="ml-auto rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
          id="wd-enrollments-course-click"
          onClick={() => setIsEnrollments(!isEnrollments)}
        >
          Enrollments
        </button>
      </h5>
      <input
        className="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
        id="wd-course-name"
      />
      <textarea
        className="mb-3 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        rows={3}
        value={course.description}
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
        id="wd-course-description"
      />
      <input
        className="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        placeholder="Course number"
        value={course.number}
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
        id="wd-course-number"
      />
      <label>
        Start date
        <input
          className="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
          type="date"
          value={course.startDate}
          onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
          id="wd-course-startDate"
        />
      </label>
      <hr />
      {isEnrollments ? (
        <h2 id="wd-dashboard-published">All Courses ({courses.length})</h2>
      ) : (
        <h2 id="wd-dashboard-published">My Courses ({courses.length})</h2>
      )}
      <hr />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {isEnrollments
          ? courses.map((c) => (
              <CourseCard
                key={c._id}
                course={c}
                onEdit={() => setCourse(c)}
                onDelete={() => onDeleteCourse(c._id)}
              />
            ))
          : courses.map((c) => (
              <CourseCard
                key={c._id}
                course={c}
                onEdit={() => setCourse(c)}
                onDelete={() => onDeleteCourse(c._id)}
              />
            ))}
      </div>
    </div>
  );
}
