import isMonday from 'date-fns/isMonday';

new Promise(resolve => {
  setTimeout(resolve, 1000);
});

console.log(isMonday(Date.now()));
