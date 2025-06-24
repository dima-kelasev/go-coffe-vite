import { useEffect, useState } from 'react';
import * as S from './splash-screen.styles';

type Props = {
  onFinish: () => void;
};

export const SplashScreen = ({ onFinish }: Props) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onFinish, 1000); // дождаться окончания анимации
    }, 2000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <S.Container $fadeOut={fadeOut}>
      <S.LogoText>Go</S.LogoText>
      <S.LogoTextBold>Coffee</S.LogoTextBold>
      <S.VersionText>Version 1.0</S.VersionText>
    </S.Container>
  );
};
