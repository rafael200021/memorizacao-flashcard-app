import IGroups from "Intefaces/IGroups";
import { Link } from "react-router-dom";

export default function Card({ id, description, name, img_url }: IGroups) {
  return (
    <div>
      <Link to={`/group/${id}`} className="card w-64 bg-base-100 shadow-xl" style={{ height: '300px' }}>
        <figure>
          {img_url ? <img src={img_url} alt={name} className="h-40 w-full object-cover"/> : <div className="h-40 w-full bg-blue-600"></div>}
        </figure>
        <div className="card-body">
          <h2 className="card-name font-bold text-lg">{name}</h2>
          <p className="text-gray-500 text-sm">{description}</p>
        </div>
      </Link>
    </div>
  );
}
