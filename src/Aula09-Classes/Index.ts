export class Empresa {
    public readonly nome: string;
    
    private readonly colaboradores: Colaborador[] = [];

    protected readonly cnpj: string;

    constructor(nome: string, cnpj: string) {
        this.nome = nome;
        this.cnpj = cnpj;
    }

    adicionaColaborador(colaborador: Colaborador) {
        this.colaboradores.push(colaborador);
    }
}

export class Colaborador {
    constructor(
        public readonly nome: string,
        public readonly sobrenome: string,
    ) {}
}

const empresa1 = new Empresa('Company','11.111.111/0001-11');
const colaborador1 = new Colaborador('Luiz', 'Otavio');

empresa1.adicionaColaborador(colaborador1);

console.log(empresa1);