/**
 * Minimal frontmatter parser: splits a leading `---` block of flat
 * `key: value` pairs from the Markdown body below it. Deliberately not
 * using gray-matter here since its YAML engine expects a Node Buffer and
 * breaks in the browser without a polyfill — our post frontmatter is
 * simple enough not to need full YAML support.
 */
export function parseFrontmatter(raw: string): { data: Record<string, string>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    return { data: {}, content: raw.trim() };
  }

  const [, frontmatterBlock, body] = match;
  const data: Record<string, string> = {};

  for (const line of frontmatterBlock.split(/\r?\n/)) {
    const lineMatch = line.match(/^([^:]+):\s*(.*)$/);
    if (!lineMatch) continue;
    const [, key, value] = lineMatch;
    data[key.trim()] = value.trim().replace(/^["'](.*)["']$/, '$1');
  }

  return { data, content: body.trim() };
}
