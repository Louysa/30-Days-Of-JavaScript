document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code here
    let yearElement = this.documentElement.querySelector('span');
    let colors = ['red', 'blue', 'green', 'yellow'];
  
    setInterval(function() {
        yearElement.style.color = colors[Math.floor(Math.random() * colors.length)];
    }, 1000); // Change color every second
  
    let doneListItem = document.getElementById('done');
    doneListItem.style.color = 'green';
  
    let ongoingListItem = document.getElementById('ongoing');
    ongoingListItem.style.color = 'yellow';
  
    let comingListItems = document.querySelectorAll('#coming');
    comingListItems.forEach(element => {
      element.style.color = 'red';
    });
  });
  