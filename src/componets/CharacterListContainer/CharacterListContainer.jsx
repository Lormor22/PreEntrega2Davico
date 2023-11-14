import { useEffect, useState } from "react";
import { CharacterList } from "../CharacterList/CharacterList";
import { Button } from "../Button/Button";
import { useFetch } from "../../hooks/useFetch";
import { Loading } from "../Loading/Loading";
import { Link, useParams } from "react-router-dom";


export const CharacterListContainer = () => {
    const { category } = useParams();
    const [page, setPage] = useState(1);
    const { data, isLoading } = useFetch(`https://rickandmortyapi.com/api/character/?page=${page}`, category);
    console.log("acá " , data);
    
    let characterFilter = [];
    if (!isLoading && data) {
        if (category) {
            if(category === "Alive" || category === "Dead"){
                const characterFilter = data.results.filter((character) => character.status === category);
                data.results = characterFilter;
            }
            if (category === "Human" || category === "Alien"){
                const characterFilter = data.results.filter((character) => character.species === category);
                data.results = characterFilter;
            }

        } 
    }
        return (
            <>
            <div className="d-flex justify-content-center align-items-center gap-3 mb-5 mt-5">
                <Link to={"/category/Alive"}> <Button text="Alive"/></Link>
                <Link to={"/category/Dead"}><Button text="Dead"/></Link>
                <Link to={"/category/Human"}><Button text="Human"/></Link>
                <Link to={"/category/Alien"}><Button text="Alien"/></Link>
            </div>
            { isLoading && category ? <Loading/> : <CharacterList characters={characterFilter}/>}
            { isLoading ? <Loading/> : <CharacterList characters={data.results}/>}
            <div className="d-flex justify-content-center align-items-center gap-3 mb-5 mt-5">
                {page > 1 &&  <Button text="Previus" functionClick={ () =>  setPage(page - 1) }/>}
                <strong> Page #{page} </strong>
                <Button text="Next" functionClick={() =>  setPage(page + 1)}/>
            </div>
            </>
        )
}

