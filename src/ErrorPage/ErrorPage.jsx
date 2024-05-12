import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className=" flex flex-col my-96 space-y-4 justify-center items-center">
            <h1 className="text-5xl text-yellow-500 font-bold ">Opps !!!</h1>
            <Link to={'/'}><button className="btn bg-green-500 px-8 font-lato text-2xl">Go Back</button></Link>

       

        </div>
    );
};

export default ErrorPage;