import character from "./data.js"
console.log(character)
import characterapp from "./src/components/character/character.js"

class characterclass extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.render()
    }

    render(){
        const precharacter = character.map( (Charact)=> {return `<character-characterapp Name="${Charact.name}" Gender="${Charact.gender}" Species="${Charact.species}" house="${Charact.house}" dateOfBirth="${Charact.yearOfBirth}"></character-characterapp>` })
        console.log(precharacter);
        const characterJoin = precharacter.join(" ")
        console.log(characterJoin);
        this.shadowRoot.innerHTML= `${characterJoin}`
    }

}

customElements.define("character-container", characterclass)