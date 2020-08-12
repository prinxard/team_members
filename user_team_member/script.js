$(document).ready(function () {

    $.ajax({
            type: 'GET',
            url: "https://reqres.in/api/users?page=1",
            dataType: 'json',
        })
        .done(function (members) {
            $.each(members.data, function (i, data) {

                $('#tmembers').append("<tr class='tmember d-flex justify-content-between'>" +
                    `<td class='tmember-avatar pl-4'><img src= ${data.avatar} class='rounded-circle avatar'></img></td>` +
                    `<td class='tmember-name'>${data.first_name} ${data.last_name}</td>` +
                    `<td class='tmember-email'>${data.email}</td>` +
                    `<td class='tmember-position'>Developer</td>` +
                    `<td class='tmember-status'><button class='btn btn-success'>Activated</button></td>` +
                    //creating the expand elements on the dropdown Icon
                    `<td class='icons pr-5' id='toggle'> <img src=${'./images/icons8-settings-16.png'}>  </img> <div class='dropdown' id='drop'><img src=${'./images/icons8-sort-down-16.png'} class=" dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></img><div class="dropdown-menu" aria-labelledby="dropdownMenuButton"><a class="dropdown-item" href="#">Action</a><a class="dropdown-item" href="#">Another action</a><a class="dropdown-item" href="#">Something else here</a></div></div> </td>` +
                    "</tr>")
            })
        })
        .fail(function (xhr, status, error) {
            var errorMessage = xhr.status + ': ' + xhr.statusText
            alert('Error - ' + errorMessage);
        })
        $('.page1').addClass('active')
});