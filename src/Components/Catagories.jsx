import { use } from "react";

const catagoryPromise = fetch('/categories.json').then(res => res.json())

const Catagories = () => {
    const catagories = use(catagoryPromise)
    console.log(catagories)
    return (
        <div>
            <h2 className="font-bold">All Catagories</h2>
        </div>
    );
};

export default Catagories;