# Run Both Front and Backed Application at the same time
echo "Running Veriff Interview Application..."
(cd frontend && yarn run start &) && (cd backend && yarn start:dev)
