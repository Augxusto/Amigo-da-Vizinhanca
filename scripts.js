 function publicarMensagem() {
    const nome = document.getElementById("nomeUsuario").value.trim();
    const bairro = document.getElementById("bairro").value;
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !mensagem) {
      alert("Preencha seu nome e a mensagem.");
      return;
    }

    const post = {
      nome,
      bairro,
      mensagem,
      data: new Date().toLocaleString(),
    };

    const mensagensSalvas = JSON.parse(localStorage.getItem("mensagens")) || [];
    mensagensSalvas.push(post);
    localStorage.setItem("mensagens", JSON.stringify(mensagensSalvas));

    exibirMensagens();

    document.getElementById("nomeUsuario").value = "";
    document.getElementById("mensagem").value = "";
  }

  function exibirMensagens() {
    const container = document.getElementById("mensagens");
    const mensagensSalvas = JSON.parse(localStorage.getItem("mensagens")) || [];
    container.innerHTML = "";

    mensagensSalvas.forEach((post) => {
      const div = document.createElement("div");
      div.className = "post";
      div.innerHTML = `<strong>${post.nome}</strong> (${post.bairro}) <br /><small>${post.data}</small><p>${post.mensagem}</p>`;
      container.appendChild(div);
    });
  }

  const map = L.map('mapa').setView([lat, lng], zoom);
L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

const grupoMarcadores = L.layerGroup().addTo(mapa);

function carregarPontos(filtro = "todos") {
  grupoMarcadores.clearLayers(); 

  pontosColeta.forEach((ponto) => {
    if (filtro === "todos" || ponto.bairro === filtro) {
      L.marker([ponto.lat, ponto.lon])
        .bindPopup(ponto.descricao)
        .addTo(grupoMarcadores);
    }
  });
}

const nomeEl = document.createElement('strong');
nomeEl.textContent = post.nome;


  window.onload = exibirMensagens;
