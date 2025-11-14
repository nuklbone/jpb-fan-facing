# Quick setup script for environment variables
# Run from fan-facing-site directory: .\scripts\setup-env.ps1

Write-Host "Setting up .env.local file..." -ForegroundColor Cyan

if (Test-Path ".env.local") {
    Write-Host "⚠ .env.local already exists. Creating backup..." -ForegroundColor Yellow
    Copy-Item ".env.local" ".env.local.backup" -Force
}

if (-not (Test-Path ".env.local.example")) {
    Write-Host "❌ .env.local.example not found. Please create it first." -ForegroundColor Red
    exit 1
}

Copy-Item ".env.local.example" ".env.local" -Force

Write-Host "✅ Created .env.local from template" -ForegroundColor Green
Write-Host "`n⚠ IMPORTANT: Edit .env.local and add your actual API keys:" -ForegroundColor Yellow
Write-Host "  1. Supabase credentials (from https://app.supabase.com)" -ForegroundColor White
Write-Host "  2. Resend API key (from https://resend.com)" -ForegroundColor White
Write-Host "  3. Bandsintown API (already configured with default)" -ForegroundColor White
Write-Host "  4. Admin email addresses" -ForegroundColor White
Write-Host "  5. Shopify credentials (optional, for merch store)" -ForegroundColor White

Write-Host "`nAfter editing, run: npm run dev" -ForegroundColor Cyan

