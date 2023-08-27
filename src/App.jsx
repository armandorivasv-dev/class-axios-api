import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
//import { AxiosApi } from "./api/consfigAxiosApi";
import { JsonPlaceholderApi, endpoints } from "./api/jsonPlaceholderApi";

function App() {
  const [count, setCount] = useState(0);

  const [data, setData] = useState(null);

  const api = new JsonPlaceholderApi();

  useEffect(() => {
    (async () => {
      try {
        const resultUsers = await api.get(endpoints.USERS);
        const resultPosts = await api.get(endpoints.POST);
        console.log("resultPosts->", resultPosts);
        console.log("resultUsers->", resultUsers);
      } catch (error) {
        console.log("error->", error);
      }
    })();
  }, []);

  return <></>;
}

export default App;
