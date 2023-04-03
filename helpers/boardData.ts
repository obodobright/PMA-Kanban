import { boardProps } from "./types";

export const boardData: boardProps[] = [
  {
    id: 1,
    tag: "todo",
    tagColor: "#518c9d",
    total: 3,
    items: [
      { id: 1, title: "Build UI for onboarding flow", description: "substacks too available" },
      { id: 2, title: "Construct UI for onboarding flow", description: "substacks too available" },
      { id: 3, title: "Save UI for onboarding flow", description: "substacks too available" },
    ],
  },
  {
    id: 2,
    tag: "doing",
    tagColor: "#3e396b",
    total: 7,
    items: [
      { id: 1, title: "Build UI for onboarding flow", description: "substacks too available" },
      { id: 2, title: "Build UI for onboarding flow", description: "substacks too available" },
    ],
  },
  {
    id: 3,
    tag: "done",
    tagColor: "#74c8ad",
    total: 3,
    items: [
      { id: 3, title: "Build UI for onboarding flow", description: "substacks too available" },
    ],
  },
];
