import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import "./Question.css";
//import { AuthContext } from "../../context/AuthContext";
//import { useContext } from "react";
export default function Question() {
 // const { user } = useContext(AuthContext);
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
      </div>
    </>
  );
}
