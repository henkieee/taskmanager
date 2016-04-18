(function()
{
	var app = angular.module('taskManager');

	var taskRepo = function($http)
	{
		var called           = 0,
		    db               = {},
		    get              = function(id)
		    {
			    called ++;
			    console.log('Getting task ' + id + ' called ' + called + ' times.');
			    return {
				    name: 'task ' + id
			    }
		    },
		    save             = function(task)
		    {
			    called ++;
			    console.log('Saving ' + task.name + ' to the db' + ' called ' + called + ' times.');
		    },
		    complete         = function(task)
		    {
			    task.completed = true;
			    console.log('completing task: ' + task.name);
		    },
		    setCompleteDate  = function(task)
		    {
			    task.completedDate = new Date();
			    console.log(task.name + ' completed on ' + task.completedDate);
		    },
		    notifyCompletion = function(task, user)
		    {
			    console.log('Notifying ' + user + ' of the completion of ' + task.name);
		    };

		return {
			get: get,
			complete: complete,
			setCompleteDate: setCompleteDate,
			notifyCompletion: notifyCompletion,
			save: save
		}

	};
	app.service('TaskRepository', taskRepo);

}());