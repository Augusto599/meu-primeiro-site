# Produto: função executiva externa por assinatura

Nome provisório: **Norte** (trocar quando validar — foco agora é a ideia, não a marca).

Status: validando (ainda não construído).
Ideia original: registro pessoal em segundo-cerebro/decisoes/2026-09-16-area-saas.md (pasta privada, fora deste repositório) — opção 5 da lista de ideias de SaaS.

## Problema

Freelancers e autônomos com baixa autodisciplina/autoeficácia não têm chefe
pra impor estrutura no dia. Apps de hábito/tarefa genéricos exigem que a
pessoa lembre de abrir o app e mantenha o sistema sozinha — exatamente a
parte que falha pra esse público.

## Hipótese

Um serviço que empurra estrutura ativamente todo dia (não espera o usuário
abrir um app) — via WhatsApp, canal que a pessoa já checa o dia inteiro —
aumenta a chance de execução mais do que qualquer app passivo de
produtividade.

Para quem tem uma rotina onde tarefas surgem de forma imprevisível ao longo
do dia (ex: militares recebendo ordens/atividades que não estavam no plano
da manhã), só a mensagem diária fixa não basta — falta um jeito rápido de
capturar a tarefa no momento em que ela aparece, sem perder o fio depois.

## Funcionalidades

Desenho atual: **tudo dentro do WhatsApp**, sem tela/app separado.

- **Cadastro único, sem senha** — o usuário manda uma mensagem pro número
  uma vez pra começar. O próprio WhatsApp é a identidade — não tem conta
  nem senha pra lembrar depois.
- **Ordem do dia** — mensagem diária no WhatsApp com a UMA prioridade do
  dia, definida com antecedência.
- **Lista viva no WhatsApp** — o usuário manda uma mensagem pro mesmo
  número a qualquer hora pra registrar uma tarefa nova assim que ela surge
  (ordem inesperada, troca de compromisso etc.), sem precisar abrir
  nenhuma tela separada. É pessoal — cada usuário só vê a própria lista,
  não é ferramenta de coordenação de equipe/unidade.
- **Lembrete em horário definido pelo usuário** — ao registrar a tarefa, o
  usuário pode dizer quando quer ser lembrado dela (ex: "às 14h revisar o
  relatório") e o sistema manda o aviso nesse horário — não fica só no
  lote da mensagem diária.
- **Reporte diário** — check-in rápido no fim do dia: cumpriu ou não.
- **Revista semanal** — balanço curto do que andou e o que travou.

### Como isso funcionaria tecnicamente

- WhatsApp Business API (ex: via Twilio) — não é WhatsApp comum; exige
  conta business verificada e templates de mensagem aprovados pela Meta
  pra mandar a "ordem do dia" (mensagem iniciada pelo sistema).
  Cobra por mensagem.
- Precisa de um servidor (webhook) pra receber as respostas/tarefas que o
  usuário manda de volta — sai do escopo "stack simples só estático" que
  foi a decisão inicial, mas ainda pode ser pequeno/simples.
- Conta no Twilio/Meta Business Manager precisa ser criada pelo próprio
  fundador (não delegável) antes de qualquer código de backend.

Decisão: ainda não construir isso agora — primeiro validar a ideia com essa
versão mais afiada da proposta, depois montar a conta/infra quando houver
sinal real de interesse.

## Público-alvo inicial

Freelancers/autônomos que já tentaram apps de produtividade e pararam de
usar porque "esqueceram de abrir" ou "não conseguiram manter o hábito".

## Como estou validando

Duas landings testando públicos diferentes (mesma proposta, posicionamento
diferente), com captura de interesse por email:
- [landing/index.html](landing/index.html) — genérica, freelancers/autônomos.
- [landing-militares/index.html](landing-militares/index.html) — nicho:
  militares usando pra rotina pessoal fora do serviço (estudo pra
  promoção/concurso, treino, projetos). Hipótese: quem já vive rotina
  imposta no trabalho sente mais falta dela na vida pessoal, e reconhece o
  valor do produto mais rápido — além de ser um público que o fundador
  conhece de dentro.

Importante: a versão militar é uma iniciativa pessoal e independente, sem
vínculo, apoio ou endosso oficial da Marinha do Brasil ou das Forças
Armadas — isso está explícito na própria landing.

Critério de sucesso: pessoas reais (não conhecidos por educação) topando
testar ou dizendo que pagariam. Vale comparar qual das duas landings converte
mais antes de decidir o posicionamento final.

## Próximos passos

- [ ] Postar a landing em comunidades de freelancers/autônomos
- [ ] Conversar com quem topar testar antes de escrever qualquer produto
- [ ] Se validar, o primeiro MVP pode ser manual (você mesmo mandando os prompts por WhatsApp pra 5 pessoas, sem código nenhum) antes de automatizar
