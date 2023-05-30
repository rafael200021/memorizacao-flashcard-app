import IGroups from "Intefaces/IGroups";
import { Link } from "react-router-dom";

export default function Card({ id, description, name, img_url }: IGroups) {
  return (
    <div>
      <Link to={`/group/${id}`} className="card w-64 bg-base-100 shadow-xl" style={{height:'300px'}}>
        <figure>
          <img src={img_url} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-name">{name}</h2>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}
