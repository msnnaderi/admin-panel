import language from "./images/middle-east.png";
import moon from "./images/moon.png";

const Header = () => {
    return ( 
        <div className="m-4 p-2 block absolute fixed top-0 flex flex-wrap">
            <img className="cursor-pointer px-3 hover:scale-110 transition-all	" src={moon} style={{height: "30px"}} alt="Dark or Light" />
            <img className="cursor-pointer hover:scale-110 transition-all" src={language} style={{height: "30px"}} alt="Language" />
        </div>
     );
}
 
export default Header;