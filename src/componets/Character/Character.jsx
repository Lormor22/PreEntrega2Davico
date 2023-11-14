import { Button } from "../Button/Button"
import { Link } from "react-router-dom"


export const Character = ({name , image , id}) => {

    return (
        <div className="border border-3 p-3 d-flex flex-column m-2"> 
            <div className="d-flex justify-content-center ">
                <h4> {name} </h4>
            </div>
            <p>ID: {id}</p>
            <img src={image} alt={name} />
            <div className="d-flex justify-content-center p-2">
                <Link to={`/character/${id}`}  >
                <Button variant="btn-success " text="Detalles" />
                </Link>
            </div>
        </div>
    )
}
