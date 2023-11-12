# setup.sh
#!/bin/bash

# Navigate to the backend directory
cd backend || exit 1

# Run commands related to the backend setup
npm install
# Add your backend setup commands here

# Move back to the original directory
cd ..

# Navigate to the frontend directory
cd frontend || exit 1

# Run commands related to the frontend setup
npm install
# Add your frontend setup commands here

# Move back to the original directory
cd ..

# Additional setup commands if needed

# Exit successfully
exit 0
