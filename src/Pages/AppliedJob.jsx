import { useLoaderData } from "react-router-dom";

const AppliedJob = () => {
    const jobs = useLoaderData();
    console.log(jobs)

    return (
        <div>
            <h1>applied jobbbbbb</h1>
        </div>
    );
};

export default AppliedJob;