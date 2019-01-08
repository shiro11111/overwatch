import { normalize, schema } from 'normalizr';

const games = new schema.Entity('games');

const awards = new schema.Entity('awards');

const quickPlay =  new schema.Entity('quickPlay', {
  games: games,
  awards: awards
}, {
  idAttribute: 'damageDoneAvg'
});

const competitive = new schema.Entity('competitive', {
  games: games,
  awards: awards
});

export const completeStats = new schema.Entity('completeStats', {
  quickPlayStats: quickPlay,
  competitiveStats: competitive
}, { idAttribute: 'name' });
