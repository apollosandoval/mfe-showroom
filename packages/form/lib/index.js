import React, {useState} from 'react';
import {css, cx} from '@linaria/core';
import {Input, Button} from '@carvana/showroom/components';

const styles = {
  'label-wrapper': css``,
  'label__lg': css``,
  'input': css``,
  'input__lg': css``,
  'btn': css``,
  'btn__primary': css``,
  'btn__lg': css``,
};

export default ({className, addTask }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(name);
    setName('');
  };

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className={styles["label-wrapper"]}>
        <label htmlFor={"new-todo-input"} className={styles.label__lg}>What needs to be done?</label>
      </h2>
      <Input type="text" id="new-todo-input" name="text" autoComplete="off"
             className={cx(styles.input, styles.input__lg)} value={name} onChange={handleChange}/>
      <Button type="submit" className={cx(styles.btn, styles.btn__primary, styles.btn__lg)}>Add</Button>
    </form>
  )
};