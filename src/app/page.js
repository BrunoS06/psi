
export default function Home() {
  return (
    <div id="pagina">
      <div id='cabecalho'>
      <img src="/logo.png" alt="Logo" id='logo'/>
        <div id='secoes'> 
        <a>Início</a>
        <a>Tópicos</a>
        <a>Perguntas</a>
        <a>Sobre</a>
        <a>Contato</a>
        
        </div>
        <button><img src="/wpp.png" id="wpp"/> <p>Agendar Sessão Online</p></button>
      </div>
      
      <div id="iniciodiv">
        <div id="iniciotxttudo">
          <p id="iniciotxt1">
          Transformações começam<br></br> com autocuidado.</p>
          <p id='iniciotxt2'>Neste espaço terapêutico, utilizo a Terapia Cognitivo-Comportamental para ajudar você a compreender seus pensamentos, emoções e comportamentos, promovendo mudanças reais e duradouras. Acolhimento, escuta e direção para o seu bem-estar.</p>
          <button><img src="/wpp.png" id="wpp"/> <p>Agendar Sessão Online</p></button>
        </div>
        <div id="foto">
        <img src="/foto.jpeg" id="fotojpg"/>
        </div>
      </div>

    </div>
  );
}
