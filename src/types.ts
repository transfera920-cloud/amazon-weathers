export interface ChapterSection {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  readTime: string;
  tags: string[];
}

export interface WeatherTool {
  name: string;
  provider: string;
  coreQuestion: string;
  pros: string;
  limitation: string;
  recommendedTiming: string;
}

export interface DangerWeatherItem {
  id: string;
  name: string;
  type: string;
  dangerLevel: 'high' | 'critical' | 'moderate';
  causes: string[];
  hazards: string[];
  fieldSignals: string[];
  actions: string[];
}

export interface DecisionOption {
  type: 'go' | 'adjust' | 'turnback' | 'cancel';
  title: string;
  badge: string;
  description: string;
  triggers: string[];
  mindset: string;
}
