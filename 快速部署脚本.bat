@echo off
chcp 65001 >nul
title 农福尚汇客户管理系统 - 快速部署助手

echo.
echo ========================================
echo    农福尚汇客户管理系统 - 快速部署助手
echo ========================================
echo.

echo 正在检查系统环境...
echo.

REM 检查 Node.js
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ 未检测到 Node.js，请先安装 Node.js
    echo 下载地址: https://nodejs.org/
    pause
    exit /b 1
) else (
    echo ✅ Node.js 已安装
)

REM 检查 Git
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ 未检测到 Git，请先安装 Git
    echo 下载地址: https://git-scm.com/
    pause
    exit /b 1
) else (
    echo ✅ Git 已安装
)

echo.
echo ========================================
echo 第一步：检查项目状态
echo ========================================
echo.

REM 检查是否在正确的目录
if not exist "frontend\package.json" (
    echo ❌ 未找到前端项目，请确保在项目根目录运行此脚本
    pause
    exit /b 1
)

if not exist "backend\package.json" (
    echo ❌ 未找到后端项目，请确保在项目根目录运行此脚本
    pause
    exit /b 1
)

echo ✅ 项目结构检查通过
echo.

REM 检查 Git 状态
echo 检查 Git 状态...
git status --porcelain >nul 2>&1
if %errorlevel% equ 0 (
    echo ⚠️  检测到未提交的更改
    echo.
    set /p choice="是否提交当前更改？(y/n): "
    if /i "%choice%"=="y" (
        echo.
        echo 正在提交更改...
        git add .
        git commit -m "准备部署 - %date% %time%"
        echo ✅ 更改已提交
    )
) else (
    echo ✅ 工作目录干净
)

echo.
echo ========================================
echo 第二步：推送到 GitHub
echo ========================================
echo.

REM 检查远程仓库
git remote -v >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ 未配置远程仓库
    echo 请先在 GitHub 上创建仓库，然后运行以下命令：
    echo git remote add origin https://github.com/您的用户名/仓库名.git
    pause
    exit /b 1
)

echo 正在推送到 GitHub...
git push origin main
if %errorlevel% neq 0 (
    echo ❌ 推送失败，请检查网络连接和仓库权限
    pause
    exit /b 1
)

echo ✅ 代码已推送到 GitHub
echo.

echo ========================================
echo 第三步：安装依赖
echo ========================================
echo.

echo 正在安装后端依赖...
cd backend
npm install
if %errorlevel% neq 0 (
    echo ❌ 后端依赖安装失败
    pause
    exit /b 1
)
echo ✅ 后端依赖安装完成

echo.
echo 正在安装前端依赖...
cd ..\frontend
npm install
if %errorlevel% neq 0 (
    echo ❌ 前端依赖安装失败
    pause
    exit /b 1
)
echo ✅ 前端依赖安装完成

cd ..
echo.

echo ========================================
echo 第四步：构建项目
echo ========================================
echo.

echo 正在构建后端...
cd backend
npm run build
if %errorlevel% neq 0 (
    echo ❌ 后端构建失败
    pause
    exit /b 1
)
echo ✅ 后端构建完成

echo.
echo 正在构建前端...
cd ..\frontend
npm run build
if %errorlevel% neq 0 (
    echo ❌ 前端构建失败
    pause
    exit /b 1
)
echo ✅ 前端构建完成

cd ..
echo.

echo ========================================
echo 部署准备完成！
echo ========================================
echo.
echo ✅ 所有准备工作已完成
echo.
echo 📋 接下来请按照以下步骤进行部署：
echo.
echo 1. 访问 https://supabase.com 创建数据库
echo 2. 访问 https://render.com 部署后端
echo 3. 访问 https://vercel.com 部署前端
echo.
echo 📖 详细步骤请参考：完整部署指南.md
echo.
echo 🔗 快速链接：
echo    - Supabase: https://supabase.com
echo    - Render: https://render.com
echo    - Vercel: https://vercel.com
echo.
echo 按任意键打开部署指南...
pause >nul

REM 尝试打开部署指南
if exist "完整部署指南.md" (
    start "" "完整部署指南.md"
) else (
    echo 未找到部署指南文件，请手动打开
)

echo.
echo 感谢使用农福尚汇客户管理系统！
echo.
pause 