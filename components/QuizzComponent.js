import { useState } from "react";

function QuizzComponent({ answer, set_option_selected, option_1, option_2, option_3, option_4, onClickButton, controlSelected }) {

    return (
        <div
            className="relative grid w-full h-full bg-[#F3F3FB] text-center first-letter:rounded-lg"
        >

            <link
                href="https://fonts.googleapis.com/css2?family=Trispace:wght@600&display=swap" rel="stylesheet"
            />

            <div
                className="relative grid w-[40%] h-[40%] bg-white shadow-2xl ml-auto mr-auto mt-auto mb-auto text-center"
            >

                <div
                    className="flex relative w-full h-full justify-center text-center"
                >
                    <a
                        className="font-[trispace] text-[#8C8C9C] break-all"
                    >
                        {answer}
                    </a>
                </div>

                <div
                    className="relative text-center"
                >
                    <ol
                        className="relative grid justify-center"
                        onChange={set_option_selected}
                    >
                        <ul
                            className="mb-1"
                        >
                            <label
                                className="relative flex font-[trispace] text-[#A4AABD]"
                            >
                                <input
                                    type="radio"
                                    name="answer"
                                    className="mr-1"
                                    checked={controlSelected === option_1}
                                    value={option_1} />
                                {option_1}
                            </label>
                        </ul>
                        <ul
                            className="mb-1"
                        >
                            <label
                                className="relative flex font-[trispace] text-[#A4AABD]"
                            >
                                <input
                                    type="radio"
                                    name="answer"
                                    className="mr-1"
                                    checked={controlSelected === option_2}
                                    value={option_2} />
                                {option_2}
                            </label>
                        </ul>
                        <ul
                            className="mb-1"
                        >
                            <label
                                className="relative flex font-[trispace] text-[#A4AABD]"
                            >
                                <input
                                    type="radio"
                                    name="answer"
                                    className="mr-1"
                                    checked={controlSelected === option_3}
                                    value={option_3} />{option_3}
                            </label>
                        </ul>
                        <ul
                            className="mb-1"
                        >
                            <label
                                className="relative flex font-[trispace] text-[#A4AABD]"
                            >
                                <input
                                    type="radio"
                                    name="answer"
                                    className="mr-1"
                                    checked={controlSelected === option_4}
                                    value={option_4} />
                                {option_4}
                            </label>
                        </ul>
                    </ol>
                </div>

                <div>
                    <button
                        className="bg-[#4370E7] w-full h-full font-mono text-white rounded-b-lg"
                        onClick={
                            onClickButton
                        }
                    >
                        Enviar e próxima...
                    </button>
                </div>
            </div>
        </div>
    )
}

export default QuizzComponent;