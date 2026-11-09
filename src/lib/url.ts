// Ujednolica ścieżkę (dev/build, z .html lub bez) do postaci: "/", "/kontakt".
export function cleanPath(pathname: string): string {
  let p = pathname.replace(/\.html$/, "").replace(/\/index$/, "/");
  if (p.length > 1) p = p.replace(/\/$/, "");
  return p || "/";
}
