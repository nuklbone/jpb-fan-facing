# Deployment preparation script
# Run from fan-facing-site directory: .\scripts\deploy.ps1

Write-Host "🚀 Preparing for deployment..." -ForegroundColor Cyan

# Check if .env.local exists
if (-not (Test-Path ".env.local")) {
    Write-Host "⚠ Warning: .env.local not found. Creating from template..." -ForegroundColor Yellow
    if (Test-Path ".env.local.example") {
        Copy-Item ".env.local.example" ".env.local" -Force
        Write-Host "✅ Created .env.local (remember to fill in actual values)" -ForegroundColor Green
    }
}

# Run build to check for errors
Write-Host "`n📦 Building project..." -ForegroundColor Cyan
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build successful!" -ForegroundColor Green
} else {
    Write-Host "❌ Build failed. Please fix errors before deploying." -ForegroundColor Red
    exit 1
}

# Check Git status
Write-Host "`n📝 Checking Git status..." -ForegroundColor Cyan
$gitStatus = git status --porcelain

if ($gitStatus) {
    Write-Host "⚠ You have uncommitted changes:" -ForegroundColor Yellow
    git status --short
    Write-Host "`nWould you like to:" -ForegroundColor Cyan
    Write-Host "  1. Stage and commit all changes" -ForegroundColor White
    Write-Host "  2. Review changes first" -ForegroundColor White
    Write-Host "  3. Skip Git steps" -ForegroundColor White
    
    $choice = Read-Host "`nEnter choice (1-3)"
    
    if ($choice -eq "1") {
        Write-Host "`n📦 Staging changes..." -ForegroundColor Cyan
        git add .
        $commitMessage = Read-Host "Enter commit message (or press Enter for default)"
        if ([string]::IsNullOrWhiteSpace($commitMessage)) {
            $commitMessage = "Prepare for deployment: complete fan-facing website build"
        }
        git commit -m $commitMessage
        Write-Host "✅ Changes committed" -ForegroundColor Green
        
        $pushChoice = Read-Host "`nPush to GitHub? (y/n)"
        if ($pushChoice -eq "y" -or $pushChoice -eq "Y") {
            git push origin main
            if ($LASTEXITCODE -eq 0) {
                Write-Host "✅ Pushed to GitHub" -ForegroundColor Green
            }
        }
    }
} else {
    Write-Host "✅ No uncommitted changes" -ForegroundColor Green
}

Write-Host "`n✅ Ready for deployment!" -ForegroundColor Green
Write-Host "`nNext steps:" -ForegroundColor Cyan
Write-Host "  1. Ensure all environment variables are set in Vercel" -ForegroundColor White
Write-Host "  2. Deploy via Vercel dashboard or CLI:" -ForegroundColor White
Write-Host "     - Dashboard: https://vercel.com/new" -ForegroundColor Gray
Write-Host "     - CLI: vercel deploy" -ForegroundColor Gray
Write-Host "  3. Test the deployed site" -ForegroundColor White
Write-Host "  4. Set up custom domain (optional)" -ForegroundColor White

