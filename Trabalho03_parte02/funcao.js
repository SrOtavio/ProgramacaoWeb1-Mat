
class Pessoa {

	setTipo(tipo) {
		this.tipo = tipo;
	}

	setPreco(preco) {
		this.preco = preco;
	}

	getTipo() {
		return this.tipo;
	}

	getPreco() {
		return this.preco;
	}

	toJSON() {
		var dadosJ = '{"tipo": "' + this.tipo + '","preco": "' + this.preco +'"}';
		return dadosJ;
	}
	
	constructor(tipo, preco){
		this.setTipo(tipo);
		this.setPreco(preco);
	}
}

$(document).ready(function(){

	//Pesquisa geral
    $('.getall').click(function(){
        $.ajax({
            url: 'https://private-f5fe29-trabalho03.apiary-mock.com/produtos',
            type: "GET",
            success: function(response) {
					document.getElementById("Result").innerHTML = response;
            },
            error: function(error){
                console.log('Erro: ${error}')
            }
        })
    });
	
	//Pesquisa por ID digitado:
    $('.get').click(function(){
		var id = document.getElementById("idget").value;
		if (id == ""){
				alert('Por gentileza informe o ID');
				return;
			}
        $.ajax({
            url: 'https://private-f5fe29-trabalho03.apiary-mock.com/produtos/' +id,
            type: "GET",
            success: function(response) {
                console.log(response)
            },
            error: function(error){
                console.log('Erro: ${error}')
            }
        })
    });
	
	//Criar registro com dados digitados:
	$('.post').click(function(){
		
		var tipo = document.getElementById("tipo").value;
		var preco = document.getElementById("preco").value;
		
		if (tipo == ""){
				alert('Por gentileza informe o tipo');
				return;
			}
			if (preco == ""){
				alert('Por gentileza informe a preco');
				return;
			}

		var pessoa = new Pessoa(tipo, preco);
		var dados = pessoa.toJSON();
		console.log(dados);
		
        $.ajax({
            url: 'https://private-f5fe29-trabalho03.apiary-mock.com/produtos',
            type: "POST",
			dataType: "json",
			data: dados,
            success: function(result) {
                console.log(result)
            },
            error: function(erro){
                console.log(erro)
            }
        })
    });
	
	//Atualiza dados
	$('.put').click(function(){
		var id = document.getElementById("IDat").value;
		var tipo = document.getElementById("atualizatipo").value;
		var preco = document.getElementById("atualizapreco").value;
			if (tipo == ""){
				alert('Por gentileza informe o tipo');
				return;
			}
			if (preco == ""){
				alert('Por gentileza informe a preco');
				return;
			}
		
		var pessoa = new Pessoa(tipo, preco);
		var dados = pessoa.toJSON();
		console.log(dados);
		
        $.ajax({
            url: 'https://private-f5fe29-trabalho03.apiary-mock.com/produtos/' +id,
            type: "PUT",
			dataType: "json",
			data: dados,
            success: function(result) {
                console.log(result)
            },
            error: function(error){
                console.log('Erro: ${error}')
            }
        })
    });
	
	//Deletando por ID
	$('.deleteid').click(function(){
		var id = document.getElementById("deleid").value;
		if (id == ""){
			alert('Por gentileza informe o ID');
			return;
		}
        $.ajax({
            url: 'https://private-f5fe29-trabalho03.apiary-mock.com/produtos/' + id,
            type: "DELETE",
            success: function(result) {
                console.log(result)
            },
            error: function(erro){
                console.log(erro)
            }
        })
    });
})


