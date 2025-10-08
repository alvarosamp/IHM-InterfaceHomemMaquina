class AulasComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.hoje = "ter";
  }

  connectedCallback() {
    this.loadData();
  }

  classeDaNota(n) {
    if (n < 6) return 'nota-baixa';
    if (n < 8) return 'nota-media';
    return 'nota-alta';
  }

  async loadData() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'styles_componente.css';
    this.shadowRoot.appendChild(link);

    try {
      const resp = await fetch('aulas.json', { cache: 'no-store' });
      if (!resp.ok) throw new Error('aulas.json não encontrado');
      const aulas = await resp.json();
      this.render(aulas);
    } catch (e) {
      this.shadowRoot.innerHTML += `<div class="comp-aula"><p style="margin:0">Erro ao carregar dados. Abra com Live Server e verifique o arquivo <b>aulas.json</b>.</p></div>`;
      console.error(e);
    }
  }

  render(aulas) {
    const aulasDia = aulas.filter(a => a.data === this.hoje);

    const html = `
      <div>
        ${aulasDia.map(a => {
          const provaDisplay = a.prova_alert ? '' : 'display:none;';
          const n = Number(a.nota);
          const classeNota = this.classeDaNota(isNaN(n) ? 0 : n);
          return `
            <div class="comp-aula card">
              <div class="lable-prova p_lable" style="${provaDisplay}">PROVA: <b>${a.prova}</b></div>
              <div class="titulo_aula">${a.disciplina}</div>
              <p class="p">Local e Horário: <b>${a.local} - ${a.horario}</b></p>
              <div class="lables">
                <div class="lable-frequencia p_lable">FALTAS: <b>${a.frequencia}</b></div>
                <div class="lable-nota p_lable ${classeNota}">CR: <b>${a.nota}</b></div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;

    const wrapper = document.createElement('div');
    wrapper.innerHTML = html;
    this.shadowRoot.appendChild(wrapper);
  }
}

customElements.define('aulas-component', AulasComponent);
