import { useMemo } from "react";

export function List({ reviews }) {
  const media = useMemo(() => {
    return (
      reviews.reduce((accumulator, valor) => accumulator + valor.rating, 0) /
      reviews.length
    );
  }, [reviews]);
  return (
    <div className="flex justify-between w-full">
      <h4 className="text-white font-bold">{reviews.length} Reviews</h4>
      <h4 className="text-white font-bold">
        Avarage Rating:{media}
      </h4>
    </div>
  );
}
