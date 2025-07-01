import { useState, useEffect } from 'react';

function App() {
  const [apiResponse, setApiResponse] = useState(null);

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${apiUrl}/api/hello`)
      .then((response) => response.json())
      .then((data) => {
        setApiResponse(data.message);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [apiUrl]);

  return (
    <>
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <header className="shadow-md rounded-lg p-6 mb-4 bg-[#15181D] flex flex-col justify-center items-center">
          <img src="https://github.com/andregans/code_logotype/blob/main/Vite.png?raw=true"
            className="w-40" />
          <h1 className="text-3xl font-bold text-center text-secondary mt-4">React.js + Express.js Monolith on Vercel</h1>
        </header>
        <main className="space-y-5">
          <section className="shadow-md rounded-lg p-6 bg-[#15181D]">
            <h2 className="text-2xl font-semibold mb-4 text-secondary">CLONE REPOSITORY</h2>
            <ol className="list-decimal pl-6 text-white mb-4">
              <li><code className="bg-[#1C232B] px-1 rounded">git clone git clone https://github.com/RevanSP/REACT-EXPRESS-MONOLITH-VERCEL-TEMPLATE.git</code></li>
              <li><code className="bg-[#1C232B] px-1 rounded">cd REACT-EXPRESS-MONOLITH-VERCEL-TEMPLATE</code></li>
              <li><code className="bg-[#1C232B] px-1 rounded">npm install</code></li>
              <li><code className="bg-[#1C232B] px-1 rounded">cd server</code></li>
              <li><code className="bg-[#1C232B] px-1 rounded">npm install</code></li>
            </ol>
          </section>
          <section className="shadow-md rounded-lg p-6 bg-[#15181D]">
            <h2 className="text-2xl font-semibold mb-4 text-secondary">TESTING YOUR API</h2>
            <p className="mb-4">
              you can setup in folder <code className="bg-[#1C232B] px-1 rounded"> server/index.js</code> or create REST API (EXPRESS.JS)
            </p>
            <p className="mb-4">
              To test your newly created REST API, visit the <code
                className="bg-[#1C232B] px-1 rounded">/api/hello</code> route on Vercel.
            </p>
            <p className="mb-4">
              Example URL: <code
                className="bg-[#1C232B] px-1 rounded">https://react-express-monolith-vercel-template.vercel.app/api/hello</code>
            </p>
            <p className="mb-4">Expected JSON response:</p>
            <pre className="p-4 rounded-md text-sm overflow-x-auto">
              <code>
                {"{"}
                "message": "{apiResponse}"
                {"}"}
              </code>
            </pre>
            <p className="mb-4">Local PORT for BACK-END is <code className="bg-[#1C232B] px-1 rounded">http://localhost:6969</code> and for FRONT-END is <code className="bg-[#1C232B] px-1 rounded">http://localhost:5173</code>,
              you can customize in <code className="bg-[#1C232B] px-1 rounded">server/index.js</code> and <code className="bg-[#1C232B] px-1 rounded">vite.config.js</code></p>
          </section>
          <section className="shadow-md rounded-lg p-6 bg-[#15181D]">
            <h2 className="text-2xl font-semibold mb-4 text-secondary">VERCEL CONFIGURATION</h2>
            <p className="mb-4">You can set the server or api from <code
              className="bg-[#1C232B] px-1 rounded">vercel.json</code>, Example :</p>
            <pre className="p-4 rounded-md text-sm overflow-x-auto">
              <code>
                {`{
      "version": 2,
      "builds": [
        {
          "src": "server/index.js", // Set here
          "use": "@vercel/node"
        },
        {
          "src": "/dist/**",
          "use": "@vercel/static"
        }
      ],
      "routes": [
        {
          "src": "/api/(.*)",
          "dest": "/server/index.js" // Set here
        },
        {
          "src": "/(.*)",
          "dest": "/dist/$1"
        }
      ]
    }`}
              </code>
            </pre>
          </section>
          <section className="shadow-md rounded-lg p-6 bg-[#15181D]">
            <h2 className="text-2xl font-semibold mb-4 text-secondary">HOSTING ON VERCEL</h2>
            <ol className="list-decimal pl-6 text-white mb-4">
              <li>Create a repo on GitHub and push this code from your repository.</li>
              <li>Follow these steps:</li>
              <ol className="list-disc pl-6 text-white">
                <li>Open your terminal and navigate to your project folder.</li>
                <li>Initialize a new Git repository if you haven&apos;t already:</li>
                <code className="bg-[#1C232B] px-1 rounded">git init</code>
                <li>Setup PORT local and production</li>
                <p>Set for local & prod PORT in <code className="bg-[#1C232B] px-1 rounded">.env</code> and <code className="bg-[#1C232B] px-1 rounded">.env.production</code>,
                  dont forget set <code className="bg-[#1C232B] px-1 rounded">env*</code> in <code className="bg-[#1C232B] px-1 rounded">.gitignore</code> after set the PORT</p>
                <li>Run the following command to add all your changes:</li>
                <code className="bg-[#1C232B] px-1 rounded">git add .</code>
                <li>Commit your changes with a message describing the changes:</li>
                <code className="bg-[#1C232B] px-1 rounded">git commit -m &quot;Your commit message&quot;</code>
                <li>Create or rename your branch to `main` (if it’s not already named `main`):</li>
                <code className="bg-[#1C232B] px-1 rounded">git branch -M main</code>
                <li>If you haven&apos;t connected your local repository to GitHub, you can do so by running:</li>
                <code className="bg-[#1C232B] px-1 rounded">git remote add origin
                  https://github.com/your-username/your-repository.git</code>
                <li>Push your changes to GitHub:</li>
                <code className="bg-[#1C232B] px-1 rounded">git push -u origin main</code>
                <li>In Vercel, click "Import Project" and connect your repository from GitHub.</li>
                <li>Click "Deploy" to start the process.</li>
                <li>In Vercel, go to Settings &gt; Environment Variables and set the .env contents from KEY and VALUE fields and then redeploy <code className="bg-[#1C232B] px-1 rounded">(npm run build &gt; git add . &gt; git commit -m "your message" &gt; "git push")</code>.</li>
              </ol>
            </ol>
          </section>
        </main>
        <footer className="mt-12 text-center text-gray-600">
          <p>ReiiV. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;