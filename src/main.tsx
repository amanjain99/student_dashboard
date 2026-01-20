import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { FrontPage } from './pages/FrontPage'
import { EntryPage } from './pages/EntryPage'
import { StudentSummaryLayouts } from './pages/StudentSummaryLayouts'
import { Layout1 } from './pages/Layout1'
import { Layout2 } from './pages/Layout2'
import { Layout3 } from './pages/Layout3'
import { Layout4 } from './pages/Layout4'
import { Layout5 } from './pages/Layout5'
import { Layout6 } from './pages/Layout6'
import { SummaryLayout1 } from './pages/SummaryLayout1'
import { SummaryLayout2 } from './pages/SummaryLayout2'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/dashboard-layouts" element={<EntryPage />} />
        <Route path="/summary-layouts" element={<StudentSummaryLayouts />} />
        <Route path="/layout-1" element={<Layout1 />} />
        <Route path="/layout-2" element={<Layout2 />} />
        <Route path="/layout-3" element={<Layout3 />} />
        <Route path="/layout-4" element={<Layout4 />} />
        <Route path="/layout-5" element={<Layout5 />} />
        <Route path="/layout-6" element={<Layout6 />} />
        <Route path="/summary-layout-1" element={<SummaryLayout1 />} />
        <Route path="/summary-layout-2" element={<SummaryLayout2 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
