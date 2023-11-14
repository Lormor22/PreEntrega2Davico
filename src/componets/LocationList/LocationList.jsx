import { Locations } from "../Locations/Locations"


export const LocationList = ({characters}) => {
    return (
        <div className="container d-flex flex-sm-wrap justify-content-center">
            { characters.map( character => <Locations key={character.name} {...character}/>)}
        </div>
    )
}