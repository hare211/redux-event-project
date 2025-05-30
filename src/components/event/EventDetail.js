import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchEventDetail } from "../../actions/eventAction";
import Layout from "../Layout";
import KakaoMap from "../KakaoMap";
import DOMPurify from "dompurify";

function EventDetail() {
    const { content_id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const eventDetail = useSelector(state => state.events.eventDetail);

    useEffect(() => {
        dispatch(fetchEventDetail(content_id));
    }, [dispatch, content_id]);

    return (
        <Layout>
            <h2>이벤트 상세 페이지</h2>
            <p>선택한 content_id: {content_id}</p>

            {eventDetail?.first_image && (
                <img src={eventDetail.first_image} alt={eventDetail.title} style={{ maxWidth: "100%" }} />
            )}

            <div className={"box"}>
                <h4>{eventDetail.title}</h4>
                <h4>{eventDetail.addr1}</h4>

                {eventDetail.mapy && eventDetail.mapx && (
                    <KakaoMap
                        latitude={eventDetail.mapy}
                        longitude={eventDetail.mapx}
                        title={eventDetail.title}
                    />
                )}

                {eventDetail.info?.map((item, idx) => (
                    <div key={idx}>
                        <h4
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(item.infoname),
                            }}
                        ></h4>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(item.infotext),
                            }}
                        ></p>
                    </div>
                ))}
            </div>
        </Layout>
    );
}

export default EventDetail;
