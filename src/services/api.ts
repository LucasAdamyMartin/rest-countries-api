import { Country as CountryType } from '../types/Country';

export const fetchCountries = async (): Promise<CountryType[]> => {
  const res = await fetch('/data.json');
  if (!res.ok) throw new Error('Erreur réseau');
  return res.json();
};
