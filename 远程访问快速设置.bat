@echo off
echo ========================================
echo 农福尚汇客户管理系统 - 远程访问设置
echo ========================================
echo.

echo 请选择远程访问方案：
echo.
echo 1. ngrok 内网穿透（推荐，最简单）
echo 2. TeamViewer 远程桌面
echo 3. 云服务部署
echo.

set /p choice=请输入选择 (1-3): 

if "%choice%"=="1" goto ngrok
if "%choice%"=="2" goto teamviewer
if "%choice%"=="3" goto cloud
goto end

:ngrok
echo.
echo ========================================
echo 方案1：ngrok 内网穿透设置
echo ========================================
echo.
echo 步骤1：下载 ngrok
echo 请访问：https://ngrok.com/download
echo 下载后解压到当前目录
echo.
echo 步骤2：注册获取 authtoken
echo 访问：https://dashboard.ngrok.com/get-started/your-authtoken
echo.
echo 步骤3：配置 ngrok
set /p token=请输入您的 authtoken: 
ngrok config add-authtoken %token%
echo.
echo 步骤4：启动系统
echo 请先运行 start.bat 启动系统
echo.
echo 步骤5：启动隧道
echo 在新的命令行窗口中运行：ngrok http 3000
echo.
echo 步骤6：分享地址
echo 将 ngrok 显示的 https://xxx.ngrok.io 地址发给远程用户
goto end

:teamviewer
echo.
echo ========================================
echo 方案2：TeamViewer 远程桌面设置
echo ========================================
echo.
echo 步骤1：下载安装 TeamViewer
echo 访问：https://www.teamviewer.com/cn/
echo.
echo 步骤2：启动 TeamViewer
echo 记录显示的 ID 和密码
echo.
echo 步骤3：设置无人值守访问
echo 在 TeamViewer 中设置固定密码
echo.
echo 步骤4：启动系统
echo 运行 start.bat 启动系统
echo.
echo 步骤5：分享连接信息
echo 将 ID 和密码发给远程用户
goto end

:cloud
echo.
echo ========================================
echo 方案3：云服务部署
echo ========================================
echo.
echo 请参考以下文档：
echo - 免费云部署指南.md
echo - 部署指南.md
echo.
echo 推荐使用 Vercel + Railway + PlanetScale
echo 完全免费且稳定可靠
goto end

:end
echo.
echo 设置完成！如有问题请查看相关文档。
pause 