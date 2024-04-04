import React from "react";
import "./body.css";
import Link from "next/link";
import MessageIcon from "./utils/MessageIcon";
import Image from "next/image";

const Body = () => {
  return (
    <React.Fragment>
      <article id="flex-body">
        <div id="flex-align">
          <section role="title" aria-label="título da seção">
            <h1
              id="tituloH1"
              title="You should stop writing Dockerfiles today — Do this instead"
            >
              You should stop writing Dockerfiles today — Do this instead
            </h1>
          </section>
          <div id="code-container">
            <code id="code-1">
              Using docker init to write Dockerfile and docker-compose configs
            </code>
          </div>
          <p id="sm-code-text">
            <mark id="sm-mark">
              Using docker init to write Dockerfile and docker-compose configs
            </mark>
          </p>
          <div id="info-container">
            <div id="publisher-container">
              <Image
                src={"/images/publisher-image.jpg"}
                alt="Akhilesh's picture"
                width={44}
                height={44}
              />
              <div id="publishers-hover"></div>
            </div>
            <div className="kpmg-container">
              <Image
                src={"/images/kpmg-image.jpg"}
                height={27}
                width={27}
                alt="KPMG logo picture"
              />
              <div id="kpmg-hover"></div>
            </div>
            {/*Adicionar o modal depois*/}

            <section aria-label="Informações do Jornalista" id="publisher-info">
              <div id="name-link-container">
                <p id="publishers-name" aria-label="Nome do publicador">
                  <a id="a-name">Akhilesh Mishra</a> <span id="dot"></span>
                </p>
                <Link href={""} id="follow-link">
                  Follow
                </Link>
              </div>
              <div>
                <p id="published-text">
                  Published in <a id="kpmg-link">KPMG UK Engineering</a>{" "}
                  <span id="dot-5min" /> 5 min read <span id="dot-feb" /> Feb
                  8,2024
                </p>
              </div>
            </section>
          </div>
          <div id="sm-info-container">
            <section aria-label="Informações do Jornalista" id="publisher-info">
              <div id="publisher-container">
                <Image
                  src={"/images/publisher-image.jpg"}
                  alt="Akhilesh's picture"
                  width={44}
                  height={44}
                />
                <div id="publishers-hover"></div>
              </div>
              <div className="kpmg-container">
                <Image
                  src={"/images/kpmg-image.jpg"}
                  height={27}
                  width={27}
                  alt="KPMG logo picture"
                />
                <div id="kpmg-hover"></div>
              </div>
              <div id="name-link-container">
                <p id="publishers-name" aria-label="Nome do publicador">
                  <a id="a-name">Akhilesh Mishra</a> <span id="dot"></span>
                </p>
                <Link href={""} id="follow-link">
                  Follow
                </Link>
              </div>
              <div>
                <p id="published-text">
                  Published in <a id="kpmg-link">KPMG UK Engineering</a>{" "}
                  <span id="dot-5min" /> 5 min read <span id="dot-feb" /> Feb
                  8,2024
                </p>
              </div>
            </section>
          </div>
          <div id="sm-button-div">
            <button id="play-icon-button">
              <Image
                src={"/icons/body-icons/play_icon.svg"}
                alt="play audio icon"
                height={24}
                width={24}
              />
              Listen
            </button>
            <button className="share-icon-button">
              <Image
                src={"/icons/body-icons/share_icon.svg"}
                alt="play audio icon"
                height={24}
                width={24}
              />
              Share
            </button>
          </div>
          <div className="icones-body" id="sm-icones-body-1">
            <div id="start-icons-flex">
              <div className="clap-container">
                <Image
                  src={"/icons/body-icons/clap-icon.svg"}
                  alt="clapping hands icon"
                  width={20}
                  height={20}
                  className="clap-icon"
                />
                <button className="clap-button">5.1K</button>
              </div>
              <MessageIcon className="message-number" valorInicial={37} />
            </div>
            <div id="end-icons-flex">
              <button className="save-icon-button">
                <Image
                  src={"/icons/body-icons/save_icon.svg"}
                  alt="save post icon"
                  width={25}
                  height={25}
                />
              </button>
              <button id="play-icon-button">
                <Image
                  src={"/icons/body-icons/play_icon.svg"}
                  alt="play audio icon"
                  height={24}
                  width={24}
                />
              </button>
              <button className="share-icon-button">
                <Image
                  src={"/icons/body-icons/share_icon.svg"}
                  alt="share this post icon"
                  width={25}
                  height={25}
                />
              </button>
            </div>
          </div>
          <Image
            id="robot-img"
            src={"/images/imagem1.webp"}
            alt="Zowi's robot picture"
            height={1050}
            width={680}
          />
          <section id="photo-section">
            <p id="photo-by-text">
              Photo by{" "}
              <a id="anchor-photo" href="">
                Everyday basics
              </a>{" "}
              on{" "}
              <a id="anchor-photo" href="">
                Unsplash
              </a>
            </p>
          </section>
          <p id="p1">
            Are you one of those who find writing
            <code id="paragraph-code">Dockerfiles</code>, and
            <code id="paragraph-code">docker-compose.yml</code> files painful?
          </p>{" "}
          <p id="p1">At least I never enjoyed it. </p>
          <p id="p1">
            {" "}
            I always wondered if I was following the best practices, and not
            introducing security vulnerabilities unknowingly while writing the{" "}
            <code id="paragraph-code">Dockerfile</code> ,{" "}
            <code id="paragraph-code">docker-compose</code> config files.
          </p>
          <p id="p1">
            Well, I won’t have to worry about it anymore, thanks to the good
            people at Docker who put Generative AI to better use without making
            too much noise about it.
          </p>{" "}
          <p id="p1">
            {" "}
            They created a CLI utility tool —
            <code id="docker-init-code"> docker init</code>
          </p>
          <h2 title="Introducing docker init">Introducing docker init</h2>
          <p id="p1">
            Docker launched the general availability of{" "}
            <code id="paragraph-code">
              <a href="" id="docker-anchor">
                docker init
              </a>
            </code>{" "}
            a few days back. I have tried it, and I found it very useful and I
            cannot wait to start using it in my day-to-day life.
          </p>
          <h2 title="What is docker init?">What is docker init?</h2>
          <p id="p1">
            <code id="docker-init-code"> docker init</code>is a command-line
            utility that helps in the initialization of Docker resources within
            a project. It creates Dockerfiles, Compose files, and
            <code id="paragraph-code">.dockerignore</code>files based on the
            project’s requirements.
          </p>
          <p id="p1">
            This simplifies the process of configuring Docker for your project,
            saving time and reducing complexity.
          </p>
          <div id="pseudo-leftBar1">
            <p id="ita-paragraph">
              Latest version of <code id="ita-code">docker init</code> supports
              Go, Python, Node.js, Rust, ASP.NET, PHP, and Java. It is available
              with Docker Desktop.
            </p>
          </div>
          <h2>How to use docker init?</h2>
          <p id="p1">
            Using <code id="paragraph-code">docker init</code> is easy and
            involves a few simple steps. First, go to the directory of your
            project where you want to set up Docker assets.
          </p>
          <p id="p1">Let me Create a basic Flask app.</p>
          <pre id="pre1">
            <span id="purple-span">span</span> app.py requirements.txt
          </pre>
          <p id="p1">Copy the below code into the respective files</p>
          <pre id="pre1">
            <span id="green-span"># app.py</span>
            <br />
            <span id="purple-span">from</span> flask{" "}
            <span id="purple-span">import</span> Flask <br />
            <br />
            app = Flask(__name__) <br />
            <br />
            <span id="dark-green-span">@app.route(&apos;/&apos;)</span>
            <br />
            <span id="purple-span">def</span> hello_docker(): <br />
            <span id="purple-span"> &nbsp;&nbsp;&nbsp;return</span>{" "}
            <span id="red-span">
              &apos;&lt;h1&gt; hello world &lt;/h1&apos;
            </span>
            <br />
            <br />
            <span id="purple-span">if</span> __name__== &apos;__main__&apos;:{" "}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;app.run(debug=
            <span id="purple-span">True</span>, host=
            <span id="red-span">&apos;0.0.0.0&apos;</span>)
          </pre>
          <pre id="pre1">
            <span id="green-span"># requirements.txt</span>
            <br />
            <br />
            Flask
          </pre>
          <div id="dot-container">
            <span id="dot1" />
            <span id="dot2" />
            <span id="dot3" />
          </div>
          <h3>
            Let&apos;s see the magic of{" "}
            <code id="paragraph-code">docker init</code>
          </h3>
          <div id="pseudo-left2">
            <p id="ita-paragraph2">
              <code id="paragraph-code">docker init</code>will scan your project
              and ask you to confirm and choose the template that best suits
              your application. Once you select the template,
              <code id="paragraph-code">docker init</code> asks you for some
              project-specific information, automatically generating the
              necessary Docker resources for your project.
            </p>
          </div>
          <pre id="pre1">
            docker <span id="purple-span">init</span>
          </pre>
          <Image
            id="img2"
            src={"/images/imagem2.webp"}
            alt="CLI image of Docker Init CLI Program"
            height={165}
            width={680}
          />
          <p id="p1">
            The next thing you do is choose the application platform, for our
            example we are using <code id="paragraph-code">python.</code> It
            will suggest the recommended values for your project such as{" "}
            <code id="paragraph-code">Python</code>
            version, <code id="paragraph-code">port</code>,{" "}
            <code id="paragraph-code">entrypoint</code> commands.
          </p>
          <Image
            id="img3"
            src={"/images/imagem3.webp"}
            alt="CLI of Docker Init saying that your docker files are ready to use"
            height={200}
            width={680}
          />
          <div id="dot-container">
            <span id="dot1" />
            <span id="dot2" />
            <span id="dot3" />
          </div>
          <p id="p1">
            Let&apos;s see what this auto-generated config looks like.
          </p>
          <ul>
            <li>
              <code id="paragraph-code">Dockerfile</code>
            </li>
          </ul>
          <pre id="pre2">
            <span id="green-span">
              # syntax=docker/dockerfile:1 <br />
              <br />
              # Comments are provided throughout this file to help you get
              started. <br /># If you need more help, visit the Dockerfile
              reference guide at <br />
              # https://docs.docker.com/engine/reference/builder/ <br />
              <br />
            </span>
            ARG PYTHON_VERSION=3.11.7 <br />
            FROM python:
            <span id="gray-span">&&#123;PYTHON_VERSION&#125;</span>-slim as base{" "}
            <br />
            <br />
            <span id="green-span">
              # Prevents Python from writing pyc files.
            </span>{" "}
            <br />
            ENV PYTHONDONTWRITEBYTECODE=1 <br />
            <br />
            <span id="green-span">
              # Keeps Python from buffering stdout and stderr to avoid
              situations where <br /># the application crashes without emitting
              any logs due to buffering. <br />
            </span>
            ENV PYTHONUNBUFFERED=1 <br />
            <br />
            WORKDIR /app <br />
            <br />
            <span id="green-span">
              # Create a non-privileged user that the app will run under. <br />
              # See https://docs.docker.com/go/dockerfile-user-best-practices/
            </span>{" "}
            <br />
            ARG UID=10001 <br />
            RUN adduser \ <br />
            &nbsp; &nbsp;&nbsp;--disabled-password \ <br />
            &nbsp; &nbsp;&nbsp;--gecos &quot; \ <br />
            &nbsp; &nbsp;&nbsp;--home{" "}
            <span id="red-span">&quot;/nonexistent&quot;</span> \ <br />
            &nbsp; &nbsp;&nbsp;--shell{" "}
            <span id="red-span">&quot;/sbin/nologin&quot;</span> \ <br />
            &nbsp; &nbsp;&nbsp;--no-create-home \ <br />
            &nbsp; &nbsp;&nbsp;--uuid &quot;
            <span id="gray-span">&&#123;UID&#125;</span>&quot; \ <br />
            &nbsp; &nbsp;&nbsp;appuser <br />
            <span id="green-span">
              # Download dependencies as a separate step to take advantage of
              Docker&apos;s caching. <br />
              # Leverage a cache mount to /root/.cache/pip to speed up
              subsequent builds. <br />
              # Leverage a bind mount to requirements.txt to avoid having to
              copy them into <br />
              # into this layer. <br />
            </span>
            RUN --mount=<span id="purple-span">type</span>
            =cache,target=/root/.cache/pip \ <br />
            &nbsp; &nbsp;&nbsp;--mount<span id="purple-span">=type=bind</span>,
            <span id="purple-span">source</span>
            =requirements.txt,target=requirements.txt \ <br />
            &nbsp; &nbsp;&nbsp;python -m pip install -r requirements.txt <br />
            <br />
            <span id="green-span">
              # Switch to the non-privileged user to run the application.
            </span>{" "}
            <br />
            USER appuser <br />
            <br />
            <span id="green-span">
              # Copy the source code into the container.
            </span>
            <br />
            COPY . . <br />
            <br />
            <span id="green-span">
              # Expose the port that the application listens on.
            </span>{" "}
            <br />
            EXPOSE 5000 <br />
            <br />
            <span id="green-span"># Run the application.</span>
            <br />
            CMD gunicorn <span id="red-span">&apos;app:app&apos; </span>--
            <span id="purple-span">bind</span>=
            <span id="red-span">0.0.0.0:5000</span>
          </pre>
          <p id="p1">
            And look at it, it wrote a better Dockerfile than I ever could.
          </p>
          <div id="pseudo-leftBar1">
            <p id="ita-paragraph">
              It follows all the best practices for performance and security
              people kept telling us in all those Linkedin and Medium posts.
            </p>
          </div>
          <ul>
            <li>
              <code id="paragraph-code">compose.yaml</code>
            </li>
          </ul>
          <Image
            src={"/images/imagem4.webp"}
            width={670}
            height={964.05}
            alt=""
          />
          <p id="p1">
            It wrote the docker-compose config to run the app. Since our app did
            not include any connection to the database, it commented out the
            code you might need for the database container.
          </p>
          <p id="p1">
            If you want to use a database with your Flask app, uncomment the db
            service config from the docker-compose file, create a local file
            with secrets, and run the app. It also generated us{" "}
            <code id="paragraph-code">.dockerignore</code> file.
          </p>
          <div id="dot-container">
            <span id="dot1" />
            <span id="dot2" />
            <span id="dot3" />
          </div>
          <h2>Why use docker init?</h2>
          <p id="p1">
            <mark className="mark1">
              {/*Adicionar MODAL aqui */}
              The <code id="paragraph-code">docker init</code> makes
              dockerization a piece of cake, especially for the Docker newbies.
              It eliminates the manual task of writing Dockerfiles and other
              configuration files, saving time and minimizing errors.
            </mark>
          </p>
          <p id="p1">
            It uses templates to customize the Docker setup based on your
            application type while following the industry&apos;s best practices.
          </p>
          <h2>Final words</h2>
          <p id="p1">
            To conclude, <code id="paragraph-code">docker init</code> does it
            all.
          </p>
          <br />
          <ul>
            <li>
              <p id="p2">
                Write better Docker configuration than 90% of kids out here.
              </p>
            </li>
            <br />
            <li>
              <p id="p2">Follows best practices like a nerd.</p>
            </li>
            <br />
            <li>
              <p id="p2">
                Save time, effort, and sarcastic comments from security folks
                when their tools generate a report with hundreds of
                vulnerabilities you never <br /> thought existed.
              </p>
            </li>
          </ul>
          <div id="pseudo-leftBar1">
            <p id="ita-paragraph" className="fontSizeParagraph">
              <strong>Disclaimer:</strong> Just like any other AI-based tool,
              this one is not perfect either. Do not blindly trust the
              configuration it generates. I recommend you have another look at
              the config before you push it forward.
            </p>
          </div>
          <p id="p1">That is all for this post, see you on the next one.</p>
          <div id="dot-container">
            <span id="dot1" />
            <span id="dot2" />
            <span id="dot3" />
          </div>
          <p id="p3">
            If you found this blog post useful then{" "}
            <b>clap, comment, follow,</b> and <a id="sub-anchor">subscribe.</a>
          </p>
          <div id="pseudo-leftBar3">
            <p id="ita-paragraph" className="fontSizeParagraph">
              <b>
                Connect with me on Linkedin:
                https://www.linkedin.com/in/akhilesh-mishra-0ab886124/
              </b>
            </p>
          </div>
          <div id="button-div">
            <button id="gray-button">Docker</button>
            <button id="gray-button">Programming</button>
            <button id="gray-button">Automation</button>
            <button id="gray-button">DevOps</button>
          </div>
          <div className="icones-body">
            <div id="start-icons-flex-2">
              <div className="clap-container">
                <Image
                  className="clap-icon"
                  src={"/icons/body-icons/clap-icon.svg"}
                  width={20}
                  height={20}
                  alt="clapping hands icon"
                />
                <button className="clap-button">5.1K</button>
              </div>
              <MessageIcon className="message-number" valorInicial={37} />
            </div>
            <div id="end-icons-flex">
              <button className="save-icon-button">
                <Image
                  src={"/icons/body-icons/save_icon.svg"}
                  width={25}
                  height={25}
                  alt="save post icon"
                />
              </button>

              <button className="share-icon-button" id="sm-share-fix">
                <Image
                  src={"/icons/body-icons/share_icon.svg"}
                  alt="share this post icon"
                  width={25}
                  height={25}
                />
              </button>
            </div>
          </div>
        </div>
      </article>
    </React.Fragment>
  );
};

export default Body;
