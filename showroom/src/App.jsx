import React, {useState} from "react";
import {css, cx} from '@linaria/core';

import {Button, Input} from '@carvana/showroom/components';
import Form from 'mf-form/Form';
import Task from "./components/Task";
import FilterButton from "./components/FilterButton";

const styles = {
  'todoapp': css``,
  'todo-list': css``,
  'stack-large': css``,
  'stack-exception': css``
}

const initial = new Map([
  ['Eat', true],
  ['Sleep', false],
  ['Repeat', false]
]);

const App = () => {
  const [tasks, setTasks] = useState(initial);

  const addTask = name => {
    setTasks(prev => prev.set(name, false));
  };

  const removeTask = name => {};

  const toggleTaskStatus = id => {};

  return (
    <div className={cx(styles.todoapp, styles['stack-large'])}>
      <h1>TodoMatic</h1>
      <div>
        <p>Container for MF Components</p>
        <Form addTask={addTask}/>
        <Input />
        <Button>worked</Button>
      </div>
      <div>
        <FilterButton/>
        <FilterButton/>
        <FilterButton/>
      </div>
      <h2 id="list-heading">{tasks.size} tasks remaining</h2>
      <ul role="list" className={cx(styles["todo-list"], styles["stack-large"], styles["stack-exception"])}
          aria-labelledby="list-heading">
        {
          Array.from(tasks.entries())
            .map((t, idx) => <Task name={t[0]} completed={t[1]} idx={idx} key={`todo-${idx}`} toggleTaskCompleted={toggleTaskStatus}/>)
        }
      </ul>
    </div>
  );
};

export default App;