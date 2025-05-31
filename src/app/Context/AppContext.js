"use client";
import React, { createContext, useState } from "react";
import secureLocalStorage from "react-secure-storage";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(
    secureLocalStorage.getItem("userData") || null
  );
  const [notificationDropdown, setNotificationDropdown] = useState(false);
  const [postDropdown, setPostDropdown] = useState(false);
  const [storyModal, setStoryModal] = useState(false);
  const [postModal, setPostModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [googleLogin, setGoogleLogin] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [nextRoute, setNextRoute] = useState("");
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [impactDropdown, setImpactDropdown] = useState(false);
  const [open, setOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [getInvolvedDropdown, setGetInvolvedDropdown] = useState(false);
  const [ourWorkDropdown, setOurWorkDropdown] = useState(false);

  return (
    <AppContext.Provider
      value={{
        userData,
        setUserData,

        notificationDropdown,
        setNotificationDropdown,

        postDropdown,
        setPostDropdown,

        storyModal,
        setStoryModal,

        postModal,
        setPostModal,

        menuOpen,
        setMenuOpen,

        googleLogin,
        setGoogleLogin,

        theme,
        setTheme,

        nextRoute,
        setNextRoute,

        profileDropdown,
        setProfileDropdown,

        aboutDropdown,
        setAboutDropdown,

        open,
        setOpen,

        ourWorkDropdown,
        setOurWorkDropdown,

        getInvolvedDropdown,
        setGetInvolvedDropdown,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
