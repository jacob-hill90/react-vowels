import Submit from "./submit"

function Input (props) {

    const submitted = (event) => {
        event.preventDefault()
        let highlighted = []
        let word = (document.getElementById('input-value').value).split('')
        for(let i of word){
            if(i === "a" || i === "e" || i === "i" || i === 'o' || i === 'u'){
                console.log('hey')
            }
        }
        
        document.getElementById("display").innerHTML = word
        document.getElementById('display').style.display='flex'
    }

    return(
        <div id='form-container'>
            <form id='input-area'>
                <label id='input-label'>Enter Word Here:<input id='input-value'></input></label>
                <Submit handleClick={submitted}/>
            </form>
        </div>
    )
}
export default Input