import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";

const routes = [
    {
        path: "/",
        element: <LoginPage />
    },
    {
        path: "/signup",
        element: <SignupPage />
    }
]

export default routes