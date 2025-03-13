import { ArrowLongLeftIcon } from "@heroicons/react/24/solid"
import { Country as CountryType} from "../types/Country"

type detailsProps = {country : CountryType, borderCountries : (CountryType[]) | undefined}

export function Details({country, borderCountries} : Readonly<detailsProps>) {

    return(
    <main className="flex flex-col items-center dark:bg-veryDarkBlueBg w-[100%] flex-1">
        <div className="flex flex-col w-[100%] max-w-[1440px]">
            <div className="flex items-center justify-start lg:p-17 p-5 pt-7 pb-10">
                <a aria-label="toggle back" href="/" className="flex flex-row items-center justify-center gap-2 p-1 shadow-md dark:text-white rounded-sm dark:border-1 dark:border-veryDarkBlueText dark:bg-darkBlue w-[100px]">
                    <ArrowLongLeftIcon className="size-6"/>
                    <p className="font-light text-[14px]">Back</p>
                </a>
            </div>
            <div className="flex xl:flex-row flex-col items-center lg:pl-17 lg:pr-17 pl-5 pr-5 xl:gap-36 lg:gap-30 gap-10">
                <img className="sm:w-[550px] w-[360px] h-[225px] sm:h-[400px]" src={country.flags.png} alt={`${country.name} flag`}/>
                <div className="flex flex-col items-start dark:text-white">
                    <h1 className="text-[26px] font-extrabold pb-4">{country.name}</h1>
                    <div className="flex sm:flex-row flex-col sm:gap-30 gap-8 sm:pb-10 pb-8">
                        <div className="flex flex-col gap-2">
                            <p className="text-[14px]">Native Name: <span className="font-light">{country.nativeName}</span></p>
                            <p className="text-[14px]">Population: <span className="font-light">{country.population}</span></p>
                            <p className="text-[14px]">Region: <span className="font-light">{country.region}</span></p>
                            <p className="text-[14px]">Sub Region: <span className="font-light">{country.subregion}</span></p>
                            <p className="text-[14px]">Capital: <span className="font-light">{country.capital}</span></p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-[14px]">Top Level Domain: <span className="font-light">{country.topLevelDomain}</span></p>
                            <p className="text-[14px]">Currencies: <span className="font-light">{country.currencies.map((c) => c.name).join(", ")}</span></p>
                            <p className="text-[14px]">Languages: <span className="font-light">{country.languages.map((l) => l.name).join(", ")}</span></p>
                        </div>
                    </div>
                    {borderCountries && borderCountries.length > 0 ? (
                        <div className="flex sm:flex-row flex-col gap-2 sm:items-center items-start pb-4">
                            <p className="text-[14px] ">Border countries:</p>
                            <div className="flex flex-wrap gap-2">
                                {borderCountries.map((c) => (
                                    <a 
                                        key={c.name} 
                                        href={`/${c.name}`}
                                        className="p-2 shadow-md dark:text-white font-light rounded-lg dark:bg-darkBlue text-[12px]"
                                    >
                                        {c.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <p className="text-[14px] mt-4">No border countries</p>
                    )}
                </div>
            </div>
        </div>
    </main>

    )
}