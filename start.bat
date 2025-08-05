@echo off
echo 启动农福尚汇客户管理系统...

echo.
echo 1. 启动后端服务...
cd backend
start "Backend Server" cmd /k "npm run dev"

echo.
echo 2. 等待后端启动...
timeout /t 3 /nobreak > nul

echo.
echo 3. 启动前端服务...
cd ..\frontend
start "Frontend Server" cmd /k "npm start"

echo.
echo 系统启动完成！
echo 前端地址: http://localhost:3000
echo 后端地址: http://localhost:3001
echo.
echo 请确保MySQL数据库已启动并配置正确。
pause 