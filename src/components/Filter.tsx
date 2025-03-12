import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export function Filter () {
    const filterItems : string[] = [
        "Africa",
        "America",
        "Asia",
        "Europe",
        "Oceania"     
      ]
    return(
        <Listbox as="div" className="relative">
            <ListboxButton className='w-[200px] p-5 font-light dark:bg-darkBlue text-[14px] dark:text-white shadow-md flex justify-between rounded-lg items-center flex-row'>
              Filter by Region
              <ChevronDownIcon className="size-[16px]"/>
              </ListboxButton>
            <ListboxOptions className="absolute b-0 shadow-md w-[200px] rounded-lg p-5 pt-3 pb-2 mt-1 text-[14px] font-light dark:bg-darkBlue bg-white dark:text-white">
            {filterItems.map((item) => (<ListboxOption value="" key={item} className='pb-1 pt-1'>{item}</ListboxOption>))}
            </ListboxOptions>
        </Listbox>
    )
}