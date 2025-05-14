export const ShimmerRestroMenu = () => {
    return (
        <>
            <div className="text-center h-[100px] flex flex-col justify-center items-center">
                <h1 className="font-bold my-6 text-2xl shadow-2xl"></h1>
                <p className="font-bold text-lg">
                </p>
                <div>
                    <label className="flex items-center space-x-2 justify-center my-4">

                        <input
                            type="checkbox"
                            className="form-checkbox text-center"
                        />
                        <span className="shadow-amber-50"></span>
                    </label>
                </div>
            </div>
            {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                    <div
                        className="flex justify-between cursor-pointer"
                    >
                        <span className="font-bold text-lg">
                        </span>
                        <span></span>
                    </div>
                </div>
            ))}
        </>
    )
}