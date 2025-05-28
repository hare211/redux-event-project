import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMainData } from "../../actions/mainAction";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        const script = document.createElement("script");
        script.src = process.env.PUBLIC_URL + "/assets/js/main.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    useEffect(() => {
        dispatch(fetchMainData());
    }, [dispatch]);

    const mainData = useSelector(state => state.mains.main_data);

    return (
        <div id="wrapper">
            <div id="main">
                <div className="inner">
                    <Header />
                    <section id="banner">
                        <div className="content">
                            <header>
                                <h1>Hi, I’m Editorial<br/>by HTML5 UP</h1>
                                <p>A free and fully responsive site template</p>
                            </header>
                            <p>...</p>
                            <ul className="actions">
                                <li><a href="#" className="button big">Learn More</a></li>
                            </ul>
                        </div>
                        <span className="image object">
                            <img src={mainData.length > 0 ? mainData[0].first_image : "images/pic10.jpg"} alt={mainData.length > 0 ? mainData[0].title : "Default"} />
                        </span>
                    </section>

                    <section>
                        <header className="major"><h2>행사 및 축제</h2></header>
                        <div className="posts">
                            {mainData && mainData.map((event, i) =>
                                <article key={i}>
                                    <a href="#" className="image"><img src={event.first_image} alt="" className="fixed-size-img"/></a>
                                    <h3>{event.title}</h3>
                                    <p>{event.addr1}</p>
                                    <ul className="actions">
                                        <li><a href="#" className="button">More</a></li>
                                    </ul>
                                </article>
                            )}
                        </div>
                    </section>
                </div>
            </div>
            <Sidebar />
        </div>
    );
}

export default Home;
