import { useEffect, useState } from 'react';
import './App.css';
import { Content } from './components/Content/content.component';
import { MenuModal } from './components/Menu-Modal/menu-modal.component';
import { SplashScreen } from './components/Splash-Screen/splash-screen';
import { usePlaces } from './hooks/usePlaces';

function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const { loadPlaces } = usePlaces();

  useEffect(() => {
    loadPlaces();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      {isSplashVisible ? (
        <SplashScreen onFinish={() => setIsSplashVisible(false)} />
      ) : (
        <>
          <Content />
          <MenuModal />
        </>
      )}
    </div>
  );
}

export default App;
