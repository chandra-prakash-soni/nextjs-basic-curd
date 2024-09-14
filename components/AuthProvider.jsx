"use client";
import React, { useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "@/redux/reducers";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/app/defaultPage/Footer";
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const AuthProvider = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
  );
  return (
    <div>
      <SessionProvider>
        <Provider store={store}>
          {children}
          <Footer />
        </Provider>
      </SessionProvider>
    </div>
  );
};

export default AuthProvider;
