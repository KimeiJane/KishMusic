#!/bin/bash
echo "Starting KishMusic App..."
echo "1. Starting json-server on port 3000..."
npx json-server --watch db.json --port 3000 &
SERVER_PID=$!
echo "Server started with PID: $SERVER_PID"
echo "2. Open index.html in your browser"
echo "3. To stop server: kill $SERVER_PID"
wait