const QUESTIONS = [{"topic":"Senhas","question":"Qual é a melhor forma de criar uma senha para sua conta escolar?","options":["Usar uma frase longa e única para essa conta","Usar o nome do seu pet","Repetir a mesma senha em todos os sites","Usar apenas números fáceis de lembrar"],"answer":0,"explanation":"Uma frase longa e exclusiva é mais difícil de adivinhar. Nunca reutilize a mesma senha em serviços diferentes."},{"topic":"Múltiplos fatores","question":"O que a autenticação em dois fatores acrescenta à sua conta?","options":["Uma segunda confirmação além da senha","Uma senha menor","Acesso automático para qualquer pessoa","Mais velocidade na internet"],"answer":0,"explanation":"Mesmo que alguém descubra sua senha, ainda precisará da segunda confirmação, como um código ou aplicativo autenticador."},{"topic":"Phishing","question":"Você recebe um e-mail urgente pedindo para clicar em um link e confirmar sua senha. O que fazer?","options":["Verificar o remetente e acessar o serviço pelo endereço oficial","Clicar rapidamente para não perder a conta","Responder enviando sua senha","Encaminhar para todos os colegas"],"answer":0,"explanation":"Urgência e pedido de senha são sinais comuns de phishing. Abra o site pelo endereço que você já conhece, não pelo link da mensagem."},{"topic":"Links","question":"Antes de abrir um link recebido por mensagem, qual atitude é mais segura?","options":["Conferir o endereço completo e o contexto da mensagem","Confiar porque veio de um conhecido","Abrir em várias abas","Desativar o antivírus"],"answer":0,"explanation":"Contas de conhecidos também podem ser invadidas. Verifique domínio, erros estranhos e se a mensagem realmente faz sentido."},{"topic":"Wi-Fi público","question":"Ao usar Wi-Fi público, qual cuidado ajuda a proteger sua conta?","options":["Evitar acessar serviços sensíveis e usar conexões seguras","Compartilhar a senha com quem pedir","Fazer compras em qualquer rede aberta","Desligar todas as atualizações de segurança"],"answer":0,"explanation":"Redes públicas podem ser falsas ou mal protegidas. Evite operações sensíveis e confira se o site usa HTTPS."},{"topic":"Atualizações","question":"Por que manter o sistema e os aplicativos atualizados é importante?","options":["Para corrigir falhas de segurança conhecidas","Para deixar a senha visível","Para remover o bloqueio de tela","Para permitir qualquer download"],"answer":0,"explanation":"Atualizações corrigem vulnerabilidades que criminosos podem explorar. Ative atualizações automáticas quando possível."},{"topic":"Backup","question":"Qual prática ajuda a recuperar seus arquivos se o dispositivo for perdido ou atacado?","options":["Manter cópias de segurança em local separado","Guardar a única cópia na área de trabalho","Enviar arquivos para qualquer desconhecido","Nunca testar se o backup funciona"],"answer":0,"explanation":"Backups reduzem o impacto de perda, defeito ou ransomware. Faça cópias regulares e verifique se elas podem ser restauradas."},{"topic":"Engenharia social","question":"O que é engenharia social?","options":["Manipular pessoas para obter informações ou ações","Consertar uma placa eletrônica","Criar uma rede social","Programar um jogo de computador"],"answer":0,"explanation":"O golpe explora confiança, medo ou pressa. Desconfie de pedidos incomuns, mesmo quando parecem vir de alguém conhecido."},{"topic":"Privacidade","question":"Por que é melhor evitar publicar a escola, rotina e localização em tempo real?","options":["Porque esses dados podem revelar padrões sobre sua vida","Porque a internet não permite fotos","Porque toda postagem é automaticamente ilegal","Porque isso torna o celular mais lento"],"answer":0,"explanation":"Informações isoladas podem ser combinadas para descobrir hábitos, locais e horários. Pense antes de compartilhar."},{"topic":"QR Code","question":"Um QR Code colado por cima de um cartaz pede seus dados bancários. Qual é a melhor reação?","options":["Não escanear e confirmar a informação por um canal oficial","Preencher tudo para ganhar o prêmio","Fotografar e publicar seus dados","Desativar a proteção do celular"],"answer":0,"explanation":"QR Codes podem redirecionar para sites falsos. Confira a origem e nunca informe dados sensíveis sem verificar o destinatário."},{"topic":"Gerenciador de senhas","question":"Qual é uma vantagem de usar um gerenciador de senhas confiável?","options":["Criar e guardar senhas diferentes sem precisar decorar todas","Compartilhar automaticamente com estranhos","Desativar a autenticação em dois fatores","Tornar todas as contas iguais"],"answer":0,"explanation":"Gerenciadores ajudam a usar senhas fortes e exclusivas. Proteja o gerenciador com uma senha-mestra forte e, se possível, MFA."},{"topic":"Dispositivo","question":"O que o bloqueio automático de tela ajuda a evitar?","options":["Que outra pessoa use seu dispositivo sem autorização","Que a bateria seja carregada","Que os arquivos tenham backup","Que o Wi-Fi seja desligado"],"answer":0,"explanation":"Bloqueio de tela cria uma barreira simples quando você se afasta do celular ou computador. Use PIN, senha ou biometria."},{"topic":"Permissões","question":"Um aplicativo de lanterna pede acesso aos seus contatos e microfone. O que fazer?","options":["Questionar a necessidade e negar permissões que não fazem sentido","Aceitar tudo sem ler","Dar a senha do e-mail ao aplicativo","Instalar versões de fontes desconhecidas"],"answer":0,"explanation":"Permissões devem combinar com a função do aplicativo. Revise-as nas configurações e remova acessos desnecessários."},{"topic":"Pendrive","question":"Qual cuidado é recomendado ao encontrar um pendrive desconhecido?","options":["Não conectar e entregar ao responsável pela rede","Conectar para descobrir o conteúdo","Usar no computador da escola sem avisar","Copiar tudo para o celular"],"answer":0,"explanation":"Dispositivos desconhecidos podem conter malware. Nunca conecte um pendrive achado sem orientação da equipe responsável."},{"topic":"Ransomware","question":"O que caracteriza um ataque de ransomware?","options":["Arquivos são bloqueados e o atacante exige pagamento","A tela fica mais brilhante","A bateria dura mais","Um aplicativo recebe uma atualização"],"answer":0,"explanation":"Ransomware tenta impedir o acesso aos dados. Backups, atualizações e cuidado com anexos reduzem o risco."},{"topic":"Navegação segura","question":"O que o cadeado e o HTTPS no navegador indicam principalmente?","options":["Que a conexão com o site está criptografada","Que o site é sempre honesto","Que o conteúdo é gratuito","Que não existe nenhum risco"],"answer":0,"explanation":"HTTPS protege a comunicação, mas não garante que o site seja legítimo. Ainda é preciso conferir o domínio e o contexto."},{"topic":"Convivência digital","question":"Ao presenciar cyberbullying em um grupo, qual atitude é mais responsável?","options":["Não compartilhar, guardar evidências e procurar um adulto de confiança","Curtir para não ficar de fora","Responder com outra ofensa","Publicar o endereço do agressor"],"answer":0,"explanation":"Não amplifique a agressão. Registre o que ocorreu, use as ferramentas de denúncia e peça ajuda a um adulto ou à escola."},{"topic":"Conta escolar","question":"Por que não se deve emprestar a conta escolar para um colega?","options":["As ações ficam ligadas ao dono da conta e podem expor dados","Porque contas escolares não têm senha","Porque o colega nunca poderá estudar","Porque a conta será apagada na hora"],"answer":0,"explanation":"Contas são pessoais. Compartilhar credenciais dificulta investigar incidentes e pode expor trabalhos, mensagens e dados."},{"topic":"Falso suporte","question":"Uma pessoa liga dizendo ser do suporte e pede um código que chegou no seu celular. O que fazer?","options":["Não informar o código e procurar o suporte pelo canal oficial","Passar o código para confirmar sua identidade","Enviar também sua senha","Instalar um programa indicado por ela"],"answer":0,"explanation":"Códigos de verificação são pessoais. Um suporte legítimo não deve pedir que você revele seu código de acesso."},{"topic":"Desinformação","question":"Antes de compartilhar uma notícia surpreendente, qual passo é mais seguro?","options":["Conferir a fonte, a data e outras fontes confiáveis","Compartilhar rápido para ser o primeiro","Acreditar porque tem muitas curtidas","Cortar o título para parecer mais urgente"],"answer":0,"explanation":"Popularidade não prova veracidade. Compare fontes e verifique data, autoria e contexto antes de repassar."},{"topic":"VPN","question":"Qual afirmação sobre VPN é correta?","options":["Ela pode proteger a conexão, mas não substitui hábitos seguros","Ela torna qualquer site confiável","Ela elimina a necessidade de senhas","Ela impede todos os golpes"],"answer":0,"explanation":"Uma VPN pode aumentar a privacidade da conexão, mas você ainda precisa identificar phishing, usar senhas fortes e manter o sistema atualizado."},{"topic":"Sessões","question":"Ao usar um computador compartilhado, o que fazer ao terminar?","options":["Sair da conta e não salvar a senha no navegador","Apenas fechar a janela","Deixar a conta aberta para voltar depois","Enviar a senha por mensagem"],"answer":0,"explanation":"Sair da conta e remover dados salvos impede que a próxima pessoa acesse seus serviços."},{"topic":"Observação","question":"Como reduzir o risco de alguém descobrir sua senha olhando para sua tela ou teclado?","options":["Usar a tela de modo discreto e evitar digitar em locais muito expostos","Digitar a senha em voz alta","Anotar a senha no monitor","Desbloquear o dispositivo para qualquer pessoa"],"answer":0,"explanation":"Olhar por cima do ombro é um ataque simples. Observe o ambiente e cubra o teclado quando digitar informações sensíveis."},{"topic":"Incidentes","question":"Você clicou em um link suspeito e informou sua senha. Qual deve ser a primeira atitude?","options":["Avisar um responsável, trocar a senha e revisar as sessões","Esconder o ocorrido","Continuar usando a mesma senha","Apagar apenas o histórico do navegador"],"answer":0,"explanation":"Agir rápido reduz o dano. Troque a senha por um dispositivo confiável, encerre sessões e informe a escola ou responsável."},{"topic":"Doxxing","question":"O que significa doxxing?","options":["Expor dados pessoais de alguém sem autorização","Fazer backup automático","Atualizar um aplicativo","Criar um apelido para um jogo"],"answer":0,"explanation":"Expor endereço, telefone ou outros dados pode colocar alguém em risco. Não compartilhe informações pessoais de terceiros."},{"topic":"CAPTCHA","question":"Para que serve um CAPTCHA em muitos sites?","options":["Ajudar a diferenciar pessoas de robôs automatizados","Guardar sua senha em público","Confirmar que toda notícia é verdadeira","Aumentar o volume do computador"],"answer":0,"explanation":"CAPTCHAs ajudam a reduzir abusos automatizados, como criação em massa de contas e tentativas repetidas de acesso."},{"topic":"Criptografia","question":"O que a criptografia faz com uma informação?","options":["Transforma os dados para que só pessoas autorizadas possam entendê-los","Apaga automaticamente todos os arquivos","Aumenta a velocidade do Wi-Fi","Torna a senha pública"],"answer":0,"explanation":"A criptografia protege a confidencialidade ao transformar os dados. A segurança também depende de chaves e de boas práticas."},{"topic":"Antimalware","question":"Qual é o papel de uma ferramenta antimalware atualizada?","options":["Detectar e ajudar a bloquear programas maliciosos","Garantir que qualquer link seja seguro","Substituir o backup","Escolher suas senhas"],"answer":0,"explanation":"Ferramentas de proteção ajudam, mas não são infalíveis. Combine-as com atualizações, backups e atenção aos arquivos recebidos."},{"topic":"Downloads","question":"De onde é mais seguro baixar um aplicativo?","options":["Da loja oficial ou do site oficial do desenvolvedor","De um link enviado por desconhecido","De qualquer janela de anúncio","De uma cópia modificada sem autoria"],"answer":0,"explanation":"Fontes oficiais reduzem o risco de arquivos adulterados. Confira o nome do desenvolvedor e as permissões antes de instalar."},{"topic":"Pegada digital","question":"O que é sua pegada digital?","options":["O conjunto de registros e informações deixados por suas atividades online","A marca física do seu dedo no celular","A senha do roteador","O espaço livre no computador"],"answer":0,"explanation":"Postagens, comentários, cadastros e interações podem permanecer ou ser copiados. Publique pensando no futuro."}];
const TOTAL = 5;
const $ = (id) => document.getElementById(id);
const startScreen = $('startScreen');
const quizScreen = $('quizScreen');
const resultScreen = $('resultScreen');
const phaseBadge = $('phaseBadge');
const progressBadge = $('progressBadge');
const scoreBadge = $('scoreBadge');
const questionNumber = $('questionNumber');
const topicBadge = $('topicBadge');
const questionText = $('questionText');
const options = $('options');
const feedback = $('feedback');
const feedbackImage = $('feedbackImage');
const feedbackTitle = $('feedbackTitle');
const feedbackExplanation = $('feedbackExplanation');
const nextButton = $('nextButton');
const resultImage = $('resultImage');
const resultTitle = $('resultTitle');
const resultScore = $('resultScore');
const resultMessage = $('resultMessage');
let round = [];
let current = 0;
let score = 0;
let answered = false;

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
function show(screen) {
  [startScreen, quizScreen, resultScreen].forEach((item) => item.classList.toggle('hidden', item !== screen));
}
function animate(element, className) {
  element.classList.remove(className);
  void element.offsetWidth;
  element.classList.add(className);
}
function updateHeader() {
  scoreBadge.textContent = `PONTOS ${score}`;
  progressBadge.textContent = current === 0 && !answered ? 'PROGRESSO 0/5' : `PROGRESSO ${Math.min(current + (answered ? 1 : 0), TOTAL)}/5`;
}
function startRound() {
  round = shuffle(QUESTIONS).slice(0, TOTAL);
  current = 0;
  score = 0;
  answered = false;
  phaseBadge.textContent = 'RODADA ATIVA';
  show(quizScreen);
  loadQuestion();
}
function loadQuestion() {
  answered = false;
  const item = round[current];
  questionNumber.textContent = `QUESTÃO ${current + 1} DE ${TOTAL}`;
  topicBadge.textContent = item.topic;
  questionText.textContent = item.question;
  feedback.className = 'feedback hidden';
  options.innerHTML = '';
  shuffle(item.options.map((text, index) => ({ text, correct: index === item.answer }))).forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'option';
    button.type = 'button';
    button.textContent = `${String.fromCharCode(65 + index)}  ${option.text}`;
    button.addEventListener('click', () => answer(button, option));
    options.appendChild(button);
  });
  updateHeader();
  animate(questionText, 'pop');
}
function answer(selectedButton, option) {
  if (answered) return;
  answered = true;
  [...options.children].forEach((button) => { button.disabled = true; });
  const item = round[current];
  const correct = option.correct;
  if (correct) {
    score += 1;
    scoreBadge.textContent = `PONTOS ${score}`;
    feedbackImage.src = 'assets/cyberween-celebration.png';
    feedbackImage.alt = 'Celebração por resposta correta';
    feedbackTitle.textContent = 'Boa! Você protegeu essa conta.';
    feedback.className = 'feedback';
    nextButton.className = 'secondary-button pop';
    animate(feedbackImage, 'pop');
  } else {
    feedbackImage.src = 'assets/cyberween-try-again.png';
    feedbackImage.alt = 'Mascote incentivando uma nova tentativa';
    feedbackTitle.textContent = 'Quase! Vamos transformar isso em pista.';
    feedback.className = 'feedback is-wrong';
    animate(feedback, 'shake');
    animate(feedbackImage, 'pop');
  }
  feedbackExplanation.textContent = item.explanation;
  nextButton.textContent = current === TOTAL - 1 ? 'VER RESULTADO' : 'PRÓXIMA PERGUNTA';
  updateHeader();
  feedback.classList.remove('hidden');
  feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
function nextQuestion() {
  if (!answered) return;
  if (current === TOTAL - 1) {
    showResult();
    return;
  }
  current += 1;
  loadQuestion();
}
function showResult() {
  phaseBadge.textContent = 'FIM DA RODADA';
  progressBadge.textContent = '5 DESAFIOS';
  resultScore.textContent = `${score}/${TOTAL}`;
  resultImage.src = score >= 3 ? 'assets/cyberween-celebration.png' : 'assets/cyberween-try-again.png';
  if (score === TOTAL) {
    resultTitle.textContent = 'Escudo impecável!';
    resultMessage.textContent = 'Você acertou tudo. Continue praticando: segurança é um hábito feito de pequenas escolhas.';
  } else if (score >= 3) {
    resultTitle.textContent = 'Boa caçada!';
    resultMessage.textContent = 'Você já reconhece várias ameaças. Revise as explicações e tente uma nova rodada.';
  } else {
    resultTitle.textContent = 'Pistas encontradas!';
    resultMessage.textContent = 'Cada erro virou aprendizado. Leia as explicações e volte para uma nova rodada quando quiser.';
  }
  show(resultScreen);
  animate(resultImage, 'pop');
}
$('startButton').addEventListener('click', startRound);
$('replayButton').addEventListener('click', startRound);
nextButton.addEventListener('click', nextQuestion);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && document.activeElement === nextButton) nextQuestion();
});
