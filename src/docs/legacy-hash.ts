// La web usaba antes rutas con hash (#/r-select). Los enlaces antiguos que
// circulen por ahí se redirigen a la ruta limpia equivalente.
export function legacyHashPath(hash: string): string | null {
  return hash.startsWith('#/') ? hash.slice(1) : null
}
