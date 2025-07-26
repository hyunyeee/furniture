"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    kakao: typeof kakao;
  }
}

const LocationMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = mapRef.current;
        if (!container) return;

        const center = new window.kakao.maps.LatLng(
          37.1366714253877,
          126.836807751543,
        );

        const mapOption = {
          center,
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, mapOption);

        const markerPosition = new window.kakao.maps.LatLng(
          37.1366714253877,
          126.836807751543,
        );

        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        marker.setMap(map);
      });
    };

    if (window.kakao && window.kakao.maps) {
      loadKakaoMap();
    } else {
      const script = document.createElement("script");
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&autoload=false`;
      script.async = true;
      script.onload = loadKakaoMap;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full">
      <div
        ref={mapRef}
        className="mt-[60px] h-[250px] w-full rounded-md shadow sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px]"
        style={{ maxWidth: "100%" }}
      />
    </div>
  );
};

export default LocationMap;
