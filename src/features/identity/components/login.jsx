import { Link } from "react-router-dom";
import logo from "@assets/images/admin-logo.png";
import Header from "@assets/Header.jsx";
// import Register from "./register";

const Login = () => {
    return ( 
        <>  
            <div className="main">
                <div className="header">
                    <Header />
                </div>
                <div className="flex justify-center items-center  min-h-screen">                
                    <div className="container  p-4">
                        <div>
                            <img className="m-auto pb-6" src={logo} style={{height: "100px"}} />
                            <h2 className="text-2xl font-semibold pb-7 text-blue-500 "> پنل مدیریت</h2>
                            <p className="pb-3">
                            جهت ورود لازم است از طریق موبایل و رمز عبور خود اقدام کنید
                            </p>
                            <p className="pb-3">
                            قبلا ثبت نام نکرده اید؟
                            <Link to="/register" className="px-5 text-xs text-blue-600 hover:text-blue-900">ثبت نام کنید </Link>
                            </p>
                        </div>
                        <div className="card border rounded-md bg-white w-96 ">
                            <div className="card-body ">
                                <div className="m-sm-4 p-10 ">
                                    <form>
                                    <div className="mb-2">
                                        <label className="form-label block p-1 text-right">موبایل</label>
                                        <input
                                        type="text"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:border-blue-500" maxLength="11" minLength="11" required id="Tel" placeholder="تلفن همراه"
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label block text-right ">رمز عبور</label>
                                        <input
                                        type="password"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 mb-3 leading-tight focus:outline-none focus:border-blue-500" id="password" placeholder="**************"
                                        />
                                    </div>
                                    <div className="text-center mt-3">
                                        <button type="submit" className="btn btn-lg btn-primary bg-blue-700 hover:bg-transparent border hover:border hover:border-blue-500  text-white hover:text-blue-700 py-2 px-4 rounded transition-all">
                                        وارد شوید
                                        </button>
                                    </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </>
     );
}
 
export default Login;