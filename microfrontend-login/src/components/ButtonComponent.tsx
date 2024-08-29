import { FaArrowRight } from 'react-icons/fa'

interface ButtonProps {
    buttonText: string;
    style?: string;
}

const ButtonComponent = ({ buttonText, style }: ButtonProps) => {
    return (
        <div className="flex">
            <button type='submit'
                className={`lg:inline-block w-full ${style}`}
            >
                <span className="rounded-sm flex justify-center items-center gap-5 text-white-200">
                    {buttonText}
                    <FaArrowRight />
                </span>
            </button>
        </div>
    )
}

export default ButtonComponent