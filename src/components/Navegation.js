import { useEffect, useState } from "react";
import Post from "./Post";

function Navegation(props) {

    let postCuriosidades = [
        ["https://www.amazon.com.br/ASCENDANCE-BOOKWORM-LIGHT-NOVEL-PART/dp/1718356005", "https://media.istockphoto.com/photos/row-of-books-on-a-shelf-multicolored-book-spines-stack-in-the-picture-id1222550815?b=1&k=20&m=1222550815&s=170667a&w=0&h=MTxBeBrrrYtdlpzhMpD1edwLYQf3OPgkNeDEgIzYJww=", "Livros"],
        ["https://www.crunchyroll.com/pt-br","https://media.istockphoto.com/photos/bonboncity-picture-id519757502?b=1&k=20&m=519757502&s=170667a&w=0&h=EDGx1LbSTeavcJC_QkNfckIfHEiBM9gVioQ2uEAwPS4=","Animes"],
        ["https://www.leagueoflegends.com/pt-br/","https://images.unsplash.com/photo-1609017909889-d7b582c072f7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGdhbWVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","Games"],
        ["https://www.instagram.com/robocinufpe/","https://media.istockphoto.com/photos/cute-artificial-intelligence-robot-with-headset-picture-id1283257467?b=1&k=20&m=1283257467&s=170667a&w=0&h=5NF5-7_2H4LOfeuKxWnGVdyZkV5uq8qeVxK-tfA7NL8=","Robotica"]
    ]

    let postProjetos = [
        ["https://olavorangel18.github.io/","http://meuprimeirosite.org.br/images/bg-home.jpg","Meu Primeiro Site - JA"],
        ["https://cocky-wright-ace659.netlify.app/","https://enotas.com.br/blog/wp-content/uploads/2021/02/GitHub.jpg","CRV - Github Consult"],
        ["https://hiringcoders-blackfriday.herokuapp.com/","https://www.tercerize.com.br/wp-content/uploads/2019/11/como_criar_uma_landing_page.png","BlackFriday - LP"],
        ["https://silly-hamilton-db3959.netlify.app/", "https://i2.wp.com/raccoon.ag/wp-content/uploads/2020/10/Banner-2.jpg?ssl=1", "Raccon - Challenge"],
    ]

    let postCertificados = [
        ["https://www.linkedin.com/in/olavoconceicao/","http://meuprimeirosite.org.br/images/bg-home.jpg","Meu Primeiro Site"],
        ["https://www.linkedin.com/in/olavoconceicao/","https://br.cellep.com/wp-content/uploads/2020/11/shutterstock_1375976735.jpg","UX-UI"],
        ["https://www.linkedin.com/in/olavoconceicao/","https://vtex.com/wp-content/uploads/2021/05/Capa-blog-Hiring-Coders-2.jpeg","FullStack - Hiring Coders"],
        ["https://www.linkedin.com/in/olavoconceicao/","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHrIG2PeXvGJ-3r9CnoT_qvj95x9FkdbVICihPT0BEqr3PLGGjPct-rgo&s=10","VTEX - IO"],
    ]
    

    const firtItem = document.querySelector("#first")
    const secondItem = document.querySelector("#second")
    const thirdItem = document.querySelector("#third")
    
    const [alterna, setAlterna] = useState([])

    useEffect(() =>(setAlterna(postProjetos)),[])

    function handleAddClass(event){
        let element = event.target.id

        if(element == "first"){
            firtItem.classList.add("ativo")
            secondItem.classList.remove("ativo")
            thirdItem.classList.remove("ativo")
        }else if(element == "second"){
            firtItem.classList.remove("ativo")
            secondItem.classList.add("ativo")
            thirdItem.classList.remove("ativo")
        }else if(element == "third" ){
            firtItem.classList.remove("ativo")
            secondItem.classList.remove("ativo")
            thirdItem.classList.add("ativo")
        }

    }

    return (
        <>
        <div className="portfolioItens">
            <div  id="first" onClick={(e) => {setAlterna(postCuriosidades); handleAddClass(e)}
        }    className ="item inativo ">
                {props.firstItem}
            </div>
            <div id="second" onClick={(e) => {setAlterna(postProjetos); handleAddClass(e)}
            } className ="item ativo">
                {props.secondItem}
            </div>
            <div id="third" onClick={(e) => {setAlterna(postCertificados); handleAddClass(e)}
            } className ="item inativo">
                {props.thirdItem}
            </div>
        </div>
        <div className="containerPost">
        {alterna.map(element =>{
            return(
                <Post 
                url= {element[0]}
                background = {`url(${element[1]})`}
                title = {element[2]}
                />
            )
        })}
        </div>
        </>
    );
  }
  
  export default Navegation;