# Run Both Front and Backed Application at the same time
echo "Installing Frontend Packages..."
cd frontend && yarn
echo "Installing Backend Packages..."
cd ../backend && yarn
echo "Application Installed Successfully!"
