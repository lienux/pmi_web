$(document).ready(function() {
    $('#stopTable').DataTable( {
        order: [],
        columnDefs: [
            { 
                "targets": [ 0, 1, 7 ],
                "orderable": false,
            }
        ],
    });
});



function show(id){
    $.ajax({
        url: base_url+'/admin/api/simcard/show/'+id,
        type: 'GET',
        dataType: 'JSON',
        contentType: false,
        processData: false,
        success: function(response){
            // console.log(response);            
            var id = response.trackingnesia.id;

            $('#operator').val(response.trackingnesia.operator_id).change();
            $('#gsm_no').val(response.trackingnesia.gsm_no);
            $('#msidn').val(response.trackingnesia.msidn);
            $('#imsi_no').val(response.trackingnesia.imsi_no);
            $('#user').val(JSON.parse(response.trackingnesia.users)).change();
            check_orUncheck_active(response.trackingnesia.active);
        }
    });
};

function do_create(){
    element_active();
    var formData = new FormData($('#modal_input form')[0]);
    var urlData = base_url + '/admin/api/simcard/create';
    $.ajax({
        type: 'POST',
        url: urlData,
        dataType: 'JSON',
        data: formData,
        contentType: false,
        processData: false,
        beforeSend: function(e) {
            $('#loader_input').show()
            if(e && e.overrideMimeType) {
                e.overrideMimeType('application/jsoncharset=UTF-8')
            }
        },
        complete: function(){
            $('#loader_input').hide();
        },
        success: function(response){
            // console.log(response);
            if(response.status == true){
                $('#modal_input').modal('toggle');
                $('#alert').addClass('bg-success');
                $('#alert').html(response.message).fadeIn().delay(2500).fadeOut(
                    function(){
                        location.reload(true);
                    }
                );
            }else{ 
                $('#alert_input').addClass('bg-danger');
                $('#alert_input').html(response.message).fadeIn().delay(5000).fadeOut();
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.responseText);
        }
    });
};


function do_update(id){
    element_active();
    var formData = new FormData($('#modal_input form')[0]);
    var urlData = base_url + '/admin/api/simcard/update/'+id;
    $.ajax({
        type: 'POST',
        url: urlData,
        dataType: 'JSON',
        data: formData,
        contentType: false,
        processData: false,
        beforeSend: function(e) {
            $('#loader_input').show()
            if(e && e.overrideMimeType) {
                e.overrideMimeType('application/jsoncharset=UTF-8')
            }
        },
        complete: function(){
            $('#loader_input').hide();
        },
        success: function(response){
            // console.log(response);
            if(response.status == true){
                $('#modal_input').modal('toggle');
                $('#alert').addClass('bg-success');
                $('#alert').html(response.message).fadeIn().delay(2500).fadeOut(
                    function(){
                        location.reload(true);
                    }
                );
            }else{ 
                $('#alert_input').addClass('bg-danger');
                $('#alert_input').html(response.message).fadeIn().delay(5000).fadeOut();
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.responseText);
        }
    });
};

function do_delete(id){
    var urlData = base_url + '/admin/api/simcard/delete/'+id;
    $.ajax({
        type: 'DELETE',
        url: urlData,
        dataType: 'JSON',
        contentType: false,
        processData: false,
        beforeSend: function(e) {
            $('#loader_delete').show()
            if(e && e.overrideMimeType) {
                e.overrideMimeType('application/jsoncharset=UTF-8')
            }
        },
        complete: function(){
            $('#loader_delete').hide();
        },
        success: function(response){
            console.log(response);
            if(response.status == true){
                $('#modal_confirmation').modal('toggle');
                $('#alert').addClass('bg-success');
                $('#alert').html(response.message).fadeIn().delay(3000).fadeOut(
                    function(){
                        location.reload(true);
                    }
                );
            }else{
                $('#alert').addClass('bg-danger');
                $('#alert').html(response.message).fadeIn().delay(3000).fadeOut();
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.responseText);
        }
    });
};

function do_delete_check(){
    var checkedIds = $(".checkbox_simcards:checked").map(function() {
        return this.id;
    }).toArray();
    var urlData = base_url + '/admin/api/simcard/delete_in/'+checkedIds;
    $.ajax({
        type: 'DELETE',
        url: urlData,
        dataType: 'JSON',
        contentType: false,
        processData: false,
        beforeSend: function(e) {
            $('#loader_delete2').show()
            if(e && e.overrideMimeType) {
                e.overrideMimeType('application/jsoncharset=UTF-8')
            }
        },
        complete: function(){
            $('#loader_delete2').hide();
        },
        success: function(response){
            console.log(response);
            if(response.status == true){
                $('#modal_confirmation').modal('toggle');
                $('#alert').addClass('bg-success');
                $('#alert').html(response.message).fadeIn().delay(3000).fadeOut(
                    function(){
                        location.reload(true);
                    }
                );
            }else{
                $('#alert').addClass('bg-danger');
                $('#alert').html(response.message).fadeIn().delay(3000).fadeOut();
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.responseText);
        }
    });
}