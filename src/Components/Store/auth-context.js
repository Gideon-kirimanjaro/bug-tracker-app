import { getThemeProps } from "@mui/system";
import { createContext } from "react";

const AuthContext = createContext({
  logIn: true,
});
export const AuthContextProvider = (props) => {
  return <AuthContext.Provider>{props.children}</AuthContext.Provider>;
};
export default AuthContext;
