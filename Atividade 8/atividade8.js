
var n = prompt("Digite o número de jogos a serem jogados: ");

    for(var i = 1; i <= n; i ++)
    {
        var escolhaUsuario = prompt("Escolha entre pedra, papel ou tesoura");
        var check = 0;

        var escolhaComputador = Math.random() * 3;

        if(escolhaComputador < 1)
            escolhaComputador = "pedra";

        else if(escolhaComputador < 2)
            escolhaComputador = "papel";

        else
            escolhaComputador = "tesoura";

        escolhaComputador = escolhaComputador.toUpperCase();
        escolhaUsuario = escolhaUsuario.toUpperCase();

        if(escolhaComputador == escolhaUsuario)
            check = 0;

        else if(escolhaUsuario == "PEDRA")
        {
            if(escolhaComputador == "PAPEL")
                check = 2;
            else 
                check = 1;
                
        }

        else if(escolhaUsuario == "PAPEL")
        {
            if(escolhaComputador == "TESOURA")
                check = 2;
            else
                check = 1;
        }

        else if(escolhaUsuario == "TESOURA")
        {
            if(escolhaComputador == "PEDRA")
                check = 2;
            else
                check = 1;
        }

        else
            check = 4;

        if(check == 0)
            document.write("O resultado do jogo " + i + " foi um empate!" + " Usuário escolheu: " + escolhaUsuario + " // Computador escolheu: " + escolhaComputador + "<br>");
            
        else if(check == 1)
            document.write("O resultado do jogo " + i + " foi vitória do usuário!" + " Usuário escolheu: " + escolhaUsuario + " // Computador escolheu: " + escolhaComputador + "<br>");

        else if(check == 2)
            document.write("O resultado do jogo " + i + " foi vitória do computador!" + " Usuário escolheu: " + escolhaUsuario + " // Computador escolheu: " + escolhaComputador + "<br>");
        
        else if(check == 4)
            document.write("O usuário escolheu uma opção inválida." + "<br>");
        
    }
