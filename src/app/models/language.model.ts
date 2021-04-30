import { Languages } from './languages.model';

export interface Language {
  name: string;
  matchingLanguages: Array<keyof Languages>;
}
