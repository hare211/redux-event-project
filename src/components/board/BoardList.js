import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Layout";
import { Link } from "react-router-dom";
import {fetchBoardList} from "../../actions/boardAction";

function BoardList() {
    const dispatch = useDispatch();
    const boardList = useSelector(state => state.boards.boardList); // 예시용, 실데이터 필요

    useEffect(() => {
        dispatch(fetchBoardList());
    }, [])

    return (
        <Layout>
            <header>
                <h1>자유게시판</h1>
                <p>누구나 자유롭게 의견을 나눌 수 있는 공간입니다.</p>
            </header>

            <section>
                <div className="table-wrapper">
                    <table>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>날짜</th>
                            <th>조회수</th>
                        </tr>
                        </thead>
                        <tbody>
                        {boardList && boardList.map((item, idx) => (
                            <tr key={item.no}>
                                <td>{idx + 1}</td>
                                <td><Link to={`/board/detail/${item.no}`}>{item.subject}</Link></td>
                                <td>{item.name}</td>
                                <td>{item.regdate}</td>
                                <td>{item.hit}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                <ul className="actions">
                    <li><Link to="/board/write" className="button primary">글쓰기</Link></li>
                </ul>
            </section>
        </Layout>
    );
}

export default BoardList;
