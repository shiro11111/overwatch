import { normalize, schema } from 'normalizr';
import { Awards } from '../models/awards';
import { Games } from '../models/games';

const games = new schema.Entity('games', {}, {
  idAttribute: (item: Games) => `${item.played}/${item.won}`
});

const awards = new schema.Entity('awards', {}, {
  idAttribute: (item: Awards) => `${item.cards}/${item.medals}`
});

const quickPlay =  new schema.Entity('quickPlay', {
  games: games,
  awards: awards
}, {
  idAttribute: 'damageDoneAvg'
});

const competitive = new schema.Entity('competitive', {
  games: games,
  awards: awards
}, { idAttribute: 'eliminationsAvg'});

export const completeStats = new schema.Entity('completeStats', {
  quickPlayStats: quickPlay,
  competitiveStats: competitive
}, { idAttribute: 'name' });
