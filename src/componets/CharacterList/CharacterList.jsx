import { Character } from "../Character/Character"


export const CharacterList = ({characters}) => {
    return (
        <div className="container d-flex flex-sm-wrap justify-content-center">
            { characters.map( character => <Character key={character.id} name={character.name} image={character.image}/>)}
        </div>
    )
}

