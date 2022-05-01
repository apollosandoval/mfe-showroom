import React from 'react';
import { css, cx } from '@linaria/core';
import { Input, Button } from '@carvana/showroom/components';

const styles = {
  todo: css``,
  'stack-small': css``,
  'c-cb': css``,
  'btn-group': css``,
  'btn': css``,
  'btn__danger': css``,
};

const Task = ({ name, idx, completed, toggleTaskCompleted }) => {
  return (
    <li className={cx(styles.todo, styles["stack-small"])}>
      <div className={styles["c-cb"]}>
        <Input type="checkbox" id={"todo-" + idx} defaultChecked={completed} onChange={() => toggleTaskCompleted(`todo-${idx}`)} />
        <label htmlFor={"todo-" + idx}>{ name }</label>
      </div>
      <div className={styles['btn-group']}>
        <Button className={styles.btn}>Edit</Button>
        <Button className={cx(styles.btn, styles.btn__danger)}>Delete</Button>
      </div>
    </li>
  );
};

export default Task;