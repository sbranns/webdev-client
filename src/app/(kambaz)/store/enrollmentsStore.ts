"use client";

import { create } from "zustand";
import enrollmentsJson from "../database/enrollments.json";

export type Enrollment = {
    "_id": string,
    "user": string,
    "course": string
};

type EnrollmentsStore = {
  enrollments: Enrollment[];
  setEnrollments: (enrollments: Enrollment[]) => void;
  enroll: (enrollment: Enrollment) => void;
  unenroll: (enrollmentId: string) => void;
};

export const useEnrollmentsStore = create<EnrollmentsStore>((set) => ({
	enrollments: enrollmentsJson as Enrollment[],

  setEnrollments: (enrollments) => set({ enrollments }),

	enroll: (enrollment) =>
		set((state) => ({
			enrollments: [...state.enrollments, enrollment],
		})),

	unenroll: (enrollmentId) =>
		set((state) => ({
			enrollments: state.enrollments.filter(
				(e) => e._id !== enrollmentId
			),
		})),
}));