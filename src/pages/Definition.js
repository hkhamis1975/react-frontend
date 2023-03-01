import { useState, useEffect } from "react";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import NotFound from "../components/NotFound";
import DefinitionSearch from "../components/DefinitionSearch";

export default function Definition() {
  const [word, setWord] = useState();
  const [notFound, setNotFound] = useState(false);
  let { search } = useParams();

  //   const {
  //     request,
  //     data: [{ meanings: word }] = [{}],
  //     errorStatus,
  //   } = useFetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + search);

  const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + search;

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status === 404) {
          setNotFound(true);
        }
        return res.json();
      })
      .then((data) => {
        setWord(data[0].meanings);
        // console.log(data[0].meanings);
      });
  }, [search]);

  if (notFound) {
    return (
      <>
        <NotFound />
        <Link to="/dictionary">Search again</Link>
      </>
    );
  }

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
          <p>Search again:</p>
          <DefinitionSearch />
        </>
      ) : null}
    </>
  );
}
