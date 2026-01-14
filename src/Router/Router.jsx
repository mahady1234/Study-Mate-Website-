import { createBrowserRouter } from "react-router-dom";
import AuthRoot from "../AuthRoot/AuthRoot";
import Root from "../Root/Root";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ProfilePage from "../Pages/ProfilePage";
import Home from "../Components/Home";
import PartnerDetails from "../Components/PartnerDetails";
import PrivateRoute from "../Auth/PrivateRoute";
import FindPartners from "../Pages/FindPartners";
import CreateProfile from "../Pages/CreateAProfile";
import MyConnections from "../Pages/MyConnection";
import About from "../Components/About";
import Policy from "../Components/Policy";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import DashboardHome from "../Components/DashboardHome";
import Profile from "../Pages/ProfilePage";
import AllUser from "../Components/AllUser";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'profile',
                element: <PrivateRoute><ProfilePage /></PrivateRoute>
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'policy',
                element: <Policy></Policy>
            },
            {
                path: 'details/:id',
                element: <PrivateRoute> <PartnerDetails /></PrivateRoute>
            }
        ]
    },
    {
        path: 'authRoot',
        element: <AuthRoot />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'findPartners',
                element: <PrivateRoute><FindPartners></FindPartners></PrivateRoute>
            },
            {
                path: 'createProfile',
                element: <PrivateRoute><CreateProfile></CreateProfile></PrivateRoute>
            },
            {
                path: 'myConnections',
                element: <PrivateRoute><MyConnections></MyConnections></PrivateRoute>
            },
        ]
    },
    {
        path: '/dashBoard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                index: true,
                element: <PrivateRoute><DashboardHome /></PrivateRoute>
            },

            {
                path: 'profile',
                element: <PrivateRoute><Profile /></PrivateRoute>
            },
            {
                path: 'allUser',
                element: <AllUser />
            }
        ]
    },


    {
        path: '*',
        element: (
            <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 text-gray-200">
                <img
                    src="https://media.istockphoto.com/id/2207745244/photo/modern-cybersecurity-visualization-depicting-a-digital-network-threat-alert.webp?a=1&b=1&s=612x612&w=0&k=20&c=3paiBm6FZL28WXjk5EpTCY4CQ-uKR_8Io6o5vwmjFI4="
                    alt="404 Error"
                    className="w-6/12 max-w-md mb-6 rounded-lg shadow-lg"
                />
                <h1 className="text-3xl font-bold mb-2">Page Not Found</h1>
                <p className="text-gray-400 mb-4">
                    Sorry, the page you are looking for does not exist.
                </p>
                <a
                    href="/"
                    className="px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-600 transition"
                >
                    Go to Home
                </a>
            </div>
        )
    }
]);

export default router;