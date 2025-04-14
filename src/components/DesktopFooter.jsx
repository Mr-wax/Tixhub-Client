import { Link } from "react-router-dom";
import Logo from "./Logo";
import FooterCTA from "./FooterCTA";
import FooterSocials from "./FooterSocials";

const DesktopFooter = props => {
    return (
        <section className="hidden lg:flex h-[27.4rem] justify-between">
            <section className="h-full flex flex-col justify-between">
                <section><Logo /></section>
                <section>
                <p><Link to="tel:09036687238">+234 (0) 903-668-7238</Link></p>
                <p><Link to="mailto:support@tixhub.com">support@tixhub.com</Link></p>
                </section>
            </section>
            <section className="h-full flex gap-[8rem]">
                <section>
                    <h3>Services</h3>
                    <p><Link to="/sell-tickets">Create Event</Link></p>
                    <p><Link to="/sell-tickets">Sell Tickets</Link></p>
                    <p><Link to="#">Safety Tips</Link></p>
                    <p><Link to="/contact-us">Contact Us</Link></p>
                    <p><Link to="/faq">FAQs</Link></p>
                </section>
                <section>
                    <h3>About</h3>
                    <p><Link to="/about-us">About Tixhub</Link></p>
                    <p><Link to="#">Terms and Conditions</Link></p>
                    <p><Link to="#">Privacy Policy</Link></p>
                    <p><Link to="#">Cookie Policy</Link></p>
                    <p><Link to="#">Copyright Infringement Policy</Link></p>
                </section>
            </section>
            <section className="h-full flex flex-col justify-between">
                <section className="center">
                    <FooterCTA />
                    <FooterSocials />
                </section>
                <section className="text-right">
                    <p>&copy; {props.currentYear} — Tixhub</p>
                    <p>All Rights Reserved</p>
                </section>
            </section>
        </section>
    );
};

export default DesktopFooter;