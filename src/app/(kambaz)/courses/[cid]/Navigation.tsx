"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../kambaz.css";

const LINKS = [
  { segment: "home", id: "wd-course-home-link", label: "Home" },
  { segment: "modules", id: "wd-course-modules-link", label: "Modules" },
  { segment: "piazza", id: "wd-course-piazza-link", label: "Piazza" },
  { segment: "zoom", id: "wd-course-zoom-link", label: "Zoom" },
  { segment: "assignments", id: "wd-course-assignments-link", label: "Assignments" },
  { segment: "quizzes", id: "wd-course-quizzes-link", label: "Quizzes" },
  { segment: "grades", id: "wd-course-grades-link", label: "Grades" },
  { segment: "people/table", id: "wd-course-people-link", label: "People" },
  { segment: "announcements", id: "wd-course-announcements-link", label: "Announcements" },
  { segment: "home", id: "wd-course-ai-link", label: "Sample" },
] as const;

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname() ?? "";
  const basePath = `/courses/${cid}`;
  return (
    <div id="wd-courses-navigation" className="wd list-group rounded-none text-lg">
      {LINKS.map((link) => {
        const href = `${basePath}/${link.segment}`;
        const active =
          link.id !== "wd-course-ai-link" &&
          (pathname === href ||
            (link.segment === "assignments" && pathname.startsWith(`${href}/`)));
        return (
          <Link
            key={link.id}
            href={href}
            id={link.id}
            className={
              active
                ? "list-group-item active border-0"
                : "list-group-item border-0 text-red-600"
            }
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}