let mostra= document.querySelector("#mostra")


function hora(){
    let temp= document.querySelector("#bomdia")
    // temp.innerHTML= new Date().getHours()
    pegahora = new Date().getHours()

    if(pegahora >= 0 && pegahora < 6){
        temp.innerHTML= "Boa Madrugada"
    }else if(pegahora >= 7 && pegahora < 13){
        temp.innerHTML= "Bom Dia"
    }else if(pegahora >= 13 && pegahora < 18){
        temp.innerHTML= "Boa Tarde"
    }else if(pegahora >= 18){
        temp.innerHTML= "Boa Noite"
    }
}

function hab(e){
    let telahab= document.querySelector("#mostra-hab")

    switch (e) {
        case 1: telahab.innerHTML= "HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. A tecnologia é fruto da junção entre os padrões HyTime e SGML. HyTime é um padrão para a representação estruturada de hipermídia e conteúdo baseado em tempo."
        break
        case 2: telahab.innerHTML= "Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags <style>. Também é possível, adicionar estilos adicionando um link para um arquivo CSS que contém os estilos"
        break
        case 3: telahab.innerHTML= "Sass é uma linguagem de folhas de estilo concebida inicialmente por Hampton Catlin e desenvolvida por Natalie Weizenbaum. Depois de suas versões iniciais, Weizenbaum e Chris Eppstein continuaram a estender Sass com SassScript, uma simples linguagem de script usada em arquivos Sass"
        break
        case 4: telahab.innerHTML= "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web"
        break
        case 5: telahab.innerHTML= "Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web, usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experiência do usuário em um site amigável e responsivo"
        break
        case 6: telahab.innerHTML= "jQuery é uma biblioteca livre que contém funções da linguagem de programação JavaScript que interage com páginas em HTML, desenvolvida para simplificar os scripts executados/interpretados no navegador de internet do usuário"
        break
        case 7: telahab.innerHTML= "PHP é uma linguagem de script de uso geral voltada para o desenvolvimento da web. Ele foi originalmente criado pelo programador dinamarquês-canadense Rasmus Lerdorf em 1993 e lançado em 1995. A implementação de referência do PHP agora é produzida pelo The PHP Group"
        break
        case 8: telahab.innerHTML= "Python é uma linguagem de programação de alto nível e de uso geral. Sua filosofia de design enfatiza a legibilidade do código com o uso de recuo significativo. Python é tipado dinamicamente e coletado como lixo"
        break
    }
}

let modal= document.querySelector("#modal")
function link(e){
    let textomodal= document.querySelector("#texto-modal")
    let titulomodal= document.querySelector("#titulo-modal")
    let repositorio= document.querySelector("#reposi")
    let site= document.querySelector("#site")

    modal.style.display= "flex"
    modal.style.animation= "apmodal 0.5s ease-in-out"
    titulomodal.innerHTML= textomodal.innerHTML

    switch (e){
        case 1:
            repositorio.setAttribute("href", "https://github.com/MayckL2/Netflix---Prototipo")
            site.setAttribute("href", "https://netflix-prototipo.netlify.app/")
            break
        case 2:
            repositorio.setAttribute("href", "https://github.com/MayckL2/Calculadora-em-JavaScript")
            site.setAttribute("href", "https://mayck-calculadora.netlify.app/")
            break
        case 3:
            repositorio.setAttribute("href", "https://github.com/MayckL2/Sess-o-de-comentarios-com-JS")
            site.setAttribute("href", "https://addcomments.netlify.app/")
            break
        case 4:
            repositorio.setAttribute("href", "https://github.com/MayckL2/LandingPage-Jordan")
            site.setAttribute("href", "https://landingpagejordan.netlify.app/")
            break
        
        }
}

function fechamodal(){
    modal.style.display= "none"
    modalaberto= 0
}

function scroll(){
    // mostra.innerHTML= window.scrollY
    let li= document.querySelectorAll("#sobre li")
    let hab_h1= document.querySelector("#hab h1")
    let mostra_hab= document.querySelector("#mostra-hab")
    let proj= document.querySelector("#proj h1")
    let proj_li= document.querySelectorAll("#proj li")
    let prob= document.querySelector("#problema h1")
    let sol= document.querySelectorAll("#solucao h1")


    if(window.innerWidth > 800){

        if(window.scrollY > 260){
            prob.style.animation= "move 1s ease-in-out"
            prob.style.opacity= 1
        }else{
            prob.style.animation= "none"
            prob.style.opacity= 0
        }

        if(window.scrollY > 930){
            sol[0].style.animation= "sobe 1s "
            sol[0].style.opacity= 1
            sol[1].style.animation= "sobe 2s "
            sol[1].style.opacity= 1
        }else{
            sol[0].style.animation= "none"
            sol[0].style.opacity= 0
            sol[1].style.animation= "none"
            sol[1].style.opacity= 0
        }

        if(window.scrollY > 1600){
            document.querySelector("#sobre h1").style.animation= "move 1s ease-in-out"
            li[0].style.animation= "move 1.5s ease-in-out"
            li[1].style.animation= "move 1.9s ease-in-out"
            li[2].style.animation= "move 2.3s ease-in-out"
            document.querySelector("#sobre").style.opacity= 1
        }else{
            document.querySelector("#sobre h1").style.animation= "none"
            li[0].style.animation= "none"
            li[1].style.animation= "none"
            li[2].style.animation= "none"
            document.querySelector("#sobre").style.opacity= 0
        }

        if(window.scrollY > 2100){
            hab_h1.style.animation= "move 1s ease-in-out"
            hab_h1.style.opacity= 1
            mostra_hab.style.animation= "move 1.5s ease-in-out"
            mostra_hab.style.opacity= 1
        }else{
            hab_h1.style.animation= "none"
            hab_h1.style.opacity= 0
            mostra_hab.style.animation= "none"
            mostra_hab.style.opacity= 0
        }

        if(window.scrollY > 2900){
            proj.style.animation= "move 1s ease-in-out"
            proj.style.opacity= 1
            proj_li[0].style.animation= "gira 1s ease-in-out"
            proj_li[1].style.animation= "gira 1.5s ease-in-out"
            proj_li[2].style.animation= "gira 2s ease-in-out"
            proj_li[3].style.animation= "gira 2.5s ease-in-out"
        }else{
            proj.style.animation= "none"
            proj.style.opacity= 0
            proj_li[0].style.animation= "none"
            proj_li[1].style.animation= "none"
            proj_li[2].style.animation= "none"
            proj_li[3].style.animation= "none"

        }

        let icon= document.querySelectorAll("#cont div a")
        if(window.scrollY > 3600){
            icon[0].style.animation= "expande 1s ease-in-out"
            icon[1].style.animation= "expande 1.5s ease-in-out"
            icon[2].style.animation= "expande 2s ease-in-out"
        }else{
            icon[0].style.animation= "none"
            icon[1].style.animation= "none"
            icon[2].style.animation= "none"
        }
    }
}

var clicou= 0
var  menul= document.querySelector("header ul")
function menu(){

    if(clicou == 0){
        menul.style.top= "250px"
        clicou = 1
    }else{
        menul.style.top= "0px"
        clicou = 0
    }
}

function fechamenu(){

    setTimeout(function(){menul.style.top= "0px"}, 500)
    clicou= 0
    
}