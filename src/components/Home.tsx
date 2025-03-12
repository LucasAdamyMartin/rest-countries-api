import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Filter } from "./Filter";
import { useEffect, useMemo, useState } from "react";
import { Country as CountryType } from "../types/Country";
import { useSearch } from "../hooks/useSearch";
import { Country } from "./Country";

type homeProps = {data : CountryType[] | undefined};

export function Home({data} : Readonly<homeProps>) {
    const { filter } = useSearch();  
    const [dataToPrint, setDataToPrint] = useState<CountryType[]>([]);
    const [search, setSearch] = useState("");

    const countriesWelcomeName = useMemo(() => [
        "Germany", "United States of America", "Brazil", "Iceland"
      ], []);
    

    useEffect(() => {
        if (data !== undefined) {
          const countriesInWelcomeList = data.filter((country) =>
            countriesWelcomeName.includes(country.name)
          );
          const otherCountries = data.filter(
            (country) => !countriesWelcomeName.includes(country.name)
          );
          const sortedCountries = [...countriesInWelcomeList, ...otherCountries];
      
          const filtered = filter === "none"
            ? sortedCountries
            : sortedCountries.filter((element) => element.region === filter);
          setDataToPrint(filtered.filter((country) => country.name.includes(search)));
        }
      }, [filter, data, countriesWelcomeName, search]);

    return(
        <main className='flex flex-col items-center w-[100%] dark:bg-veryDarkBlueBg flex-grow sm:pt-10 pt-7 pb-4 bg-veryLightGray gap-12'>
            <div className='flex w-[100%] max-w-[1440px] md:justify-between md:flex-row flex-col md:items-center md:gap-2.5 gap-9 items-start pl-5 sm:pr-18 sm:pl-18'>
            <div className='flex flex-row items-center justify-center rounded-lg bg-white dark:bg-darkBlue gap-4 p-6 pt-4 pb-4 shadow-md sm:w-[450px] w-[95%]'>
                <MagnifyingGlassIcon className="size-[20px] dark:text-white text-gray-500 rounded-2xl"/>
                <input aria-label="search" onChange={(e) => (setSearch(e.target.value))} placeholder='Search for a country...' className="text-gray-500 dark:text-white dark:placeholder-white dark:font-light placeholder-darkGray focus:outline-none sm:text-[14px] text-[12px] flex-1"/>
            </div>
            <Filter/>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 overflow-hidden gap-16'>
            {
                Array.isArray(dataToPrint) ? (
                dataToPrint.map((country) => (
                    <Country key={country.name} country={country} />
                ))
                ) : (
                <p>Erreur : Aucune donnée ou format de données incorrect</p>
                )
            }
            </div>
      </main>
    )
}