import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Loading from './components/loading/Loading.jsx'
const App=lazy(() => import('./App.jsx'))
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<Loading/>}>
        <App />
    </Suspense>
  </StrictMode>,
)
