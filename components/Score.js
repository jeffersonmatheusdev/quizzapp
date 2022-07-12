function Score({ score }) {
    return (
        <div
            className="flex w-full h-full bg-[#A4AABD]"
        >
            <div
                className="relative w-[30%] h-[30%] ml-auto mr-auto mb-auto mt-auto text-center shadow-2xl bg-white rounded-lg"
            >
                <div
                    className="relative w-full h-[50%]"
                >
                    <span
                        className="text-black font-extralight text-6xl"
                    >
                        Seu score é:
                    </span>
                </div>
                <div
                    className="relative w-full h-[50%]"
                >
                    <div
                        className="relative w-fit h-fit ml-auto mr-auto bg-gray-400 rounded-lg p-2 animate-bounce"
                    >
                        <span
                            className="text-neutral-600 font-extralight text-5xl "
                        >
                            {score}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Score;