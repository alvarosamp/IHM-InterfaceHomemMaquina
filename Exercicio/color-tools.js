// color-tools.js — exposes temaInatel, temaLim, temaDark and UI to pick them
(function(){
  const KEY = 'site-theme-func';

  function temaLim() {
    document.documentElement.style.setProperty('--cor-click', '#38184C');
    document.documentElement.style.setProperty('--cor-sombra', '#9b0a59');
    document.documentElement.style.setProperty('--cor-text', 'black');
    document.documentElement.style.setProperty('--cor-back1', '#CEF09D');
    document.documentElement.style.setProperty('--cor-back2', '#4f6a93');
    document.documentElement.style.setProperty('--md-sys-color-primary', '#38184C');
  }

  function temaInatel() {
    document.documentElement.style.setProperty('--cor-click', '#126ae2');
    document.documentElement.style.setProperty('--cor-sombra', '#0a599b');
    document.documentElement.style.setProperty('--cor-text', 'black');
    document.documentElement.style.setProperty('--cor-back1', '#edf2f4');
    document.documentElement.style.setProperty('--cor-back2', '#6a937a');
    document.documentElement.style.setProperty('--md-sys-color-primary', '#126ae2');
  }

  function temaDark() {
    const cores = {
      '--cor-click': '#CEF09D',
      '--cor-sombra': '#9b0a59',
      '--cor-text': 'black',
      '--cor-back1': '#38184C',
      '--cor-back2': '#4f6a93',
      '--md-sys-color-primary': '#CEF09D'
    };

    for (const [variavel, valor] of Object.entries(cores)) {
      document.documentElement.style.setProperty(variavel, valor);
    }
  }

  function applyByName(name){
    if(name === 'temaInatel') temaInatel();
    else if(name === 'temaLim') temaLim();
    else if(name === 'temaDark') temaDark();
  }
  // attach listeners after DOM is ready so elements exist
  document.addEventListener('DOMContentLoaded', ()=>{
    const panel = document.getElementById('color-panel');
    const toggle = document.getElementById('color-toggle');
    const swatches = document.querySelectorAll('.color-swatch');
    const resetBtn = document.getElementById('color-reset');

    function togglePanel(){
      if(!panel) return;
      panel.classList.toggle('open');
    }

    if(toggle) toggle.addEventListener('click', togglePanel);

    swatches.forEach(s => s.addEventListener('click', () => {
      const fn = s.dataset.func;
      applyByName(fn);
      try{ localStorage.setItem(KEY, fn); }catch(e){}
      if(panel) panel.classList.remove('open');
    }));

    if(resetBtn) resetBtn.addEventListener('click', ()=>{
      try{ localStorage.removeItem(KEY); }catch(e){}
      // reload defaults from CSS by removing inline properties
      ['--cor-click','--cor-sombra','--cor-text','--cor-back1','--cor-back2','--md-sys-color-primary'].forEach(v=>document.documentElement.style.removeProperty(v));
    });

    // restore saved theme
    try{
      const saved = localStorage.getItem(KEY);
      if(saved) applyByName(saved);
    }catch(e){}
  });

  // expose functions for console / other scripts
  window.temaInatel = temaInatel;
  window.temaLim = temaLim;
  window.temaDark = temaDark;

})();
