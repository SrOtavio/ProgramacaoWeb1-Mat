
class Pessoa {

	setNome(nome) {
		this.nome = nome;
	}

	setSalario(salario) {
		this.salario = salario;
	}

	setIdade(idade) {
		this.idade = idade;
	}

	getNome() {
		return this.nome;
	}

	getSalario() {
		return this.salario;
	}

	getIdade() {
		return this.idade;
	}

	toJSON() {
		var dadosJ = '{"name": "' + this.nome + '" , "salary": "' + this.salario + '","age": "' + this.idade +'"}';
		return dadosJ;
	}
	
	constructor(nome, salario, idade){
		this.setNome(nome);
		this.setSalario(salario);
		this.setIdade(idade);
	}
}

$(document).ready(function(){

	//Pesquisa geral
    $('.getall').click(function(){
        $.ajax({
            url: 'http://rest-api-employees.jmborges.site/api/v1/employees',
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
            url: 'http://rest-api-employees.jmborges.site/api/v1/employee/' +id,
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
		
		var nome = document.getElementById("nome").value;
		var idade = document.getElementById("idade").value;
		var salario = document.getElementById("salario").value;
		
		if (nome == ""){
				alert('Por gentileza informe o nome');
				return;
			}
			if (idade == ""){
				alert('Por gentileza informe a idade');
				return;
			}
			if (salario == ""){
				alert('Por gentileza informe o salario');
				return;
			}

		var pessoa = new Pessoa(nome, salario, idade);
		var dados = pessoa.toJSON();
		console.log(dados);
		
        $.ajax({
            url: 'http://rest-api-employees.jmborges.site/api/v1/create',
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
		var nome = document.getElementById("atualizaNome").value;
		var salario = document.getElementById("AtualizaSalario").value;
		var idade = document.getElementById("atualizaIdade").value;
			if (nome == ""){
				alert('Por gentileza informe o nome');
				return;
			}
			if (idade == ""){
				alert('Por gentileza informe a idade');
				return;
			}
			if (salario == ""){
				alert('Por gentileza informe o salario');
				return;
			}
		
		var pessoa = new Pessoa(nome, salario, idade);
		var dados = pessoa.toJSON();
		console.log(dados);
		
        $.ajax({
            url: 'http://rest-api-employees.jmborges.site/api/v1/update/' +id,
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
            url: 'http://rest-api-employees.jmborges.site/api/v1/delete/' + id,
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


