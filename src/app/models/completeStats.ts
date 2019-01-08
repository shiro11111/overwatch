import { QuickPlay } from './quickPlay';
import { Competitive } from './competitive';

export interface CompleteStats {
  icon?: string;
  name?: string;
  level?: number;
  quickPlayStats?: QuickPlay;
  levelIcon?: string;
  prestige?: number;
  prestigeIcon?: string;
  rating?: string;
  ratingIcon?: string;
  gamesWon?: number;
  competitiveStats?: Competitive;
}



