import React, { createContext, ReactNode, useContext, useState } from "react";

import { ProjectDataModel } from "../interfaces/ProjectDataModel";
import { TitleDataModel } from "../interfaces/TitleDataModel";
import { SocialInfoModel } from "../interfaces/SocialInfoModel";

import { showModal } from "../utils/ShowModal";

import { mainTitleData, projectsData, footerSocialsInfo } from "../data/data";

const Pic1 = require("../assets/Pic1.png") as string;

type ContextProviderProps = {
  children: ReactNode;
};

type ContextProps = {
  showModal: () => void;
  Pic1: string;
  projectsData: ProjectDataModel[];
  mainTitleData: TitleDataModel[];
  footerSocialsInfo: SocialInfoModel[];
  showTopBtn: boolean;
  setShowTopBtn: React.Dispatch<React.SetStateAction<boolean>>;
  loader: boolean;
  setLoader: React.Dispatch<React.SetStateAction<boolean>>;
  switchOnLoader: () => void;
  turnOffLoader: () => void;
};

const Context = createContext({} as ContextProps);

export function useWebsiteContext() {
  return useContext(Context) as ContextProps;
}

export function ContextProvider({ children }: ContextProviderProps) {
  const [showTopBtn, setShowTopBtn] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);

  const switchOnLoader = () => setLoader(true);
  const turnOffLoader = () => setLoader(false);

  return (
    <Context.Provider
      value={{
        Pic1,
        projectsData,
        mainTitleData,
        showTopBtn,
        setShowTopBtn,
        footerSocialsInfo,
        showModal,
        setLoader,
        loader,
        switchOnLoader,
        turnOffLoader,
      }}
    >
      {children}
    </Context.Provider>
  );
}
