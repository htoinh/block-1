const init = function () {

    console.log("%cInitialized!", 'background: #ff0000; color: #bada55; font-size: 2rem');
}

init();

$(function () {
    loaddata();

    function loaddata() {
        $('#data').html(localStorage.mydata);
    }

    $("#sendAll").click(function () {
        // template data
        var todo1 = $('#todo1').val();
        var data = todo1;
        localStorage.mydata = data;
        // convert to html
        $('#data').html(localStorage.mydata);
        // view in console
        console.log(localStorage.mydata);
        // success 
        $.jnotify('Save data in local storage', 500);
        return el;
    });

    $("#deleteAll").click(function () {
        // template data
        var todo1 = $('#todo1').val();
        var data = todo1;
        localStorage.clear = data;
        // convert to html
        $('#data').html(localStorage.mydata.clear);
        // view in console
        console.clear();
        return false;
    });

    // call local storage plugin
    /*     $('#form').sisyphus({
            customKeyPrefix: 'data_form', //data prefix
            timeout: 10, // in seconds
            onSave: function () {
                $.jnotify('Data form saved to Local Storage', 1000);
            },
            onRestore: function () {
                $.jnotify('Data form restore from Local Storage', 'warning', 1000);
            }
        }); */
});

/* $(document).ready(function () {
    $("#todo1").keypress((e) => {
        console.log(e.target.value);
    })
}); */
/* $(document).ready(function () {
    $("#txt").on("keyup", function (e) {
        //13  means enter button
        if (e.keyCode == 13 && $("#txt").val() != "") {
            var task = $("<div class='task'></div>").text($("#txt").val());
            var del = $("<i class='fas fa-trash-alt'></i>").click(function () {
                var p = $(this).parent();
                p.fadeOut(function () {
                    p.remove();
                });
            });

            var check = $("<i class='fas fa-check'></i>").click(function () {
                var p = $(this).parent();
                p.fadeOut(function () {
                    $("#complete").append(p);
                    p.fadeIn();
                });
                $(this).remove();
            });

            task.append(del, check);
            $("#notcomplete").append(task);
            //to clear the input
            $("#txt").val("");
        }
    })
});
 */