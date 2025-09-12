const apiUrl = "https://tixhub-server.onrender.com/tixhub";

const currentEventLoader = async ({ params }) => {
    try {
        const response = await fetch(`${apiUrl}/event/${params.id}`),
        data = await response.json();

        return data.data.event;
    } catch(error) {
        throw Error("CodeDreadnaught, Tixhub is unable to fetch this event due to network issues.");
    }
};

export { currentEventLoader };