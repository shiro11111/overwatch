import { QuickPlay } from './quickPlay';
import { Competitive } from './competitive';

export interface CompleteStats {
  icon?: string;
  name?: string;
  level?: number;
  levelIcon?: string;
  prestige?: number;
  prestigeIcon?: string;
  rating?: string;
  ratingIcon?: string;
  gamesWon?: number;
  quickPlayStats?: QuickPlay;
  competitiveStats?: Competitive;
}

