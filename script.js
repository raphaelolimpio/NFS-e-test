const textarea = document.getElementById('itens');

textarea.addEventListener('input', function () {
    his.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});

function gerarNotaFiscal() {
    const valorVenda = parseFloat(document.getElementById('valor-venda').value);
    const itens = document.getElementById('itens').value.split('\n');
    const irpf = parseFloat(document.getElementById('irpf').value);
    const pis = parseFloat(document.getElementById('pis').value);
    const cofins = parseFloat(document.getElementById('cofins').value);
    const inss = parseFloat(document.getElementById('inss').value);
    const issqn = parseFloat(document.getElementById('issqn').value);

    if (isNaN(valorVenda) || isNaN(irpf) || isNaN(pis) || isNaN(cofins) || isNaN(inss) || isNaN(issqn)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    const valorIRPF = (irpf / 100) * valorVenda;
    const valorPIS = (pis / 100) * valorVenda;
    const valorCOFINS = (cofins / 100) * valorVenda;
    const valorINSS = (inss / 100) * valorVenda;
    const valorISSQN = (issqn / 100) * valorVenda;
    const totalImpostos = valorIRPF + valorPIS + valorCOFINS + valorINSS + valorISSQN;

    const itensHtml = itens.map(item => `<li>${item}</li>`).join('');

    const notaFiscalHTML = `
        <h2>Nota Fiscal de Serviço</h2>
        <p><strong>Itens Vendidos:</strong></p>
        <ul>${itensHtml}</ul> <!-- Lista de itens vendidos -->
        <p><strong>Valor de Venda:</strong> R$ ${valorVenda.toFixed(2)}</p>
        <p><strong>Impostos:</strong></p>
        <ul>
            <li>IRPF (${irpf}%): R$ ${valorIRPF.toFixed(2)}</li>
            <li>PIS (${pis}%): R$ ${valorPIS.toFixed(2)}</li>
            <li>COFINS (${cofins}%): R$ ${valorCOFINS.toFixed(2)}</li>
            <li>INSS (${inss}%): R$ ${valorINSS.toFixed(2)}</li>
            <li>ISSQN (${issqn}%): R$ ${valorISSQN.toFixed(2)}</li>
        </ul>
        <p><strong>Total de Impostos:</strong> R$ ${totalImpostos.toFixed(2)}</p>
        <p><strong>Valor Líquido:</strong> R$ ${(valorVenda - totalImpostos).toFixed(2)}</p>
    `;

    document.getElementById('nota-fiscal').innerHTML = notaFiscalHTML;
}
