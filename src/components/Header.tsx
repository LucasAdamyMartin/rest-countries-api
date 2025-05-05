import { MoonIcon as MoonSolid } from '@heroicons/react/24/solid';
import { MoonIcon as MoonOutline, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import { useSearch } from '../hooks/useSearch';

export function Header() {
    const {setDarkMode, darkMode} = useSearch();
    return(
    <header className='min-h-[75px] bg-white w-[100%] flex justify-center items-center dark:text-white dark:bg-darkBlue dark:shadow-xl '>
        <main className=' flex flex-row justify-between items-center  max-w-[1440px] w-[100%] p-5  border-b-2 border-gray-200 dark:border-b-0 sm:pr-18 sm:pl-18 max-sm:pt-10 max-sm:pb-10'>
            <h1 className="font-semibold sm:text-[22px]">Where in the world?</h1>
            <button className='flex flex-row items-center gap-2 bg-red-400 p-2 rounded-full'> 
                <a href='/quiz' className='flex flex-row'>
                    <QuestionMarkCircleIcon className='size-[24px]'/> 
                    <p className='font-bold'>Quiz Mode</p>
                </a>
            </button>
            <button  aria-label="Toggle dark mode" onClick={() => (setDarkMode((prev) => (!prev)))} className='flex flex-row gap-3 justify-center items-center'>
            {darkMode ? <MoonSolid className='size-[16px]'/> : <MoonOutline className='size-[16px]'/>}
            <p className='font-normal text-sm'>Dark Mode</p>
            </button>
        </main>
    </header>
    )
}