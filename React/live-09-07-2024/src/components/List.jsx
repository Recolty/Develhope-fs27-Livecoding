import { useMemo } from "react";

export function List({ reviews }) {
  const media = useMemo(() => {
    if (reviews.length == 0) {
      return 0;
    } else {
      return (
        reviews.reduce((accumulator, valor) => accumulator + valor.rating, 0) /
        reviews.length
      );
    }
  }, [reviews]);
  return (
    <div>
      <div className="flex justify-between w-full">
        <h4 className="text-white font-bold">{reviews.length} Reviews</h4>
        <h4 className="text-white font-bold">Avarage Rating: {media}</h4>
      </div>
      <div className="cardContainer">
        {reviews.map((review, index) => (
          <div key={index} className="card">
            <div className="ratingDisplay">{review.rating}</div>
            <p>{review.comment}</p>
            <button><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#7B2375" className="delete" viewBox="0 0 16 16" stroke="#7B2375" stroke-width="1">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></button>
          </div>
        ))}
      </div>
    </div>
  );
}
