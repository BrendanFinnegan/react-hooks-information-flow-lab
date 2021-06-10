

function Header (props) {

    
function handleClick() {
    props.darkChange()

}

    return(
        <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>
         {props.modeDark ? "Light" : "Dark"} Mode
        </button>
        </header>
    )
}
export default Header