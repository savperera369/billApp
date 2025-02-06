const Signup = () => {
    return (
        <div className="min-h-screen p-4 flex items-center justify-center bg-white">
            <div className="bg-gray-100 p-4 rounded-md gap-y-2 w-1/2">
                <p className="text-xl font-bold text-center">Sign Up</p>
                <form className="flex flex-col items-start p-2 mt-2 w-full gap-y-3">
                    <label className="text-md font-semibold" htmlFor="email">Email</label>
                    <input 
                        type="text" 
                        required 
                        id="email" 
                        name="email" 
                        placeholder="Enter email"
                        className="border-none bg-white p-4 text-sm text-slate-500 rounded-lg w-full focus:outline-none"
                    />
                    <label className="text-md font-semibold" htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        required 
                        id="password" 
                        name="password" 
                        placeholder="Enter password"
                        className="border-none bg-white p-4 text-sm text-slate-500 rounded-lg w-full focus:outline-none"
                    />
                    <label className="text-md font-semibold" htmlFor="confirmPassword">Confirm Password</label>
                    <input 
                        type="password" 
                        required 
                        id="confirmPassword" 
                        name="confirmPassword" 
                        placeholder="Enter password again"
                        className="border-none bg-white p-4 text-sm text-slate-500 rounded-lg w-full focus:outline-none"
                    />
                    <button className="mx-auto mt-4 rounded-lg p-4 text-md font-semibold bg-gray-500 text-white transition-all hover:bg-gray-900 w-1/4">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;