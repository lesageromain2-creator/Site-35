@echo off
REM Lance le script PowerShell pour copier BANQUE IMAGES\restauration -> public\images
powershell -ExecutionPolicy Bypass -File "%~dp0copy-images-restauration.ps1"
pause
