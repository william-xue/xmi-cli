#!/usr/bin/env node

const { program } = require('commander');
const path = require('path');
const fs = require('fs-extra');
const getConfig = require('../lib/config');
const generateRoutes = require('../lib/routes');
const { clearXmiDir, ensureXmiDir } = require('../lib/utils');

program
    .command('start')
    .description('Start the xmi project')
    .action(() => {
        // 删除 .xmi 目录
        clearXmiDir();

        // 确保 .zmi 目录存在
        ensureXmiDir();

        // 复制 core 文件到 .zmi 目录
        const coreSrc = path.resolve(__dirname, '../core');
        const coreDest = path.resolve(process.cwd(), '.xmi/core');
        fs.copySync(coreSrc, coreDest);


        // 获取配置
        const config = getConfig();

        // 生成 .xmi 目录及文件
        generateRoutes();

        // 生成其他辅助文件
        const xmiDir = path.resolve(process.cwd(), '.xmi');
        fs.outputFileSync(path.join(xmiDir, 'requests.js'), '/* 请求封装代码 */');
        fs.outputFileSync(path.join(xmiDir, 'store.js'), '/* 状态管理代码 */');

        console.log('xmi project started successfully!');
    });

program
    .command('init <project-name>')
    .description('Initialize a new xmi project')
    .action((projectName) => {
        const templatePath = path.resolve(__dirname, '../templates/my-project');
        const targetPath = path.resolve(process.cwd(), projectName);

        // 复制模板文件到目标目录
        fs.copySync(templatePath, targetPath);

        console.log(`Project ${projectName} initialized successfully!`);
        console.log(`cd ${projectName} && npx xmi start`);
    });

program.parse(process.argv);
