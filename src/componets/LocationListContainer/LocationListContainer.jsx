import { useState } from "react";
import { Button } from "../Button/Button";
import { Loading } from "../Loading/Loading";
import { LocationList } from "../LocationList/LocationList";
import { useFetch } from "../../hooks/useFetch"




export const LocationsListContainer = () => {
    const [page, setPage] = useState(1);
    const { data, isLoading } = useFetch(`https://rickandmortyapi.com/api/location?page=${page}`);
    // console.log("acá " , data);
    


        return (
            <>
            { isLoading ? <Loading/> : <LocationList characters={data.results}/>}
            <div className="d-flex justify-content-center align-items-center gap-3 mb-5 mt-5">
                {page > 1 &&  <Button text="Previus" functionClick={ () =>  setPage(page - 1) }/>}
                <strong> Page #{page} </strong>
                <Button text="Next" functionClick={() =>  setPage(page + 1)}/>
            </div>
            </>
        )
    
}
