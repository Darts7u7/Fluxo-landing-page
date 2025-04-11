import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Fluxo - Conoce Nuestro Equipo y Visión",
  description: "Descubre la historia de Fluxo, nuestra visión, equipo y valores que nos impulsan a transformar la gestión empresarial en Latinoamérica.",
};

export default function SobreNosotrosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
} 