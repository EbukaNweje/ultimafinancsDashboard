import { RouterProvider, createHashRouter } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Forgottenpassword from "./pages/Auth/Forgottenpassword";
import Reset from "./pages/Auth/Reset";
import Verify from "./pages/Auth/Verify";
import ErrorPage from "./components/ErrorPage";
import DashboardHome from "./pages/dashboard/DashboardHome";
import DashboardRoute from "./routes/DashboardRoute";
import Deposit from "./pages/dashboard/Deposit";
import DepositPay from "./pages/dashboard/DepositPay";
import MyPlans from "./pages/dashboard/MyPlans";
import NewWithdrawal from "./pages/dashboard/NewWithdrawal";
import NewBonus from "./pages/dashboard/NewBonus";
import Investments from "./pages/dashboard/Investments";
import InvestmentsView from "./pages/dashboard/InvestmentsView";
import DepositHistoryView from "./pages/dashboard/DepositHistoryView";
import Withdrawals from "./pages/dashboard/Withdrawals";
import DepositHistory from "./pages/dashboard/DepositHistory";
import MyWithdrawal from "./pages/dashboard/MyWithdrawal";
import Profile from "./pages/dashboard/Profile";
import Referral from "./pages/dashboard/Referral";
import Profit from "./pages/dashboard/Profit";
import Investmentpay from "./pages/dashboard/Investmentpay";

const App = () => {
  const router = createHashRouter([
    {
      path: "",
      element: <Login />,
    },
    {
      path: "register",
      element: <Signup />,
    },
    {
      path: "forgotten-password",
      element: <Forgottenpassword />,
    },
    {
      path: "reset-password/:id/:token",
      element: <Reset />,
    },
    {
      path: "verify",
      element: <Verify />,
    },
    {
      path: "/dashboard",
      errorElement: <ErrorPage />,
      element: <DashboardRoute element={<Dashboard />}></DashboardRoute>,
      children: [
        { path: "", element: <DashboardHome /> },
        { path: "deposit", element: <Deposit /> },
        { path: "deposit-pay", element: <DepositPay /> },
        { path: "my-plans", element: <MyPlans /> },
        { path: "new-withdrawal", element: <NewWithdrawal /> },
        { path: "new-bonus", element: <NewBonus /> },
        { path: "my-invest", element: <Investments /> },
        { path: "my-invests/:id", element: <InvestmentsView /> },
        { path: "my-deposit/:id", element: <DepositHistoryView /> },
        { path: "withdraw-details/:id", element: <Withdrawals /> },
        { path: "my-deposit", element: <DepositHistory /> },
        { path: "my-withdrawal", element: <MyWithdrawal /> },
        { path: "profile", element: <Profile /> },
        { path: "referus", element: <Referral /> },
        { path: "profit", element: <Profit /> },
        { path: "Investmentpay", element: <Investmentpay /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
