# Run Both Front and Backed Application at the same time
echo "Running Applications..."
(cd frontend && yarn run start &) && (cd backend && yarn start:dev)
