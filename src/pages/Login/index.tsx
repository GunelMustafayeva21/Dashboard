import React from "react";
import { Button, Input } from "antd";
import { useForm, Controller } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import RenderIf from "@/shared/components/RenderIf";
import { useLoginUserMutation } from "@/redux/api/auth";
import { IAuth } from "@/redux/api/auth/types";

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

  const [postUserForLogin, { data: melumat, isLoading, isError }] =
    useLoginUserMutation();
  console.log(melumat, isLoading, isError);
  const LoginUser = (data: IAuth) => {
    console.log("login data", data);
    postUserForLogin(data);
  };

  return (
    <form onSubmit={handleSubmit(LoginUser)}>
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
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </form>
  );
};

export default Index;
