
# Exercicio — Interface Homem-Máquina (IHM)

Este repositório contém exercícios e exemplos para a disciplina/tema Interface Homem-Máquina (IHM). A pasta `Exercicio` inclui uma pequena aplicação front-end estática (HTML/CSS/JS) que demonstra conceitos básicos de interação e layout.

## Conteúdo do repositório

- `Aula1/` — Material e exemplo da primeira aula (HTML, CSS, JS).
- `Exercicio/` — Exercício principal deste diretório:
	- `index.html` — Página principal do exercício.
	- `scripts.js` — Código JavaScript usado pela página.
	- `style.css` — Estilos CSS para a página.
	- `Readme.md` — Este arquivo.

> Observação: a estrutura do projeto é propositalmente simples para facilitar a experimentação em sala de aula.

## Objetivos

- Praticar conceitos básicos de interfaces (botões, entradas, feedback visual).
- Experimentar com DOM, eventos e manipulação de estilos via JavaScript.
- Fornecer um template mínimo para expandir e testar interações de usuário.

## Tecnologias usadas

- HTML5
- CSS3
- JavaScript (ES6)

## Como abrir / executar

Como é uma aplicação estática, você pode abrir o arquivo `index.html` diretamente no navegador:

1. Abra o Explorador de Arquivos e navegue até `Exercicio`.
2. Clique duas vezes em `index.html` para abrir no navegador padrão.

Se preferir servir através de um servidor HTTP local (recomendado para evitar restrições de CORS e testar fetchs), use um servidor simples. Exemplo com Python (PowerShell):

```powershell
# a partir da pasta Exercicio
python -m http.server 8000
# então abra http://localhost:8000 no navegador
```

Ou, se usar npm com um servidor estático (opcional):

```powershell
# instalar serve (se desejar)
# npm i -g serve
# executar
serve .
```

## Estrutura e responsabilidades dos arquivos

- `index.html`: marcação da interface. Verifique os comentários dentro do arquivo para entender a organização das seções.
- `style.css`: layout e estilo. Contém classes e regras para tornar a interface responsiva e legível.
- `scripts.js`: lógica de interação (escuta de eventos, validações simples, atualizações do DOM).

## Boas práticas e sugestões de melhorias

- Separar lógica em módulos JS quando o projeto crescer.
- Adicionar testes unitários (por exemplo, com Jest) para funções puras.
- Documentar interações complexas diretamente no código com comentários.
- Tornar o layout acessível (roles ARIA, labels, navegação por teclado e contraste de cores).

## Contribuindo

1. Faça um fork deste repositório.
2. Crie uma branch para sua mudança: `git checkout -b minha-melhora`.
3. Faça commits pequenos e descritivos.
4. Abra um Pull Request para revisão.

Se você quiser que eu escreva testes, adicione um README para `Aula1` ou integre um bundler/gerenciador de dependências, posso ajudar a configurar isso também.

## Licença

Este projeto está, por padrão, com licença MIT. Se preferir outra licença, substitua o texto abaixo.

```
MIT License
(c) 2025
```

## Autor

- Criado pelo aluno/autor do repositório.

---

Se quiser, eu adapto este README para inglês, adiciono capturas de tela, exemplos de uso mais detalhados, ou crio um pequeno servidor de desenvolvimento com live reload (Vite/Parcel). Diga-me o que prefere seguir como próximo passo.
