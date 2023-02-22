export const Nav = () =>{

    return(
        <header>
            <h2 className="titulo">TodoCompras</h2>
            <ul className="navegacion">
                <li><a className="itemNav" href="#">Velas</a></li>
                <li><a className="itemNav" href="#">Sahumerios</a></li>
                <li><a className="itemNav" href="#">Aromateraopia</a></li>
                <li><a className="itemNav" href="#">Yoga</a></li>
                <i className="carrito">&#128722;<span className="numero">0</span></i>
            </ul>
        </header>
    )
}