export type Data = {
  name: string;
  url: string;
  description: string;
  stack: string[];
};

type Project = {
  [key: string]: Data;
};

export const dataProjects: Project = {
  putman: {
    name: "Putman",
    url: "https://putman.vercel.app/",
    description: "projectPutmanDescription",
    stack: [
      "Next.js",
      "TypeScript",
      "MUI",
      "Supabase",
      "Jotai",
      "Vitest",
      "next-intl",
      "Zod",
      "Axios",
    ],
  },
  eCommerce: {
    name: "eCommerce application shop",
    url: "https://ecommerce-application-lumw.onrender.com/",
    description: "projectECommerceDescription",
    stack: [
      "React",
      "TypeScript",
      "Commercetools",
      "React Router",
      "NestJS",
      "MUI",
      "Vite",
      "Vitest",
    ],
  },
};
