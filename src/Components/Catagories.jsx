import { use } from "react";
import { NavLink } from "react-router";

const catagoryPromise = fetch('/categories.json').then(res => res.json())

const Catagories = () => {
    const catagories = use(catagoryPromise)
    console.log(catagories)
    return (
        <div>
            <h2 className="font-bold">All Catagories</h2>

            <div className="flex flex-col gap-2 mt-5">
                {
                    catagories.map(catagory => 
                    <NavLink
                    key={catagory.id}
                    to={`/catagory/${catagory.id}`}
                    className="text-accent font-semibold btn bg-base-100 border-none justify-normal hover:bg-base-200 shadow-none pl-8"
                    >{catagory.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Catagories;