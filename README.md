1. Install Docker if you haven't already.

2. Clone the repository by running the following command:
git clone https://github.com/jinalshah98/mac-lookup.git

3. Navigate into the project directory:
cd mac-lookup

4. Build the Docker image:
docker build -t mac_lookup .

5. Run the tool 
docker run -e MACADDRESS_API_KEY=your_api_key -it mac_lookup node macLookup.js [MAC_ADDRESS]

Replace [MAC_ADDRESS] with the MAC address you want to look up, and your_api_key with your actual macaddress.io API key.

The command will return the company name associated with the provided MAC address.

