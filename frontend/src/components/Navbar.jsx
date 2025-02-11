import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { RxAvatar } from "react-icons/rx";
import { useSelector } from "react-redux";
import { useState } from "react";

const generalLinks = [
    { name: "My Reps", href: "/myreps" },
    { name: "Help Center", href: "/helpcenter"}
];

const loggedInLinks = [
    { name: "Account", href: "/account" },
    { name: "Saved Bills", href: "/saved"}
];

const Navbar = () => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <header className="max-w-screen-2xl px-4 py-6 mx-auto bg-gray-100">
            <nav className="flex justify-between items-center">
                <div className="p-2">
                    <Link to="/"><GoHome className="h-6 w-6"/></Link>
                </div>
                <div className="flex items-center gap-x-2">
                    {generalLinks.map((link, index) => (
                        <Link key={index} to={link.href}><p className="text-sm text-slate-500 p-2 transition-all hover:underline hover:underline-offset-1">{link.name}</p></Link>
                    ))}
                    {isLoggedIn && (
                        <div className="p-2 relative">
                            <RxAvatar className="h-6 w-6" onClick={() => setShowDropdown((prev) => !prev)}/>
                            {
                                showDropdown && (
                                    <div className="absolute flex flex-col items-center right-2 top-10 rounded-md z-40 border border-gray-600">
                                        {loggedInLinks.map((loggedLink, loggedIndex) => (
                                            <Link key={loggedIndex} to={loggedLink.href}><p className="border border-gray-600 text-sm text-slate-500 p-2 transition-all hover:bg-gray-600 hover:text-white">{loggedLink.name}</p></Link>
                                        ))}
                                    </div>
                                )
                            }
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Navbar;