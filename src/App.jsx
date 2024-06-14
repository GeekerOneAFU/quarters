import 'react-toastify/dist/ReactToastify.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider'
import { ToastContainer } from 'react-toastify'
import Signup from './pages/Signup'
import Verification from './pages/Verification'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import ProtectedRoute from './private/ProtectedRoute'
import AdminRoutes from './routes/AdminRoutes'

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <ToastContainer />
                <Routes>
                    <Route path="*" element={<NotFound />} />
                    <Route path="/" element={<Signup />} />
                    <Route path="/verify" element={<Verification />} />
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/admin/*"
                        element={
                            <ProtectedRoute roles={['admin']}>
                                <AdminRoutes />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/unauthorized" element={<div>Unauthorized Access</div>} />
                </Routes>
            </Router>
        </AuthProvider>
    )
}

export default App