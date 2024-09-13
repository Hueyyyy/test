import { useSearchParams } from "react-router-dom";

const Articles = () => {
  // FEATURE : get search params from url
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy");
  const category = searchParams.get("category");
  console.log("sortBy: ", sortBy);
  console.log("category: ", category);

  const handleSortBy = () => {
    setSearchParams({
      sortBy: "views",
      category: "general",
    });
  };

  return (
    <div>
      <h2>
        Articles
        <p>
          SortBy: <span style={{ color: "red" }}>{sortBy}</span>
        </p>
        <p>
          Category: <span style={{ color: "green" }}>{category}</span>
        </p>
      </h2>
      <button type="button" onClick={() => handleSortBy()}>
        Sort by
      </button>
    </div>
  );
};

export default Articles;
