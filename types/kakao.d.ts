export {};

declare global {
  interface Window {
    kakao: {
      maps: typeof kakao.maps;
    };
  }

  const kakao: {
    maps: {
      load: (callback: () => void) => void;
      Map: new (container: HTMLElement, options: any) => any;
      LatLng: new (lat: number, lng: number) => any;
      Marker: new (options: any) => any;
      MapTypeId: any;
      ControlPosition: any;
      ZoomControl: new () => any;
    };
  };
}
