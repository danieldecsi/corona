export function getEnvironmentVariable(name: string, defaultValue?: string): string {
  const value = process.env[name]

  if (value === undefined && defaultValue === undefined) {
    throw new Error(`Environment variable ${name} is not set.`)
  }

  if (value) {
    return value
  }

  return defaultValue
}
