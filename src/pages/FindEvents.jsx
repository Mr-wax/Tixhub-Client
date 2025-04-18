import { useState, useEffect, useContext } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import AppContext from "../context/AppContext";
import { fetchAllEvents } from "../requests/APIRequest";
import SharedHeroSection from "../components/SharedHeroSection";
import SharedHeroDivider from "../components/SharedHeroDivider";
import EventSectionWrapper from "../components/EventSectionWrapper";
import FindEventDefaultResults from "../components/FindEventDefaultResults";
import { FaExclamationTriangle } from "react-icons/fa";

const FindEvents = () => {
    const [ displayedElement, showDisplayedElement ] = useState(<FindEventDefaultResults />);

    const { allEvents, setAllEvents } = useContext(AppContext);

    useEffect(() => {
        fetchAllEvents()
        .then(data => setAllEvents(data));
    }, []);

    return (
        <HelmetProvider>
            <Helmet>
                <meta name="description" content="Tixhub, explore a world of exciting events – from electrifying concerts and thrilling sports games to captivating theater performances and vibrant festivals." />
                <meta property="og:description" content="Tixhub, explore a world of exciting events – from electrifying concerts and thrilling sports games to captivating theater performances and vibrant festivals." />
                <title>Find Events | Tixhub</title>
                </Helmet>
            <main>
                <SharedHeroSection findEventspage={true} showDisplayedElement={showDisplayedElement} showHeroSearchBar={true} findEvents="event-hero" width="lg:w-[87.1rem]" heading="Discover Your Next Adventure with Tixhub" text="Explore a world of exciting events – from electrifying concerts and thrilling sports games to captivating theater performances and vibrant festivals" />
                <SharedHeroDivider />
                {allEvents.length > 0 ? <EventSectionWrapper displayedElement={displayedElement} /> : 
                <section className="text-center center font-montserrat px-[1.6rem] lg:px-[8.8rem] mb-[2.4rem] lg:mb-[4rem]">
                    <FaExclamationTriangle className="text-[4.5rem] lg:text-[6rem] text-yellow-500"/>
                    <p className="font-semibold my-[1rem]">There might be an issue with your internet connection, we are actively reloading this page to show you all available events.</p>
                </section>
                }
            </main>
        </HelmetProvider>
    );
};

export default FindEvents;