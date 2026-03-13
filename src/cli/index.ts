#!/usr/bin/env node

import { Command } from "commander";
import { init } from "./commands/init.js";
import { add } from "./commands/add.js";
import { list } from "./commands/list.js";

const program = new Command();

program
  .name("hollow-ui")
  .description("hollow-UI - CLI to add components to your project")
  .version("1.1.6");

program
  .command("init")
  .description("Initialize hollow-UI configuration in your project")
  .option("-y, --yes", "Pular confirmações e usar valores padrão")
  .action(init);

program
  .command("setup")
  .description("Alias para init (pré-setup do hollow-UI)")
  .option("-y, --yes", "Pular confirmações e usar valores padrão")
  .action(init);

program
  .command("add")
  .description("Adiciona um componente ao seu projeto")
  .argument("[components...]", "Nome dos componentes para adicionar")
  .option("-a, --all", "Adicionar todos os componentes")
  .option("-o, --overwrite", "Sobrescrever arquivos existentes")
  .action(add);

program
  .command("list")
  .description("Lista todos os componentes disponíveis")
  .action(list);

program.parse();
