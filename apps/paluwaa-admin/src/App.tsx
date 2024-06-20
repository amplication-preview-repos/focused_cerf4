import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PetList } from "./pet/PetList";
import { PetCreate } from "./pet/PetCreate";
import { PetEdit } from "./pet/PetEdit";
import { PetShow } from "./pet/PetShow";
import { FooterList } from "./footer/FooterList";
import { FooterCreate } from "./footer/FooterCreate";
import { FooterEdit } from "./footer/FooterEdit";
import { FooterShow } from "./footer/FooterShow";
import { NavigationList } from "./navigation/NavigationList";
import { NavigationCreate } from "./navigation/NavigationCreate";
import { NavigationEdit } from "./navigation/NavigationEdit";
import { NavigationShow } from "./navigation/NavigationShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Paluwaa"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Pet"
          list={PetList}
          edit={PetEdit}
          create={PetCreate}
          show={PetShow}
        />
        <Resource
          name="Footer"
          list={FooterList}
          edit={FooterEdit}
          create={FooterCreate}
          show={FooterShow}
        />
        <Resource
          name="Navigation"
          list={NavigationList}
          edit={NavigationEdit}
          create={NavigationCreate}
          show={NavigationShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
