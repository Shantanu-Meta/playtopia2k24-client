import { MoveLeft, MoveRight, Trash, UserRound } from "lucide-react";
import { useContext, useState } from "react";
import userContext from "../contextAPI/createUserContext";

export const All_Registration = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const {players, setPlayers, deletePlayer} = useContext(userContext); 
    const usersPerPage = 5;

    // Logic to calculate pagination
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = players.slice(indexOfFirstUser, indexOfLastUser);

    // Function to handle pagination navigation
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Function to handle user deletion
    const deleteUser = (index) => {
        deletePlayer(players[index]); 
        const updatedUsers = [...players];
        updatedUsers.splice(indexOfFirstUser + index, 1); // Remove user at specified index
        setPlayers(updatedUsers);
    };

    return (
        <section className="px-4 mx-auto heading pt-5 min-h-screen h-screen bg-slate-600">
            <h1 className="text-center heading text-5xl text-black">Admin Panel</h1>
            <div className="flex mt-4 items-center gap-x-3">
                <h2 className="text-lg font-medium text-gray-800">All Registered Users</h2>
                <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">{players.length}</span>
            </div>
            <div className="flex flex-col mt-6">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y bg-slate-400">
                        <thead className="bg-green-400 text-black divide-y divide-gray-200">
                            <tr>
                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right">
                                    <div className="flex items-center gap-x-3">
                                        <span>Name</span>
                                    </div>
                                </th>
                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right">Enrolled Event</th>
                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right">Events name</th>
                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right">
                                    <span>Team Name</span>
                                </th>
                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right">Team Members</th>
                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right">Edit</th>
                            </tr>
                        </thead>
                        <tbody className="bg-slate-700 divide-y divide-gray-200">
                            {/* Map through current users */}
                            {currentUsers.map((user, index) => (
                                <tr key={index}>
                                    <td className="px-4 py-4 text-sm font-medium text-white whitespace-nowrap">
                                        <div className="inline-flex items-center gap-x-3">
                                            <div className="flex items-center gap-x-2">
                                                <UserRound/>
                                                <div>
                                                    <h2 className="font-medium text-white">{user.name}</h2>
                                                    <p className="text-sm font-normal text-gray-400">{user.email}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 text-sm text-white whitespace-nowrap">{user.allEvents.length}</td>
                                    <td className="px-4 py-4 text-sm text-gray-200 whitespace-nowrap">
                                        {/* Map event names */}
                                        {user.allEvents.map((eventName, index) => (
                                            <span key={index} className="inline-block px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-200 rounded-md mr-1">{eventName}</span>
                                        ))}
                                    </td>
                                    <td className="px-4 py-4 text-sm text-white whitespace-nowrap">{user.teamName ? user.teamName : "NULL"}</td>
                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                        <div className="flex items-center">
                                            {/* Map through teams */}
                                            {user.teams.map((team, index) => (
                                                <span key={index} className="inline-block px-2 py-1 text-xs text-gray-200 mr-1">{team.player}</span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                        <div className="flex items-center gap-x-6">
                                            <button onClick={() => deleteUser(index)} className="text-gray-200 transition-colors duration-200 hover:text-gray-800 focus:outline-none">
                                                <Trash className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pagination controls */}
            <div className="flex items-center justify-between mt-6">
                <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100">
                    <MoveLeft className="w-5 h-5 rtl:-scale-x-100" />
                    <span>Previous</span>
                </button>
                {/* Page numbers */}
                <div className="items-center hidden lg:flex gap-x-3">
                    {/* Map through total number of pages */}
                    {Array.from({ length: Math.ceil(players.length / usersPerPage) }, (_, i) => (
                        <button key={i} onClick={() => paginate(i + 1)} className={`px-2 py-1 text-sm rounded-md ${currentPage === i + 1 ? 'bg-blue-500 text-white hover:bg-blue-800' : 'text-gray-500 hover:bg-gray-100'}`}>{i + 1}</button>
                    ))}
                </div>
                <button onClick={() => paginate(currentPage + 1)} disabled={indexOfLastUser >= players.length} className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100">
                    <span>Next</span>
                    <MoveRight className="w-5 h-5 rtl:-scale-x-100" />
                </button>
            </div>
        </section>
    );
};
