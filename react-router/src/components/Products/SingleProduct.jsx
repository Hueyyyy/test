import { useNavigate, useParams } from "react-router-dom";

const SingleProduct = () => {
  // FEATURE : get params from url
  const params = useParams();
  const { id } = useParams();
  console.log("params: ", params);
  console.log("id: ", id);

  const navigate = useNavigate();

  const handleGoBack = () => {
    // navigate(-1);
    navigate("/products");
  };

  return (
    <div>
      <h2>Single Product - {id}</h2>
      <button type="button" onClick={() => handleGoBack()}>
        Go Back
      </button>
    </div>
  );
};

export default SingleProduct;
