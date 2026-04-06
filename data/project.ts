export type Category = "Website" | "Installation";
export type Status = "Completed" | "In Progress";

export type Project = {
  title: string;
  description: string;
  status: Status;
  category: Category;
  tags: string[];
  year: string;
};

export const Project_Categories: { value: Category; label: string }[] = [
  { value: "Website", label: "Website" },
  { value: "Installation", label: "Installation" },
];
