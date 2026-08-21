import { BrainCircuit, HeartHandshake, Sparkles, Users } from 'lucide-react';
import type { FeatureItem } from '@/types/content';

const iconMap: Record<FeatureItem['icon'], typeof Users> = {
  climate: Users,
  emotional: HeartHandshake,
  research: Sparkles,
  executive: BrainCircuit,
};

export default function FeatureIcon({ icon, className }: { icon: FeatureItem['icon']; className?: string }) {
  const Icon = iconMap[icon];
  return <Icon className={className} aria-hidden="true" />;
}
