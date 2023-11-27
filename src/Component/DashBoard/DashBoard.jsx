import { Link, Outlet } from "react-router-dom";
import { FaHome, FaPlusSquare, FaUserMd, FaUserPlus } from "react-icons/fa";


const DashBoard = () => {
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col ">
    {/* Page content here */}
  
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    <Outlet></Outlet>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu pt-32 text-center w-80 min-h-full bg-[#DF5EA2] text-white text-xl">
      {/* Sidebar content here */}
      <li><Link to='/dashboard/addFeatures'><FaPlusSquare></FaPlusSquare> Add Features</Link></li>
      <li><Link to='/dashboard/addDoctor' className="text-white"><FaUserMd></FaUserMd> Add Doctor</Link></li>
      <li><Link to='/dashboard/manageUsers' className="text-white"> <FaUserPlus></FaUserPlus> Manage Users</Link></li>
      <li>  <Link to='/'><FaHome className="text-white"></FaHome> Home</Link></li>
    </ul>
  
  </div>
</div>

    );
};

export default DashBoard;