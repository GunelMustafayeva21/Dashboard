import React from 'react'
import PrivateRoots from './PrivateRoots'
import RenderIf from '@/shared/components/RenderIf';
import { Routes, Route } from 'react-router-dom';
import { Urls } from '@/shared/constants/Urls';

//import Login from "@/pages/Login"
const Login = React.lazy(() => import("@/pages/Login"))

import Layout from "@/shared/Layout"
import { useAppSelector } from '@/redux/store';

const Router: React.FC = () => {

  const {user} = useAppSelector(state=> state.ReducerForUser);
let youHaveAccount= !Object.values(user || {}).some(value=>value == "")
  console.log(youHaveAccount)

  return (
    <>
      <RenderIf condition={youHaveAccount}>
        <Layout>
          <React.Suspense fallback={<h1>Private Roots are coming with Lazy Loading...</h1>}>
            <PrivateRoots />
          </React.Suspense>
        </Layout>
      </RenderIf>

      <RenderIf condition={!youHaveAccount}>
        <React.Suspense fallback={<h1>Login Page is coming with Lazy Loading...</h1>}>
          <Routes>
            <Route path={"*"} element={<Login />} />
            <Route index path={Urls.LOGIN} element={<Login />} />
          </Routes>
        </React.Suspense>
      </RenderIf>
    </>

  )
}

export default Router
