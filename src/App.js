import "./styles.css";
import Join from "./Components/JoinUs";
import Settings from "./Components/Settings";
import Login from "./Components/Login";
import Contact from "./Components/Contact";
import Search from "./Components/Search";
import Help from "./Components/Help";
import Home from "./Components/Home";
import Download from "./Components/Download";

export default function App() {
  const style = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 150px)",
    gap: "10px"
  };
  return (
    <div style={style} className="App">
      <Join title="Join Us" />
      <Settings title="Settings" />
      <Login title="Login" />
      <Contact title="Contact Us" />
      <Search title="Search" />
      <Help title="Help" />
      <Home title="Home" />
      <Download title="Download" />
    </div>
  );
}
