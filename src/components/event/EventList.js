import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Layout from "../Layout";
import { fetchEventList } from "../../actions/eventAction";
import {Link} from "react-router-dom";

function EventList() {
    const dispatch = useDispatch();
    const { eventList, totalPage, page } = useSelector(state => state.events);
    const [curPage, setCurPage] = useState(0);

    const totalPages = totalPage;

    const blockSize = 10; // 한 번에 보여줄 페이지 수
    const currentBlock = Math.floor(curPage / blockSize);
    const startPage = currentBlock * blockSize;
    const endPage = Math.min(startPage + blockSize, totalPages);

    useEffect(() => {
        dispatch(fetchEventList(curPage));
    }, [dispatch, curPage]);

    const handlePageClick = (pageNum) => {
        setCurPage(pageNum);
    };

    const handlePrev = () => {
        if (startPage > 0) {
            setCurPage(startPage - 1);
        }
    };

    const handleNext = () => {
        if (endPage < totalPages) {
            setCurPage(endPage);
        }
    };

    return (
        <Layout>
            <div id="wrapper">
                <div id="main">
                    <div className="inner">
                        <header>
                            <h1>행사 목록</h1>
                            <p>진행 중인 다양한 행사들을 한눈에 확인하세요.</p>
                        </header>

                        <section>
                            {Array.isArray(eventList) && eventList.map((event, index) => (
                                <Link to={`/event/detail/${event.content_id}`} key={event.content_id} style={{ textDecoration: "none", color: "inherit" }}>
                                <div className="box" key={index} style={{ display: "flex", gap: "2rem", marginBottom: "2rem" }}>
                                    <div style={{ flex: "0 0 300px" }}>
                                        <img
                                            src={event.first_image}
                                            alt="이벤트 이미지"
                                            style={{ width: "100%", height: "auto", borderRadius: "5px" }}
                                        />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <h2>{event.title}</h2>
                                        <p>{event.addr1}</p>
                                        <p>{event.infotext}</p>
                                    </div>
                                </div>
                                </Link>
                            ))}
                        </section>

                        {/* Pagination */}
                        <div className="col-12">
                            <div className="pagination-area d-sm-flex mt-15">
                                <nav>
                                    <ul className="pagination">
                                        {startPage > 0 ? (
                                            <li>
                                                <a href="#" className="button" onClick={(e) => { e.preventDefault(); handlePrev(); }}>Prev</a>
                                            </li>
                                        ) : (
                                            <li>
                                                <span className="button disabled">Prev</span>
                                            </li>
                                        )}

                                        {Array.from({ length: endPage - startPage }, (_, i) => {
                                            const pageNum = startPage + i;
                                            return (
                                                <li key={pageNum}>
                                                    <a
                                                        href="#"
                                                        className={`page ${pageNum === curPage ? "active" : ""}`}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handlePageClick(pageNum);
                                                        }}
                                                    >
                                                        {pageNum + 1}
                                                    </a>
                                                </li>
                                            );
                                        })}

                                        {endPage < totalPages ? (
                                            <li>
                                                <a href="#" className="button" onClick={(e) => { e.preventDefault(); handleNext(); }}>Next</a>
                                            </li>
                                        ) : (
                                            <li>
                                                <span className="button disabled">Next</span>
                                            </li>
                                        )}
                                    </ul>

                                </nav>
                                <div className="page-status">
                                    <p>Page {curPage + 1} of {totalPages}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default EventList;
