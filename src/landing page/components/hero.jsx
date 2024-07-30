import { heroBg } from '../../assets'

const Hero = () => {
    return (
        <div>
            <div
                className="hero min-h-screen">
                    <img src={heroBg} alt="" />
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to the Best Online Learning Platform </h1>
                        <p className="mb-5">
                            We have the best teachers handling various subjets available to aid you on this journey.
                        </p>
                        <button className="btn btn-primary">Find A Tutor</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero