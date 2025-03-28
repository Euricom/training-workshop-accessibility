export function formatSpacesToDashes(input: string): string {
  return input.toLowerCase().replace(/\s+/g, "-");
}
