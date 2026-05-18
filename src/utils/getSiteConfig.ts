const configs = import.meta.glob('../data/sites/*/site-config.json', { eager: true });

export function getSiteConfig(hostname: string) {
  const slug = hostname.split('.')[0].toLowerCase().replace(/[^a-z0-9-]/g, '');
  const key = `../data/sites/${slug}/site-config.json`;
  return (configs[key] as any)?.default ?? null;
}
