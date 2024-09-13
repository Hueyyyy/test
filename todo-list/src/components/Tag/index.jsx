/* eslint-disable react/prop-types */
import "./Tag.css";

const Tag = (props) => {
  const { tagName, selectTag, selected } = props;
  const tagStyle = {
    HTML: { backgroundColor: "#fda821" },
    CSS: { backgroundColor: "#15d4c8" },
    SCSS: { backgroundColor: "#bf4080" },
    JavaScript: { backgroundColor: "#ffd12c" },
    TypeScript: { backgroundColor: "#0a76ac" },
    React: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "#f9f9f9" },
  };
  return (
    <button
      type="button"
      className="tag"
      style={selected ? tagStyle[tagName] : tagStyle.default}
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
};

export default Tag;
