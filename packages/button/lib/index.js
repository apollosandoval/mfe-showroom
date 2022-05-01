import React from 'react';
import {css, cx} from "@linaria/core";

const styles = css``;

export default ({ children, className, ...props }) =>
    <button type="button" className={cx(styles, className)} {...props}>{ children }</button>;
