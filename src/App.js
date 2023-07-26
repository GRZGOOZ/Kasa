import { Outlet } from "react-router-dom";
import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
