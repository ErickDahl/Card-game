import React, {
  createContext,
  useMemo,
  useState,
  ReactNode,
  Dispatch,
  useEffect,
} from "react";
import getImages from "../service/getImages";

export const PageContext = createContext({} as any);

type ContextProps = {
  children: ReactNode;
};

interface PageContextProps {
  setPage: Dispatch<boolean>;
  page: boolean;
  name: string;
  setName: Dispatch<string>;
  shibes: ShibeProp[];
}

export interface ShibeProp {
  image: string;
  name: string;
  value: number;
  description: string;
}

const PageContextProvider = (props: ContextProps) => {
  const [page, setPage] = useState(false);
  const [name, setName] = useState("");
  const [maxShibes, setMaxShibes] = useState([]);
  const [shibes, setShibes] = useState<ShibeProp[]>([]);

  useEffect(() => {
    const getShibes = async () => {
      setMaxShibes(await getImages());
    };
    getShibes();
  }, []);

  useEffect(() => {
    const CreateObject = () => {
      const array: ShibeProp[] = [];
      maxShibes.forEach((shibe, i) => {
        const shibiObject = {
          image: shibe,
          name: `Dogo Shibe ${i + 1}`,
          value: Math.round(Math.random() * 10),
          description: `shibe ${i}`,
        };
        array.push(shibiObject);
      });
      return array;
    };

    setShibes(CreateObject());
  }, [maxShibes]);

  const ctx: PageContextProps = useMemo(
    () => ({
      setPage,
      setName,
      shibes,
      page,
      name,
    }),
    [setPage, page, setName, name, shibes]
  );
  return (
    <PageContext.Provider value={ctx}>{props.children}</PageContext.Provider>
  );
};

const usePageContext = () => {
  const context = React.useContext(PageContext);
  if (context === undefined) {
    throw new Error("usePageContext must be used within a PageContextProvider");
  }
  return context;
};

export { PageContextProvider, usePageContext };
