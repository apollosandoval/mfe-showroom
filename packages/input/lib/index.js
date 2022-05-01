import React from 'react';
import {css, cx} from "@linaria/core";

const styles = css``;

export default ({ className, ...props }) =>
    <input className={cx(styles, className)} placeholder="showroom input" {...props} />
