import { Link } from "react-router-dom";
import Logo from "./Logo";
import FooterSocials from "./FooterSocials";

const MobileFooter = props => {
    return (
        <section className="lg:hidden center text-center">
           <Logo />
           <section className="my-[1.6rem]">
            <p><Link to="/about-us">About Tixhub</Link></p>
           </section> 
           <section>
            <h3>Contact</h3>
            <p><Link to="tel:09036687238">+234 (0) 903-668-7238</Link></p>
            <p><Link to="mailto:support@tixhub.com">support@tixhub.com</Link></p>
           </section>
           <section className="my-[1.6rem]">
            <h3>Follow Us</h3>
            <FooterSocials />
           </section>
           <section>
           <p>&copy; {props.currentYear} — Tixhub</p>
           <p>All Rights Reserved</p>
           </section>
        </section>
    );
};

export default MobileFooter;