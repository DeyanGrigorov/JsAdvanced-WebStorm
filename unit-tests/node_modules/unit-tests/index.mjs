#!/usr/bin/env node
'use strict';

import * as Path from 'path';
import { writeFileSync, copyFileSync, readFileSync } from 'fs';
import readline from 'readline';
import { spawn } from 'child_process';

async function installDependencies() {
  const ok = await confirm('Install dependencies?');

  if (!ok) {
    return;
  }

  const dependencies = {
    '@types/jest': '^27.0.1',
    '@types/node': '^14.14.31',
    jest: '^27.1.0',
    'ts-jest': '^27.0.5',
    'ts-jest-resolver': '^1.1.0',
    'ts-node': '^9.1.1',
    typescript: '^4.1.3',
    prettier: '^2.3.2',
  };

  const args = Object.entries(dependencies).map(([name, version]) => `${name}@${version}`);

  return new Promise((resolve, reject) => {
    const npm = spawn('npm', ['install', '-D', ...args], {
      stdio: 'inherit',
    });

    npm.on('exit', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject();
      }
    });
  });
}

async function copyFiles() {
  const ok = await confirm('Update configuration files?');

  if (!ok) {
    return;
  }

  const files = ['jest.config.ts', 'tsconfig.json', '.prettierrc'];
  const __dirname = decodeURIComponent(new URL('.', import.meta.url).pathname);

  files.forEach((file) => {
    const source = Path.join(__dirname, file);
    const destination = Path.join(process.cwd(), file);

    console.log(`> Copied ${file}`);
    copyFileSync(source, destination);
  });
}

async function updatePrompt() {
  const answer = await confirm('Update your package.json with new test scripts?');

  if (answer) {
    const packageJsonPath = Path.join(process.cwd(), 'package.json');
    const packageJson = JSON.parse(readFileSync(packageJsonPath));

    packageJson.scripts = packageJson.scripts || {};
    packageJson.scripts.test = 'jest';
    packageJson.scripts.tdd = 'jest --watch';

    writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log('> Updated package.json');
  }
}

async function main() {
  await installDependencies();
  await copyFiles();
  await updatePrompt();
}

main();

function confirm(question) {
  return new Promise((resolve) => {
    const cli = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    cli.question(`${question} (y,n)`, (answer) => {
      cli.close();
      resolve(answer === '' || answer.toLowerCase() === 'y');
    });
  });
}
