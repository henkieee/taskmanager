(function(){
	var app = angular.module('taskManager', []);

	var taskController = function(Task, UrgentTask, TaskRepository, taskServiceFacade)
	{

		var ctrl = this;

		//TaskRepository.get(1)

		ctrl.tasks = [new Task({
			name: 'my task1',
			priority: 1,
			project: 'Courses',
			user: 'Jon',
			completed: false
		}),
    new UrgentTask({
      name: 'my task2',
      priority: 1,
      project: 'Courses',
      user: 'Joop',
      completed: false
    }),
    new Task({
      name: 'my task3',
      priority: 1,
      project: 'Courses',
      user: 'Jan',
      completed: true
    })];

		ctrl.completeTask = function(indexTask)
		{
			var myTask = ctrl.tasks[indexTask];
			taskServiceFacade.completeAndNotify(myTask);
		};

		//ctrl.tasks.push(new Task(TaskRepository.get(1)));
		//ctrl.tasks.push(new Task(TaskRepository.get(2)));
		//ctrl.tasks.push(new UrgentTask(TaskRepository.get(3)));
		//ctrl.tasks.push(new UrgentTask(TaskRepository.get(4)));

	};

	app.controller('taskCtrl', taskController)
}());