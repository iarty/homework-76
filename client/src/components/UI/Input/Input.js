import React from "react";
import classes from "./Input.module.css";

export default function Input({ label, onChange, value, placeholder, name }) {
  const htmlFor = `id-${Math.random()}`;
  const cls = [classes.Input, !label ? classes.InputWidth : null];
  return (
    <div className={cls.join(" ")}>
      {label ? <label htmlFor={htmlFor}>Username</label> : null}
      <input
        type="text"
        name={name}
        id={htmlFor}
        className={cls.join(" ")}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}
