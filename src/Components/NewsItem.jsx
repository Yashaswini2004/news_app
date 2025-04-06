export default function NewsItem({ title, desc, src, url }) {
    return (
      <div className="card m-3" style={{ width: "18rem" }}>
        <img
          src={src || "https://via.placeholder.com/286x180?text=No+Image"}
          className="card-img-top"
          alt="News"
        />
        <div className="card-body">
          <h5 className="card-title">{title || "No Title"}</h5>
          <p className="card-text">{desc || "No Description Available"}</p>
          <a href={url || "#"} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      </div>
    );
  }
  