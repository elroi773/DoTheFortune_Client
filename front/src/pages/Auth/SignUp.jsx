import React, { useState } from "react";
import AuthLayout from "../../components/auth/AuthLayout";
import AuthFrame from "../../components/auth/AuthFrame";
import AuthTitle from "../../components/auth/AuthTitle";
import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";
import AuthFooter from "../../components/auth/AuthFooter";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: 회원가입 로직
    console.log({ email, pw });
  };

  return (
    <AuthLayout>
      <AuthFrame>
        <AuthTitle>SIGN UP</AuthTitle>

        <form className="authForm" onSubmit={onSubmit}>
          <AuthInput
            type="email"
            placeholder="이메일을 입력해주세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
          <AuthInput
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            autoComplete="new-password"
          />

          <AuthButton>회원가입</AuthButton>
        </form>

        <AuthFooter text="이미 계정이 있으신가요?" linkText="로그인하기" to="/login" />
      </AuthFrame>
    </AuthLayout>
  );
}