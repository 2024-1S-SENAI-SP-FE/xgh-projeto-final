### Instruções para commitar sem dar MERGDA

- **Antes de fazer qualquer alteração**, use:
```bash
git checkout {nome da sua branch}
```
 ou 

```bash
git switch {nome da sua branch}
```

- **Após isso, dê rebase na branch que você deseja mexer.** 

Caso eu queira mexer no html por exemplo: 
```bash
git rebase origin/html
```

- Faça as alterações que deseja.

`Pois após o rebase, você já terá o conteúdo da branch que você deseja mexer.`

- **Ao terminar de executar ás alterações**

Faça o `commit` usando os seguintes comandos:

```bash
git add {selecione os arquivos alterados}
```
```bash
git commit -m "mensagem do commit semântico"
```
- **Certifique-se de estar na sua branch na hora de dar push**
```bash
git push
```

- **Após dar `push`**
vá para `branch` onde você deu rebase no **terceiro passo** 

E em seguida, dê:

```bash
git merge {nome da sua branch}
```
Para que às alterações feitas na sua branch, vão para branch desejada.

- Assim sendo, basta usar o:

```bash
git push
```

- **Ao terminar tudo o que você tinha pra fazer, caso esteja usando algum computador público, siga os passos abaixo**

- Use o seguinte comando, para sair da pasta do repositório local:

```bash
code -r ..
``` 

- Você pode usar um:
```bash
ls
```
Para ver as pastas que estão no diretório atual

- Agora é só usar o seguinte comando, mas tenha certeza de que você está excluindo a pasta certa, pois não tem volta:

```bash
rm -r -f xgh-projeto-final
```

E... chau, lembrando que: "se você não vê o erro, ele não existe." 
**© 2024 eXtreme Go Horse. Todos os direitos reservados.** 