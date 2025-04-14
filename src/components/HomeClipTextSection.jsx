import { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";

const HomeClipTextSection = () => {
    const { token } = useContext(AppContext);

    return (
        <div className="h-[19.3rem] lg:h-[47.4rem] bg-white center">
            <section className="text-center center">
                <h2 className="clip-text-section font-bold font-inter leading-[2.905rem] lg:leading-[7.745rem] bg-cover bg-center text-[2.4rem] lg:text-[6.4rem] mb-[2rem] lg:mb-[4.8rem]">{token ? "Got an Event to Plan?" : "Looking to Buy Tickets?"}</h2>
                <Link to={token ? "/sell-tickets" : "/find-events"}><button className="font-montserrat rounded-[60px] px-[3.2rem] py-[1.4rem] lg:px-[6.4rem] lg:py-[1.6rem] border border-primaryPurple lg:text-[2.4rem] center leading-[1.95rem] lg:leading-[2.926rem] font-medium">{token ? "Create an Event" : "Find Events"}</button></Link>
            </section>
        </div>
    );
};

export default HomeClipTextSection;