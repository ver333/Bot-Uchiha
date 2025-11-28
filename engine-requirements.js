#!/usr/bin/env node
// engine-requirements.js
// Verifica versão mínima do Node.js exigida pela biblioteca.
// Copie este arquivo para substituir o existente que está falhando.

'use strict';

function exitWithMessage(msg, code = 1) {
  // Mensagem clara para CI
  console.error('\n[engine-requirements] ' + msg + '\n');
  process.exit(code);
}

try {
  const nodeVersion = process.versions && process.versions.node;
  if (!nodeVersion) {
    exitWithMessage('Não foi possível detectar a versão do Node.js.');
  }

  const [majorStr] = nodeVersion.split('.');
  const major = parseInt(majorStr, 10);

  // Ajuste aqui para a versão mínima requerida pelo pacote.
  // Se souber que precisa de >=18, altere MIN_MAJOR = 18
  const MIN_MAJOR = 16;

  if (Number.isNaN(major)) {
    exitWithMessage(`Versão do Node inválida: ${nodeVersion}`);
  }

  if (major < MIN_MAJOR) {
    exitWithMessage(
      `Node.js ${MIN_MAJOR} ou superior é necessário. Versão detectada: ${nodeVersion}\n` +
      'No GitHub Actions atualize a ação setup-node para usar node-version: \'16\' ou \'18\'.'
    );
  }

  // Se quiser checar outras condições (SO, npm, etc.), adicione aqui.

  // Tudo OK
  // Saída silenciosa para não poluir logs de CI
  process.exit(0);
} catch (err) {
  exitWithMessage('Erro durante verificação de requisitos do motor: ' + (err && err.message ? err.message : String(err)));
}
