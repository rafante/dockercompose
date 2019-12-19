export default class SafiraArrays {

    /**
     * 
     * @param objeto Objeto a ser reduzido
     */
    static reduzPropriedadesNoObjeto(objeto: any) {
        let chaves = Object.keys(objeto);
        var novoObjeto: any = {}
        chaves.forEach((chave) => {
            if (typeof (objeto[chave]) === 'object') {
                if (objeto[chave]['id'] !== undefined) {
                    novoObjeto[chave + '_id'] = objeto[chave]['id'];
                }
            } else {
                novoObjeto[chave] = objeto[chave];
            }
        });
        return novoObjeto;
    }

    /**
     * Recebe um objeto e retorna um novo objeto com as mesmas chaves e valores, porém
     * onde encontra uma chave com ocorrência do caractere _ quebra até formar uma palavra sem o
     * caractere e transportando o valor para dentro da nova propriedade aninhada.
     * Exemplo: o objeto
     * ```
     * {
     *   chaveSimples: 9,
     *   chave_complexa_id : 10
     * }
     * ```
     * se torna
     * ```
     * {
     *   chaveSimples: 9,
     *   chave: {
     *     complexa: {
     *       id: 10
     *     }
     *   }
     * }
     * ```
     * @param objeto o Objeto cujas chaves complexas se quer quebrar em chaves simples
     * @param chavesIgnoradas
     * @returns objeto com chaves simples
     */
    static quebraObjeto(objeto: any, chavesIgnoradas: Array<string> = [], caractereQuebra: string = '_'): any {
        var chaves = Object.keys(objeto);
        var novoObjeto: any = {};
        chaves.forEach(function (chave) {
            var valor = objeto[chave];
            var chaveIgnorada = chavesIgnoradas.find((item) => chave.includes(item));
            if (chaveIgnorada) {
                let novaChave = chave.replace(chaveIgnorada, '');
                if (novaChave.startsWith(caractereQuebra))
                    novaChave = novaChave.substr(1);
                novoObjeto[chaveIgnorada] = SafiraArrays.quebraObjeto({
                    [novaChave]: valor
                });
            } else {
                if (!chave.includes(caractereQuebra))
                    novoObjeto[chave] = valor;
                else {
                    var quebraChave = chave.split(caractereQuebra);
                    if (quebraChave.length === 2) {
                        novoObjeto[quebraChave[0]] = {
                            [quebraChave[1]]: valor
                        }
                    } else {
                        if (quebraChave && quebraChave.length > 0) {
                            let novaChave: string = String(quebraChave.shift());
                            var novaChaveValor = quebraChave.join(caractereQuebra);
                            novoObjeto[novaChave] = SafiraArrays.quebraObjeto({
                                [novaChaveValor]: valor
                            });
                        }
                    }
                }
            }
        });
        return novoObjeto;
    }
}