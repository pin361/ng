import {
    makeAutoObservable,
    observable,
    computed,
    autorun,
} from "mobx"

const todoState = [
    {
        name: 'one',
        finished: false,
    },
    {
        name: 'two',
        finished: true,
    }
];

class TodoList {
    todos = []
    constructor(todos) {
        makeAutoObservable(this, {
            title: observable,
            finished: observable,
            todos: observable,
            unfinishedTodoCount: computed
        })
        this.todos = todos
    }

    get unfinishedTodoCount() {
        return this.todos.filter(todo => {
            console.log('unfinishedTodoCount');
            return !todo.finished;
        }).length
    }

    finish(index) {
        console.log(`finish[${index}]`);
        this.todos[index].finished = true;
    }

    setTitle(title, index) {
        console.log(`setTitle[${index}]`);
        const todo = this.todos[index];
        todo.title = title;
    }

    toggle(index) {
        console.log(`toggle[${index}]`);
        const todo = this.todos[index];
        todo.finished = !todo.finished;
    }
}

const todos = new TodoList(todoState);

autorun(() => {
    console.log('Initialized', todos);
});

autorun(() => {
    if(todos.unfinishedTodoCount === 0) {
        console.log('All todos finished');
    } else {
        console.log('Todos is not finished');
    }
});

todos.setTitle('new title 123', 0);
todos.finish(0);

// console.log('finish todo0');
// todos.todos[0].finished = true;

// console.log('unfinished-0', todos.unfinishedTodoCount);
// console.log('unfinished-1', todos.unfinishedTodoCount);

// console.log('add todo 3');
// todos.todos.push({
//     name: 'three',
//     finished: false,
// });

// const todoView = observer(({ todo }) => {
//     console.log('todo', todo);
// });

// 3     4     4
// 1,1,1,2,2,2,2,4,4,4,4
// const acc = 0;
// const maxAcc;
// const prevNumber;
// const currentNumber;
// let maxNumber;

// currentNumber = 1;
// prevNumber ?? currentNumber;

// prevNumber === currentNumber => ++/--acc;

// prevNumber !== currentNumber =>
//     max ?? prevNumber :
