import { Episode } from "../Episodes/Episodes"


export const EpisodeList = ({characters}) => {
    return (
        <div>
            { characters.map( character => <Episode key={character.id} name={character.name} id={character.id}/>)}
        </div>
    )
}

