import { Games } from './games';
import { Awards } from './awards';

export interface QuickPlay {
  eliminationsAvg?: number;
  damageDoneAvg?: number;
  deathsAvg?: number;
  finalBlowsAvg?: number;
  healingDoneAvg?: number;
  objectiveKillsAvg?: number;
  objectiveTimeAvg?: string;
  soloKillsAvg?: number;
  games?: Games;
  awards?: Awards;
}
