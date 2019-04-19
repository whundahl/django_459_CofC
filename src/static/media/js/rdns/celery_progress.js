var progressUrl = "{% url 'celery_progress:task_status' task_id %}";
$(function () {
  CeleryProgressBar.initProgressBar(progressUrl)
});