(function()
{
	var app               = angular.module('taskManager');
	var taskServiceFacade = function(TaskRepository)
	{
		var completeAndNotify = function(task)
		{
			TaskRepository.complete(task);
			if( task.completed == true )
			{
				TaskRepository.setCompleteDate(task);
				TaskRepository.notifyCompletion(task, task.user);
				TaskRepository.save(task);
			}
		};

		return {
			completeAndNotify: completeAndNotify
		};
	};

	app.service('taskServiceFacade', taskServiceFacade);
}());
