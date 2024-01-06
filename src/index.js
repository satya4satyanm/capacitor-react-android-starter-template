import React, { useEffect } from "react";
import { createRoot } from 'react-dom/client';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Splash } from "./pages/splash";
import { Dashboard } from "./pages/dashboard";
import { List } from "./pages/list";
import { AdMob, BannerAdSize, BannerAdPosition } from "@capacitor-community/admob";

export default function ListApp() {
  useEffect(() => {
    AdMob.initialize({
      requestTrackingAuthorization: true,
    });
    showBanner();
  }, []);

  const showBanner = async () => {
    const options = {
      // adId: 'ca-app-pub-3940256099942544/6300978111', // testid
      adId: 'ca-app-pub-3343385617948229/3791827462',// real
      adSize: BannerAdSize.ADAPTIVE_BANNER,
      position: BannerAdPosition.BOTTOM_CENTER,
      hasTabBar: true, // make it true if you have TabBar Layout.
      tabBarHeight: 56 // you can assign custom margin in pixel default is 56
    };
    await AdMob.showBanner(options);
  };

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="splash" element={<Splash />} />
            <Route path="list" element={<List />} />
            <Route path="*" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<ListApp />);