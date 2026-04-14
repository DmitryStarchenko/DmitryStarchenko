import type { IEducation } from "../types";
import { school } from "./constants";

const certificateJs = "https://app.rs.school/certificate/tk58l9nn";
const certificateReact = "https://app.rs.school/certificate/h3exhhhe";
const certificateNode = "https://app.rs.school/certificate/suvpdoc2";
const certificateReactAston = "../../assets/certificate/react aston.pdf";

export const dataReactAston: IEducation = {
  school: "Aston",
  years: "03.2026 - 04.2026",
  course: "React",
  urlCertificate: certificateReactAston,
};

export const dataNode: IEducation = {
  school: school,
  years: "10.2025 - 12.2025",
  course: "Node JS",
  urlCertificate: certificateNode,
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
