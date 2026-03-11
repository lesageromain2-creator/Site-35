# Copie les images depuis BANQUE IMAGES\restauration vers public\images (Site 35 - Sakura)
# Usage : exécuter depuis la racine du workspace ou depuis frontend/

$Root = $PSScriptRoot
# scripts -> frontend -> Site 35 -> siteb démo
$WorkspaceRoot = (Get-Item $Root).Parent.Parent.Parent.FullName
$Source = Join-Path (Join-Path $WorkspaceRoot "BANQUE IMAGES") "restauration"
$FrontendRoot = (Get-Item $Root).Parent
$Target = Join-Path (Join-Path $FrontendRoot "public") "images"

if (-not (Test-Path $Source)) {
    Write-Host "Dossier source introuvable : $Source" -ForegroundColor Yellow
    exit 1
}

if (-not (Test-Path $Target)) {
    New-Item -ItemType Directory -Path $Target -Force | Out-Null
}

$files = Get-ChildItem -Path $Source -File | Where-Object { $_.Extension -match "\.(jpg|jpeg|png|webp)$" } | Sort-Object Name
# Image prioritaire pour la section chef (nom exact)
$chefSourceName = "pexels-miquel-ferran-gomez-figueroa-2172703-3814446.jpg"
$chefSourcePath = Join-Path $Source $chefSourceName
$chefDestPath = Join-Path $Target "chef.jpg"
if (Test-Path $chefSourcePath) {
    Copy-Item -LiteralPath $chefSourcePath -Destination $chefDestPath -Force
    Write-Host "Copie : $chefSourceName -> chef.jpg (image chef)" -ForegroundColor Cyan
}
# hero, about, puis galerie (exclure chef prioritaire pour éviter doublon)
$otherFiles = $files | Where-Object { $_.Name -ne $chefSourceName }
$names = @("hero.jpg", "about.jpg", "gallery-1.jpg", "gallery-2.jpg", "gallery-3.jpg", "gallery-4.jpg", "gallery-5.jpg", "gallery-6.jpg")
for ($i = 0; $i -lt [Math]::Min($otherFiles.Count, $names.Count); $i++) {
    $destName = $names[$i]
    if ($otherFiles[$i].Extension -ne ".jpg" -and $destName -like "*.jpg") {
        $destName = [System.IO.Path]::ChangeExtension($destName, $otherFiles[$i].Extension)
    }
    $destPath = Join-Path $Target $destName
    Copy-Item -Path $otherFiles[$i].FullName -Destination $destPath -Force
    Write-Host "Copie : $($otherFiles[$i].Name) -> $destName"
}
# Si chef.jpg n'existe pas encore (fichier prioritaire absent), utiliser about.jpg
if (-not (Test-Path $chefDestPath)) {
    $aboutPath = Join-Path $Target "about.jpg"
    if (Test-Path $aboutPath) { Copy-Item -Path $aboutPath -Destination $chefDestPath -Force; Write-Host "chef.jpg = copie about.jpg (image chef prioritaire absente)" }
}

Write-Host "Termine. Images dans : $Target" -ForegroundColor Green
