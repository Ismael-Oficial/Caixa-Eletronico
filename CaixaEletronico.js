var nome = prompt("Digite seu Nome: ")
		alert("Olá " + nome + " é um prazer ter você por aqui!")

		var saldo = 100.5; //Float
		function inicio() {

			var escolha = parseInt(prompt('Selecione uma opção: \n 1 - Saldo \n 2 - Depósito \n 3 - Saque  \n 4 - Extrato \n 5 - Transferência \n 6 - Sair'));

			if (escolha === 1) {
				ver_saldo();
			} else if (escolha === 2) {
				fazer_deposito();
			} else if (escolha === 3) {
				fazer_saque();
			} else if (escolha === 4) {
				ver_extrato();
			} else if (escolha === 5) {
				transferencia();
			} else if (escolha === 6) {
				sair();
			} else {
				erro();
			}
		}

		function ver_saldo() {
			alert('Seu saldo atual é: ' + saldo);
			inicio();
		}

		function senha(){
			var entrarSenha = parseInt(prompt('Informe a senha: '));
			if(entrarSenha != 3589){
				alert('Senha incorreta!')
				senha();
			}

		}

		function fazer_deposito() {
			var deposito = parseFloat(prompt('Qual o valor para depósito?'));
			// Not a Number
			if (isNaN(deposito) || deposito === '') {
				alert('Por favor, informe um número:');
				fazer_deposito();
			} else {
				saldo += deposito;
				ver_saldo();
			}
		}

		function fazer_saque() {
			var saque = parseFloat(prompt('Qual o valor para saque?'));
			if (saldo >= saque) {
				if (isNaN(saque) || saque === '') {
					alert('Por favor, informe um número:');
					fazer_saque();
				} else {
					saldo -= saque;

					ver_saldo();
				}
			}
			else (saldo < saque)
			{
				alert("Valor do Saque Superior ao Saldo em conta!")

				ver_saldo();
			}
		}

		function ver_extrato() {

			var extrato = confirm("Deseja consultar seu extrato?")
			
			switch (extrato)
			{
				case extrato = true:
				alert("Data: 01/03 à 15/03 \n\n - Playstation 4 R$2.000,00 \n - Tv 40' Samsung R$1.560,00 \n - Caixa de Som JBL R$800,00 \n\n SubTotal: R$ 4.400")
				alert(inicio())
				break;

				case extrato = false:
					alert(inicio())
				break;
			}
		}

		function transferencia(){
			senha();
			var conta = Number(prompt('Digite o número da conta: '));
			var valor_transferencia = parseFloat(prompt('Digite o valor da transferência: '))
			if  (isNaN(conta) || conta === ''){
				alert('Por favor, informe o número da conta corretamente: ')
				transferencia();
			}
			if (isNaN(valor_transferencia) || valor_transferencia === '' ){
				alert('Por favor, informe um valor: ')
				transferencia();
			}
			else if(valor_transferencia > saldo){
				alert('Operação não autorizada.')
				transferencia();
			}
			else if(valor_transferencia <= 0){
				alert('Operação não autorizada.')
				transferencia();
			}
			else{
				saldo -= valor_transferencia;
				ver_saldo();

			}

		}

		function erro() {
			alert('Por favor, informe um número entre 1 e 4');
			inicio();
		}

		function sair() {
			var confirma = confirm('Você deseja sair?');
			if (confirma) {
				window.close();
			} else {
				inicio();
			}
		}



		inicio();