import { ChevronDownIcon, MoonIcon as MoonSolid } from '@heroicons/react/24/solid';
import { MagnifyingGlassIcon, MoonIcon as MoonOutline } from '@heroicons/react/24/outline';


import './App.css'
import { useEffect, useState } from 'react';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';

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

  const filterItems : string[] = [
    "Africa",
    "America",
    "Asia",
    "Europe",
    "Oceania"     
  ]
  return (
    <>
    <header className='w-[100%] flex justify-center items-center dark:text-white dark:bg-darkBlue'>
      <main className='flex flex-row justify-between items-center  max-w-[1440px] w-[100%] p-5  border-b-2 border-gray-200 dark:border-b-0 sm:pr-18 sm:pl-18 max-sm:pt-10 max-sm:pb-10'>
        <h1 className="font-semibold sm:text-[22px]">Where in the world?</h1>
        <button onClick={() => (setDarkMode((prev) => (!prev)))} className='flex flex-row gap-3 justify-center items-center'>
          {darkMode ? <MoonSolid className='size-[16px]'/> : <MoonOutline className='size-[16px]'/>}
          <p className='font-normal text-sm'>Dark Mode</p>
        </button>
      </main>
    </header>
      <main className='flex flex-col items-center w-[100%] dark:bg-veryDarkBlueBg flex-grow sm:pt-10 pt-7 bg-veryLightGray'>
        <div className='flex w-[100%] max-w-[1440px] md:justify-between md:flex-row flex-col md:items-center md:gap-2.5 gap-9 items-start pl-5 sm:pr-18 sm:pl-18'>
          <div className='flex flex-row items-center justify-center rounded-lg bg-white dark:bg-darkBlue gap-4 p-6 pt-4 pb-4 shadow-md sm:w-[350px] w-[95%]'>
            <MagnifyingGlassIcon className="size-[20px] dark:text-white text-gray-500 rounded-2xl"/>
            <input placeholder='Search for a country...' className="text-gray-500 dark:text-white dark:placeholder-white dark:font-light placeholder-darkGray focus:outline-none sm:text-[14px] text-[12px] flex-1"/>
          </div>
          <Listbox as="div" className="relative">
            <ListboxButton className='w-[200px] p-5 font-light dark:bg-darkBlue text-[14px] dark:text-white shadow-md flex justify-between rounded-lg items-center flex-row'>
              Filter by Region
              <ChevronDownIcon className="size-[16px]"/>
              </ListboxButton>
            <ListboxOptions className="absolute b-0 shadow-md w-[200px] rounded-lg p-5 pt-3 pb-2 mt-1 text-[14px] font-light dark:bg-darkBlue dark:text-white">
            {filterItems.map((item) => (<ListboxOption value="" key={item} className='pb-1 pt-1'>{item}</ListboxOption>))}
            </ListboxOptions>
          </Listbox>
        </div>

      </main>
    </>
  )
}
