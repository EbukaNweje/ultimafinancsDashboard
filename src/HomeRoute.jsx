import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const HomeRoute = () => {
    const nav = useNavigate();

    useEffect(() => {
        nav("/login");
    }, []);

    return;
};

export default HomeRoute;
