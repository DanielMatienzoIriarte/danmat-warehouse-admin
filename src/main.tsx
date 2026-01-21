import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import ScreenHeader from './components/header/ScreenHeader';
import ScreenBody from './components/body/ScreenBody';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <section className="body">
      <ScreenHeader />
      <ScreenBody />
    </section>
  </StrictMode>,
)