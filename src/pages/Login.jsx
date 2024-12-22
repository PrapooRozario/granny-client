import { Field } from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";
import { useAuth } from "@/hooks/useAuth";
import { Input } from "@chakra-ui/react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { loginAuth, setUser, googleAuth } = useAuth();
  const { state } = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginAuth(email, password)
      .then((user) => {
        setUser(user?.user),
          toast.success("Login successful! Welcome back!", {
            duration: 3000,
          });
        navigate(state ? state : "/");
      })
      .catch((err) => {
        console.log(err),
          toast.error("Something went wrong. Please try again later", {
            duration: 3000,
          });
      });
  };
  return (
    <div>
      <form
        onSubmit={handleLogin}
        className="lg:w-2/5 md:w-7/12 sm:w-3/5 mx-auto py-10 px-10 my-8 rounded-xl"
      >
        <h1 className="text-center font-semibold text-2xl mb-10 text-black">
          Login Your Account
        </h1>
        <Field label="Email" required className="mb-6">
          <Input className="px-2" name="email" placeholder="Enter your email" />
        </Field>
        <Field label="Password" required>
          <PasswordInput
            name="password"
            className="px-2"
            placeholder="Enter your password"
          ></PasswordInput>
        </Field>
        <button className="bg-yellow-400 w-full py-2 rounded-xl mt-6">
          Login
        </button>
        <p className="text-sm mt-2 text-center">
          Don't Have an Account ? {""}
          <Link to="/register" className="text-yellow-600">
            Register
          </Link>
        </p>
        <div className="divider text-black">OR</div>
        <button
          onClick={() =>
            googleAuth()
              .then((user) => {
                setUser(user.user),
                  toast.success("Login successful! Welcome back!", {
                    duration: 3000,
                  });
                navigate(state ? state : "/");
              })
              .catch((err) => {
                console.log(err);
                toast.error("Something went wrong. Please try again later", {
                  duration: 3000,
                });
              })
          }
          className="flex items-center justify-center rounded-full gap-2 border px-4 py-2 w-full"
          type="button"
        >
          <FaGoogle></FaGoogle> Google
        </button>
      </form>
    </div>
  );
};

export default Login;
