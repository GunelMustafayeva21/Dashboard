import React from "react";
import { Button, Input } from "antd";
import { useForm, Controller } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import RenderIf from "@/shared/components/RenderIf";
import { useLoginUserMutation } from "@/redux/api/auth";
import { IAuth } from "@/redux/api/auth/types";
import 'bootstrap/dist/css/bootstrap.min.css';

const backgroundUrl="https://4kwallpapers.com/images/wallpapers/dark-background-abstract-background-network-3d-background-7680x4320-8324.png"
const Background={
  backgroundImage: `url(${backgroundUrl})`,
  backgroundSize: 'cover', 
  backgroundPosition: 'center',
  height: '100vh', 
}

const schema = z.object({
  userName: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(30, { message: "Username must be at most 30 characters long" })
    .regex(/^[a-zA-Z0-9\.]+@gmail\.com$/i, {
      message: "Username can only contain letters, numbers, and underscores",
    }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(32, { message: "Password must be at most 32 characters long" })
    .regex(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, {
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    }),
});

const Index: React.FC = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      userName: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const [postUserForLogin] =
    useLoginUserMutation();
  const LoginUser = (data: IAuth) => {
    postUserForLogin(data);
  };

  return (
    <div className="d-flex justify-content-between">
      <div className="col-md-6" style={Background}></div>
      <div className="col-md-6 w-50 d-flex justify-content-center align-items-center flex-column" >
      <h1 >Login Account</h1>
      <p >Enter your email and password</p>
      <form onSubmit={handleSubmit(LoginUser)} className="w-50 text-center d-flex flex-column gap-3">
      <Controller
        name="userName"
        control={control}
        render={({ field }) => <Input {...field} placeholder="Username" />}
      />
      <RenderIf condition={errors.userName?.message?.length}>
        <p>{errors.userName?.message}</p>
      </RenderIf>
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <Input.Password {...field} placeholder="Password" />
        )}
      />
      <RenderIf condition={errors.password?.message?.length}>
        <p>{errors.password?.message}</p>
      </RenderIf>
      <Button type="primary" htmlType="submit" style={{backgroundColor:"#222427"}}>
        Submit
      </Button>
    </form>
      </div>
    </div>
    
  );
};

export default Index;
