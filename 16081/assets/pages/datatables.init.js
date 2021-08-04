/*
 Template Name: Annex - Bootstrap 4 Admin Dashboard
 Author: Mannatthemes
 Website: www.Mannatthemes. 更多模板：com
 File: Datatable js
 */

$(document).ready(function() {
    $('#datatable').DataTable();

    //Buttons examples
    var table = $('#datatable-buttons').DataTable({
        lengthChange: false,
        buttons: ['copy', 'excel', 'pdf', 'colvis']
    });

    table.buttons().container()
        .appendTo('#datatable-buttons_wrapper .col-md-6:eq(0)');
} );