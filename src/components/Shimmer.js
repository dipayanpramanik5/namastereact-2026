import { ShimmerRestroCard } from "./ShimmerRestroCard";

const Shimmer = () => {
    return (
        <>
            <div className="flex space-around">
                <div className="search m-4 p-4">
                    <input
                        type="text"
                        className="border p-2 rounded-lg"
                    />
                    <button className="m-4 p-4 bg-gray-200 rounded-lg"> </button>
                </div>
                <div className="search m-4 p-4">
                    <button
                        className="m-4 p-4 bg-gray-200 rounded-lg"
                    >
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap">
                <ShimmerRestroCard />
                <ShimmerRestroCard />
                <ShimmerRestroCard />
                <ShimmerRestroCard />
                <ShimmerRestroCard />
                <ShimmerRestroCard />
                <ShimmerRestroCard />
                <ShimmerRestroCard />
                <ShimmerRestroCard />
            </div>
        </>
    );
}

export default Shimmer;