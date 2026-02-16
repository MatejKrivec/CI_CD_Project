<div align="center">
  <h1>CI/CD Learning</h1>
  <p>A project where i simulated a real app production workflow with a CI CD approach</p>
</div>

---

<div>
  <h2>Concept</h2>
  <p>
    The repo consists of three branches
  </p>
  <p><b>dev-matej → test → main</b></p>
</div>

---

<div>
  <h2>CI CD Flow</h2>
  <p><b>dev-matej</b> — on this branch i make local changes and features that i test in the local enviornment and when im sattisfied i create a merge request to branch test.</p>
  <p><b>test</b> — here in the online staging enviornmnet the CI CD build pipeline runs everytime a merge request opens to this branch and if the pipeline succesfully builds and tests the merge request is allowed</p>
  <p><b>main</b> — after doing succesfull tests in the online test enviornment i merge the test branch into main. That way everything is guaranteed to work and there wont be any suprises on production</p>
</div>

---

<div>
  <h2>CI/CD Setup</h2>
  <p>
    Deployments and build validation are handled by
    vercel within its configured build
  </p>
   <p>
    In the build i run npm test, npm build and npm install. If all three of these commands execute correctly the pipeline runs succesfull.
  </p>
</div>

---

<div>
  <h2>Goal</h2>
  <p>
    Understand how real pipelines enforce quality gates before code can reach production.
  </p>
</div>
