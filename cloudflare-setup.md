# Cloudflare Tunnel 远程访问设置

## 步骤1：注册 Cloudflare 账号
1. 访问 https://dash.cloudflare.com/sign-up
2. 注册免费账号

## 步骤2：安装 cloudflared
1. 访问 https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/installation/
2. 下载并安装 cloudflared

## 步骤3：登录 Cloudflare
```bash
cloudflared tunnel login
```

## 步骤4：创建隧道
```bash
cloudflared tunnel create supplier-management
```

## 步骤5：配置隧道
创建配置文件 `~/.cloudflared/config.yml`：
```yaml
tunnel: your-tunnel-id
credentials-file: ~/.cloudflared/your-tunnel-id.json

ingress:
  - hostname: your-domain.com
    service: http://localhost:3000
  - service: http_status:404
```

## 步骤6：启动隧道
```bash
cloudflared tunnel run supplier-management
```

## 步骤7：访问系统
其他用户可以通过 `https://your-domain.com` 访问系统 