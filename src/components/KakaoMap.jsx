import { useEffect, useRef } from "react";

function KakaoMap({ latitude, longitude, title }) {
    const mapRef = useRef(null);

    useEffect(() => {
        if (!latitude || !longitude) return;

        const lat = parseFloat(latitude);
        const lng = parseFloat(longitude);

        if (isNaN(lat) || isNaN(lng)) return;

        const loadKakaoMap = () => {
            const { kakao } = window;

            kakao.maps.load(() => {
                const container = mapRef.current;
                const options = {
                    center: new kakao.maps.LatLng(lat, lng),
                    level: 3,
                };

                const map = new kakao.maps.Map(container, options);
                setTimeout(() => map.relayout(), 100);

                const marker = new kakao.maps.Marker({
                    map,
                    position: new kakao.maps.LatLng(lat, lng),
                });

                const infowindow = new kakao.maps.InfoWindow({
                    content: `<div style="padding:6px;font-size:14px;">${title}</div>`,
                });
                infowindow.open(map, marker);
            });
        };

        if (window.kakao && window.kakao.maps) {
            loadKakaoMap();
        } else {
            const script = document.createElement("script");
            script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=443acdfb0df827f13186e681c2acda8c&autoload=false";
            script.async = true;
            script.onload = loadKakaoMap;
            document.head.appendChild(script);
        }
    }, [latitude, longitude, title]);

    return (
        <div
            ref={mapRef}
            style={{
                width: "100%",
                height: "400px",
                marginTop: "1rem",
                backgroundColor: "#eee",
                border: "1px solid #ccc",
            }}
        />
    );
}

export default KakaoMap;
