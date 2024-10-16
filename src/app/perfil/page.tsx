"use client"

import { useRouter } from "next/navigation";
import { Header } from "../../components/header/Header";
import { Layout } from "../../components/layout/Layout";
import UserContext from "../../context/UserContext";
import { useVerifyLogin } from "../../helpers/useVerifyLogin";
import { jwtDecode } from "jwt-decode";
import { useContext, useEffect } from "react";

export default function Profile() {

  const router = useRouter();

  useVerifyLogin();
  const { userName, setUserName } = useContext(UserContext);

  useEffect(() => {
    const userToken = JSON.parse(sessionStorage.getItem("userToken"));

    if (userToken) {
      const userData = jwtDecode(userToken.token);
      setUserName(userData.name);
    } else {
      router.push('/login');
    }
  }, [])

  return (
    <Layout>
      <Header title="Perfil" userName={userName} />
    </Layout>
  );
};
