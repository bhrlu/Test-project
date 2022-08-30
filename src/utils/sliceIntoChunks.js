export function sliceIntoChunks (array, chunkSize) {
  const resualt = []
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize)
    resualt.push(chunk)
  }
  return resualt
}
