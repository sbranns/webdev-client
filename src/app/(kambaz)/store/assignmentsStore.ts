"use client";

import { create } from "zustand";
import assignmentsJson from "../database/assignments.json";

export type Assignment = {
    _id: string,
    title: string,
    course: string,
    description: string,
    points: number,
    due: string,
    available: string
};

const emptyAssignment: Assignment = {
    _id: "A101",
    title: "A1",
    course: "RS101",
    description: "Analyze the thermodynamics of a rocket combustion chamber and nozzle. Submit a short report covering chamber pressure, expansion ratio, and predicted specific impulse.",
    points: 100,
    due: "2024-05-13",
    available: "2024-05-06"
};

type AssignmentsStore = {
  assignments: Assignment[];
  addAssignment: (assignment: Assignment) => void;
  deleteAssignment: (assignmentId: string) => void;
  updateAssignment: (assignment: Assignment) => void;
  editAssignment: (assignmentId: string) => void;
};

export const useAssignmentsStore = create<AssignmentsStore>((set) => ({
  assignments: assignmentsJson as Assignment[],
  addAssignment: (assignment) =>
    set((state) => ({
      assignments: [
        ...state.assignments,
        { ...assignment, _id: crypto.randomUUID() }
      ],
    })),
  deleteAssignment: (assignmentId) =>
    set((state) => ({
      assignments: state.assignments.filter((a) => a._id !== assignmentId),
    })),
  updateAssignment: (assignment) =>
    set((state) => ({
      assignments: state.assignments.map((a) => (a._id === assignment._id ? assignment : a)),
    })),
  editAssignment: (assignmentId) =>
    set((state) => ({
      assignments: state.assignments.map((a) =>
        a._id === assignmentId ? { ...a, editing: true } : a,
      ),
    })),
}));