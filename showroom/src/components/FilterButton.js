import React from 'react';
import { css, cx } from '@linaria/core';

import { Button } from '@carvana/showroom/components';

const styles = {
  'toggle-btn': css``
};

const FilterButton = (props) => {
  return (
    <Button type="button" className={cx(styles['toggle-btn'])}>
      <span>Show </span>
      <span>all </span>
      <span>tasks</span>
    </Button>
  )
};

export default FilterButton;