 const date = new Date();
 const weekday = date.toLocaleString('en-us', {weekday: 'long'});
 const day = date.toLocaleString('en-us', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
 })
 document.getElementsByClassName('current-date')[0].innerHTML = weekday;
 document.getElementsByClassName('current-time')[0].innerHTML = day;