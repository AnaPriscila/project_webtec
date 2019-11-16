/*
PascalCase / camelCase / kebab-case / _snake_case / const API_URL
*/
/*
export class MinhaDiv {
    constructor(name) {
        this.name = name 
    }
}*/
export default class MinhaDiv extends HTMLElement {
    constructor () {
        super();

        this.attachShadow({ mode: 'open' });
        this.userInfo = [];
        this.buscarUsuario();
        this.shadowRoot.innerHTML = `
            <p>Minha Div: ${this.profileName} --> Meu usuário é: ${JSON.stringify(this.userInfo)}</p>
       `;
    }

    buscarUsuario() {
        console.log('Buscando usuário...');
        fetch(`https://api.github.com/users/${this.profileName}`)
            .then(res => this.userInfo.push(res.json()))
            .catch(e => console.log(`Erro!\n\n${e}`));

            //.then(res => res.json())
            //.then(json => this.userInfo.push(json));
    }
   
    get profileName() {
        return this.getAttribute('profile');
    }
}
//export default customElements.define('minha-div', MinhaDiv);
customElements.define('minha-div', MinhaDiv);

