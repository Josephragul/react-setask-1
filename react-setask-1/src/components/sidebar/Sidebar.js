
import "./Sidebar.css";
import logo from "../../assets/logo.JPG";
const Sidebar = ({sidebarOpen, closeSidebar}) =>{
    return (
      <div className={sidebarOpen ? 'sidebar-responsive' : ''} id="sidebar">
        <div className="sidebar__title">
          <div className="sidebar__img">
            <img src={logo} alt="logo" width="150px" />
          </div>
          <i className="fa fa-times"
            id="sidebarIcon"
            onClick={() => closeSidebar()}
          ></i>
        </div>

        <div className="sidebar__menu">
          <div className="sidebar__link ">
            <i class="fa fa-file-edit"></i>
            <a href="#">Dashbord</a>
          </div>
          <div className="sidebar__link active_menu_link">
            <a href="#">Applications</a>
          </div>
          <div className="sidebar__link">
            <a href="#">Co-Lender</a>
          </div>
          <div className="sidebar__link">
            <a href="#">Products</a>
          </div>
          <div className="sidebar__logout">
            <a href="#">Logout</a>
          </div>
        </div>
      </div>
    );
}

export default Sidebar;