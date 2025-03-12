import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Details } from "./components/Details";
import { useCountries } from "./hooks/useCountries";
import { Error404 } from "./components/Error404";
import { Country } from "./types/Country";

export function Routers() {
    const { data, isLoading, error } = useCountries();

    if (isLoading) return <p>Chargement...</p>;

    if (error)
        return (
        <div>
            <p>Oops! Une erreur est survenue.</p>
            <button onClick={() => window.location.reload()}>Réessayer</button>
        </div>
        );
    return(
        <Routes>
            <Route path="/" element={<Home data={data}/>}/>
            {data?.map((country)=> (
                <Route key={country.name} path={`/${country.name}`} element={<Details country={country} 
                borderCountries={country.borders?.map((borderCode) => data.find((c) => c.alpha3Code === borderCode)).filter((c): c is Country => c !== undefined)}/>}/>
            ))}
            <Route path="*" element={<Error404/>}/>
        </Routes>
    )
}