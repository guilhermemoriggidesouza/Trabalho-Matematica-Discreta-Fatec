$(document).ready(function(){
    $("#botaoConjuntos").click(function(){
        var qtConjuntos = $("#formConjuntos").val();
        if(qtConjuntos == ""){
            alert('digite a quantidade de grupos')
        }else{
            for(i=0 ; i < parseInt(qtConjuntos) ; i++){
                $("#formGerado").append("<input id='conjuntosGerados' name='elementosConjunto' placeholder='Digite o valor de cada elemento'></br>");
            }
            $('#formInicial').remove();
            $('#formGerado').append('<button type="button" id="iniciarSoma">Somar os valores</button>');
            $('#iniciarSoma').click(function(){
                var elementos = [];
                var somarElementos= 0;
                var interseccoes = 0;
                var inputs = document.getElementsByName("elementosConjunto");
                for(i=0; i< inputs.length; i++){
                    var numeros = inputs[i].value;
                    elementos.push(parseInt(numeros));
                }
                
                for(i=0 ; i<elementos.length ; i++){
                    somarElementos += elementos[i];
                }
                var numCardinal = elementos.length;
                var numelevado = parseInt(numCardinal);
                interseccoes = Math.pow(2, numelevado);
                console.log(interseccoes-1);
                var numInterseccoes = interseccoes-1-elementos.length;
                console.log(numInterseccoes);
                var select = "";
                for(i=1 ; i < elementos.length ; i++){
                    select +="<option value="+(i+1)+">"+(i+1)+"</option>";
                 }
                for(i=0 ; i < numInterseccoes ; i++){
                    var linha ="<input id='conjuntosGerados' name='elementosConjunto' placeholder='Digite as intersecçoes'>"
                    linha +="<select name ='subconjuntos'>";
                    linha += select;
                    linha +="</select></br>"
                    $('#informarIntersec').append(linha);
                }
                $('#processos').html("<h3>legenda: cada numero indica se a intersecção faz parte de uma dupla, de um trio, de um quarteto, ex:(|A n B| é uma dupla, |A n B n C| é um trio, etc..)</h3><br><h3>2-é um das duplas</h3><br><h3>3-é um das triplas</h3><br><h3>4-é um dos quartetos</h3><br><h3>....</h3><br>");
                $('#formGerado').remove();
                $('#informarIntersec').append('<button type="button" id="iniciarInter">Somar as intersecoes</button>');
                $('#iniciarInter').click(function(){
                    var quantidadeIntersec = document.getElementsByName('elementosConjunto');
                    var qtdSubconjunto = document.getElementsByName('subconjuntos');
                    var intersec =[];
                    var subconj = [];
                    for(i=0; i< quantidadeIntersec.length; i++){
                        intersec.push(parseInt(quantidadeIntersec[i].value));
                    }
                    for(i=0; i< qtdSubconjunto.length; i++){
                        if(parseInt(qtdSubconjunto[i].value)%2 == 0){
                            subconj.push(1);
                        }else{
                            subconj.push(-1);
                        }
                    }
                    var finalSoma = [];
                    var realFinalSoma = 0;
                    for(i=0; i < intersec.length ; i++){
                        finalSoma.push(intersec[i]*subconj[i]);
                    }
                    console.log(finalSoma);
                    for(i=0; i < finalSoma.length ; i++){
                        realFinalSoma += finalSoma[i];
                    }
                    console.log(realFinalSoma);
                    var TheEnd = somarElementos-realFinalSoma;
                    $('#informarIntersec').remove();
                    $('#processos').remove()
                    $('#resultado').html('<h1>resultado da união dos conjuntos: '+TheEnd+'</h1>');
                });
            });
           
        }
    })
});