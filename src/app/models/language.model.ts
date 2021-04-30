import { Languages } from './languages.model';

export interface Language {
  key: string;
  name: string;
  matchingLanguages: Array<keyof Languages>;
}
