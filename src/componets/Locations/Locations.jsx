

export const Locations = ({name , type , dimension}) => {
    let image = "https://rickandmortyapi.com/api/character/avatar/19.jpeg";
    return (
        <div className="border border-3 p-3 d-flex flex-column m-2"> 
            <div className="d-flex justify-content-center ">
                <h4> {name} </h4>
            </div>
            <p>Type: {type}</p>
            <p>Dimension: {dimension} </p>
            <img src={image} alt={name} />
        </div>
    )
}