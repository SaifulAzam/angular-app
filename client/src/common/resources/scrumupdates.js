angular.module('resources.scrumUpdates', ['mongolabResource']);
angular.module('resources.scrumUpdates')
.factory('ScrumUpdates', [
	'mongolabResource',
	function (mongolabResource) {

		var ScrumUpdates = mongolabResource('scrumupdates');

		// moved these to the mongolab-resource module
		// ScrumUpdates.forResource = function (collectionName, resourceId, successcb, errorcb) {
		// 	var resourceForeignKey = this.getResourceKey(collectionName);
		// 	var query = {};
		// 	query[resourceForeignKey] = resourceId;
		// 	return ScrumUpdates.query(query, successcb, errorcb);
		// };

		// ScrumUpdates.forResourceList = function (collectionName, resourceIdList, successcb, errorcb) {
		// 	var resourceForeignKey = this.getResourceKey(collectionName);
		// 	var query = {};
		// 	query[resourceForeignKey] = {$in:resourceIdList};
		// 	return ScrumUpdates.query(query, successcb, errorcb);
		// };

		var successcb = function(){
			console.log("Saved successfully!!!");
		};

		var failurecb = function(){
			console.log("cannot save...");
		};
		ScrumUpdates.forProductBacklogItem = function (productBacklogItemId, successcb, errorcb) {
			return ScrumUpdates.forResource('productbacklog', productBacklogItemId, successcb, errorcb);
		};

		ScrumUpdates.forSprint = function (sprintId, successcb, errorcb) {
			return ScrumUpdates.forResource('sprints', sprintId, successcb, errorcb);
		};

		ScrumUpdates.forProject = function (projectId, successcb, errorcb) {
			return ScrumUpdates.forResource('projects', projectId, successcb, errorcb);
		};

		ScrumUpdates.forTask = function (taskId, successcb, errorcb) {
			return ScrumUpdates.forResource('tasks', taskId, successcb, errorcb);
		};

		ScrumUpdates.forUser = function (userId, successcb, errorcb) {
			return ScrumUpdates.forResource('users', userId, successcb, errorcb);
		};

		return ScrumUpdates;
	}
]);