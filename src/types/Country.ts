type Currency = {
    code: string;
    name: string;
    symbol: string;
  };
  
  type Language = {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  };
  
  type Region = {
    acronym: string;
    name: string;
    otherNames: string[];
  };
  
  type Flag = {
    svg: string;
    png: string;
  };
  
  export type Country = {
    name: string;
    topLevelDomain: string[];
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: string[];
    capital: string;
    altSpellings: string[];
    subregion: string;
    region: string;
    population: number;
    latlng: [number, number];  // Latitude, Longitude
    demonym: string;
    area: number;
    gini: number;
    timezones: string[];
    borders: string[];
    nativeName: string;
    numericCode: string;
    flags: Flag;
    currencies: Currency[];
    languages: Language[];
    translations: Record<string, string>;
    flag: string;
    regionalBlocs: Region[];
    cioc: string;
    independent: boolean;
  };
  