import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useSearch } from "../hooks/useSearch";
import { useState } from "react";
import { FilterType } from "../types/Filter";

export function Filter () {
    const filterItems : string[] = [
        "Africa",
        "Americas",
        "Asia",
        "Europe",
        "Oceania"     
      ]
    const {setFilter} = useSearch();  
    const [selectedRegion, setSelectedRegion] = useState("Filter by Region");

    const handleChange = (value: FilterType) => {
      setSelectedRegion(value);
      setFilter(value); 
    };
    return(
        <Listbox aria-label="Toggle choose filter" value={selectedRegion} onChange={handleChange} as="div" className="relative">
            <ListboxButton className='w-[200px] p-5 font-light dark:bg-darkBlue text-[14px] dark:text-white shadow-md flex justify-between rounded-lg items-center flex-row'>
              {selectedRegion}
              <ChevronDownIcon className="size-[16px]"/>
              </ListboxButton>
            <ListboxOptions className="absolute b-0 shadow-md w-[200px] rounded-lg p-5 pt-3 pb-2 mt-1 text-[14px] font-light dark:bg-darkBlue bg-white dark:text-white">
            {filterItems.map((item) => (<ListboxOption aria-label={item} value={item} key={item} className='pb-1 pt-1'>{item}</ListboxOption>))}
            </ListboxOptions>
        </Listbox>
    )
}