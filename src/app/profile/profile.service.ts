import { Injectable } from '@angular/core';
import { CompleteStats } from '../models/completeStats';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { normalize } from 'normalizr';
import { completeStats } from '../schemas/schemas';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  loadInfo(platform: string, region: string, battletag: string): Observable<CompleteStats> {
    const url = `https://ow-api.com/v1/stats/${platform}/${region}/${battletag}/complete`;

    const dataMock: CompleteStats = {
      "icon": "https://blzgdapipro-a.akamaihd.net/game/unlocks/0x025000000000114C.png",
      "name": "cats",
      "level": 100,
      "levelIcon": "https://blzgdapipro-a.akamaihd.net/game/playerlevelrewards/0x0250000000000951_Border.png",
      "prestige": 2,
      "prestigeIcon": "https://blzgdapipro-a.akamaihd.net/game/playerlevelrewards/0x0250000000000951_Rank.png",
      "rating": "1896",
      "ratingIcon": "https://blzgdapipro-a.akamaihd.net/game/rank-icons/season-2/rank-2.png",
      "gamesWon": 734,
      "quickPlayStats": {
        "eliminationsAvg": 11.77,
        "damageDoneAvg": 5358,
        "deathsAvg": 5.88,
        "finalBlowsAvg": 5.6,
        "healingDoneAvg": 1100,
        "objectiveKillsAvg": 4.29,
        "objectiveTimeAvg": "00:32",
        "soloKillsAvg": 1.67,
        "games": {
          "played": 0,
          "won": 716
        },
        "awards": {
          "cards": 427,
          "medals": 3487,
          "medalsBronze": 1207,
          "medalsSilver": 1186,
          "medalsGold": 1094
        }
      },
      "competitiveStats": {
        "eliminationsAvg": 22.25,
        "damageDoneAvg": 12056,
        "deathsAvg": 9.76,
        "finalBlowsAvg": 11.76,
        "healingDoneAvg": 2392,
        "objectiveKillsAvg": 9.82,
        "objectiveTimeAvg": "01:10",
        "soloKillsAvg": 2.53,
        "games": {
          "played": 39,
          "won": 18
        },
        "awards": {
          "cards": 17,
          "medals": 108,
          "medalsBronze": 40,
          "medalsSilver": 36,
          "medalsGold": 32
        }
      }
    }

    of(dataMock).subscribe(data => {
      const normalizedData = normalize(data, completeStats);
      console.log(normalizedData);
    });

    return this.http.get(url);
  }

  constructor(private http: HttpClient) {
  }
}
