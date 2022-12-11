import { useEffect } from 'react';
import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();
  useEffect(()=>{
    console.error(error);
  }, [])
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button onClick={()=>{
        navigate("/");
      }}>메인페이지로</button>
    </div>
  );
}