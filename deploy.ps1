# 部署脚本
Write-Host "开始构建..."
npm run build

Write-Host "清理旧文件..."
Remove-Item -Path "index.html" -Force -ErrorAction SilentlyContinue
Remove-Item -Path "assets" -Recurse -Force -ErrorAction SilentlyContinue

Write-Host "复制新文件..."
Copy-Item -Path "dist\index.html" -Destination "." -Force
New-Item -ItemType Directory -Path "assets" -Force | Out-Null
Copy-Item -Path "dist\assets\*" -Destination "assets" -Force

Write-Host "提交更改..."
git add .
git commit -m "deploy: 自动部署更新"
git push

Write-Host "部署完成！"