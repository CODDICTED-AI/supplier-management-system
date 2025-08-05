@echo off
echo 农福尚汇客户管理系统 - 远程访问设置
echo.

echo 1. 下载并安装 ngrok
echo 请访问 https://ngrok.com/download 下载 ngrok
echo 解压到当前目录

echo.
echo 2. 注册 ngrok 账号获取 authtoken
echo 访问 https://dashboard.ngrok.com/get-started/your-authtoken

echo.
set /p AUTHTOKEN=请输入您的 ngrok authtoken: 

echo.
echo 3. 配置 ngrok
ngrok config add-authtoken %AUTHTOKEN%

echo.
echo 4. 启动系统
echo 请先运行 start.bat 启动系统

echo.
echo 5. 启动 ngrok 隧道
echo 在新的命令行窗口中运行：
echo ngrok http 3000

echo.
echo 6. 获取远程访问地址
echo ngrok 会显示类似 https://abc123.ngrok.io 的地址
echo 其他用户可以通过这个地址访问系统

pause 