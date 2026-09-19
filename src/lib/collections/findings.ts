export interface Finding {
  slug: string;
  title: string;
  category: string;
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
    tags: ['ai', 'openai', 'multimodal'],
    date: '2026-09-16',
    importance: 'high',
    url: 'https://openai.com/index/gpt-4o-mini-advancing-cost-efficient-intelligence/'
  },
  {
    slug: 'local-ai-ollama',
    title: 'Local AI with Ollama',
    category: 'AI',
    tags: ['ai', 'local'],
    date: '2026-09-15',
    importance: 'medium',
    url: ''
  },
  {
    slug: 'filesync-app',
    title: 'FileSync - File Syncing Service',
    category: 'Tools',
    tags: ['filesync', 'cloud-storage', 'sync-tools'],
    date: '2026-09-19',
    importance: 'low',
    url: 'https://filesync.app/'
  },
  {
    slug: 'get-office-365',
    title: 'Get Office 365 - Simple Installation Script',
    category: 'Tools',
    tags: ['office365', 'windows', 'powershell', 'education'],
    date: '2026-09-19',
    importance: 'medium',
    url: 'https://github.com/NaeemBolchhi/Get-Office-365'
  },
  {
    slug: 'ext-torrents',
    title: 'EXT.to - Torrent Search Engine',
    category: 'Tools',
    tags: ['torrent', 'search', 'downloads'],
    date: '2026-09-19',
    importance: 'low',
    url: 'https://ext.to/'
  },
  {
    slug: 'pearcleaner',
    title: 'Pearcleaner - macOS App Cleaner',
    category: 'Tools',
    tags: ['macOS', 'cleaner', 'uninstaller', 'swift'],
    date: '2026-09-19',
    importance: 'medium',
    url: 'https://github.com/alienator88/Pearcleaner'
  }
];

export function getFindings(): Finding[] {
  return findings.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getFindingBySlug(slug: string): Finding | undefined {
  return findings.find(f => f.slug === slug);
}
