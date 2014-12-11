define(['knockout', 'dataContext'], function (ko, dataContext) {

    var viewModel = {
        tasks: ko.observableArray(),

        activate: activate,
        remove : remove
    };

    return viewModel;


    function activate() {
        return dataContext.getCollection().then(function (tasks) {
            viewModel.tasks(tasks);
        });
    };

    function remove(task) {
        dataContext.remove(task).then(function () {
            viewModel.tasks.remove(task);
        }).catch(function () {

            });
    }
})