import Layout from "../Layout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function BoardWrite() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        subject: "",
        content: "",
        pwd: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost/api/boards/insert", form);
            navigate("/board/list");
        } catch (err) {
            console.error("글 작성 실패:", err);
            alert("서버 오류로 인해 글 작성에 실패했습니다.");
        }
    };

    return (
        <Layout>
            <header>
                <h1>글쓰기</h1>
            </header>

            <section>
                <form onSubmit={handleSubmit}>
                    <div className="fields">
                        {/* 제목 */}
                        <div className="field">
                            <label htmlFor="subject">제목</label>
                            <input type="text" name="subject" id="subject" value={form.subject} onChange={handleChange} required />
                        </div>

                        {/* 작성자 + 비밀번호 */}
                        <div className="field-row" style={{ display: "flex", gap: "1rem", marginTop: "5px" }}>
                            <div className="field" style={{ flex: 1 }}>
                                <label htmlFor="name">작성자</label>
                                <input type="text" name="name" id="name" value={form.name} onChange={handleChange} required />
                            </div>
                            <div className="field" style={{ flex: 1 }}>
                                <label htmlFor="pwd">비밀번호</label>
                                <input type="password" name="pwd" id="pwd" value={form.pwd} onChange={handleChange} required />
                            </div>
                        </div>

                        {/* 내용 */}
                        <div className="field" style={{ marginTop: "5px" }}>
                            <label htmlFor="content">내용</label>
                            <textarea
                                name="content"
                                id="content"
                                rows="10"
                                style={{ resize: "none" }}
                                value={form.content}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                    </div>

                    {/* 버튼 */}
                    <ul className="actions" style={{ marginTop: "5px" }}>
                        <li><button type="submit" className="primary">작성</button></li>
                        <li><button type="button" className="button" onClick={() => navigate("/board/list")}>목록</button></li>
                    </ul>
                </form>
            </section>
        </Layout>
    );
}

export default BoardWrite;
