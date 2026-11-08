# Kit visual Hacker / Matrix

Assets individuais para o portfólio de Robson Costa, organizados em pastas. Nenhum repositório foi alterado ou publicado.

## Conteúdo

- `backgrounds/`: `hacker-background.png`, fundo do portfólio; `matrix-rain.png`, chuva Matrix transparente; e `matrix-rain-original.svg`, fonte vetorial original.
- `portrait/`: `robson-transparent.png`, retrato recortado com transparência.
- `frames/`: `neon-octagon-frame.png`, moldura neon transparente.
- `dividers/`: `neon-wave-divider.png` e `mar-waves-original.svg`.
- `icons/technologies/`: ícones PNG individuais de HTML, CSS, JavaScript, SQL Server, Supabase, GitHub, Docker e performance.
- `icons/projects/`: ícones do Mar IA, English Study e Pocket Friends. Os arquivos Mar IA e Pocket Friends vieram dos assets dos projetos; o ícone de English Study foi criado para este pacote.
- `banners/`: três banners PNG de 1600 × 900. São artes ilustrativas para o portfólio, não capturas de tela dos aplicativos.

## Como usar no `index.html`

Descompacte o conteúdo da pasta ZIP em uma pasta `assets`, ao lado do `index.html`. Exemplo:

```html
<section class="hero">
  <img src="assets/portrait/robson-transparent.png" alt="Retrato de Robson Costa">
</section>
<img src="assets/banners/mar-ia-banner.png" alt="Mar IA — carteira familiar">
<img src="assets/icons/projects/english-study-icon.png" alt="English Study">
```

```css
body {
  background: #020805 url("assets/backgrounds/hacker-background.png") center / cover fixed;
}
body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  background: url("assets/backgrounds/matrix-rain.png") center / cover;
  opacity: .22;
}
.portrait-frame {
  background: url("assets/frames/neon-octagon-frame.png") center / contain no-repeat;
}
```

`matrix-rain.png` é uma camada estática com transparência. Para animação, use o SVG original ou anime sua posição no CSS. Os banners são composições visuais ilustrativas.

## Nota sobre a colagem

A colagem mencionada na conversa anterior não estava disponível no local indicado. Usei os arquivos já encontrados do portfólio e dos projetos e criei as peças complementares em arquivos separados.
