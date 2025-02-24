import {ReactNode} from "react";

export interface IInhumado {
    id: number; //ahora es string(???)
    apellido: string;
    nombre: string;
    fnac: string; // Fecha de nacimiento
    ffal: string; // Fecha de fallecimiento
    valle: string;
    sector: string;
    manzana: number;
    parcela: number;
    simbolo: number;
    ncliente: number;
  }
  
export interface ILoginProps {
    email: string;
    password: string;
}

export interface ILoginPropsErrors {
    email?: string;
    password?: string;
}

export interface IUserSession {
    token: string;
}