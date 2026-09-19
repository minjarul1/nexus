export interface Finding {
  slug: string;
  title: string;
  category: string;
  platform?: string;  // 'macOS', 'Windows', 'Cross-platform', etc.
  tags: string[];
  date: string;
  importance: string;
  url: string;
}

const findings: Finding[] = [
  {
    slug: 'openai-gpt4o-mini',
    title: 'OpenAI GPT-4o Mini',
    category: 'AI',
    platform: 'Cross-platform',
    tags: ['ai', 'openai', 'multimodal'],
    date: '2026-09-16',
    importance: 'high',
    url: 'https://openai.com/index/gpt-4o-mini-advancing-cost-efficient-intelligence/'
  },
  {
    slug: 'local-ai-ollama',
    title: 'Local AI with Ollama',
    category: 'AI',
    platform: 'Cross-platform',
    tags: ['ai', 'local'],
    date: '2026-09-15',
    importance: 'medium',
    url: ''
  },
  {
    slug: 'filesync-app',
    title: 'FileSync - File Syncing Service',
    category: 'Tools',
    platform: 'Cross-platform',
    tags: ['filesync', 'cloud-storage', 'sync-tools'],
    date: '2026-09-19',
    importance: 'low',
    url: 'https://filesync.app/'
  },
  {
    slug: 'get-office-365',
    title: 'Get Office 365 - Simple Installation Script',
    category: 'Tools',
    platform: 'Windows',
    tags: ['office365', 'windows', 'powershell', 'education'],
    date: '2026-09-19',
    importance: 'medium',
    url: 'https://github.com/NaeemBolchhi/Get-Office-365'
  },
  {
    slug: 'ext-torrents',
    title: 'EXT.to - Torrent Search Engine',
    category: 'Tools',
    platform: 'Cross-platform',
    tags: ['torrent', 'search', 'downloads'],
    date: '2026-09-19',
    importance: 'low',
    url: 'https://ext.to/'
  },
  {
    slug: 'pearcleaner',
    title: 'Pearcleaner - macOS App Cleaner',
    category: 'Tools',
    platform: 'macOS',
    tags: ['macOS', 'cleaner', 'uninstaller', 'swift'],
    date: '2026-09-19',
    importance: 'medium',
    url: 'https://github.com/alienator88/Pearcleaner'
  },
  {
    slug: 'tasteskill',
    title: 'Taste Skill - Anti-Slop Frontend Framework',
    category: 'Tools',
    platform: 'Cross-platform',
    tags: ['tasteskill', 'anti-slop', 'frontend', 'cursor', 'claude-code'],
    date: '2026-09-19',
    importance: 'high',
    url: 'https://tasteskill.dev'
  }
];

export function getFindings(): Finding[] {
  return findings.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getFindingsByCategory(category: string): Finding[] {
  return findings.filter(f => f.category === category);
}

export function getFindingsByPlatform(platform: string): Finding[] {
  return findings.filter(f => f.platform === platform);
}

export function getFindingBySlug(slug: string): Finding | undefined {
  return findings.find(f => f.slug === slug);
}

// Get all unique categories
export function getCategories(): string[] {
  return [...new Set(findings.map(f => f.category))];
}

// Get all unique platforms
export function getPlatforms(): string[] {
  return [...new Set(findings.map(f => f.platform).filter(Boolean))];
}
