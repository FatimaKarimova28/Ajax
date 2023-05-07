$(document).ready(function() {
      
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/users',
      type: 'GET',
      success: function(users) {

        $.each(users, function(i, user) {
          $('#users-list').append('<li class="list-group-item">' + user.name + '</li>');
        });

       
        $('#users-list li').click(function() {
          
          var name = $(this).text();

          
          $.ajax({
            url: 'https://your-alert-api.com/show',
            type: 'POST',
            data: { name: name },
            success: function() {
              alert('You clicked on ' + name);
            },
            error: function() {
              console.log('Error showing alert');
            }
          });
        });
      },
      error: function() {
        console.log('Error fetching users');
      }
    });
  });
