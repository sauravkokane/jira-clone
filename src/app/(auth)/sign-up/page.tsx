import React from "react";

import { redirect } from "next/navigation";

import { SignUpCard } from "@/features/auth/components/sign-up-card";
import { getCurrent } from "@/features/auth/queries";

const SignUpPage: React.FC = async () => {
  const user = await getCurrent();
  if (user) redirect("/");

  return <SignUpCard />;
};

export default SignUpPage;
