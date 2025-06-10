
import React, {useEffect} from "react";
import Footer from "./main/Footer";
import {useDispatch, useSelector} from "react-redux";
import {fetchTodayEventList} from "../actions/eventAction";

function Sidebar() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodayEventList());
    }, [dispatch])

    const todayEvents = useSelector(state => state.events.eventToday);

    console.log(todayEvents);
    return (
        <div id="sidebar">
            <div className="inner">
                <section id="search" className="alt">
                    <form method="post" action="#">
                        <input type="text" name="query" id="query" placeholder="Search"/>
                    </form>
                </section>
                <nav id="menu">
                    <header className="major"><h2>Menu</h2></header>
                    <ul>
                        <li><a href="/">Homepage</a></li>
                        <li><a href="/event/list">Festival List</a></li>
                        <li><a href="/board/list">Free Board</a></li>

                        {/*<li><span className="opener">Submenu</span>
                            <ul>
                                <li><a href="#">Lorem Dolor</a></li>
                                <li><a href="#">Ipsum Adipiscing</a></li>
                                <li><a href="#">Tempus Magna</a></li>
                                <li><a href="#">Feugiat Veroeros</a></li>
                            </ul>
                        </li>*/}
                        {/*
                        <li><a href="#">Etiam Dolore</a></li>
                        <li><a href="#">Adipiscing</a></li>
                        <li><span className="opener">Another Submenu</span>
                            <ul>
                                <li><a href="#">Lorem Dolor</a></li>
                                <li><a href="#">Ipsum Adipiscing</a></li>
                                <li><a href="#">Tempus Magna</a></li>
                                <li><a href="#">Feugiat Veroeros</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Maximus Erat</a></li>
                        <li><a href="#">Sapien Mauris</a></li>
                        <li><a href="#">Amet Lacinia</a></li>
                        */}
                    </ul>
                </nav>
                <section>
                    <header className="major"><h2>오늘의 행사</h2></header>
                    <div className="mini-posts">
                        {todayEvents?.length > 0 ? (
                            todayEvents.map((event, idx) => (
                                <article key={idx}>
                                    <a href={`/event/detail/${event.content_id}`} className="image">
                                        <img src={event.first_image || "images/placeholder.jpg"} alt={event.title} />
                                    </a>
                                    <p>{event.title}</p>
                                </article>
                            ))
                        ) : (
                            <p>오늘의 행사가 없습니다.</p>
                        )}
                    </div>
                    <ul className="actions"><li><a href="#" className="button">More</a></li></ul>
                </section>
                <section>
                    <header className="major"><h2>Get in touch</h2></header>
                    <p>Proin sed aliquam facilisis ante interdum...</p>
                    <ul className="contact">
                        <li className="icon solid fa-envelope"><a href="#">information@untitled.tld</a></li>
                        <li className="icon solid fa-phone">(000) 000-0000</li>
                        <li className="icon solid fa-home">1234 Somewhere Road #8254<br/>Nashville, TN 00000-0000</li>
                    </ul>
                </section>
                <Footer />
            </div>
        </div>
    );
}

export default Sidebar;
