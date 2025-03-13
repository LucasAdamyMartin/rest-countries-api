import { Country as CountryType } from "../types/Country"

type countryProps = {country : CountryType}

export function Country({country} : Readonly<countryProps>) {
    return( 
        <a href={`/${country.name.replace(/\s+/g, '-').toLowerCase()}`} key={country.name} className="flex flex-col justify-center items-center shadow-md w-[275px] rounded-lg dark:bg-darkBlue dark:text-white overflow-hidden">
                <img className="w-[100%] h-[170px]" src={country.flags.png} alt={`${country.name} flag`} />
                <div className="flex justify-start items-start flex-col flex-1 w-[100%] p-5 gap-4">
                  <h1 className='text-[18px] font-extrabold'>{country.name}</h1>
                  <div className="flex justify-start items-start flex-col gap-1">
                    <p className='text-[14px] '>Population: <span className='text-[14px] font-light'>{Intl.NumberFormat('en-US').format(country.population)}</span></p>
                    <p className='text-[14px] '>Region: <span className='text-[14px] font-light'>{country.region}</span></p>
                    <p className='text-[14px] '>Capital: <span className='text-[14px] font-light'>{country.capital}</span></p>
                  </div>
                </div>
        </a>
    )
}