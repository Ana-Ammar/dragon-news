import { format } from "date-fns";
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className="space-y-4">
            <img src={logo} className="mx-auto" />
            <p className="text-accent text-center">Journalism Without Fear or Favour</p>
            <p className="text-accent text-center font-semibold">{format(new Date (), "EEEE, MMMM d, yyyy")}</p>
        </div>
    );
};

export default Header;