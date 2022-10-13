var globalVars = {
    routeCreate: base_url + '/sukarelawan/create',
    routeShow: base_url + '/sukarelawan/show/',
    routeUpdate: base_url + '/sukarelawan/update/',
    routeDelete: base_url + '/sukarelawan/delete/',
    routeMultipleDelete: base_url + '/sukarelawan/delete_in/',
    // tableConfigsVehicle: null,
    // tableConfigsParking: null,
    // tableConfigsDriving: null,
    // tableConfigsIdle: null,
    // tableConfigsFatique: null,
    // tableConfigsSpeeding: null,
    // tableConfigsTopSafetyDriving: null,
    // tableConfigsHarsh: null,
    // tableConfigsOverSpeedCrash: null,
    // tableIdVehicle: $('#tblTotalVehicle'),
    // tableIdDriving: $('#tblTotalVehicleDriving'),
    // tableIdParking: $('#tblTotalVehicleParking'),
    // tableIdIdle: $('#tblTotalVehicleIdle'),
    // tableIdFatique: $('#tblTotalFatique'),
    // tableIdSpeeding: $('#tblTotalSpeeding'),
    // tableIdTotalTopSafetyDriving: $('#tblTotalTopSafetyDriving'),
    // tableIdHarsh: $('#tblTotalHarsh'),
    // data_list_vehicle: [],
    // data_list_driving: [],
    // data_list_parking: [],
    // data_list_idle: [],
    // data_list_fatique: [],
    // data_list_top_safety_driving: [],
    // data_list_speeding: [],
    // data_list_harsh: [],
    // data_list_overspeed_crash: [],
    // height_scroll: 300,
    // map: null
};

var APP = {
    Controllers: {

    },
    Models: {

    },
    Views: {

    },
};

var MAIN = {
    register: function () {
        // MAIN.EVENTS.register.apply();
        // MAIN.UI.register.apply();
    },
    EVENTS: {
        register: function () {
            // MAIN.EVENTS.btnGetDetailVehicle.apply();
            // MAIN.EVENTS.btnGetDetailVehicleDriving.apply();
            // MAIN.EVENTS.btnGetDetailVehicleParking.apply();
            // MAIN.EVENTS.btnGetDetailVehicleIdle.apply();
            // MAIN.EVENTS.btnShowFormTopSafetyDriving.apply();
            // MAIN.EVENTS.btnShowFormFatique.apply();
            // MAIN.EVENTS.btnShowFormSpeeding.apply();
            // //MAIN.EVENTS.btnSearch.apply();
            // MAIN.EVENTS.btnShowFormHarsh.apply();
            // MAIN.EVENTS.btnShowFormOverCrash.apply();
        },
        submitSukarelawan: function(){
            MAIN.AJAX.create.apply();
        },
        // init: function () {
        //     $('#status_report').val('detail');
        //     $(".dataTables_filter").hide();
        //     $('#card-summary').attr('style', 'display:none');
        //     $(".round-summary").addClass('icon-up');
        // },
        // downloadExcel: function () {
        //     $('.buttons-html5[aria-controls="tblDetail"]').hide();
        //     $('#btnDownloadExcelDetail').unbind().bind('click', function () {
        //         $('.buttons-html5[aria-controls="tblDetail"]').trigger('click');
        //     });
        // },
        // btnPrint: function () {
        //     $('.buttons-print[aria-controls="tblDetail"]').hide();
        //     $('#btnPrintDetail').unbind().bind('click', function () {
        //         $('.buttons-print[aria-controls="tblDetail"]').trigger('click');
        //     });
        // },
        // btnGetDetailVehicle: function () {
        //     try {
        //         $("#btnShowFormVehicle").unbind().bind('click', function () {
        //             $.ajax({
        //                 url: cs.baseUrl() + '/DashboardSafety/GetListVehicle',
        //                 dataType: 'JSON',
        //                 type: 'POST',
        //                 success: function (r) {
        //                     if (!r) return;
        //                     globalVars.data_list_vehicle = r;
        //                     if (globalVars.data_list_vehicle.length > 0) {
        //                         if (globalVars.tableConfigsVehicle === null) {
        //                             MAIN.TABLE.BuildTableVehicle();
        //                         } else {
        //                             $('#tblTotalVehicle').dataTable().fnDestroy();
        //                             $('#tblTotalVehicle').DataTable().draw(true);
        //                             MAIN.TABLE.BuildTableVehicle.apply();
        //                         }

        //                     } else {
        //                         MAIN.TABLE.BuildTableVehicle.apply();
        //                     }
        //                     MAIN.UI.showFormTableVehicle.apply();
        //                     globalVars.data_list_vehicle = [];
        //                 },
        //                 beforeSend: function () {
        //                     overlay.show();
        //                 },
        //                 error: function (e) {
        //                     console.log(e);
        //                 },
        //                 complete: function () {
        //                     setTimeout(function () {
        //                         overlay.hide();
        //                     }, 1000);
        //                 }
        //             });
        //         });
        //     } catch (err) {
        //         console.log(err);
        //     }
        // },
        // btnGetDetailVehicleDriving: function () {
        //     $("#btnShowFormVehicleDriving").unbind().bind('click', function () {
        //         $.ajax({
        //             url: cs.baseUrl() + '/DashboardSafety/GetListVehicleSearchBy',
        //             dataType: 'JSON',
        //             type: 'POST',
        //             data: {
        //                 searchby: 'driving'
        //             },
        //             success: function (r) {
        //                 if (!r) return;
        //                 globalVars.data_list_driving = r;
        //                 if (globalVars.data_list_driving.length > 0) {
        //                     if (globalVars.tableConfigsDriving === null) {
        //                         MAIN.TABLE.BuildTableDriving.apply();
        //                     } else {
        //                         $('#tblTotalVehicleDriving').dataTable().fnDestroy();
        //                         $('#tblTotalVehicleDriving').DataTable().draw(true);
        //                         MAIN.TABLE.BuildTableDriving.apply();
        //                     }

        //                 } else {
        //                     MAIN.TABLE.BuildTableDriving.apply();
        //                 }
        //                 MAIN.UI.showFormTableDriving.apply();
        //                 globalVars.data_list_driving = [];
        //             },
        //             beforeSend: function () {
        //                 overlay.show();
        //             },
        //             error: function (e) {
        //                 console.log(e);
        //             },
        //             complete: function () {
        //                 setTimeout(function () {
        //                     overlay.hide();
        //                 }, 1000);
        //             }
        //         });
        //     });
        // },
        // btnGetDetailVehicleParking: function () {
        //     $("#btnShowFormVehicleParking").unbind().bind('click', function () {
        //         $.ajax({
        //             url: cs.baseUrl() + '/DashboardSafety/GetListVehicleSearchBy',
        //             dataType: 'JSON',
        //             type: 'POST',
        //             data: {
        //                 searchby: 'parking'
        //             },
        //             success: function (r) {
        //                 if (!r) return;
        //                 globalVars.data_list_parking = r;
        //                 if (globalVars.data_list_parking.length > 0) {
        //                     if (globalVars.tableConfigsParking === null) {
        //                         MAIN.TABLE.BuildTableParking.apply();
        //                     } else {
        //                         $('#tblTotalVehicleParking').dataTable().fnDestroy();
        //                         $('#tblTotalVehicleParking').DataTable().draw(true);
        //                         MAIN.TABLE.BuildTableParking.apply();
        //                     }

        //                 } else {
        //                     MAIN.TABLE.BuildTableParking.apply();
        //                 }
        //                 MAIN.UI.showFormTableParking.apply();
        //                 globalVars.data_list_parking = [];
        //             },
        //             beforeSend: function () {
        //                 overlay.show();
        //             },
        //             error: function (e) {
        //                 console.log(e);
        //             },
        //             complete: function () {
        //                 setTimeout(function () {
        //                     overlay.hide();
        //                 }, 1000);
        //             }
        //         });
        //     });
        // },
        // btnGetDetailVehicleIdle: function () {
        //     $("#btnShowFormVehicleIdle").unbind().bind('click', function () {
        //         $.ajax({
        //             url: cs.baseUrl() + '/DashboardSafety/GetListVehicleSearchBy',
        //             dataType: 'JSON',
        //             type: 'POST',
        //             data: {
        //                 searchby: 'idle'
        //             },
        //             success: function (r) {
        //                 if (!r) return;
        //                 globalVars.data_list_idle = r;
        //                 if (globalVars.data_list_idle.length > 0) {
        //                     if (globalVars.tableConfigsIdle === null) {
        //                         MAIN.TABLE.BuildTableIdle.apply();
        //                     } else {
        //                         $('#tblTotalVehicleIdle').dataTable().fnDestroy();
        //                         $('#tblTotalVehicleIdle').DataTable().draw(true);
        //                         MAIN.TABLE.BuildTableIdle.apply();
        //                     }

        //                 } else {
        //                     MAIN.TABLE.BuildTableIdle.apply();
        //                 }
        //                 MAIN.UI.showFormTableIdle.apply();
        //                 globalVars.data_list_idle = [];
        //             },
        //             beforeSend: function () {
        //                 overlay.show();
        //             },
        //             error: function (e) {
        //                 console.log(e);
        //             },
        //             complete: function () {
        //                 setTimeout(function () {
        //                     overlay.hide();
        //                 }, 1000);
        //             }
        //         });
        //     });
        // },
        // btnShowFormTopSafetyDriving: function () {
        //     $("#btnShowFormTopSafetyDriving").unbind().bind('click', function () {
        //         $.ajax({
        //             url: cs.baseUrl() + '/DashboardSafety/GetListTopSafetyDriving',
        //             dataType: 'JSON',
        //             type: 'POST',
        //             data: {
        //                 provinsi: '',
        //                 kota: ''
        //             },
        //             success: function (r) {
        //                 if (!r) return;
        //                 globalVars.data_list_top_safety_driving = r;
        //                 if (globalVars.data_list_top_safety_driving.length > 0) {
        //                     if (globalVars.tableConfigsTopSafetyDriving === null) {
        //                         MAIN.TABLE.BuildTableTopSafetyDriving.apply();
        //                     } else {
        //                         $('#tblTotalTopSafetyDriving').dataTable().fnDestroy();
        //                         $('#tblTotalTopSafetyDriving').DataTable().draw(true);
        //                         MAIN.TABLE.BuildTableTopSafetyDriving.apply();
        //                     }

        //                 } else {
        //                     MAIN.TABLE.BuildTableTopSafetyDriving.apply();
        //                 }
        //                 MAIN.UI.showFormTopSafetyDriving.apply();
        //                 globalVars.data_list_top_safety_driving = [];
        //             },
        //             beforeSend: function () {
        //                 overlay.show();
        //             },
        //             error: function (e) {
        //                 console.log(e);
        //             },
        //             complete: function () {
        //                 setTimeout(function () {
        //                     overlay.hide();
        //                 }, 1000);
        //             }
        //         });
        //     });
        // },
        // btnShowFormFatique: function () {
        //     $("#btnShowFormFatique").unbind().bind('click', function () {
        //         $.ajax({
        //             url: cs.baseUrl() + '/DashboardSafety/GetListFatique',
        //             dataType: 'JSON',
        //             type: 'POST',
        //             data: {
        //                 provinsi: '',
        //                 kota: ''
        //             },
        //             success: function (r) {
        //                 if (!r) return;
        //                 console.log(r);
        //                 var obj = [];
        //                 $.each(r, function (k, v) {
        //                     var keterangan = '';
        //                     if (!cs.stringIsNullOrEmpty(v.currentStatusVehicle.driving.dur_moving.value)) {
        //                         if (parseFloat(v.currentStatusVehicle.driving.dur_moving.value).toFixed(2) >= 14420) {
        //                             keterangan = "Fatique";
        //                         } else {
        //                             keterangan = "Non Fatique";
        //                         }
        //                     }
        //                     var json =
        //                     {
        //                         'gps_sn': v.gps_sn,
        //                         'nopol': v.nopol,
        //                         'currentStatusVehicle_driving_start_time': v.currentStatusVehicle.driving.start_time,
        //                         'currentStatusVehicle_driving_stop_time': v.currentStatusVehicle.driving.stop_time,
        //                         'currentStatusVehicle_driving_dur_moving_text': v.currentStatusVehicle.driving.dur_moving.text,
        //                         'currentStatusVehicle_driving_dur_moving_value': v.currentStatusVehicle.driving.dur_moving.value,
        //                         'currentStatusVehicle_ket': keterangan,
        //                         'acc': (v.acc === 1 ? "ON" : "OFF").toString(),
        //                         'addr': v.addr,
        //                         'lon': v.lon,
        //                         'lat': v.lat,
        //                         'speed': v.speed
        //                     };
        //                     obj.push(json);
        //                 });
        //                 globalVars.data_list_fatique = obj;
        //                 console.log(globalVars.data_list_fatique.length);
        //                 console.log(globalVars.data_list_fatique);
        //                 if (globalVars.data_list_fatique.length > 0) {
        //                     if (globalVars.tableConfigsFatique === null) {
        //                         MAIN.TABLE.BuildTableFatique.apply();
        //                     } else {
        //                         $('#tblTotalFatique').dataTable().fnDestroy();
        //                         $('#tblTotalFatique').DataTable().draw(true);
        //                         MAIN.TABLE.BuildTableFatique.apply();
        //                     }

        //                 } else {
        //                     MAIN.TABLE.BuildTableFatique.apply();
        //                 }
        //                 MAIN.UI.showFormTableFatique.apply();
        //                 globalVars.data_list_fatique = [];
        //             },
        //             beforeSend: function () {
        //                 overlay.show();
        //             },
        //             error: function (e) {
        //                 console.log(e);
        //             },
        //             complete: function () {
        //                 setTimeout(function () {
        //                     overlay.hide();
        //                 }, 1000);
        //             }
        //         });
        //     });
        // },
        // btnShowFormSpeeding: function () {
        //     $("#btnShowFormSpeeding").unbind().bind('click', function () {
        //         $.ajax({
        //             url: cs.baseUrl() + '/DashboardSafety/GetListSpeeding',
        //             dataType: 'JSON',
        //             type: 'POST',
        //             data: {
        //                 provinsi: '',
        //                 kota: ''
        //             },
        //             success: function (r) {
        //                 if (!r) return;
        //                 globalVars.data_list_speeding = r;
        //                 if (globalVars.data_list_speeding.length > 0) {
        //                     if (globalVars.tableConfigsSpeeding === null) {
        //                         MAIN.TABLE.BuildTableSpeeding.apply();
        //                     } else {
        //                         $('#tblTotalSpeeding').dataTable().fnDestroy();
        //                         $('#tblTotalSpeeding').DataTable().draw(true);
        //                         MAIN.TABLE.BuildTableSpeeding.apply();
        //                     }

        //                 } else {
        //                     MAIN.TABLE.BuildTableSpeeding.apply();
        //                 }
        //                 MAIN.UI.showFormSpeeding.apply();
        //                 globalVars.data_list_speeding = [];
        //             },
        //             beforeSend: function () {
        //                 overlay.show();
        //             },
        //             error: function (e) {
        //                 console.log(e);
        //             },
        //             complete: function () {
        //                 setTimeout(function () {
        //                     overlay.hide();
        //                 }, 1000);
        //             }
        //         });
        //     });
        // },
        // btnShowFormHarsh: function () {
        //     $("#btnShowFormHarsh").unbind().bind('click', function () {
        //         $.ajax({
        //             url: cs.baseUrl() + '/DashboardSafety/GetListHarsh',
        //             dataType: 'JSON',
        //             type: 'POST',
        //             data: {
        //                 provinsi: '',
        //                 kota: ''
        //             },
        //             success: function (r) {
        //                 if (!r) return;
        //                 globalVars.data_list_harsh = r;
        //                 if (globalVars.data_list_harsh.length > 0) {
        //                     if (globalVars.tableConfigsHarsh === null) {
        //                         MAIN.TABLE.BuildTableHarsh.apply();
        //                     } else {
        //                         $('#tblTotalHarsh').dataTable().fnDestroy();
        //                         $('#tblTotalHarsh').DataTable().draw(true);
        //                         MAIN.TABLE.BuildTableHarsh.apply();
        //                     }

        //                 } else {
        //                     MAIN.TABLE.BuildTableHarsh.apply();
        //                 }
        //                 MAIN.UI.showFormHarsh.apply();
        //                 globalVars.data_list_harsh = [];
        //             },
        //             beforeSend: function () {
        //                 overlay.show();
        //             },
        //             error: function (e) {
        //                 console.log(e);
        //             },
        //             complete: function () {
        //                 setTimeout(function () {
        //                     overlay.hide();
        //                 }, 1000);
        //             }
        //         });
        //     });
        // },
        // btnShowFormOverCrash: function () {
        //     $("#btnShowFormOverCrash").unbind().bind('click', function () {
        //         $.ajax({
        //             url: cs.baseUrl() + '/DashboardSafety/GetListOverSpeedAndCrash',
        //             dataType: 'JSON',
        //             type: 'POST',
        //             data: {
        //                 provinsi: '',
        //                 kota: ''
        //             },
        //             success: function (r) {
        //                 if (!r) return;
        //                 globalVars.data_list_overspeed_crash = r;
        //                 if (globalVars.data_list_overspeed_crash.length > 0) {
        //                     if (globalVars.tableConfigsOverSpeedCrash === null) {
        //                         MAIN.TABLE.BuildTableOverSpeedCrash.apply();
        //                     } else {
        //                         $('#tblTotalOverSpeedCrash').dataTable().fnDestroy();
        //                         $('#tblTotalOverSpeedCrash').DataTable().draw(true);
        //                         MAIN.TABLE.BuildTableOverSpeedCrash.apply();
        //                     }

        //                 } else {
        //                     MAIN.TABLE.BuildTableOverSpeedCrash.apply();
        //                 }
        //                 MAIN.UI.showFormOverSpeedCrash.apply();
        //                 globalVars.data_list_overspeed_crash = [];
        //             },
        //             beforeSend: function () {
        //                 overlay.show();
        //             },
        //             error: function (e) {
        //                 console.log(e);
        //             },
        //             complete: function () {
        //                 setTimeout(function () {
        //                     overlay.hide();
        //                 }, 1000);
        //             }
        //         });
        //     });
        // },
        // btnSearch: function () {
        //     $("#btnSearch").unbind().bind('click', function () {
        //         overlay.show();
        //         var prov = $('#txtSearchProvinsi');
        //         var kota = $('#txtSearchKota');
        //         GetDataVehicle("", "");
        //         BuildChartTopTenSafetyDriving("", "");
        //         setTimeout(function () {
        //             overlay.hide();
        //         }, 1000);
        //     });
        // }
    },
    UI: {
        showLoader: {
            input: function() {
                $('#loader_input').show();
            },
            update: function() {
                $('#loader_update').show();
            },
            delete: function() {
                $('#loader_delete').show();
            }
        },
        hideLoader: {
            input: function() {
                $('#loader_input').hide();
            },
            update: function() {
                $('#loader_update').hide();
            },
            delete: function() {
                $('#loader_delete').hide();
            }
        },
        showCardQRCODE: function(response) {
            $('#qrcode_card').removeClass('collapse');
            $('#qrcode').html('<img src="'+response.pmi.qrcode+'">');
        },
        responseAjax: {
            show: function(response) {
                console.log(response);

            },
            create: function(response) {
                // console.log(response);
                if(response.status == true){
                    // $('#modal_input').modal('toggle');
                    $('#alert_input').addClass('bg-success');
                    $('#alert_input').html(response.message).fadeIn().delay(2500).fadeOut(
                        // function(){
                        //     location.reload(true);
                        // }
                    );
                    MAIN.UI.showCardQRCODE(response);
                }else{ 
                    $('#alert_input').addClass('bg-danger');
                    $('#alert_input').html(response.message).fadeIn().delay(5000).fadeOut();
                }
            },
            update: function(response) {
                console.log(response);
                // if(response.status == true){
                //     $('#modal_input').modal('toggle');
                //     $('#alert').addClass('bg-success');
                //     $('#alert').html(response.message).fadeIn().delay(2500).fadeOut(
                //         function(){
                //             location.reload(true);
                //         }
                //     );
                // }else{ 
                //     $('#alert_input').addClass('bg-danger');
                //     $('#alert_input').html(response.message).fadeIn().delay(5000).fadeOut();
                // }
            },
            delete: function(response) {
                console.log(response);
                // if(response.status == true){
                //     $('#modal_confirmation').modal('toggle');
                //     $('#alert').addClass('bg-success');
                //     $('#alert').html(response.message).fadeIn().delay(3000).fadeOut(
                //         function(){
                //             location.reload(true);
                //         }
                //     );
                // }else{
                //     $('#alert').addClass('bg-danger');
                //     $('#alert').html(response.message).fadeIn().delay(3000).fadeOut();
                // }
            },
            multipleDelete: function(response) {
                console.log(response);
                // if(response.status == true){
                //     $('#modal_confirmation').modal('toggle');
                //     $('#alert').addClass('bg-success');
                //     $('#alert').html(response.message).fadeIn().delay(3000).fadeOut(
                //         function(){
                //             location.reload(true);
                //         }
                //     );
                // }else{
                //     $('#alert').addClass('bg-danger');
                //     $('#alert').html(response.message).fadeIn().delay(3000).fadeOut();
                // }
            }
        },
        // register: function () {
        //     MAIN.UI.windowResizeMap.apply();
        //     MAIN.UI.window_responsive.apply();
        // },
        // showFormTableVehicle: function () {
        //     $('#frmVehicle').modal({ show: true, backdrop: 'static' });
        // },
        // showFormTableDriving: function () {
        //     $('#frmDriving').modal({ show: true, backdrop: 'static' });
        // },
        // showFormTableParking: function () {
        //     $('#frmParking').modal({ show: true, backdrop: 'static' });
        // },
        // showFormTableIdle: function () {
        //     $('#frmIdle').modal({ show: true, backdrop: 'static' });
        // },
        // showFormTableFatique: function () {
        //     $('#frmFatique').modal({ show: true, backdrop: 'static' });
        // },
        // showFormTopSafetyDriving: function () {
        //     $('#frmTopSafetyDriving').modal({ show: true, backdrop: 'static' });
        // },
        // showFormSpeeding: function () {
        //     $('#frmSpeeding').modal({ show: true, backdrop: 'static' });
        // },
        // showFormHarsh: function () {
        //     $('#frmHarsh').modal({ show: true, backdrop: 'static' });
        // },
        // showFormOverSpeedCrash: function () {
        //     $('#frmOverSpeedCrash').modal({ show: true, backdrop: 'static' });
        // },
        // windowResizeMap: function () {
        //     try {
        //         var map = $('#map');
        //         var cWidth = $('#contentMap').width() - 2;
        //         var cHeight = $('#contentMap').height() - 50;
        //         var sProp = 'width:' + cWidth.toString() + 'px;height:' + cHeight.toString() + 'px;position: relative; overflow: hidden;';
        //         map.removeAttr('style');
        //         map.attr('style', sProp.toString());
        //     } catch (err) {
        //         console.log(err);
        //     }
        // },
        // window_responsive: function () {
        //     window.onresize = function (event) {
        //         MAIN.UI.windowResizeMap.apply();
        //     };
        // }
    },    
    AJAX: {
        show: function(id){
            $.ajax({
                url: globalVars.routeShow + id,
                type: 'GET',
                dataType: 'JSON',
                contentType: false,
                processData: false,
                success: function(response){
                    MAIN.UI.responseAjax.show(response);
                }
            });
        },
        create: function(){
            var formData = new FormData($('#card_input form')[0]);
            var urlData = globalVars.routeCreate;
            $.ajax({
                type: 'POST',
                url: urlData,
                dataType: 'JSON',
                data: formData,
                contentType: false,
                processData: false,
                beforeSend: function(e) {
                    MAIN.UI.showLoader.input.apply();
                    if(e && e.overrideMimeType) {
                        e.overrideMimeType('application/jsoncharset=UTF-8')
                    }
                },
                complete: function(){
                    MAIN.UI.hideLoader.input.apply();
                },
                success: function(response){
                    MAIN.UI.responseAjax.create(response);
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.responseText);
                }
            });
        },
        update: function(id){
            var formData = new FormData($('#card_input form')[0]);
            var urlData = globalVars.routeUpdate + id;
            $.ajax({
                type: 'POST',
                url: urlData,
                dataType: 'JSON',
                data: formData,
                contentType: false,
                processData: false,
                beforeSend: function(e) {
                    MAIN.UI.showLoader.update.apply();
                    if(e && e.overrideMimeType) {
                        e.overrideMimeType('application/jsoncharset=UTF-8')
                    }
                },
                complete: function(){
                    MAIN.UI.hideLoader.update.apply();
                },
                success: function(response){
                    MAIN.UI.responseAjax.update(response);
                },
                error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.responseText);
                }
            });
        },
        delete: function(id){
            var urlData = globalVars.routeDelete + id;
            $.ajax({
                type: 'DELETE',
                url: urlData,
                dataType: 'JSON',
                contentType: false,
                processData: false,
                beforeSend: function(e) {
                    MAIN.UI.showLoader.delete.apply();
                    if(e && e.overrideMimeType) {
                        e.overrideMimeType('application/jsoncharset=UTF-8')
                    }
                },
                complete: function(){
                    MAIN.UI.hideLoader.delete.apply();
                },
                success: function(response){
                    MAIN.UI.responseAjax.delete(response);
                },
                error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.responseText);
                }
            });
        },
        delete_check: function(){
            var checkedIds = $(".checkbox_multiple_delete:checked").map(function() {
                return this.id;
            }).toArray();
            var urlData = globalVars.routeMultipleDelete + checkedIds;
            $.ajax({
                type: 'DELETE',
                url: urlData,
                dataType: 'JSON',
                contentType: false,
                processData: false,
                beforeSend: function(e) {
                    MAIN.UI.showLoader.delete.apply();
                    if(e && e.overrideMimeType) {
                        e.overrideMimeType('application/jsoncharset=UTF-8')
                    }
                },
                complete: function(){
                    MAIN.UI.hideLoader.delete.apply();
                },
                success: function(response){
                    MAIN.UI.responseAjax.multipleDelete(response);
                },
                error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.responseText);
                }
            });
        },
    },
    TABLE: {
        register: function () {
            // MAIN.TABLE.BuildTableSukarelawan.apply();
        },
        BuildTableSukarelawan: function () {
            $('#tableSukarelawan').DataTable({
                "destroy": true,
                responsive: true,
                paging: true,
                data: globalVars.data_list_vehicle,
                "ordering": true,
                dom: 'Bfrtip',
                buttons: [
                    'csv', 'excel'
                ],
                columns: [
                    { data: 'car_msisdn' },
                    { data: 'car_plate' },
                    { data: 'gps_time' },
                    { data: 'acc_status' },
                    { data: 'status_vehicle' },
                    { data: 'group_name' },
                    { data: 'driver_nm' },
                    { data: 'company_name' },
                    { data: 'lon' },
                    { data: 'lat' },
                    { data: 'geo_name' }
                ],
                columnDefs: [
                    {
                        "targets": [8, 9],
                        "visible": false,
                        "searchable": false
                    },
                    {
                        targets: [2], render: function (row) {
                            if (!cs.stringIsNullOrEmpty(row)) {
                                return (moment(row).format("YYYY-MM-DD HH:mm:ss").toString());
                            } else {
                                return "";
                            }

                        }
                    }
                ],
                fixedColumns: true
            });
        },
    },
    HELPER: {

    },
};

$(document).ready(function () {
    $( "#datepicker" ).datepicker({
        "dateFormat": "yy-mm-dd"
    });
    // MAIN.register.apply();
    // MAIN.UI.showLoader.input.apply();
});