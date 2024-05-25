import { createContext, useEffect, useState } from "react";
import { createTheme } from "react-data-table-component";

export const MainContext = createContext();

const MainContextProvider = (props) => {
  const [data, setData] = useState("");
  const [loader, setLoader] = useState(true);

  createTheme(
    "solarized",
    {
      text: {
        primary: "#fff",
        secondary: "#fff",
      },

      divider: {
        default: "#073642",
      },
      action: {
        button: "#073642",
        hover: "#073642",
        disabled: "#073642",
      },
    },
    "dark"
  );

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
