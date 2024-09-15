export const tasks = [{
    id: 1,
    currentStatus: 'TODO',
    name: 'Task1'
}, {
    id: 2,
    currentStatus: 'INPROGRESS',
    name: 'Task2'
},
{
    id: 3,
    currentStatus: 'DONE',
    name: 'Task3'
}];
export const statusTransition = Object.freeze({
    'TODO': 'INPROGRESS',
    'INPROGRESS': 'DONE',
    'DONE': 'TODO'
});
export const computeMemoTasks = () => {

}