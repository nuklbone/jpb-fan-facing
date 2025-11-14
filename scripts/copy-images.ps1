# Script to copy and organize images from JPB PICS folder
# Run from fan-facing-site directory: .\scripts\copy-images.ps1

$sourceDir = "..\JPB PICS"
$targetBase = "public\images"

# Create image directories
Write-Host "Creating image directories..." -ForegroundColor Cyan
New-Item -ItemType Directory -Force -Path "$targetBase\hero" | Out-Null
New-Item -ItemType Directory -Force -Path "$targetBase\shows" | Out-Null
New-Item -ItemType Directory -Force -Path "$targetBase\gallery" | Out-Null
New-Item -ItemType Directory -Force -Path "$targetBase\merch" | Out-Null
New-Item -ItemType Directory -Force -Path "$targetBase\band" | Out-Null
New-Item -ItemType Directory -Force -Path "$targetBase\logos" | Out-Null
New-Item -ItemType Directory -Force -Path "$targetBase\videos" | Out-Null

# Copy homepage hero image
if (Test-Path "$sourceDir\homepage 2.jpg") {
    Copy-Item "$sourceDir\homepage 2.jpg" "$targetBase\hero\hero-bg.jpg" -Force
    Write-Host "Copied homepage hero image" -ForegroundColor Green
}

# Copy logos and branding
$logoFiles = @("JPB 1 Sheet.jpg", "JPB Tiers.jpg", "BLUES TONE AWARD.png")
foreach ($file in $logoFiles) {
    if (Test-Path "$sourceDir\$file") {
        Copy-Item "$sourceDir\$file" "$targetBase\logos\" -Force
        Write-Host "Copied logo: $file" -ForegroundColor Green
    }
}
Get-ChildItem "$sourceDir\Promo*.jpg" -ErrorAction SilentlyContinue | ForEach-Object {
    Copy-Item $_.FullName "$targetBase\logos\" -Force
    Write-Host "Copied logo: $($_.Name)" -ForegroundColor Green
}

# Copy band member photos
$bandFiles = @("James*.jpg", "Classic James*.jpg", "Early James*.jpg", "JP*.jpg", "James and*.jpg", "With Luther*.jpg")
foreach ($pattern in $bandFiles) {
    Get-ChildItem "$sourceDir\$pattern" -ErrorAction SilentlyContinue | ForEach-Object {
        Copy-Item $_.FullName "$targetBase\band\" -Force
    }
}
Write-Host "Copied band member photos" -ForegroundColor Green

# Copy show/venue photos
$showFiles = @("*WBC*.jpg", "*RS*.jpg", "*Red Shed*.jpg", "*Brickyard*.jpg", "*Bank*.jpg", "*Sinclair*.jpg", "*StrangeBRew*.jpg", "*Charlies*.jpg", "*McGraws*.jpg")
foreach ($pattern in $showFiles) {
    Get-ChildItem "$sourceDir\$pattern" -ErrorAction SilentlyContinue | ForEach-Object {
        Copy-Item $_.FullName "$targetBase\shows\" -Force
    }
}
Write-Host "Copied show photos" -ForegroundColor Green

# Copy promo/press images
$promoFiles = @("Promo*.jpg", "Promo*.png", "MO EG Flier.jpg", "JPB TRUE BLUES PARTY.jpg")
foreach ($pattern in $promoFiles) {
    Get-ChildItem "$sourceDir\$pattern" -ErrorAction SilentlyContinue | ForEach-Object {
        Copy-Item $_.FullName "$targetBase\merch\" -Force
    }
}
Write-Host "Copied promo images" -ForegroundColor Green

# Copy all remaining images to gallery
Get-ChildItem "$sourceDir\*.jpg" | ForEach-Object {
    $targetPath = "$targetBase\gallery\$($_.Name)"
    if (-not (Test-Path $targetPath)) {
        Copy-Item $_.FullName $targetPath -Force
    }
}
Write-Host "Copied remaining images to gallery" -ForegroundColor Green

# Copy PNG files if any
Get-ChildItem "$sourceDir\*.png" -ErrorAction SilentlyContinue | ForEach-Object {
    Copy-Item $_.FullName "$targetBase\gallery\" -Force
}
Write-Host "Copied PNG images" -ForegroundColor Green

Write-Host "`nImage copy complete!" -ForegroundColor Green
Write-Host "Images organized in: $targetBase" -ForegroundColor Cyan

