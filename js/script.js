$(document).ready(function(e) {
    $.ajax({
        type: "get",
        dataType: "json",
        data: { orderBy: "nome" },
        url: "https://servicodados.ibge.gov.br/api/v1/localidades/estados",
        success: function(response) {
            $.each(response, function(indexInArray, valueOfElement) {
                var option = "<option>" + valueOfElement.sigla + "</option>"
                $("#uf").append(option)
            });
        }
    });



    $('#uf').change(function(e) {
        e.preventDefault();
        $("#local").empty();
        if (uf == 'Estados') { return }
        var uf = $("#uf").val();
        $.ajax({
            type: "get",
            url: "https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + uf + "/municipios",
            data: { orderBy: "nome" },
            dataType: "json",
            success: function(response) {
                $.each(response, function(indexInArray, valueOfElement) {
                    var option = "<option>" + valueOfElement.nome + "</option>"
                    $("#local").append(option)
                });
            }
        });
    });
});