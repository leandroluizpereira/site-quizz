let pergunta = {
    titulo: 'Gato',
    alternativas: ['Gat','Cat','Gate','Dog'],
    correta: 1
};

function mostraquestao(q){
    let titleDiv = document.getElementById('titulo');
    titleDiv.textContent = q.titulo;

    let alts = document.querySelectorAll('.alternativa');

 alts.forEach(function(element,index){
        element.textContent = q.alternativas[index];
        element.addEventListener('click',function(){
             if(index == q.correta){
                 console.log("Acertou!");
             }
             else{
                 console.log("Errou!");
             }
        })
    });
}

mostraquestao(pergunta);



let btn = document.getElementById('btn');
btn.addEventListener('click',function(){
 console.log("clique");
});
