import { Field } from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";
import { useAuth } from "@/hooks/useAuth";
import { Input } from "@chakra-ui/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Register = () => {
  const { registerAuth, setUser, updateUserAuth, googleAuth } = useAuth();
  const [error, setError] = useState({});
  const handleRegister = (e) => {
    e.preventDefault();
    setError({});
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    if (!/[A-Z]/.test(password)) {
      setError({
        pwdError: "Password must include at least one uppercase letter.",
      });
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError({
        pwdError: "Password must include at least one lowercase letter.",
      });
      return;
    }
    if (password.length <= 6) {
      setError({
        pwdError: "Password must be at least 6 characters long.",
      });
      return;
    }
    registerAuth(email, password)
      .then((user) => {
        setUser(user?.user),
          updateUserAuth(name, photo),
          toast.success("Registration complete! Welcome to Granny.", {
            duration: 3000,
          });
      })
      .catch((err) => {
        if (err.code === "auth/email-already-in-use") {
          toast.error(
            "This email address is already registered. Please use a different email.",
            { duration: 3000 }
          );
        } else {
          toast.error("Something went wrong. Please try again later", {
            duration: 3000,
          });
        }
      });
  };
  return (
    <div>
      <form
        onSubmit={handleRegister}
        className="lg:w-2/5 md:w-7/12 sm:w-3/5 mx-auto py-10 px-10 my-8 rounded-xl"
      >
        <h1 className="text-center font-semibold text-2xl mb-10 text-black">
          Register Your Account
        </h1>

        <Field label="Name" required className="mb-6">
          <Input name="name" className="px-2" placeholder="Enter your name" />
        </Field>

        <Field label="Photo URL" required className="mb-6">
          <Input
            name="photo"
            className="px-2"
            placeholder="Enter your photo url"
          />
        </Field>

        <Field label="Email" required className="mb-6">
          <Input className="px-2" name="email" placeholder="Enter your email" />
        </Field>
        <Field label="Password" required>
          <PasswordInput
            name="password"
            className="px-2"
            placeholder="Enter your password"
          ></PasswordInput>
          <p className="text-sm text-red-500">{error?.pwdError}</p>
        </Field>
        <button className="bg-yellow-400 w-full py-2 rounded-xl mt-6">
          Register
        </button>
        <p className="text-sm mt-2 text-center">
          Already Have an Account ? {""}
          <Link to="/login" className="text-yellow-600">
            Login
          </Link>
        </p>
        <div className="divider text-black">OR</div>
        <button
          onClick={() =>
            googleAuth()
              .then((user) => {
                setUser(user.user),
                  toast.success("Registration complete! Welcome to Granny.", {
                    duration: 3000,
                  });
              })
              .catch(() => {
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

export default Register;
