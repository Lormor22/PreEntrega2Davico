
export const CharacterDetails = ({name, species, gender, location, image, status, created }) => {
    return (
        <div className="p-5 border border-3 rounded-4">
            <div className="d-flex justify-content-center">
                <img src={image} alt="" />
            </div>
            <div className="d-flex flex-column">
                <h3>{name}</h3>
                <p>Species: {species}</p>
                <p>Gender: {gender}</p>
                <p>Location: {location.name}</p>
                <p>Status: {status}</p>
                <p>Created: {created}</p>
            </div>
        </div>
    )
}
