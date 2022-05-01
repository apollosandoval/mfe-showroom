import React from 'react';
import { css } from '@linaria/core';

import { Button } from '@carvana/showroom/components';

const styles = {
  'toggle-btn': css``
};

export default (props) => {
  return (
    <Button type="button" className={cx(styles['toggle-btn'])}>
      <span>Show </span>
      <span>all </span>
      <span>tasks</span>
    </Button>
  )
};