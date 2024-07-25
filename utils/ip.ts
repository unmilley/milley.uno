export default async function getIp(): Promise<string | undefined> {
  return await (await fetch('https://api.ipify.org/', { method: 'get' })).text()
}
