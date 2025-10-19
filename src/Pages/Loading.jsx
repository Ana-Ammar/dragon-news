import { MoonLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <MoonLoader color="#403F3F" size={100} />
    </div>
  );
};

export default Loading;
