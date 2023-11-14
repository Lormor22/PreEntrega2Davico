import { CharacterDetails } from "../CharacterDetails/CharacterDetails";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Loading } from "../Loading/Loading";

export const CharacterDetailsContainer = () => {
    const { id } = useParams ()
    const { data , isLoading} = useFetch (`https://rickandmortyapi.com/api/character/${id}`)
    return (
        <div className="container d-flex justify-content-center mt-5">
            {isLoading ? <Loading/> : <CharacterDetails {...data}/>}
        </div>
    )
}
