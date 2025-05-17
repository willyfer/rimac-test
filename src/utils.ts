export function calculateAge (fechaNacimientoStr: string) {
  const [dia, mes, anio] = fechaNacimientoStr.split('-')
  const nacimiento = new Date(`${anio}-${mes}-${dia}`) // convertir a formato YYYY-MM-DD

  const hoy = new Date()
  let edad = hoy.getFullYear() - nacimiento.getFullYear()
  const mesActual = hoy.getMonth()
  const diaActual = hoy.getDate()

  // Ajustar si aún no ha cumplido años este año
  if (
    mesActual < nacimiento.getMonth() ||
    (mesActual === nacimiento.getMonth() && diaActual < nacimiento.getDate())
  ) {
    edad--
  }

  return edad
}
