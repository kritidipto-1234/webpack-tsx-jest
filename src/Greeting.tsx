import { useEffect, useState } from "react";

declare const window: any;
window.fetchDogs=function (): Promise<Array<string>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["doberman", "bulldog"]);
    }, 1000);
  });
}

function Greeting() {
  const [changestext, setchangedtext] = useState(false);
  const [dogs, setdogs] = useState([] as String[]);

  useEffect(() => {
    let isUnmounted = false;
    window.fetchDogs().then((dogs:string[]) => {
      if (!isUnmounted) setdogs(dogs);
    });
    return () => {
      isUnmounted = true;
    };
  }, []);

  const clickhandler = () => {
    console.log("button clicked");
    setchangedtext(true);
  };

  return (
    <div>
      Greeting Hello World
      <div>{changestext ? "Text is changed" : "Text original"}</div>
      <ul>
        {dogs.map((dog, i) => (
          <li key={i}>{dog}</li>
        ))}
      </ul>
      <button className="changebtn" onClick={clickhandler}>
        Change text
      </button>
    </div>
  );
}

export default Greeting;
