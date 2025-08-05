@echo off
echo 农福尚汇客户管理系统 - 数据库设置
echo.

echo 请确保MySQL服务已启动，并且您有管理员权限。
echo.

set /p DB_USER=请输入MySQL用户名 (默认: root): 
if "%DB_USER%"=="" set DB_USER=root

set /p DB_PASSWORD=请输入MySQL密码: 

echo.
echo 正在创建数据库和表...

mysql -u %DB_USER% -p%DB_PASSWORD% -e "CREATE DATABASE IF NOT EXISTS supplier_management CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"

if %ERRORLEVEL% NEQ 0 (
    echo 数据库创建失败！请检查MySQL连接信息。
    pause
    exit /b 1
)

mysql -u %DB_USER% -p%DB_PASSWORD% supplier_management < backend\database\init.sql

if %ERRORLEVEL% NEQ 0 (
    echo 表创建失败！请检查SQL脚本。
    pause
    exit /b 1
)

echo.
echo 数据库设置完成！
echo.
echo 请更新 backend\.env 文件中的数据库连接信息：
echo DB_USER=%DB_USER%
echo DB_PASSWORD=%DB_PASSWORD%
echo.
pause 