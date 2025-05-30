import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEventDetails, fetchMainData } from "../../actions/mainAction";
import Layout from "../Layout";

function Home() {
    const dispatch = useDispatch();

    /*
    useEffect(() => {
        const script = document.createElement("script");
        script.src = process.env.PUBLIC_URL + "/assets/js/main.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);
     */

    useEffect(() => {
        dispatch(fetchMainData());
        dispatch(fetchEventDetails());
    }, [dispatch]);

    const mainData = useSelector(state => state.mains.main_data);
    const eventDetails = useSelector(state => state.mains.event_details) || [];

    return (
        <Layout>
            {eventDetails.length > 8 &&
                (
                <section id="banner">
                    <div className="content">
                        <header>
                            <h1>{eventDetails[8].title}</h1>
                            <p>{eventDetails[8].addr1}</p>
                        </header>
                        <p>{eventDetails[8].infotext}</p>
                        <ul className="actions">
                            <li><a href="#" className="button big">Learn More</a></li>
                        </ul>
                    </div>
                    <span className="image">
                        <img src={eventDetails[8].first_image} alt=" " />
                    </span>
                </section>
                )
            }

            <section>
                <header className="major">
                    <h2>행사 및 축제</h2>
                </header>
                <div className="posts">
                    {eventDetails.map((details, i) => (
                        <article key={i}>
                            <a href="#" className="image">
                                <img
                                    src={details.first_image}
                                    alt=""
                                    className="fixed-size-img"
                                />
                            </a>
                            <h3>{details.title}</h3>
                            <p>{details.addr1}</p>
                            <p>{details.infotext}</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </article>
                    ))}
                </div>
            </section>
        </Layout>
    );
}

export default Home;
