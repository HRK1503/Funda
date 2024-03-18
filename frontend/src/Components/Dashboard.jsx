import dashboard from "../images/dashboard.png"
import chatbot from "../images/chatbot.png"
import income from "../images/wallet-receive.png"
import expense from "../images/wallet-send.png"
import signout from "../images/sign-out.png"
import profile from "../images/profile.png"
function Dashboard() {
    return <>
        <div className="bg-white border rounded-3xl h-max w-1/5 my-10 ml-10 overflowy-auto">
            <div className="flex flex-col justify-center my-5">
                <div className="flex justify-center">
                    <div className="flex flex-col items-center">
                        <img src={profile} alt="profile" style={{ height: "100px", width: "100px" }} />
                        <p className="text-darkGreen text-2xl my-2">Hitarth Kotecha</p>
                        <div className="flex flex-col text-lightGreen text-left">
                            <p>kotechahitarth@gmail.com</p>
                            <p>+91 6353724474</p>
                            <p>Monthly Income:50000</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center mb-2 my-16 ml-10 hover:cursor-pointer">
                    <img src={dashboard} alt="dashboard" style={{ height: "35px", width: "35px" }} />
                    <p className="text-lightGreen text-xl ml-2 ">Dashboard</p>
                </div>

                <div className="flex items-center mb-2 my-4 ml-10 hover:cursor-pointer">
                    <img src={income} alt="income" style={{ height: "35px", width: "35px" }} />
                    <p className="text-lightGreen text-xl ml-2">Additional Income</p>
                </div>

                <div className="flex items-center mb-2 my-4 ml-10 hover:cursor-pointer">
                    <img src={expense} alt="expense" style={{ height: "35px", width: "35px" }} />
                    <p className="text-lightGreen text-xl ml-2">Expense</p>
                </div>

                <div className="flex items-center mb-2 my-4 ml-10 hover:cursor-pointer">
                    <img src={chatbot} alt="chatbot" style={{ height: "35px", width: "35px" }} />
                    <p className="flex text-lightGreen text-xl ml-2">fundAI</p>
                </div>

                <div className="flex items-center mb-2 my-24 ml-10 hover:cursor-pointer">
                    <img src={signout} alt="signout" style={{ height: "35px", width: "35px" }} />
                    <p className="flex text-lightGreen text-xl ml-2">Sign Out</p>
                </div>
            </div>
        </div>


    </>
}

export default Dashboard;