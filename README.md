<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   
</head>
<body>

<h1><b>PreProdSync</h1></b>

<h2>Overview</h2>
<p>PreProdSync is a full-stack application designed to facilitate both local development and production-like testing environments. This project is split into two main components:</p>
<ul>
    <li><strong>Minor Project: Docker Compose Setup</strong></li>
    <li><strong>Major Project: kind Cluster Setup</strong></li>
</ul>
<p>By utilizing Docker Compose and Kubernetes with kind, PreProdSync provides a comprehensive environment for building, testing, and deploying applications.</p>

<h2>Table of Contents</h2>
<ul>
    <li><a href="#minor-project-docker-compose-setup">Minor Project: Docker Compose Setup</a></li>
    <li><a href="#major-project-kind-cluster-setup">Major Project: kind Cluster Setup</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#project-structure">Project Structure</a></li>
    <li><a href="#requirements">Requirements</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
</ul>

<h2 id="minor-project-docker-compose-setup">Minor Project: Docker Compose Setup</h2>

<h3>Description</h3>
<p>The Docker Compose setup is designed for creating a local development environment that includes the frontend, backend, database, and other services. By defining all components in a single <code>docker-compose.yml</code> file, developers can quickly build, run, and test the entire application stack on their local machines.</p>

<h3>Key Features</h3>
<ul>
    <li><strong>Single Configuration:</strong> Manage all services in one <code>docker-compose.yml</code> file.</li>
    <li><strong>Isolation:</strong> Run each component in its own container, ensuring isolated environments.</li>
    <li><strong>Consistency:</strong> Ensure that all developers work with the same environment.</li>
</ul>

<h3>Files Included</h3>
<ul>
    <li><code>Dockerfile</code>: Defines the environment for the application services.</li>
    <li><code>docker-compose.yml</code>: Configures and orchestrates all services (frontend, backend, database).</li>
    <li><code>.env</code>: Contains environment variables for service configuration.</li>
</ul>

<h2 id="major-project-kind-cluster-setup">Major Project: kind Cluster Setup</h2>

<h3>Description</h3>
<p>The kind (Kubernetes IN Docker) cluster setup simulates a production environment by deploying the application on a Kubernetes cluster. This setup leverages Kubernetes manifests to manage and orchestrate application components, offering a scalable and robust testing environment.</p>

<h3>Key Features</h3>
<ul>
    <li><strong>Production-Like Environment:</strong> Mimics a real-world production setup using Kubernetes.</li>
    <li><strong>Scalability:</strong> Test application scalability and performance.</li>
    <li><strong>Comprehensive Testing:</strong> Perform end-to-end tests in an environment that mirrors production.</li>
</ul>

<h3>Files Included</h3>
<ul>
    <li>Kubernetes manifests: Define deployments, services, and other resources for the application.</li>
    <li><code>kind-config.yaml</code>: Configuration file for setting up the kind cluster.</li>
</ul>

<h2 id="getting-started">Getting Started</h2>

<h3>Prerequisites</h3>
<ul>
    <li><a href="https://docs.docker.com/get-docker/" target="_blank">Docker</a>: Install Docker</li>
    <li><a href="https://docs.docker.com/compose/install/" target="_blank">Docker Compose</a>: Install Docker Compose</li>
    <li><a href="https://kind.sigs.k8s.io/docs/user/quick-start/" target="_blank">kind</a>: Install kind</li>
    <li><a href="https://kubernetes.io/docs/tasks/tools/install-kubectl/" target="_blank">kubectl</a>: Install kubectl</li>
</ul>

<h3>Local Development with Docker Compose</h3>
<pre><code>git clone https://github.com/Kumar22Ankit/PreProdSync.git
cd PreProdSync
docker-compose up --build
</code></pre>
<p>Access the application at <a href="http://localhost:&lt;PORT&gt;">http://localhost:&lt;PORT&gt;</a>.</p>
<pre><code>docker-compose down
</code></pre>

<h3>Production-Like Testing with kind</h3>
<pre><code>kind create cluster --config kind-config.yaml
kubectl apply -f k8s/
kubectl get all
</code></pre>
<pre><code>kind delete cluster
</code></pre>

<h2 id="project-structure">Project Structure</h2>
<ul>
    <li><code>docker-compose.yml</code>: Configuration for Docker Compose.</li>
    <li><code>Dockerfile</code>: Dockerfile for service containers.</li>
    <li><code>.env</code>: Environment variables for configuration.</li>
    <li><code>k8s/</code>: Directory containing Kubernetes manifests.</li>
    <li><code>kind-config.yaml</code>: Configuration for the kind cluster.</li>
</ul>

<h2 id="requirements">Requirements</h2>
<ul>
    <li>Docker 20.10 or higher</li>
    <li>Docker Compose 1.29 or higher</li>
    <li>kind 0.11 or higher</li>
    <li>kubectl 1.21 or higher</li>
</ul>

<h2 id="usage">Usage</h2>
<ul>
    <li><strong>Local Development:</strong> Use Docker Compose to run and test the application locally.</li>
    <li><strong>Production-Like Testing:</strong> Use kind and Kubernetes manifests to deploy and test in a simulated production environment.</li>
</ul>

<h2 id="contributing">Contributing</h2>
<p>Feel free to submit issues and pull requests. For detailed contributing guidelines, please refer to the <code>CONTRIBUTING.md</code> file.</p>

<h2 id="license">License</h2>
<p>This project is licensed under the MIT License. See the <code>LICENSE</code> file for details.</p>

</body>
</html>
