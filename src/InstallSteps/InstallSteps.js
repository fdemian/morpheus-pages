import React, { useState } from 'react';
import { Steps, Divider } from 'antd';
import './InstallSteps.css';

const { Step } = Steps;

const steps = [
  {
    title: "Install dependencies",
    description: <p>
      You will need the following dependencies:
      <ul>
        <li>
          <a
            href="https://www.python.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Python3+
          </a>
        </li>
        <li>
          <a
            href="https://www.postgresql.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            PostgreSQL 10+
          </a>
        </li>
      </ul>

    </p>
  },
  {
    title: "Modify the configuration file (config.ini)",
    description:
    <p>
      Adjust the following configuration parameters:
      <ul>
        <li><strong>port</strong>: the port where you want your application to run (defaults to 8888)</li>
        <li><strong>database_user</strong>: the database user (default postgres)</li>
        <li><strong>database_port</strong>: the database port (default 5432)</li>
        <li><strong>database_name</strong>: the name of the database to be created and used (default morpheus)</li>
        <li><strong>database_password</strong>: the database password (default postgres)</li>
        <li><strong>serve_https</strong>: whether to use htpps or not. If set to true, you will need to specify the location of your SSL cert and key ( ssl_cert and ssl_key options) (default false)</li>
      </ul>
    </p>
  },
  {
    title: "Run the application setup.",
    description:
    <p>
      <pre>python3 setup.py</pre>
      This step will install al required python packages (through pip), create the database with the name you chose on the previous step and run the migrations.
    </p>
  },
  {
    title: "Create new users (if needed)",
    description:
    <p>
      You've now configured and installed the application, but it has no users. Users can be added through the modcp command.
      <pre>python3 modcp.py</pre>
      The program will ask you username, password, user name (the user's actual name) and an email address.
    </p>
  },
  {
    title: "Run Morpheus",
    description:
    <p>
      Once you followed all the steps above, you're ready to go. To run the applicationi, simply use the following command:
      <pre>python3 main.py</pre>
    </p>
  },
];

const InstallSteps = () => {

  const [current, setCurrent] = useState(0);
  const onChange = current => setCurrent(current);

  return (
  <div className="installation-steps-container">
    <h1>Installation Steps</h1>
    <br />

    <br />
    <div>
      <Steps
        current={current}
        onChange={onChange}
        direction="vertical"
      >
        {steps.map(s => (
          <Step
            title={s.title}
            description={s.description}
          />
          )
         )}
      </Steps>
    </div>
  </div>
  );

}

export default InstallSteps;
