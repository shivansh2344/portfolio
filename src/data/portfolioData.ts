/**
 * PORTFOLIO DATA REGISTRY & ARCHITECTURE SCHEMAS
 * Shivansh Garg — Systems Artisan & Visual Engineer
 */

export interface TelemetryMetric {
  label: string;
  value: string;
}

export interface WorkNode {
  period: string;
  company: string;
  role: string;
  impact: string[];
}

export interface SkillGroup {
  category: string;
  tools: string[];
}

export interface AchievementBadge {
  rank: 'LEGENDARY' | 'EPIC' | 'RARE' | 'COMMON';
  title: string;
  desc: string;
}

// ============================================================================
// 1. IDENTITY TELEMETRY (PANEL 01)
// ============================================================================
export const identityTelemetry: TelemetryMetric[] = [
  { label: "TECH PROFICIENCY", value: "EXPERT" },
  { label: "SYSTEMS CAPSETS", value: "7" },
  { label: "XP INDEX", value: "2400" },
  { label: "COMMUNITY NODES", value: "50+" }
];

// ============================================================================
// 2. HISTORICAL COMPUTE NODES (PANEL 02)
// ============================================================================
export const workHistory: WorkNode[] = [
  {
    period: "DEC 2024 - PRESENT",
    company: "DEVNEX TECHNOLOGIES",
    role: "ENGINEER",
    impact: [
      "ENGINEERED multi-threaded Python processing pipelines (FastAPI/Docker/OpenCV/FFMPEG), optimizing throughput multipliers by 8x."
    ]
  },
  {
    period: "MAR 2024 - AUG 2024",
    company: "URUMI.AI",
    role: "ARCHITECT",
    impact: [
      "ARCHITECTED standard staging environments.",
      "ENGINEERED metadata extraction pipelines using Gemini, capturing a 60% reduction in workflow delays.",
      "OPTIMIZED GenAI model endpoints."
    ]
  },
  {
    period: "JUN 2023 - AUG 2023",
    company: "ROZANA.IN",
    role: "BUILDER",
    impact: [
      "BUILT automated inventory replenishment tools using React and Django, capturing an 80% reduction in operational friction metrics."
    ]
  }
];

// ============================================================================
// 3. SKILL DECK VECTOR MATRICES (PANEL 03)
// ============================================================================
export const skillDeck: SkillGroup[] = [
  {
    category: "LANGUAGES & FRAMEWORKS",
    tools: ["Python (Expert)", "C++", "SQL", "TS/JS", "FastAPI", "Django", "React", "Tailwind CSS"]
  },
  {
    category: "ARTIFICIAL INTELLIGENCE",
    tools: ["Generative AI", "LangChain", "RAG architectures", "LLM Orchestration", "PyTorch", "Hugging Face"]
  },
  {
    category: "DEVOPS & SYSTEMS",
    tools: ["Docker", "Kubernetes", "Terraform", "Nginx", "Linux", "Git"]
  }
];

// ============================================================================
// 4. ACHIEVEMENTS & LEDGER BADGES (PANEL 04)
// ============================================================================
export const achievements: AchievementBadge[] = [
  {
    rank: "COMMON",
    title: "GATE DA // 2026",
    desc: "Actively Preparing. Baseline AIR target: 3000."
  },
  {
    rank: "RARE",
    title: "500+ PROBLEMS SOLVED",
    desc: "Global algorithmic tracking metrics on LeetCode."
  },
  {
    rank: "LEGENDARY",
    title: "FOUNDING NODE // MATRIX JEC",
    desc: "Architected infrastructure to scale 50+ engineers."
  }
];
