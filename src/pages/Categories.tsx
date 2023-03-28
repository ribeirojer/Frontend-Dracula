import { useNavigate, useParams } from "react-router-dom";

type Props = {};

const Categories = (props: Props) => {
  let { category = "" } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <p>{category}</p>
    </div>
  );
};

export default Categories;
