import React from 'react';
import {css, cx} from "@linaria/core";

const styles = css``;

const Input = ({ className, ...props }) =>
    <input className={cx(styles, className)} placeholder="showroom input" {...props} />

export default Input;
