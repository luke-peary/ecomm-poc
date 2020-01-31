import React from "react";
import Header from "../components/Header";

export default function FullWidth(props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}
