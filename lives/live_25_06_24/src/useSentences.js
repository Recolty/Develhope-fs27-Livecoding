import { useEffect, useState } from "react";

export function useSentences(array) {
  const [shorterString, setShorterString] = useState();
  const [longerString, setLongerString] = useState();

  function handleSentences(array) {
    const lenghtArray = array.map((el) => el.length);
    setShorterString(
      array.filter((element) => element.length === Math.min(...lenghtArray))
    );
    setLongerString(
      array.filter((element) => element.length === Math.max(...lenghtArray))
    );
  }


  useEffect(() => {
    handleSentences(array);
  }, []);


  return {
    shorterString,
    longerString,
    handleSentences,
  };
}
