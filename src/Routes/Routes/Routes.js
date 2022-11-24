import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Appointment from "../../Page/Appointment/Appointment/Appointment";
import AddDoctor from "../../Page/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../../Page/Dashboard/Dashboard/AllUsers/AllUsers";
import Payment from "../../Page/Dashboard/Dashboard/Payment/Payment";
import ManageDoctors from "../../Page/Dashboard/ManageDoctors/ManageDoctors";
import MyAppointment from "../../Page/Dashboard/MyAppointment/MyAppointment";
import Home from "../../Page/Home/Home/Home";
import Login from "../../Page/Login/Login";
import DisplayError from "../../Page/Shared/DisplayError/DisplayError";
import SignUp from "../../Page/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element:<MyAppointment></MyAppointment>

            },
            {
                path: '/dashboard/allUsers',
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>

            },
            {
                path: '/dashboard/addDoctor',
                element:<AdminRoute><AddDoctor></AddDoctor></AdminRoute>

            },
            {
                path: '/dashboard/manageDoctors',
                element:<AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>

            },
            {
                path: '/dashboard/payment/:id',
                element:<Payment></Payment>,
                loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)

            },
        ]
    }
]);