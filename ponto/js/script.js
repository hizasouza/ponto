// Para 44h semanais (8h48 diárias)
saidaNormal.setHours(saidaNormal.getHours() + 9, saidaNormal.getMinutes() + 48); 

// Para 40h semanais (9h diárias)
saidaNormal.setHours(saidaNormal.getHours() + 9);
function tocarAlarme(repetir = true) {
    let contador = 0;
    const intervalo = setInterval(() => {
        if(contador < 3) {
            alarmeSound.play();
            contador++;
        } else {
            clearInterval(intervalo);
            if(repetir) iniciarAlarmeExtra(); // Só repete para o alarme normal
        }
    }, 2000);
}
let alarmeAtivo = null;
let timeoutNormal = null;
let timeoutExtra = null;

function pararAlarme() {
    if(alarmeAtivo) clearInterval(alarmeAtivo);
    if(timeoutNormal) clearTimeout(timeoutNormal);
    if(timeoutExtra) clearTimeout(timeoutExtra);
    // ... resto do código ...
}
document.getElementById('horas-extras').style.display = 'block';
document.getElementById('info-extra').innerHTML = `
    Nova saída prevista: ${horarios.extra.saida.toLocaleTimeString('pt-BR')}
`;