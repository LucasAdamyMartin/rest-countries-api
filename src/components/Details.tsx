import { Country as CountryType} from "../types/Country"

type detailsProps = {country : CountryType}

export function Details({country} : Readonly<detailsProps>) {
    return(<h1>{country.name}</h1>)
}