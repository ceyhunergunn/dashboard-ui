import { createContext, useEffect, useState } from "react";

export const MainContext = createContext();

const MainContextProvider = (props) => {
  const [data, setData] = useState("");
  const [loader, setLoader] = useState(true);

  const getData = async () => {
    await fetch("https://demotrainiq.com/case/dashboard")
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
        if (json) {
          setLoader(false);
        }
      });
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <MainContext.Provider value={{ data, loader }}>
      {props.children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
