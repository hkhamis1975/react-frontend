import { useState, useEffect } from "react";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function Definition() {
  const [word, setWord] = useState();
  let { search } = useParams();

  //   const {
  //     request,
  //     data: [{ meanings: word }] = [{}],
  //     errorStatus,
  //   } = useFetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + search);

  useEffect(() => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + search).then(
      (res) =>
        res.json().then((data) => {
          setWord(data[0].meanings);
          // console.log(data[0].meanings);
        })
    );
  }, [search]);

  return (
    <>
      {word ? (
        <>
          <h1>Here is a definition:</h1>
          {word.map((meaning) => {
            return (
              <p key={uuidv4()}>
                {meaning.partOfSpeech + ": "}
                {meaning.definitions[0].definition}
              </p>
            );
          })}
        </>
      ) : null}
    </>
  );
}
