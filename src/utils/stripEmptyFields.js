export function stripEmptyFields (object) {
  const objectClone = Object.assign({}, object)

  for (const key in objectClone) {
    if (!objectClone[key]) delete objectClone[key]
  }

  return objectClone
}
