"use client";

import { create } from "zustand";
import enrollmentsJson from "../database/enrollments.json";
import usersJson from "../database/users.json"
import { emptyUser } from "../account/AccountContext";

export type Enrollment = {
    "_id": string,
    "user": string,
    "course": string
};

type EnrollmentsStore = {
  enrollments: Enrollment[];
  enroll: (enrollment: Enrollment) => void;
  unenroll: (enrollmentId: string) => void;
};

export const useEnrollmentsStore = create<EnrollmentsStore>((set) => ({
  enrollments: enrollmentsJson as Enrollment[],
  enroll: (enrollment) =>
    set((state) => ({
      enrollments: [
        ...state.enrollments,
        { ...enrollment, _id: crypto.randomUUID() }
      ],
    })),
  unenroll: (enrollmentId) =>
    set((state) => ({
      enrollments: state.enrollments.filter((e) => e._id !== enrollmentId),
    })),
}));