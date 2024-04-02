import { NavLink } from 'react-router-dom';
import AppLogo from "../components/shared/AppLogo.jsx";
export default function Navigation(){
    return(
        <>
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <AppLogo />
                        <div className="ml-10 flex items-baseline space-x-4">
                            <NavLink to={"/"} className={({ isActive }) => (isActive ? 'rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white bg-gray-900' : 'rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white')}>Home</NavLink>
                            <NavLink to={"/posts"} className={({ isActive }) => (isActive ? 'rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white bg-gray-900' : 'rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white')}>Posts</NavLink>
                            <NavLink to={"/about"} className={({ isActive }) => (isActive ? 'rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white bg-gray-900' : 'rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white')}>About Us</NavLink>
                            <NavLink to={"/contact"} className={({ isActive }) => (isActive ? 'rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white bg-gray-900' : 'rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white')}>Contacts</NavLink>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <NavLink to={"/dashboard"} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Dashboard</NavLink>
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}