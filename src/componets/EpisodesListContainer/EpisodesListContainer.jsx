import { useState } from "react";
import { Button } from "../Button/Button";
import { useFetch } from "../../hooks/useFetch";
import { Loading } from "../Loading/Loading";
import { EpisodeList } from "../EpisodeList/EpisodeList";


export const EpisodesListContainer = () => {
    const [page, setPage] = useState(1);
    const { data , isLoading } = useFetch(`https://rickandmortyapi.com/api/episode?page=${page}`);

    
        return (
            <>
            <div className="d-flex justify-content-center align-items-center gap-3 mb-5 mt-5 flex-column">
                <h2>Episodios</h2>
                <ul>
                { isLoading ? <Loading/> : <EpisodeList characters={data.results}/>}
                </ul>
            </div>
            <div className="d-flex justify-content-center align-items-center gap-3 mb-5 mt-5">
                {page > 1 &&  <Button text="Previus" functionClick={ () =>  setPage(page - 1) }/>}
                <strong> Page #{page} </strong>
                {page <= 2 &&  <Button text="Next" functionClick={ () =>  setPage(page + 1) }/>}
            </div>
            </>
        )
}
