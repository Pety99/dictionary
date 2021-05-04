import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import config from '../../env';
import { timeout } from 'rxjs/operators';
import { SynonymResponse } from '../models/synonymResponse.model';
@Injectable({
  providedIn: 'root',
})
export class SynonymService {
  constructor(private http: HttpClient) {}

  async getSynonyms(word: string) {
    const url = `https://wordsapiv1.p.rapidapi.com/words/${word}/synonyms`;
    const headers = {
      'x-rapidapi-key': config.WORDS_API_KEY,
      'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
    };

    const requestOptions = {
      headers: new HttpHeaders(headers),
    };

    const response = await this.http
      .get<SynonymResponse>(url, requestOptions)
      .pipe(timeout(1000))
      .toPromise()
      // Return no synonyms in case of an error
      .catch((err) => ({
        synonyms: undefined,
      }));

    // Return the array of synonyms
    if (response.synonyms && response.synonyms.length > 0) {
      return response.synonyms;
    }
    // If the length of the synonyms are 0 the error should be displated as well
    return undefined;
  }
}
