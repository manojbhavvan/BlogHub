# start.sh

# Start the backend server
node backend/index.js &

# Sleep for a few seconds to allow the backend server to start (adjust as needed)


# Start the frontend server
cd frontend/
npm run build 

