var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbyfKS8eMr9HrX_wW--27GJ7KTeb_9iBYDbzNIoTVcJaHrRT9iz2/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})