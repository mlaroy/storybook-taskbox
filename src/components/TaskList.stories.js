import { storiesOf } from '@storybook/vue';
import { task } from './Task.stories';

import TaskList from './TaskList';
import { methods } from './Task.stories';

export const defaultTaskList = [
  { ...task, id: '1', title: 'Task 1' },
  { ...task, id: '2', title: 'Task 2' },
  { ...task, id: '3', title: 'Task 3' },
  { ...task, id: '4', title: 'Task 4' },
  { ...task, id: '5', title: 'Task 5' },
  { ...task, id: '6', title: 'Task 6' },
];

export const withPinnedTasks = [
  ...defaultTaskList.slice(0, 5),
  { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
];

const paddedList = () => {
  return {
    template: '<div style="padding: 3rem;"><story/></div>',
  };
};


Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    tasks: defaultTaskList
  },
  actions: {
    pinTask(context, id) {
      action('pinTask')(id);
    },
    archiveTask(context, id) {
      action('archiveTask')(id);
    }
  }
});

storiesOf('TaskList', module)
  .addDecorator(paddedList)
  .add('default', () => ({
    components: { TaskList },
    template: `<task-list :tasks="tasks" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`,
    data: () => ({
      tasks: defaultTaskList
    }),
    methods,
    store
  }))
  .add('withPinnedTasks', () => ({
    components: { TaskList },
    template: `<task-list :tasks="tasks" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`,
    data: () => ({
      tasks: withPinnedTasks
    }),
    methods,
    store
  }))
  .add('loading', () => ({
    components: { TaskList },
    template: `<task-list loading @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`,
    methods
  }))
  .add('empty', () => ({
    components: { TaskList },
    template: `<task-list  @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`,
    methods
  }));