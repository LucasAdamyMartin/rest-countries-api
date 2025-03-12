import { useQuery } from '@tanstack/react-query';
import { fetchCountries } from '../services/api';
import { Country as CountryType } from '../types/Country';

export const useCountries = () => {
  return useQuery<CountryType[]>({
    queryKey: ['countries'],
    queryFn: fetchCountries,
  });
};
