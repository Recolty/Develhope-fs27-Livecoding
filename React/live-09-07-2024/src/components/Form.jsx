import { useState } from "react";

export function Form({ addReview }) {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(10);

  return (
      <form
        className="flex flex-col items-center gap-8 p-16 rounded-lg bg-white"
        onSubmit={(event) => {
          event.preventDefault();

          addReview({ comment, rating });
        }}
      >
        <h3 className="text-xl font-bold">How would you rate your service with us?</h3>
        <div className="flex gap-2.5 rating">
          {Array.from({ length: 10 }, (_, i) => (
            <button
              className={rating === i + 1 ? "selected" : ""}
              key={i}
              onClick={(event) => {
                event.preventDefault();
                setRating(i + 1);
              }}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <div className="flex justify-between border-2 w-full rounded-lg p-1.5">
          <input
            type="text"
            value={comment}
            placeholder="write a review"
            className="w-full"
            onChange={(event) => {
              setComment(event.target.value);
            }}
          />
          <button className="text-base p-1.5 px-9 rounded-lg bg-gray-300">
            Send
          </button>
        </div>
      </form>
  );
}
