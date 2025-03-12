import { MoonIcon as MoonSolid } from '@heroicons/react/24/solid';
import { MagnifyingGlassIcon, MoonIcon as MoonOutline } from '@heroicons/react/24/outline';
import './App.css'
import { useEffect, useState } from 'react';
import { Filter } from './components/Filter';
import { useQuery } from '@tanstack/react-query';
import { Country } from './types/Country';

const fetchCountries = async () : Promise<Country[]> => {
  const res = await fetch("/data.json");
  if (!res.ok) throw new Error("Erreur réseau");
  return res.json()
}

export function App() {
  const [darkMode, setDarkMode] = useState(
    document.documentElement.getAttribute("data-theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  

  const { data, isLoading, error } = useQuery<Country[]>({
    queryKey: ["countries"],
    queryFn: fetchCountries,
  });

  if (isLoading) return <p>Chargement...</p>;

  if (error) return <p>Erreur : {error.message}</p>;

  const countriesWelcomeName : string[] = [
    "Germany", "United States of America", "Brazil", "Iceland"
  ]

  const countriesWelcome  = countriesWelcomeName
  .map((name) => data?.find((country) => country.name === name))
  .filter((country): country is Country => country !== undefined);
;


  return (
    <>
    <header className='top-0 min-h-[75px] z-10 bg-white w-[100%] flex justify-center items-center dark:text-white dark:bg-darkBlue'>
      <main className='fixed flex flex-row justify-between items-center  max-w-[1440px] w-[100%] p-5  border-b-2 border-gray-200 dark:border-b-0 sm:pr-18 sm:pl-18 max-sm:pt-10 max-sm:pb-10'>
        <h1 className="font-semibold sm:text-[22px]">Where in the world?</h1>
        <button onClick={() => (setDarkMode((prev) => (!prev)))} className='flex flex-row gap-3 justify-center items-center'>
          {darkMode ? <MoonSolid className='size-[16px]'/> : <MoonOutline className='size-[16px]'/>}
          <p className='font-normal text-sm'>Dark Mode</p>
        </button>
      </main>
    </header>
      <main className='flex flex-col items-center w-[100%] dark:bg-veryDarkBlueBg flex-grow sm:pt-10 pt-7 bg-veryLightGray gap-12'>
        <div className='flex w-[100%] max-w-[1440px] md:justify-between md:flex-row flex-col md:items-center md:gap-2.5 gap-9 items-start pl-5 sm:pr-18 sm:pl-18'>
          <div className='flex flex-row items-center justify-center rounded-lg bg-white dark:bg-darkBlue gap-4 p-6 pt-4 pb-4 shadow-md sm:w-[450px] w-[95%]'>
            <MagnifyingGlassIcon className="size-[20px] dark:text-white text-gray-500 rounded-2xl"/>
            <input placeholder='Search for a country...' className="text-gray-500 dark:text-white dark:placeholder-white dark:font-light placeholder-darkGray focus:outline-none sm:text-[14px] text-[12px] flex-1"/>
          </div>
          <Filter/>
        </div>
        <div className='grid grid-cols-4 gap-16'>
        {
          Array.isArray(data) ? (
            data.map((country) => (
              <button key={country.name} className="flex flex-col justify-center items-start shadow-md w-[275px] rounded-lg dark:bg-darkBlue dark:text-white">
                <img className="w-[275px] h-[175px]" src={country.flags.png} alt={`${country.name} flag`} />
                <div>
                  <h1>{country.name}</h1>
                  <div>
                    <p>Population : {country.population}</p>
                    <p>Region : {country.region}</p>
                    <p>Capital : {country.capital}</p>
                  </div>
                </div>
              </button>
            ))
          ) : (
            <p>Erreur : Aucune donnée ou format de données incorrect</p>
          )
        }
        </div>
      </main>
    </>
  )
}
