#!/usr/bin/env bash

set -Eeuo pipefail

APP_DIR="${APP_DIR:-/srv/apps/fivconnectweb}"
DEPLOY_SHA="${1:-origin/main}"

log() {
  printf '[deploy] %s\n' "$1"
}

if [[ ! -d "$APP_DIR/.git" ]]; then
  log "Repositorio nao encontrado em $APP_DIR"
  exit 1
fi

cd "$APP_DIR"

if [[ -n "$(git status --porcelain)" ]]; then
  log "Working tree suja na VPS. Limpe as alteracoes locais antes do deploy."
  git status --short
  exit 1
fi

log "Atualizando referencias remotas"
git fetch origin --prune

log "Sincronizando com o commit alvo"
git checkout main
git reset --hard "$DEPLOY_SHA"

log "Instalando dependencias"
npm ci

log "Build"
npm run build

log "Deploy concluido — servido estaticamente via Nginx (sem restart de processo necessario)"
