import { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Form from "../components/Forms/Form";

const Home = () => {
  return (
    <div className="wrapper">
      <Header />
      <h1>Hello world!</h1>
      <Form username={"name"} textarea={"textarea"} email={"email"} />
      <Form textarea={"textarea"} email={"email"} />
      <Footer />
    </div>
  );
};

export default Home;
