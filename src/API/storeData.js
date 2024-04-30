import { reactLocalStorage } from 'reactjs-localstorage';

function* Generator() {
    for (let i = 1; i < 100; i++) {
        yield i + 1
    }
}
let g = Generator();
class JiraTask {
    constructor() {
        this.ToDo = reactLocalStorage.getObject('ToDo');
        this.inProgress = reactLocalStorage.getObject('inProgress');
        this.done = reactLocalStorage.getObject('done');


    }

    CreateJira(task) {


        if (task.id) {
            for (let prop in this) {
                for (let innerP in this[prop]) {
                    if (this[prop][innerP].id === task.id) {
                        delete this[prop][innerP];
                        reactLocalStorage.remove(prop);
                        reactLocalStorage.setObject(prop,this[prop]);
                       

                    }
                }

            }
            this[task.status][task.name] = { ...task, id: task.id };
        }
        else {

            this[task.status][task.name] = { ...task, id: g.next().value };
        }

        reactLocalStorage.setObject(task.status, this[task.status]);
        return {
            status: true,
            message: 'Jira created'
        }


    }
    fetchData() {
        return this
    }
}

export const jiratask = new JiraTask();

