import "./footer.css";
import React from "react";
import MessageIcon from "./utils/MessageIcon";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <section id="footer-flex">
        <div id="publisher-info-div">
          <div id="publisher-img-container">
            <Image
              src={"/images/publisher-88.jpg"}
              alt="Akhilesh's picture"
              id="publisher-img"
              width={70}
              height={70}
            />
            <div className="publishers-hover"></div>
          </div>
          <div id="kpmg-container-footer">
            <div id="kpmg-container-hover">
              <Image
                width={35}
                height={35}
                alt="KPMG logo picture"
                src={"/images/kpmg-32.jpg"}
              />
              <div id="kpmg-hover-1"></div>
            </div>
          </div>

          <div id="flex-container-info">
            <h2 id="h2-footer">Written by Akhilesh Mishra</h2>
            <div id="footer-btn-container">
              <button id="follow-btn">Follow</button>

              <button id="sub-btn">
                <Image
                  id="sub-svg"
                  src={"/icons/footer-icons/subscribe-icon.png"}
                  alt="Subscribe button"
                  height={30}
                  width={30}
                />
              </button>
            </div>
          </div>
          <div id="dot-container-footer">
            <span className="footer-text">
              <a id="kpmg-link">5.5K Followers</a>
              <span id="dot-footer" />
              Writer for
              <a id="kpmg-link">KPMG UK Engineering</a>
            </span>
          </div>
          <p id="footer-text-2">
            Self taught DevOps engineer with expertise in multi-cloud, and
            various DevOps tools. <br /> Open for mentorship -
            <a href="" id="author-link">
              {" "}
              https://topmate.io/akhilesh_mishra
            </a>
          </p>
          <h4>More from Akhilesh Mishra and KPMG UK Engineering</h4>
          <div className="more-from-grid">
            <div className="grid-container">
              <div className="grid-img-container">
                {" "}
                <Image
                  src={"/images/footer-img-1.webp"}
                  alt="Clay modeling image"
                  width={500}
                  height={500}
                />
              </div>

              <div id="img1-flex-container">
                <span className="footer-link-text">
                  <span className="img-container-footer">
                    {" "}
                    <div id="akilesh-container">
                      {" "}
                      <Image
                        src={"/images/publisher-image.jpg"}
                        alt="Akilesh's picture"
                        height={22}
                        width={22}
                      />
                      <div className="publishers-hover"></div>
                    </div>
                  </span>
                  <a>Akilesh Mishra</a> in <a>AWS Tip</a>
                </span>
                <a href="" className="Devops-footer-text">
                  <h3>
                    Devops zero to hero #1 - Terraform <br /> on AWS
                  </h3>
                  <p className="footer-text">
                    Master devops with hands-on projects using AWS and
                    Terraform.
                  </p>
                  <span className="footer-text">
                    {" "}
                    7 min read <span id="dot-feb" /> Jan 8,2024{" "}
                  </span>
                </a>
                <div id="start-icons-flex">
                  <div className="clap-container">
                    <Image
                      className="clap-icon"
                      src={"/icons/body-icons/clap-icon.svg"}
                      alt="clapping hands icon"
                      height={25}
                      width={25}
                    />
                    <button className="clap-button">5.1K</button>
                  </div>
                  <MessageIcon className="message-number" valorInicial={7} />
                  <button className="save-icon-button">
                    <Image
                      src={"/icons/body-icons/save_icon.svg"}
                      alt="save post icon"
                      width={25}
                      height={25}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="grid-container">
              <div className="grid-img-container">
                <Image
                  src={"/images/footer-img-2.webp"}
                  alt="AKS Node pool image"
                  id="grid-img-2"
                  width={500}
                  height={500}
                />
              </div>
              <div id="img2-flex-container">
                <span className="footer-link-text">
                  <span className="img-container-footer">
                    <div id="arun-container">
                      {" "}
                      <div className="publishers-hover"></div>
                      <Image
                        src={"/images/publisher-2-imagem.jpg"}
                        alt="Arun Signh picture"
                        width={22}
                        height={22}
                      />
                    </div>
                  </span>
                  <a>Arun Singh</a> in <a>KPMG UK Engineering</a>
                </span>
                <a href="" className="Devops-footer-text">
                  <h3 id="m-bottom-h3">AKS Cluster NodePool Resizing</h3>
                  <p className="footer-text">
                    This article provides step-by-step instructions for resizing
                    the node pool in an...
                  </p>
                  <div id="arun-dot">
                    {" "}
                    <div id="m-top-text">
                      <span className="footer-text">
                        {" "}
                        4 min read <span id="dot-arun-1" /> Jun 12,2023{" "}
                      </span>
                    </div>
                  </div>
                </a>
                <div id="start-icons-flex">
                  <div className="clap-container">
                    <Image
                      alt="clapping hands icon"
                      src={"/icons/body-icons/clap-icon.svg"}
                      className="clap-icon"
                      width={22}
                      height={22}
                    />

                    <button className="clap-button">18</button>
                  </div>
                  <MessageIcon className="message-number" valorInicial={0} />
                  <button className="save-icon-button">
                    <img
                      src="icons/body-icons/save_icon.svg"
                      alt="save post icon"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="grid-container">
              <div className="grid-img-container">
                {" "}
                <Image
                  src={"/images/footer-img-3.webp"}
                  alt="One way plate signs crossing each other"
                  width={500}
                  height={500}
                />
              </div>
              <div id="img3-flex-container">
                <span className="footer-link-text">
                  <span className="img-container-footer">
                    {" "}
                    <div id="akilesh-container">
                      {" "}
                      <img
                        src="images/publisher-image.jpg"
                        alt="Akilesh picture"
                      />
                      <div className="publishers-hover"></div>
                    </div>
                  </span>
                  <a>Akilesh Mishra</a> in <a>KPMG UK Engineering</a>
                </span>
                <a href="" className="Devops-footer-text">
                  <h3>
                    AWS single sign-on with Okta <br /> using Terraform
                  </h3>
                  <p className="footer-text">
                    Using Terraform to configure AWS SSO using the IAM identify
                    provider and Okta Saml app
                  </p>
                  <span className="footer-text">
                    {" "}
                    6 min read <span id="dot-feb" /> Nov 16,2023{" "}
                  </span>
                </a>
                <div id="start-icons-flex">
                  <div className="clap-container">
                    <Image
                      alt="clapping hands icon"
                      src={"/icons/body-icons/clap-icon.svg"}
                      className="clap-icon"
                      width={22}
                      height={22}
                    />
                    <button className="clap-button">43</button>
                  </div>
                  <MessageIcon className="message-number" valorInicial={""} />
                  <button className="save-icon-button">
                    <img
                      src="icons/body-icons/save_icon.svg"
                      alt="save post icon"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="grid-container">
              <div className="grid-img-container">
                {" "}
                <Image
                  src={"/images/footer-img-4.webp"}
                  alt="Docker container (literal) picture"
                  width={500}
                  height={500}
                />
              </div>
              <div id="img4-flex-container">
                <span className="footer-link-text">
                  <span className="img-container-footer">
                    {" "}
                    <div id="akilesh-container">
                      {" "}
                      <img
                        src="images/publisher-image.jpg"
                        alt="Akilesh picture"
                      />
                      <div className="publishers-hover"></div>
                    </div>
                  </span>
                  <a>Akilesh Mishra</a> in <a>ILLUMINATION</a>
                </span>
                <a href="" className="Devops-footer-text">
                  <h3>
                    Devops zero to hero #3 - <br /> Everything you need to know
                    abo...
                  </h3>
                  <p className="footer-text">
                    A Complete Guide to start using Docker in your devops
                    workflow
                  </p>
                  <span className="footer-text">
                    {" "}
                    14 min read <span id="dot-feb-4-footer" /> Jan 23,2024{" "}
                  </span>
                </a>
                <div id="start-icons-flex">
                  <div className="clap-container">
                    <Image
                      alt="clapping hands icon"
                      src={"/icons/body-icons/clap-icon.svg"}
                      className="clap-icon"
                      width={22}
                      height={22}
                    />
                    <button className="clap-button">475</button>
                  </div>
                  <MessageIcon className="message-number" valorInicial={1} />
                  <button className="save-icon-button">
                    <Image
                      src={"/icons/body-icons/save_icon.svg"}
                      alt="save post icon"
                      height={25}
                      width={25}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="see-all-flex">
          <button id="see-all-btn">See all from Akhilesh Mishra</button>
          <button id="see-all-btn">See all from KPMG UK Engineering</button>
        </div>
      </section>

      <section id="footer-flex-2">
        <div id="recommended-div">
          <h2 id="h2-footer-2">Recommended from Medium</h2>

          <div className="more-from-grid">
            <div id="grid-img-3-container">
              <div id="footer-overflow-container">
                <Image
                  src={"/images/footer-img-6.webp"}
                  alt="App from artturi post picture"
                  width={600}
                  height={600}
                />
              </div>

              <div id="img1-flex-container">
                <span className="footer-link-text">
                  <span className="img-container-footer">
                    {" "}
                    <div id="artturi-container">
                      {" "}
                      <Image
                        src={"/images/publisher-3-image.jpg"}
                        alt="Artturi Jalli's picture"
                        height={50}
                        width={50}
                      />
                      <div className="publishers-hover"></div>
                    </div>
                  </span>
                  <a>Artturi Jalli</a>
                </span>
                <a href="" className="Devops-footer-text">
                  <h3>
                    I Built and app in 6 Hours that <br id="sm-occult-br" />{" "}
                    makes $1,500/Mo
                  </h3>
                  <p className="footer-text">Copy my strategy!</p>
                  <span className="footer-text">
                    {" "}
                    <Image
                      className="star-icon"
                      src={"/icons/footer-icons/star-footer-icon.svg"}
                      alt="star-icon"
                      width={15}
                      height={15}
                    />
                    <span id="dot-artturi-2" /> 3 min read{" "}
                    <span id="dot-artturi" /> Jan 23,2024{" "}
                  </span>
                </a>
                <div id="start-icons-flex">
                  <div id="grid-2-flex-container">
                    <div className="clap-container">
                      <Image
                        alt="clapping hands icon"
                        src={"/icons/body-icons/clap-icon.svg"}
                        className="clap-icon"
                        width={25}
                        height={25}
                      />
                      <button className="clap-button">15.6K</button>
                    </div>
                    <MessageIcon
                      className="message-number"
                      valorInicial={179}
                    />
                    <button className="save-icon-button">
                      <Image
                        width={25}
                        height={25}
                        src={"/icons/body-icons/save_icon.svg"}
                        alt="save post icon"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div id="grid-img-4-container">
              <div id="footer-overflow-container">
                <Image
                  src={"/images/footer-img-7.webp"}
                  alt="AKS Node pool image"
                  width={600}
                  height={600}
                />
              </div>
              <div id="img2-flex-container">
                <span className="footer-link-text">
                  <span className="img-container-footer">
                    <div id="david-container">
                      <div className="publishers-hover"></div>{" "}
                      <Image
                        width={40}
                        height={40}
                        src={"/images/publisher-4-image.jpg"}
                        alt="Arun Singh picture"
                      />
                    </div>
                  </span>
                  <a>DavidW (skyDragon)</a> in <a>overcast blog</a>
                </span>
                <a href="" className="Devops-footer-text">
                  <h3>13 Kubernetes Tools You Should Know in 2024</h3>
                  <p className="footer-text">
                    As Kubernetes continues to solidify its{" "}
                    <br id="sm-occult-br" /> position as the leading container
                    ...
                  </p>
                  <div id="kuber-dot-container">
                    {" "}
                    <span className="footer-text">
                      {" "}
                      4 min read <span id="dot-kuber" /> Feb 14,2024{" "}
                    </span>
                  </div>
                </a>
                <div id="start-icons-flex">
                  <div className="clap-container">
                    <Image
                      alt="clapping hands icon"
                      src={"/icons/body-icons/clap-icon.svg"}
                      className="clap-icon"
                      width={22}
                      height={22}
                    />
                    <button className="clap-button">768</button>
                  </div>
                  <MessageIcon className="message-number" valorInicial={8} />
                  <button className="save-icon-button">
                    <Image
                      src={"/icons/body-icons/save_icon.svg"}
                      alt="save post icon"
                      width={25}
                      height={25}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <section id="Lists">
            <h3>Lists</h3>
            <div id="grid-list-footer">
              <div id="grid-images">
                <Image
                  className="front-list-img"
                  src={"/images/footer-list-img-1.webp"}
                  alt="Picture about random coding knowledge"
                  width={400}
                  height={400}
                />
                <div id="bg-list-img-container">
                  <img
                    id="bg-list-img"
                    src="images/footer-list-img-2.webp"
                    alt="Picture about random coding knowledge"
                  />
                </div>
              </div>
              <div id="list-text-flex">
                <h3>General coding knowledge</h3>
                <span className="footer-text"> 20 stories 1072 saves </span>
              </div>
              <div id="grid-images">
                <Image
                  className="front-list-img"
                  src={"/images/footer-list-img-3.webp"}
                  alt="Picture about random coding knowledge"
                  width={400}
                  height={400}
                />
                <div id="bg-list-img-container">
                  <Image
                    className="bg-list-img"
                    width={400}
                    height={400}
                    src={"/images/footer-list-img-4.webp"}
                    alt="Picture about random coding knowledge"
                  />
                </div>
              </div>
              <div id="list-text-flex">
                <h3>Coding & Development</h3>
                <span className="footer-text"> 11 stories 533 saves </span>
              </div>

              <div id="grid-images">
                <Image
                  src={"/images/footer-list-img-5.webp"}
                  alt="Picture about random coding knowledge"
                  className="front-list-img"
                  width={400}
                  height={400}
                />
                <div id="bg-list-img-container">
                  <Image
                    src={"/images/footer-list-img-6.webp"}
                    alt="Picture about random coding knowledge"
                    className="bg-list-img"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
              <div id="list-text-flex">
                <h3>
                  Stories to Help You Grow as a <br /> Software Developer
                </h3>
                <span className="footer-text"> 19 stories 946 saves </span>
              </div>
              <div id="grid-images">
                <Image
                  width={400}
                  height={400}
                  className="front-list-img"
                  alt="Picture about random coding knowledge"
                  src={"/images/footer-list-img-7.webp"}
                />
                <div id="bg-list-img-container">
                  <Image
                    width={400}
                    height={400}
                    alt="Picture about random coding knowledge"
                    src={"/images/footer-list-img-8.webp"}
                    className="bg-list-img"
                  />
                </div>
              </div>
              <div id="list-text-flex">
                <h3>Chat GPT</h3>
                <span className="footer-text"> 21 stories 549 saves </span>
              </div>
            </div>
          </section>
        </div>

        <div className="more-from-grid">
          <div id="grid-img-1-container">
            <div className="grid-img-container">
              {" "}
              <Image
                src={"/images/footer-img-8.webp"}
                alt="Software architecture book"
                id="grid-img-1"
                width={600}
                height={162}
              />
            </div>

            <div id="img1-flex-container">
              <span className="footer-link-text">
                <span className="img-container-footer">
                  {" "}
                  <div id="milans-container">
                    <div className="publishers-hover"></div>
                    <Image
                      height={22}
                      width={22}
                      alt="Milan's avatar"
                      src={"/images/publisher-milan.png"}
                    />
                  </div>
                </span>
                <a>Dr Milan Milanovic</a> in <a>AWS Tip</a>
              </span>
              <a href="" className="Devops-footer-text">
                <h3>
                  What i learn from the book <br id="sm-occult-br" /> Software
                  Architecture: The Hard...
                </h3>
                <p className="footer-text">
                  I recently read the book &quot;Software{" "}
                  <br id="sm-occult-br" /> Architecture: The Hard Pars&quot; by
                  Neal Ford,...
                </p>
                <div id="dot-milan-container">
                  <span className="footer-text">
                    {" "}
                    8 min read <span id="dot-milan" /> Feb 8,2024{" "}
                  </span>
                </div>
              </a>
              <div id="start-icons-flex">
                <div className="clap-container">
                  <Image
                    alt="clapping hands icon"
                    width={25}
                    height={25}
                    className="clap-icon"
                    src={"/icons/body-icons/clap-icon.svg"}
                  />
                  <button className="clap-button">1.8K</button>
                </div>
                <MessageIcon className="message-number" valorInicial={17} />
                <button className="save-icon-button">
                  <Image
                    alt="save post icon"
                    width={25}
                    height={25}
                    src={"/icons/body-icons/save_icon.svg"}
                  />
                </button>
              </div>
            </div>
          </div>
          <div id="grid-img-2-container">
            <div className="grid-img-container">
              {" "}
              <Image
                width={600}
                height={400}
                src={"/images/footer-img-9.webp"}
                alt="AKS Node pool image"
              />
            </div>

            <div id="img2-flex-container">
              <span className="footer-link-text">
                <span className="img-container-footer">
                  <div id="chameera-container">
                    <Image
                      width={22}
                      height={22}
                      src={"/images/publisher-chameera.jpg"}
                      alt="Chameera's picture"
                    />
                    <div className="publishers-hover"></div>
                  </div>
                </span>
                <a>Chameera Dulanga</a> in <a>Bits and Pieces</a>
              </span>
              <a href="" className="Devops-footer-text">
                <h3 id="m-bottom-h3">
                  Best-Practises for API <br id="sm-occult-br" /> Authorization
                </h3>
                <p className="footer-text">
                  4 Best Practices for API Authorization
                </p>

                <div id="arun-dot-container">
                  <span className="footer-text">
                    {" "}
                    9 min read <span id="dot-arun" /> Feb 6,2024{" "}
                  </span>
                </div>
              </a>
              <div id="start-icons-flex">
                <div className="clap-container">
                  <Image
                    className="clap-icon"
                    src={"/icons/body-icons/clap-icon.svg"}
                    alt="clapping hands icon"
                    width={25}
                    height={25}
                  />
                  <button className="clap-button">2.1K</button>
                </div>
                <MessageIcon className="message-number" valorInicial={11} />
                <button className="save-icon-button">
                  <Image
                    src={"/icons/body-icons/save_icon.svg"}
                    alt="save post icon"
                    width={25}
                    height={25}
                  />
                </button>
              </div>
            </div>
          </div>
          <div id="grid-img-3-container">
            <div className="grid-img-container">
              {" "}
              <Image
                width={600}
                height={400}
                src={"/images/footer-img-10.webp"}
                alt="Benedict's AI course image"
              />
            </div>

            <div id="img3-flex-container">
              <span className="footer-link-text">
                <span className="img-container-footer">
                  {" "}
                  <div id="benedict-container">
                    <Image
                      src={"/images/publisher-benedict.png"}
                      width={25}
                      height={25}
                      alt="Benedict's Avatar"
                    />
                    <div className="publishers-hover"></div>
                  </div>
                </span>
                <a>Benedict Leo</a> in <a>bitgrit Data Science Publication</a>
              </span>
              <a href="" className="Devops-footer-text">
                <h3>Roadmap to learn AI in 2024</h3>
                <p className="footer-text">
                  A free curriculum for hackers and <br id="sm-occult-br" />{" "}
                  programmers to learn AI
                </p>
                <div id="benedict-dot-container">
                  {" "}
                  <span className="footer-text">
                    {" "}
                    11 min read <span id="dot-benedict" /> Mar 11,2024{" "}
                  </span>
                </div>
              </a>
              <div id="start-icons-flex">
                <div className="clap-container">
                  <Image
                    className="clap-icon"
                    alt="clapping hands icon"
                    width={25}
                    height={25}
                    src={"/icons/body-icons/clap-icon.svg"}
                  />
                  <button className="clap-button">9.1K</button>
                </div>
                <MessageIcon className="message-number" valorInicial={97} />
                <button className="save-icon-button">
                  <Image
                    src={"/icons/body-icons/save_icon.svg"}
                    alt="save post icon"
                    width={25}
                    height={25}
                  />
                </button>
              </div>
            </div>
          </div>
          <div id="grid-img-4-container">
            <div className="grid-img-container">
              {" "}
              <Image
                alt="A picture showing the earth, as seen from the space"
                width={600}
                height={400}
                src={"/images/footer-img-11.webp"}
              />
            </div>
            <div id="img4-flex-container">
              <span className="footer-link-text">
                <span className="img-container-footer">
                  {" "}
                  <div id="oliver-container">
                    <Image
                      alt="Oliver's avatar"
                      height={25}
                      width={25}
                      src={"/images/publisher-last.png"}
                    />
                    <div className="publishers-hover"></div>
                  </div>
                </span>
                <a>Oliver Foster</a> in <a>Stackademic</a>
              </span>
              <a href="" className="Devops-footer-text">
                <h3>
                  What&apos;s the Difference Between <br id="sm-occult-br" />{" "}
                  localhost and 127.0.0.1?
                </h3>
                <p className="footer-text">
                  My article is open to everyone; non-member{" "}
                  <br id="sm-occult-br" />
                  renders can click this link to read the full text.
                </p>
                <div id="dot-oliver-container">
                  <span className="footer-text">
                    {" "}
                    <Image
                      className="star-icon"
                      width={15}
                      height={15}
                      src={"/icons/footer-icons/star-footer-icon.svg"}
                      alt="star-icon"
                    />
                    <span id="dot-oliver-2" /> 8 min read{" "}
                    <span id="dot-oliver" /> Feb 1,2024{" "}
                  </span>
                </div>
              </a>
              <div id="start-icons-flex">
                <div className="clap-container">
                  <Image
                    className="clap-icon"
                    src={"/icons/body-icons/clap-icon.svg"}
                    alt="clapping hands icon"
                    height={25}
                    width={25}
                  />
                  <button className="clap-button">2.7K</button>
                </div>
                <MessageIcon className="message-number" valorInicial={12} />
                <button className="save-icon-button">
                  <Image
                    src={"/icons/body-icons/save_icon.svg"}
                    alt="save post icon"
                    height={25}
                    width={25}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="see-more-flex">
          <button id="see-more-btn">See more recommendations</button>
        </div>

        <div id="footer-div">
          <div id="footer-flex-3">
            <div>
              <a href="">
                <p className="footer-text">Help</p>
              </a>
            </div>
            <div>
              {" "}
              <a href="">
                <p className="footer-text">Status</p>
              </a>
            </div>
            <div>
              <a href="">
                <p className="footer-text">About</p>
              </a>
            </div>
            <div>
              <a href="">
                <p className="footer-text">Careers</p>
              </a>
            </div>
            <div>
              {" "}
              <a href="">
                <p className="footer-text">Blog</p>
              </a>
            </div>
            <div>
              <a href="">
                <p className="footer-text">Privacy</p>
              </a>
            </div>
            <div>
              <a href="">
                <p className="footer-text">Terms</p>
              </a>
            </div>
            <div>
              <a href="">
                <p className="footer-text">Text to Speech</p>
              </a>
            </div>
            <div id="teams">
              <a href="">
                <p className="footer-text">Teams</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
