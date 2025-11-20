import type { IEducation } from "../types";
import { school } from "./constants";

const certificateJs = "https://app.rs.school/certificate/tk58l9nn";
const certificateReact = "https://app.rs.school/certificate/h3exhhhe";

export const dataNode: IEducation = {
  school: school,
  years: "10.2025 - to date",
  course: "Node JS",
  urlCertificate: undefined,
};

export const dataReact: IEducation = {
  school: school,
  years: "07.2025 - 09.2025",
  course: "React",
  urlCertificate: certificateReact,
};

export const dataJS: IEducation = {
  school: school,
  years: "11.2024 - 07.2025",
  course: "JavaScript/Front-end",
  urlCertificate: certificateJs,
};
