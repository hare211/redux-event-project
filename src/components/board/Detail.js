import { useParams, useNavigate } from "react-router-dom";
import Layout from "../Layout";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchBoardDetails} from "../../actions/boardAction";

function BoardDetail() {
    const { no } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const boardDetails = useSelector(state => state.boards.boardDetails);

    useEffect(() => {
        dispatch(fetchBoardDetails(no));
    }, [dispatch, no]);

    if (!boardDetails) return <div>로딩 중...</div>;

    return (
        <Layout>
            <header>
                <h1>글 상세보기</h1>
            </header>
            <section>
                <h2>{boardDetails.subject}</h2>
                <p>작성자: {boardDetails.name}</p>
                <p>작성일: {boardDetails.regdate}</p>
                <p>조회수: {boardDetails.hit}</p>
                <hr />
                <p>{boardDetails.content}</p>
                <button onClick={() => navigate(`/board/list`)}>목록</button>
            </section>
        </Layout>
    );
}

export default BoardDetail;
