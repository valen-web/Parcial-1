
class characterapp extends HTMLElement{

    static get observedAttributes(){
        return ["name","species","gender","house","yearOfBirth"]
    }

    attributeChangedCallback(propValue, _, newValue){
        switch (propValue) {
            case "name":
                this.characterName = newValue
                break;
            case "species":
                this.characterSpecies = newValue
                break;
            case "gender":
                this.characterGenger = newValue
                break;
            case "house":
                this.characterHouse = newValue
                break;
            case "yearOfBirth":
                 this.characterDate= newValue
                break;
        
            default:
                break;
        }


    }

        constructor(){
            super()
            this.attachShadow({mode: "open"})
        }
    
        connectedCallback(){
            this.mount()
        }

        mount(){
            this.render()
           const btn = this.shadowRoot.querySelector("button")
            btn.addEventListener("click", ()=> console.log("nombre"))

        }

    
        render(){
            this.shadowRoot.innerHTML=`
            <section>
            <p>Name: ${this.characterName}</p>
            <p>Gender: ${this.characterGenger}</p>
            <p>Species: ${this.characterSpecies}</p>
            <p>House: ${this.characterHouse} </p>
            <p>date of birth: ${this.characterDate}</p>
            <button>Click</button>
            </section>
            `
        }
    
    }
    
    customElements.define("character-characterapp", characterapp)

    export default characterapp