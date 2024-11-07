import logo from "@assets/images/admin-logo.png";

const Register = () => {
    return ( 
        <>
            <div className="main border flex justify-center items-center  min-h-screen">
                <div className="container  p-8">
                    <div>
                        <img className="m-auto pb-6" src={logo} style={{height: "100px"}} />
                        <h2 className="text-2xl font-semibold pb-7 "> ثبت نام جدید</h2>
                        <p className="pb-4">
                        جهت ثبت نام لازم است موبایل و رمز عبور خود را وارد کنید
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
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 mb-3 leading-tight focus:outline-none focus:border-blue-500" id="password" required placeholder="**************"
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label block text-right ">تکرار رمز عبور</label>
                                    <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 mb-3 leading-tight focus:outline-none focus:border-blue-500" id="password" required placeholder="**************"
                                    />
                                </div>
                                <div className="text-center mt-3">
                                    <button type="submit" className="btn btn-lg btn-primary bg-blue-700 hover:bg-transparent border hover:border hover:border-solid hover:border-blue-500  text-white hover:text-blue-700 py-2 px-4 rounded">
                                        ثبت نام
                                    </button>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Register;