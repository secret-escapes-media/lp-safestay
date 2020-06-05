// general js for the project that wouldn't be a reuseable component

var modalQueryString = 'fromApp';
if (getQueryStringByName(modalQueryString)) {
  $('body').addClass('fromApp');
}