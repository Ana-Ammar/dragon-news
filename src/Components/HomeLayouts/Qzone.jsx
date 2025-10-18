import swimmingImg from "../../assets/swimming.png"
import classImg from "../../assets/class.png"
import playgroundImg from "../../assets/playground.png"

const Qzone = () => {
    return (
        <div className='bg-base-200 p-4 rounded-sm'>
            <h1 className='text-primary font-bold mb-5'>Q-Zone</h1>
            <div className="space-y-4 flex flex-col">
                <img src={swimmingImg} />
                <img src={classImg} />
                <img src={playgroundImg} />
            </div>
            
        </div>
    );
};

export default Qzone;