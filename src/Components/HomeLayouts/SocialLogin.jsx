import { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthContext";

const SocialLogin = () => {
  const { user, setUser, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((res) => {
        setUser(res.user);
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err.code, err.message);
        alert(err.code, err.message);
      });
  };

  const handleGithubSignin = () => {
    signInWithGithub()
      .then((res) => {
        setUser(res.user);
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err.code, err.message);
        alert(err.code, err.message);
      });
  };

  return (
    <>
      {user ? (
        ""
      ) : (
        <div className="">
          <h1 className="text-primary font-bold">Login with</h1>
          <div className="space-y-3 mt-5">
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline btn-secondary w-full"
            >
              <FcGoogle size={24} /> Login with Google
            </button>
            <button 
            onClick={handleGithubSignin}
            className="btn btn-outline btn-primary w-full">
              <FaGithub size={24} /> Login with Github
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SocialLogin;
