Vue.component('modal', {
  template: '#modal-template'
})

var vm = new Vue({
    el: '#app',
    data: {
        title: 'A faire',
        task: null,
        tasks: []
    },
    methods: {
        addTask() {
            this.tasks.push({id: Date.now(), description: this.task, done: false, isInEditMode: false});
            console.log('tasks: ', this.tasks);
            this.task = null;
        },
        switchMode(task) {
            task.isInEditMode = !task.isInEditMode;                    
            console.log('task.isInEditMode ', task.isInEditMode);
        },
        deleteTask(task) {
            this.tasks = this.tasks.filter(t => t.id !== task.id);
        }
    }
});