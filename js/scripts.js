$(document).ready(function() {
    var cities = [
        ["NYC", 'nyc'],
        ["SF", 'sf'],
        ["LA", 'la'],
        ["ATX", 'atx'],
        ["SYD", 'syd']
    ];

    $(cities).each(function(index, element){
        $('#city-type').append("<option value='" + element[1] + "'>" + element[0] + "</option>");
    });

$('#city-type').change(function() {
    $('body').attr('class', $(this).val());
});
});
