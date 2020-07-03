async function etag(entity: ArrayBuffer|Response): Promise<string> {
  const buffer = (entity instanceof Response ? await entity.clone().arrayBuffer() : entity)
  const digestBuffer = await crypto.subtle.digest({
    name: "SHA-256"
  }, buffer)
  const digestArray = Array.from(new Uint8Array(digestBuffer))
  const digestHex = digestArray.map(b => b.toString(16).padStart(2, '0')).join('')
  return digestHex
}

