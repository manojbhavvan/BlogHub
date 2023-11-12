# start.sh
cd backend/
npm i
cd ..
cd frontend/
npm i
cd ..

# Start the backend server
node backend/index.js &

# Sleep for a few seconds to allow the backend server to start (adjust as needed)


# Start the frontend server
cd frontend/
npm run build 

