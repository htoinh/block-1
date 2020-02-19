const init = function () {

    console.log("%cInitialized!", 'background: #ff0000; color: #bada55; font-size: 2rem');
}

init();

/* $(document).ready(function () {
    $("#todo1").keypress((e) => {
        console.log(e.target.value);
    })
}); */

$(function () {
    loaddata();

    function loaddata() {
        $('#data').html(localStorage.mydata);
    }

    $("#sendAll").click(function () {
        // template data
        var todo1 = $('#todo1').val();
        /*         var todo1 = $('#todo1').text().split(/\n/);
                $(el).empty();
                for (var i = 0; i < todo1.length; i++) {
                    if (i > 0) $(el).append('<br>');
                    $(el).append(document.createTextNode(todo1[i]));
                } */
        var data = todo1;
        localStorage.mydata = data;
        // convert to html
        $('#data').html(localStorage.mydata);
        // view in console
        console.log(localStorage.mydata);
        // sucess 
        $.jnotify('Save data in local storage', 500);
        return el;
    });

    $("#deleteAll").click(function () {
        // template data
        var todo1 = $('#todo1').val();
        var data = todo1;
        localStorage.clear = data;
        // convert to html
        $('#data').html(localStorage.clear);
        // view in console
        console.clear();
        // sucess 
        $.jnotify('Delete data in local storage', 500);
        return false;
    });

    // call local storage plugin
    $('#form').sisyphus({
        customKeyPrefix: 'data_form', //data prefix
        timeout: 10, // in seconds
        onSave: function () {
            $.jnotify('Data form saved to Local Storage', 1000);
        },
        onRestore: function () {
            $.jnotify('Data form restore from Local Storage', 'warning', 1000);
        }
    });
});