import { createContext, useEffect, useState } from "react";
import { createTheme } from "react-data-table-component";

export const MainContext = createContext();

const MainContextProvider = (props) => {
  const [data, setData] = useState("");
  const [loader, setLoader] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 599);
  const [isMediumScreen, setIsMediumScreen] = useState(
    window.innerWidth <= 959
  );

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
          setTimeout(() => {
            setLoader(false);
          }, 2000);
        }
      });
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 599);
      setIsMediumScreen(window.innerWidth <= 959);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MainContext.Provider
      value={{ data, loader, isSmallScreen, isMediumScreen }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
