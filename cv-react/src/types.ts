export interface IEducation {
  school: string;
  years: string;
  course: string;
  urlCertificate: string | undefined;
}

export interface IProject {
  dataECommerce: IData;
  dataPutman: IData;
  dataPokemons: IData;
}

export interface IData {
  name: string;
  url: string;
}
