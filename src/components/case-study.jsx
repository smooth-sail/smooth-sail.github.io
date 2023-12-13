import { HashLink } from "react-router-hash-link";
import Sidebar from "./sidebar";
import WelcomeSection from "./welcome-section";
import scrollWithOffset from "../utils/scrollWithOffset";

const title = "SmoothSail Case Study";
const subtitle = "Learn about building SmoothSail and our Design Decisions";
const button = "Watch Presentation";
const buttonPath = "https://www.youtube.com/watch?v=0jeH7HQbFN0";

export default function CaseStudy() {
  return (
    <>
      <WelcomeSection
        title={title}
        subtitle={subtitle}
        button={button}
        buttonPath={buttonPath}
      />

      <div className="sticky left-5 top-20 lg:float-left">
        <div className="hidden lg:block">
          <Sidebar />
        </div>
      </div>

      <div className="lg:ml-40 p-10">
        <div className="mx-auto max-w-4xl sm:px-6 lg:px-8">
          <div className="border-b border-ss-coral pb-5 pt-10">
            <h3 className="text-4xl font-semibold text-ss-bl p-5">
              <a id="introduction">Introduction</a>
            </h3>
          </div>
          <p className="p-5 text-ss-bl text-xl">
            SmoothSail is a self-hosted, open-source feature flag tool designed
            for small companies aiming for rapid feature development with
            minimized risks. It empowers developers to separate the release of
            new features from their deployment and quickly revert unsuccessful
            updates with just a click. SmoothSail provides accurate user
            targeting capabilities, enabling engineers to introduce new features
            to specific demographics and limit the impact of unforeseen bugs in
            production.
          </p>
          <p className="flex justify-center pb-5">
            <img
              src="images/intro1.png"
              alt="intro"
              className="overflow-auto "
            />
          </p>
          <div className="border-b border-ss-coral pb-5">
            <h3 className="text-4xl font-semibold text-ss-bl p-5">
              <a id="deployment-release">Deployment and Release</a>
            </h3>
          </div>
          <h4 className="text-2xl font-semibold  text-ss-bl p-5">
            Feature Deployment and Release
          </h4>
          <p className="p-5 text-ss-bl text-xl">
            Many companies seek to iterate rapidly on their products. They
            strive to introduce and enhance new features within their software
            systems while eliminating those that may impede application
            performance under heavy loads or due to unexpected bugs.
            Traditionally, introducing new features involves deploying a fresh
            application version and releasing it to users simultaneously.
          </p>
          <p className="p-5 text-ss-bl text-xl">
            Despite frequently occurring in tandem, it&#39;s important to note
            that deployment and release are distinct concepts. Deployment
            encompasses the installation of a different software version into a
            production environment. In other words, deployment involves
            transferring and configuring software files to the appropriate
            servers, ensuring all dependencies are satisfied and the application
            is ready for use. Release, on the other hand, is a process of making
            a part of the system (a feature) or a system as a whole available to
            the users.
          </p>
          <p className="flex justify-center pb-5">
            <img
              src="images/deploy-dark.png"
              alt="featureDeployAndRelease"
              className="overflow-auto "
            />
          </p>
          <p className="p-5 text-ss-bl text-xl">
            Conventionally, deployment and release schedules are tightly coupled
            together. The major disadvantages of this approach are the layer of
            complexity and inherent risk that can significantly impact the
            development lifecycle. For example, any delay, error, or
            complication in either deployment or release might delay future
            deployments. Furthermore, in a traditional software lifecycle,
            several features may be bundled and released together during the
            deployment. If one of those features is problematic, all features
            will have to be rolled back. These production rollbacks can be
            lengthy and complex. Therefore, a strong coupling of deployment and
            release processes can impede an engineering team&#39;s ability to
            swiftly address critical bug fixes, disrupting the established
            business schedule.
          </p>
          <div className="border-b border-ss-coral pb-5 pt-10"></div>
          <h4 className="text-2xl font-semibold text-ss-bl p-5">
            Feature Release Strategies
          </h4>
          <p className="p-5 text-ss-bl text-xl">
            Two common strategies for decoupling deployment and release are
            <i>canary</i> and <i>blue-green</i> deployments.
          </p>
          <p className="p-5 text-ss-bl text-xl">
            A classic <i>canary deployment</i> is performed at the
            infrastructure level with two production environments and a load
            balancer. All users access the software&#39;s stable (old) version
            during the first phase of a canary deployment. The newer version
            (canary) is then deployed to a second production environment. Two
            different versions of the application are running simultaneously.
            The load balancer can incrementally direct user traffic to the new
            software version if everything goes well. If the canary suffers
            significant issues, the load balancer can redirect the traffic back
            to the stable version of the application.{" "}
            <HashLink
              scroll={(el) => scrollWithOffset(el)}
              to="#references"
              className="underline"
            >
              [1]
            </HashLink>
          </p>
          <p className="flex justify-center pb-5">
            <img
              src="images/canary.png"
              alt="canary"
              className="overflow-auto"
            />
          </p>
          <p className="p-5 text-ss-bl text-xl">
            The <i>blue-green</i> deployment strategy maintains two separate
            production environments as well. One environment contains the
            current version (blue), while the other contains the new version
            (green). When the green environment is enabled, the load balancer
            shifts production traffic to the new application version all at
            once. The blue environment can stand by in case rollback is
            required.
          </p>
          <p className="flex justify-center pb-5">
            <img
              src="images/blue-green.png"
              alt="blue-green"
              className="overflow-auto"
            />
          </p>
          <p className="p-5 text-ss-bl text-xl">
            Both of these approaches allow the developers to separate the
            deployment and release process by maintaining two sets of
            infrastructure, simplifying the rollback to the stable version of
            the application. Developers deploy the new version of their
            application without automatically releasing the feature to the user
            base. Then, they release the new feature in a controlled manner by
            shifting user traffic from the stable version to the newly deployed
            one.
          </p>
          <p className="p-5 text-ss-bl text-xl">
            Unfortunately, these approaches come with limitations:
          </p>
          <ul className="p-5 text-ss-bl text-xl">
            <li className="list-disc ml-10">
              <strong>Resource intensive:</strong> maintaining additional
              infrastructure can be costly;
            </li>
            <li className="list-disc ml-10">
              <strong>Complex:</strong> managing two environments adds
              complexity to the infrastructure and deployment process;
            </li>
            <li className="list-disc ml-10">
              <strong>User impact:</strong> developers use an all-or-nothing
              approach with blue-green deployment so that all application users
              will encounter any bugs. The canary deployment strategy minimizes
              the potential impact on the user base, but any bugs will still
              need redeployment or a hotfix.
            </li>
          </ul>
          <p className="p-5 text-ss-bl text-xl">
            Fortunately, there is a way to achieve the benefits that canary and
            blue-green offer while minimizing complexity and reducing the number
            of users impacted by unforeseen bugs in production code. This
            approach is called <strong>feature flags.</strong>
          </p>
          <div className="border-b border-ss-coral pb-5 pt-10">
            <h3 className="text-4xl font-semibold text-ss-bl p-5">
              <a id="feature-flags">
                Feature Flags: Decoupling Feature Deployment and Release
              </a>
            </h3>
          </div>
          <h4 className="text-2xl font-semibold text-ss-bl p-5">
            What is a Feature Flag?
          </h4>
          <p className="p-5 text-ss-bl text-xl">
            Engineering teams often seek precise control over deploying and
            releasing new features while minimizing associated costs. They aim
            to deploy a new application version independently without
            maintaining two separate production environments
            <HashLink
              scroll={(el) => scrollWithOffset(el)}
              to="#references"
              className="underline"
            >
              [2]
            </HashLink>
            . To attain this goal, developers can utilize a strategy called
            feature flags.
          </p>
          <p className="p-5 text-ss-bl text-xl">
            In its simplest form, a feature flag determines which code section
            is executed during runtime, appearing in conditionals that dictate
            the code path to be taken:
          </p>
          <p className="flex justify-center pb-5">
            <img
              src="images/evaluateFlagLaptopCode.png"
              alt="evaluateFlagLaptopCode"
              className="overflow-auto"
            />
          </p>
          <p className="p-5 text-ss-bl text-xl">
            This technique empowers developers to deploy a new application
            version while hiding recently added features behind flags on the
            frontend, backend, or both. It allows the release of new features to
            be completely detached from deployment decisions.
          </p>
          <p className="flex justify-center pb-5">
            <img src="images/deploy-to-release.gif" className="overflow-auto" />
          </p>
          <div className="border-b border-ss-coral pb-5 pt-10"></div>
          <h4 className="text-2xl font-semibold text-ss-bl p-5">
            Advantages of using Feature Flags
          </h4>
          <p className="p-5 text-ss-bl text-xl">
            The popularity of feature flags in software development is
            attributed to the benefits they offer engineers. Feature flags
            provide:
          </p>
          <ul className="p-5 text-ss-bl text-xl">
            <li className="list-disc ml-10">
              <strong>Fine-grained control</strong>: Engineers can precisely
              determine <strong>when</strong> and <strong>to whom</strong> a new
              feature is released. This flexibility allows the company to make
              features available when it is ready instead of when the new code
              is deployed. The release can target specific audiences, such as
              company employees or beta-testers, rather than the entire user
              base.
            </li>
            <li className="list-disc ml-10">
              <strong>Fast rollback</strong>: Disabling problematic features is
              simplified to a toggle switch, eliminating the need to roll back
              the entire release through redeployment.
            </li>
            <li className="list-disc ml-10">
              <strong>Simplicity of feature release</strong>: No need for two
              production environments and complex coordination with the DevOps
              or Operations team.
            </li>
            <li className="list-disc ml-10">
              <strong>Gentle learning curve</strong>: Feature flags are easy to
              adopt, minimizing the learning curve for engineers.
            </li>
            <li className="list-disc ml-10">
              <strong>Testing in production</strong>: Testing is an essential
              part of any software lifecycle. However, testing and staging
              environments have their limitations{" "}
              <HashLink
                scroll={(el) => scrollWithOffset(el)}
                to="#references"
                className="underline"
              >
                [4]
              </HashLink>{" "}
              :
              <ul className="p-5 text-ss-bl text-xl">
                <li className="list-disc ml-10">
                  Replicating live, real-world systems in a testing or staging
                  environment is difficult, if not impossible (e.g., assessing
                  or monitoring the reliability and stability of a service over
                  time);
                </li>
                <li className="list-disc ml-10">
                  Simulated data or a subset of real data might not represent
                  the user population, which makes replication of the true user
                  population challenging;
                </li>
                <li className="list-disc ml-10">
                  Resource availability (e.g., time, budget, availability of
                  skilled specialists) limits what a company can achieve during
                  the software testing stage.
                </li>
              </ul>
              <p>
                Meanwhile, feature flags enable efficient and cost-effective
                testing in a live environment. They allow for targeted testing
                based on user attributes and quick feature rollbacks in case of
                bugs. Moreover, feature flags play an instrumental role in A/B
                testing, providing the flexibility to selectively expose users
                to different variations and measure the impact of changes,
                ultimately aiding in data-driven decision-making.
              </p>
            </li>
          </ul>
          <p className="p-5 text-ss-bl text-xl">
            While feature flags come with trade-offs, such as the potential
            accumulation of dead code and old tests in the repository once a
            flag is no longer in use (technical debt){" "}
            <HashLink
              scroll={(el) => scrollWithOffset(el)}
              to="#references"
              className="underline"
            >
              [2]
            </HashLink>
            , they remain a valuable tool. Feature flags facilitate rapid
            testing and iteration of new features in a live environment,
            accelerating the development cycle and reducing the time required to
            bring new features to market.
            <HashLink
              scroll={(el) => scrollWithOffset(el)}
              to="#references"
              className="underline"
            >
              [2]
            </HashLink>
            <HashLink
              scroll={(el) => scrollWithOffset(el)}
              to="#references"
              className="underline"
            >
              [3]
            </HashLink>
          </p>
          <div className="border-b border-ss-coral pb-5 pt-10"></div>
          <h4 className="text-2xl font-semibold text-ss-bl p-5">
            User targeting with Feature Flags
          </h4>
          <p className="p-5 text-ss-bl text-xl">
            Using feature flags is instrumental for decoupling deployment and
            release in the software development cycle. However, if used simply
            as a toggle, the &#34;ON&#34; state releases the new feature to all
            users, making swift rollbacks possible but exposing the entire user
            base to any repercussions.
          </p>
          <p className="flex justify-center pb-5">
            <img src="images/release-to-all.gif" className="overflow-auto" />
          </p>
          <p className="p-5 text-ss-bl text-xl">
            Fortunately, as mentioned earlier, feature flags can provide
            user-targeting capabilities. To mitigate potential damage,
            developers can introduce the feature to a limited subset of users
            using two primary strategies: random user selection or targeting
            users based on specific characteristics.
          </p>
          <p className="p-5 text-ss-bl text-xl">
            Opting for random user assignment broadens the exposure to new
            features, helping identify additional edge cases for a more
            comprehensive testing process. However, this approach risks exposing
            potential bugs to users who may not tolerate glitches, potentially
            leading to customer loss and reputation damage.
          </p>
          <p className="p-5 text-ss-bl text-xl">
            An alternative to random user selection is selectively targeting
            users based on <strong>user context</strong>. A user context is an
            object composed of attribute-value pairs that provide relevant
            information about a user. While this approach reduces the diversity
            of selected users, it also minimizes risks associated with feature
            releases. Introducing the new feature to a user group familiar with
            potential issues and willing to confront related risks may be
            prudent for companies concerned about the reputational and financial
            consequences of new feature releases.
          </p>
          <p className="flex justify-center pb-5">
            <img
              src="images/target-by-rules.gif"
              alt="target-by-rules"
              className="overflow-auto"
            />
          </p>
          <p className="p-5 text-ss-bl text-xl">
            In addition, as an extension to releasing a new feature to a small
            group of early adopters, developers can leverage feature flags to
            roll out features following the ring deployment model
            <HashLink
              scroll={(el) => scrollWithOffset(el)}
              to="#references"
              className="underline"
            >
              [3]
            </HashLink>
            . In this approach, developers define multiple cohorts of users,
            referred to as &#34;rings,&#34; each with an ever-increasing impact.
            The team then initiates the feature release, starting from the
            innermost ring and progressing outward. Using one feature flag,
            developers can sequentially add sets of targeting rules (aka,
            segments) and gradually expand the audience for the new feature.
          </p>
          <p className="flex justify-center pb-5">
            <img
              src="images/ring-deploy.png"
              alt="ring-deploy"
              className="overflow-auto rounded-xl"
            />
          </p>
          <p className="p-5 text-ss-bl text-xl">
            For example, the feature might initially be rolled out exclusively
            to the company&#39;s employees (internal users). Subsequently, a new
            segment, defined by user context targeting rules, is added to the
            flag, extending the release to external early adopters (beta
            testers). This iterative process continues, gradually reaching the
            broader user base. The release of features via “rings” seamlessly
            aligns with the purpose of feature flags, emphasizing a strategic
            and controlled separation of deployment from feature rollout and
            allowing for in-production testing, mitigating the risks of exposing
            potentially buggy features to the wrong demographics.
          </p>
          <div className="border-b border-ss-coral pb-5 pt-10"></div>
          <h4 className="text-2xl font-semibold text-ss-bl p-5">
            Feature Flag Providers
          </h4>
          <p className="p-5 text-ss-bl text-xl">
            Teams exploring the implementation of feature flags for decoupling
            deployment and release processes have a range of potential solutions
            at their disposal. They can opt for existing commercial solutions or
            pursue developing and creating the desired solution themselves.
          </p>
          <p className="p-5 text-ss-bl text-xl">
            In the realm of commercial solutions, three prominent players are
            Optimizely, LaunchDarkly, and DevCycle. All three providers boast
            user-friendly setups and rich features, such as support for client
            and server-side feature flag use, diverse user targeting
            capabilities (random and specific demographic targeting), various
            rollout strategies (percentage increase, ring rollout, hybrid), A/B
            testing, and feature flag metrics tracking.
          </p>
          <p className="p-5 text-ss-bl text-xl">
            However, despite their advantages, commercial solutions come with
            their share of drawbacks. For instance, LaunchDarkly and DevCycle
            lack support for self-hosting, and Optimizely&#39;s self-hosting
            options are limited. This constraint may prove unsuitable for
            companies dealing with strictly regulated sensitive data. Another
            drawback is that Optimizely and LaunchDarkly are not open-source,
            meaning users encountering issues must rely on the respective
            companies for resolution. Additionally, any desire for custom
            changes to the feature flag tool may require waiting or be deemed
            impossible.
          </p>
          <p className="p-5 text-ss-bl text-xl">
            In cases where existing solutions prove unsustainable, engineering
            teams might find themselves compelled to create their own feature
            flag management system. While customizable, the “DIY” option may
            require significant resources, potentially making this path less
            appealing or even unfeasible.
          </p>
          <div className="border-b border-ss-coral pb-5 pt-10">
            <h3 className="text-4xl font-semibold text-ss-bl p-5">
              <a id="smoothsail">SmoothSail</a>
            </h3>
          </div>
          <p className="p-5 text-ss-bl text-xl">
            SmoothSail is a self-hosted, open-source feature flag software that
            enables developer teams to release new features independently of
            deployment. It allows engineers to roll out features to specific
            user audiences based on user context and roll back unsuccessful
            features with the toggle of a flag.
          </p>
          <p className="p-5 text-ss-bl text-xl">
            SmoothSail fills the niche of having the fully customizable
            experience of DIY while having the ease of setup of commercial
            providers. It is worth noting that, unlike other providers,
            SmoothSail does not have rich functionality. It is crafted for
            companies prioritizing exact control over server-side-only feature
            rollout to specific user demographics. SmoothSail grants its users a
            comprehensive oversight of both the application and feature flag
            data, providing a tailored solution for efficient feature flag
            management.
          </p>
          <p className="flex justify-center pb-5">
            <img
              src="images/comparisonchart.png"
              alt="comparisonchart"
              className="overflow-auto"
            />
          </p>
          <div className="border-b border-ss-coral pb-5 pt-10">
            <h3 className="text-4xl font-semibold text-ss-bl p-5">
              <a id="architecture">Architecture</a>
            </h3>
          </div>
          <p className="p-5 text-ss-bl text-xl">
            We designed SmoothSail with reliability and consistency in mind. It
            was essential to ensure that when a user changes a feature flag,
            this change is immediately reflected in the consumer application.
            Therefore, the SmoothSail architecture consists of four major parts:
          </p>
          <ul className="p-5 text-ss-bl text-xl">
            <li className="list-disc ml-10">
              The <strong>Manager Platform</strong> handles flag data. It is
              also responsible for performing authentication and managing SDK
              keys.
            </li>
            <li className="list-disc ml-10">
              The <strong>SDK Service</strong> establishes and maintains
              Server-Sent Events (SSE) connections with authenticated SDKs.
            </li>
            <li className="list-disc ml-10">
              <strong>NATS JetStream</strong> facilitates reliable communication
              between the Manager and SDK Service.
            </li>
            <li className="list-disc ml-10">
              The <strong>Software Development Kit (SDK)</strong> (software
              package) is used in the developer&#39;s backend application and
              responsible for connecting to the SDK Service. SDK is also
              responsible for evaluating flag data for any user context the
              developer decides to pass in.
            </li>
          </ul>
          <p className="flex justify-center pb-5">
            <img
              src="images/Architecture.png"
              alt="architecture"
              className="overflow-auto"
            />
          </p>
          <div className="border-b border-ss-coral pb-5 pt-10"></div>
          <h4 className="text-2xl font-semibold text-ss-bl p-5">
            Manager Platform
          </h4>
          <p className="p-5 text-ss-bl text-xl">
            The core responsibility of SmoothSail&#39;s Manager Platform is to
            manage flag data, SDK keys, and execute SDK authentication. It
            comprises the dashboard user interface, the Manager server, and a
            PostgreSQL database.
          </p>
          <p className="flex justify-center pb-5">
            <img
              src="images/manager-platform.png"
              alt="manager-platform"
              className="overflow-auto"
            />
          </p>
          <p className="p-5 text-ss-bl text-xl">
            The <strong>dashboard</strong> is the primary entry point for
            developers overseeing feature flags. This front-end application is
            built on React and allows users to view, create, update, and delete
            feature flag data. The dashboard is also where users can find their
            SDK key or regenerate the SDK key if it&#39;s compromised.
          </p>
          <p className="p-5 text-ss-bl text-xl">
            The <strong>Manager server</strong>, an Express application powered
            by Node.js, handles a range of responsibilities:
          </p>
          <ul className="p-5 text-ss-bl text-xl">
            <li className="list-disc ml-10">
              Statically <strong>serves the React app</strong> for the
              dashboard;
            </li>
            <li className="list-disc ml-10">
              <strong>Manages SDK keys</strong> for authentication;
            </li>
            <li className="list-disc ml-10">
              <strong>Performs authentication</strong> for SDK consumer app
              before allowing the SDK to establish an SSE connection with the
              SDK Service;
            </li>
            <li className="list-disc ml-10">
              Executes all <strong>CRUD database operations</strong> through the
              use of an ORM;
            </li>
            <li className="list-disc ml-10">
              <strong>Handles communication of flag data</strong> to the SDK
              Service by publishing messages through NATS JetStream;
            </li>
          </ul>
          <p className="p-5 text-ss-bl text-xl">
            We used a PostgreSQL database for persistent storage of flag-related
            data. We chose the SQL database because our data is highly
            structured. Furthermore, our emphasis on reliability mandated
            selecting an ACID-compliant database to ensure the steadfastness and
            integrity of our system.
          </p>
          <div className="border-b border-ss-coral pb-5 pt-10"></div>
          <h4 className="text-2xl font-semibold  text-ss-bl p-5">
            SDK Service
          </h4>
          <p className="flex justify-center pb-5">
            <img
              src="images/sdk-service.png"
              alt="sdk-service"
              className="overflow-auto"
            />
          </p>
          <p className="p-5 text-ss-bl text-xl">
            The SDK Service, a backend application built on Node.js Express, is
            an intermediary between SmoothSail&#39;s Manager and the SDKs. Its
            primary responsibilities include:
          </p>
          <ul className="p-5 text-ss-bl text-xl">
            <li className="list-disc ml-10">
              Establishing and maintaining{" "}
              <strong>persistent connections</strong> with authenticated SDKs;
            </li>
            <li className="list-disc ml-10">
              Guaranteeing accurate real-time{" "}
              <strong>feature flag data delivery</strong> to SDKs
            </li>
            <li className="list-disc ml-10">
              <strong>Serving as a proxy</strong> to facilitate communication
              between the Manager and the SDKs.
            </li>
          </ul>
          <p className="p-5 text-ss-bl text-xl">
            Immediately following initialization, the SDK Service requests
            feature flag data from the Manager server. The Manager Server then
            transmits subsequent flag updates to the SDK Service via the
            publisher-subscriber pattern.
          </p>
          <p className="p-5 text-ss-bl text-xl">
            Upon initializing a new SDK in a client application, the SDK sends
            the SDK Key as an encrypted value in the Authorization header of an
            HTTP request to the SDK Service. In response, the SDK Service
            forwards the SDK Key to the Manager for authentication. Based on the
            Manager&#39;s validation, the SDK Service either establishes the SSE
            connection or denies the request.
          </p>
          <p className="p-5 text-ss-bl text-xl">
            Once the connection is established, the SDK Service transmits all
            feature flag data to the SDK. The SDK Service dispatches heartbeat
            messages at predetermined intervals to identify stale SSE
            connections.
          </p>
          <p className="p-5 text-ss-bl text-xl">
            The SDK Service manages the flag data within an in-memory cache. In
            the event of a flag update, the Manager server sends an update
            notification to the SDK Service, prompting the update of its cache
            and the transmission of the latest feature flag data to all
            connected SDKs.
          </p>
          <p className="flex justify-center pb-5">
            <img
              src="images/data-flow.gif"
              alt="data-flow"
              className="overflow-auto"
            />
          </p>
          <p className="p-5 text-ss-bl text-xl">
            If SmoothSail users invalidate the current SDK key, the SDK Service
            promptly terminates all open SSE connections, forcing all SDKs to
            re-authenticate. To mitigate malicious connection attempts,
            we&#39;ve incorporated a configurable rate limit for the SDK
            Service, which users can adjust based on their preferences (defaults
            to 10 requests per second).
          </p>
          <div className="border-b border-ss-coral pb-5 pt-10"></div>
          <h4 className="text-2xl font-semibold text-ss-bl p-5">
            NATS JetStream
          </h4>
          <p className="flex justify-center pb-5">
            <img
              src="images/nats-jetstream.png"
              alt="nats-jetstream"
              className="overflow-auto"
            />
          </p>
          <p className="p-5 text-ss-bl text-xl">
            To establish a robust communication channel between the Manager
            server and the SDK Service, our team chose NATS JetStream. NATS is a
            lightweight, high-performance messaging system that serves as a
            publish-subscribe and request-reply message broker, facilitating
            communication between distributed systems. JetStream is NATS&#39;s
            built–in persistence layer that provides additional functionalities
            such as at-least-once and exactly-once message delivery guarantees.
          </p>
          <p className="p-5 text-ss-bl text-xl">
            Ensuring the reliable delivery of data between the Manager server
            and the SDK Service, we implemented NATS JetStream&#39;s &#34;at
            least once&#34; message delivery guarantee for all communication,
            configuring applications to acknowledge the receipt of the message.
          </p>
          <p className="p-5 text-ss-bl text-xl">
            The SDK Service employs the NATS request-reply messaging pattern to
            retrieve initial complete flag data and SDK Key authentication. This
            communication method ensures that the requester (the SDK Service)
            awaits a response from the responder (the Manager server),
            facilitating a direct and reliable exchange of information.
          </p>
          <p className="flex justify-center pb-5">
            <img
              src="images/REQUEST-REPLY.png"
              alt="request-reply"
              className="overflow-auto"
            />
          </p>
          <p className="p-5 text-ss-bl text-xl">
            The Manager server utilizes the broker&#39;s publisher-subscriber
            mechanism to broadcast notifications regarding flag updates to the
            SDK Service. The SDK Service subscribes to feature flag updates upon
            startup, acting as a subscriber. The Manager, designated as a
            publisher, relays information to the SDK Service. As SmoothSail is a
            self-hosted application, developers can scale the SDK Service
            horizontally in case of heavy load. In this scenario, the pub/sub
            communication channel will automatically scale with it. No
            additional configuration is required.
          </p>
          <p className="flex justify-center pb-5">
            <img
              src="images/pubsub.png"
              alt="pub-sub"
              className="overflow-auto"
            />
          </p>
          <div className="border-b border-ss-coral pb-5 pt-10"></div>
          <h4 className="text-2xl font-semibold text-ss-bl p-5">
            Software Development Kit (SDK)
          </h4>
          <p className="p-5 text-ss-bl text-xl">
            The Node.js server-side SDK is designed to be embedded in the
            backend of feature flag-consuming applications. Its core
            responsibilities include authentication, maintaining real-time
            feature flag data, and flag evaluation during runtime.
          </p>
          <p className="flex justify-center pb-5">
            <img src="images/sdk.png" alt="sdk" className="overflow-auto" />
          </p>
          <p className="p-5 text-ss-bl text-xl">
            Authenticating a new SDK mandates a valid SDK Key and the SDK
            Service authentication URL. Developers can retrieve the current key
            or generate a new one using the SmoothSail UI. For enhanced
            security, the SDK encrypts the key before storing it in memory and
            transmitting it to the SDK Service as part of the authentication
            process. In the event of an invalid key or authentication URL, the
            SDK logs an error, starts serving flag default values, and refrains
            from further attempts at establishing an SSE connection.
          </p>
          <p className="p-5 text-ss-bl text-xl">
            After successful authentication, the SDK receives the complete
            feature flag ruleset via the SSE connection. The connection is then
            kept alive for real-time notifications about changes on the feature
            flag manager platform. If a flag is changed, the SDK Service
            retransmits the complete feature flag information to the connected
            SDK, allowing it to update its in-memory information. Until the SDK
            receives the initial feature flag ruleset, all flags default to
            either a generic `false` value or the user-defined default value (if
            specified).
          </p>
          <p className="p-5 text-ss-bl text-xl">
            As mentioned earlier, we incorporated a heartbeat mechanism to
            prevent stale connections. If at least one heartbeat message is
            lost, the SDK assumes the SSE connection is stale. Consequently, the
            SDK closes the stale connection and initiates a new attempt to
            establish a fresh one. Once successful, the SDK Service will resend
            the latest flag data to ensure any missed updates do not adversely
            affect the user&#39;s application. Users can adjust the heartbeat
            interval to suit their specific needs. It is noteworthy that since
            we prioritize consistency over availability in SmoothSail, SDK
            serves default feature flag values during the reconnection attempts,
            adopting a conservative approach to feature flag delivery in the
            event of SSE connection malfunction.
          </p>
          <div className="border-b border-ss-coral pb-5 pt-10"></div>
          <h4 className="text-2xl font-semibold  text-ss-bl p-5">
            Flag Evaluation
          </h4>
          <p className="p-5 text-ss-bl text-xl">
            The SDK, embedded within a feature flag consumer application,
            provides the logic for evaluating flags. This design facilitates
            swift runtime assessment of user context and the flag ruleset,
            eliminating the need for additional requests to the SDK Service.
          </p>
          <p className="p-5 text-ss-bl text-xl">
            The SDK accepts three input arguments to execute flag evaluation:
            user context, feature flag key, and a default flag value. The
            default value is a fallback if the feature flag is nonexistent or
            the SDK authentication key is invalidated. The generic default,
            <code>false</code>, is utilized if no default value is provided.
          </p>
          <p className="flex justify-center pb-5">
            <img
              src="images/code-snippet.png"
              alt="code-snippet"
              className="overflow-auto"
            />
          </p>
          <p className="p-5 text-ss-bl text-xl">
            When a feature rollout doesn&#39;t specifically target a subset of
            users, the flag remains unassociated with any segments, functioning
            as a straightforward toggle that turns on or off the feature for the
            entire user base. Conversely, if a flag is linked to at least one
            user segment, the user context is evaluated against each
            segment&#39;s user targeting conditions (aka segment rules). If the
            user aligns with the criteria of any segment, the flag evaluates to{" "}
            <code>true</code>; otherwise, it evaluates to <code>false</code>.
          </p>
          <p className="p-5 text-ss-bl text-xl">
            Segments may encompass multiple rules. For example, a segment may
            require a user to be a beta-tester and an internal employee. Within
            a segment, the segment operator (either <code>all</code> or{" "}
            <code>any</code>) will dictate how the SDK will evaluate
            segment-associated rules. Under the <code> all </code>operator,
            every rule within a segment must be satisfied for the user to be
            placed within this segment and the flag to evaluate to{" "}
            <code>true</code>. In contrast, at least one rule must be fulfilled
            under the <code>any</code> operator.
          </p>
          <p className="flex justify-center pb-5">
            <img
              src="images/flag-eval.png"
              alt="flag-eval"
              className="overflow-auto"
            />
          </p>
          <div className="border-b border-ss-coral pb-5 pt-10">
            <h3 className="text-4xl font-semibold  text-ss-bl p-5">
              <a id="engineering-decisions">Engineering Decisions</a>
            </h3>
          </div>
          <h4 className="text-2xl font-semibold  text-ss-bl p-5">
            Communication between the Manager Server and the PostgresSQL
            database
          </h4>
          <p className="p-5 text-ss-bl text-xl">
            We integrated the Manager application with the PostgreSQL database
            using an ORM library.
          </p>
          <p className="flex justify-center pb-5">
            <img src="images/orm.png" alt="orm" className="overflow-auto" />
          </p>
          <p className="p-5 text-ss-bl text-xl">
            As we do not expect our application to handle heavy database loads,
            the potential performance overhead of the ORM library isn&#39;t a
            concern. On the flip side, adopting the ORM library simplified the
            implementation of the following:
          </p>
          <ul className="p-5 text-ss-bl text-xl">
            <li className="list-disc ml-10">
              <strong>Transaction Atomicity:</strong> Ensuring the atomicity of
              multiple transactions through the ORM&#39;s built-in transaction
              management mechanism.
            </li>
            <li className="list-disc ml-10">
              <strong>Security Enhancement:</strong> Conducting extensive user
              input validation and fortifying protection against SQL injection
              attacks.
            </li>
            <li className="list-disc ml-10">
              <strong>Readability and Maintainability:</strong> Streamlining
              collaboration within the development team by abstracting complex
              database interactions, reducing the need for cumbersome
              boilerplate code.
            </li>
          </ul>
          <div className="border-b border-ss-coral pb-5 pt-10"></div>
          <h4 className="text-2xl font-semibold text-ss-bl p-5">
            Splitting the Backend into SDK Service and Manager Application
          </h4>
          <p className="p-5 text-ss-bl text-xl">
            Initially, SmoothSail&#39;s architecture comprised the Manager
            application, user interface, database, and SDKs, burdening the
            Manager app with multiple responsibilities:
          </p>
          <ul className="p-5 text-ss-bl text-xl">
            <li className="list-disc ml-10">
              Handling feature flag CRUD operations;
            </li>
            <li className="list-disc ml-10">Serving the dashboard;</li>
            <li className="list-disc ml-10">Authenticating SDK;</li>
            <li className="list-disc ml-10">
              Managing SSE connections with authenticated SDKs;
            </li>
            <li className="list-disc ml-10">
              Ensuring accurate feature flag data delivery to the SDKs.
            </li>
          </ul>
          <p className="p-5 text-ss-bl text-xl">
            This initial setup risked a single point of failure, where Manager
            downtime could compromise the entire feature flag system. Moreover,
            the server&#39;s complexity was undergoing substantial growth. We
            opted to delegate some of the Manager&#39;s responsibilities to the
            SDK Service to enhance system robustness.
          </p>
          <p className="p-5 text-ss-bl text-xl">
            The introduction of two servers, the Manager server and SDK Service,
            provides several key advantages:
          </p>
          <ul className="p-5 text-ss-bl text-xl">
            <li className="list-disc ml-10">
              <strong>Ease of scaling:</strong> With the growing number of
              connected SDKs, the SDK Service can be scaled independently,
              eliminating the need to scale the Manager server. The Manager
              server, primarily responsible for managing feature flag data, is
              not expected to require scaling.
            </li>
            <li className="list-disc ml-10">
              <strong>Reduce Manager server load:</strong> The task of keeping
              and updating in-memory flag data is offloaded from the Manager
              server to the SDK Service;
            </li>
            <li className="list-disc ml-10">
              <strong>Improved security:</strong> Serving as a proxy to the
              Manager server, the SDK Service decouples flag management API
              endpoints from SDK authentication endpoints. This segregation
              facilitates the implementation of distinct security levels for the
              feature flag Management platform and the SDK Service. Moreover,
              the SDK Service does not have direct access to the database, which
              mitigates the risk of potential threats and reduces the exposure
              of feature flag data;
            </li>
            <li className="list-disc ml-10">
              <strong>Reliability:</strong> In the event of Manager or NATS
              JetStream downtime, the SSE connection persists between the SDK
              and the SDK Service.
            </li>
          </ul>
          <p className="p-5 text-ss-bl text-xl">
            We recognize that this decision has its flaws: instead of managing a
            single Manager server, we now have two applications to oversee and
            ensure reliable communication. However, we believe that the
            advantages gained significantly outweigh the associated drawbacks.
          </p>
          <div className="border-b border-ss-coral pb-5 pt-10"></div>
          <h4 className="text-2xl font-semibold text-ss-bl p-5">
            Communication between the SDK Service and the Manager platform
          </h4>
          <p className="p-5 text-ss-bl text-xl">
            With the primary focus on the reliability and consistency of
            SmoothSail, our choice of a communication mode between the Manager
            server and the SDK Service was driven by the following criteria:
          </p>
          <ul className="p-5 text-ss-bl text-xl">
            <li className="list-disc ml-10">
              <strong>Reliability:</strong> The communication channel had to be
              highly reliable;
            </li>
            <li className="list-disc ml-10">
              <strong>Two-way communication support:</strong> On one hand, the
              Manager server should be able to send flag notifications to the
              SDK Service. On the other hand, the SDK Service should be able to
              request complete feature flag ruleset on startup and new SDK
              authentication validation;
            </li>
            <li className="list-disc ml-10">
              <strong>Scalability:</strong> It should be able to scale together
              with the SDK Service without requiring additional configuration.
            </li>
          </ul>
          <p className="p-5 text-ss-bl text-xl">
            Given these stringent requirements, our choice converged on a
            message broker.
          </p>
          <p className="p-5 text-ss-bl text-xl">
            To ensure the reliability of communication between the Manager
            server and the SDK Service, we carefully evaluated the different
            levels of assurance in message delivery:
          </p>
          <ul className="p-5 text-ss-bl text-xl">
            <li className="list-disc ml-10">
              At most once: the message may or may not be delivered, but the
              message will never be delivered more than once;
            </li>
            <li className="list-disc ml-10">
              At least once: the message may be delivered multiple times, but it
              is guaranteed to be received at least once;
            </li>
            <li className="list-disc ml-10">
              Exactly once: the message is delivered once and only once.
            </li>
          </ul>
          <p className="p-5 text-ss-bl text-xl">
            Considering the inadequacy of reliability with “at most once” and
            the additional overhead associated with &#34;exactly once&#34;
            delivery, we opted for &#34;at least once&#34; delivery for our
            specific use case.
          </p>
          <p className="p-5 text-ss-bl text-xl">
            Our team evaluated two message broker candidates that supported
            &#34;at least once&#34; message delivery: NATS JetStream and
            RabbitMQ. Several factors influenced the decision to choose NATS
            JetStream. First, NATS had lower latency specifications (p99
            latency: 22.1ms) compared to RabbitMQ (p99 latency: 344ms){" "}
            <HashLink
              scroll={(el) => scrollWithOffset(el)}
              to="#references"
              className="underline"
            >
              [6]
            </HashLink>
            . Second, while RabbitMQ offered rich functionality, much of it
            would remain unused, creating unnecessary overhead for our
            application. Third, we found NATS easier to configure.
          </p>
          <p className="p-5 text-ss-bl text-xl">
            Other options considered for the Manager server - SDK service
            communication channel implementation were:
          </p>
          <ul className="p-5 text-ss-bl text-xl">
            <li className="list-disc ml-10">HTTP requests</li>
            <li className="list-disc ml-10"> SSE</li>
            <li className="list-disc ml-10"> Polling</li>
            <li className="list-disc ml-10"> Webhooks</li>
            <li className="list-disc ml-10"> WebSockets</li>
          </ul>
          <p className="p-5 text-ss-bl text-xl">
            Unfortunately, the first four provided only one-way communication
            capabilities. While WebSockets offered persistent two-way
            connections, its implementation would strain the Manager server due
            to its resource-intensive implementation.
          </p>
          <div className="border-b border-ss-coral pb-5 pt-10"></div>
          <h4 className="text-2xl font-semibold  text-ss-bl p-5">
            SSE streaming: whole feature flag ruleset vs. updates only
          </h4>
          <p className="p-5 text-ss-bl text-xl">
            Because we created our SDK for server-side use, it is less exposed
            to malicious agents than client-side SDKs. This deliberate choice
            allows us to implement SmoothSail by storing the complete feature
            flag ruleset directly on the SDK, enabling flag evaluation within
            the SDK. This approach eliminates the need to send requests to the
            SDK Service for every flag evaluation, minimizing latency and
            reducing the load on the SDK Service. However, the SDK must stay
            current with any ongoing changes to the flag data.
          </p>
          <p className="p-5 text-ss-bl text-xl">
            In determining the optimal method for sending feature flag updates
            via the SSE channel, we carefully considered sending the entire
            feature flag ruleset or just the updates. We opted for the former:
            whenever changes occur to the flag data, SmoothSail SDK Service
            promptly re-sends the complete flag ruleset to the SDK.
          </p>
          <p className="p-5 text-ss-bl text-xl">
            This choice mitigates the risk of serving outdated feature flag data
            in scenarios where messages regarding flag updates may fail to reach
            the SDK due to network issues. We reduce the likelihood of SDKs
            delivering stale information by consistently re-sending the complete
            flag ruleset with each change.
          </p>
          <p className="p-5 text-ss-bl text-xl">
            Furthermore, this approach facilitates simplicity in the
            communication code on both ends. The SDK merely needs to receive
            flag data without the complexity of handling different types of
            notifications, each representing every type of CRUD operation that
            might occur for the feature flag data. This simplicity ensures the
            SDK remains lightweight and minimizes the surface area for potential
            vulnerabilities and bugs.
          </p>
          <p className="p-5 text-ss-bl text-xl">
            To assess the potential impact of increased message size on
            bandwidth, we designed a test flag data set with 10 flags, each
            targeting a distinct segment with two rules. In this scenario, the
            SDK service transmitted a modest 3.5 KB message to a single SDK.
            Even at the advised maximum rate of 500 requests/second (see
            <a href="#load-testing"> Load Testing</a> section), the expected
            impact of 1.7 MB/s is still comfortably within modern networks&#39;
            capabilities. For significantly larger feature flag rulesets,
            developers can leverage SmoothSail&#39;s open-source nature to
            implement message compression logic, optimizing data transmission if
            needed.
          </p>
          <p className="p-5 text-ss-bl text-xl">
            Although sending the complete feature flag ruleset every time a flag
            change occurs might increase message size, the trade-off is
            acceptable for SmoothSail&#39;s use case. We anticipate that a small
            engineering team will employ only a limited number of active feature
            flags for feature rollouts at any time.
          </p>
          <div className="border-b border-ss-coral pb-5 pt-10"></div>
          <h4 className="text-2xl font-semibold  text-ss-bl p-5">
            Communication between the SDK Service and SDK
          </h4>
          <p className="p-5 text-ss-bl text-xl">
            The design of SmoothSail necessitated a dependable one-way live
            communication channel between the SDK Service and SDK for the
            delivery of the latest flag data. After careful consideration, our
            team opted for SSE for several compelling reasons. SSE proved
            user-friendly, featuring built-in support for re-establishing
            connections, and its implementation didn&#39;t demand additional
            dependencies. SSE required minimal HTTP traffic (compared to
            alternative options) and seamlessly scaled alongside the SDK
            Service. To mitigate potential issues with stale connections, we
            implemented a heartbeat signal.
          </p>
          <p className="p-5 text-ss-bl text-xl">
            Other options explored for the SDK Service - SDK communication
            included WebSockets, polling, and a Message broker.
          </p>
          <p className="p-5 text-ss-bl text-xl">
            WebSockets offer notable advantages such as scalability and a
            diverse range of external libraries for implementation.
            Unfortunately, WebSockets lack native automatic reconnection
            support. While external libraries can address this issue, this would
            result in additional dependencies and inflated SDK size.
            Furthermore, the bidirectional nature of WebSockets would introduce
            an unnecessary overhead for a one-way SDK Service - SDK connection.
          </p>
          <p className="p-5 text-ss-bl text-xl">
            On the other hand, polling is a straightforward process, and its
            implementation does not require external dependencies. The polling
            frequency can be user-configurable. However, the polling interval
            (time between two poll requests) inevitably introduces an
            undesirable delay between the change of the flag data and the SDK
            receiving the notification. Additionally, given the infrequent
            changes in flag data, most poll requests would be wasteful, placing
            unnecessary strain on the SDK Service.
          </p>
          <p className="flex justify-center pb-5">
            <img
              src="images/sse-polling-ws.png"
              alt="sse-polling-ws"
              className="overflow-auto"
            />
          </p>
          <div className="border-b border-ss-coral pb-5 pt-10">
            <h3 className="text-4xl font-semibold  text-ss-bl p-5">
              <a id="load-testing">Load Testing</a>
            </h3>
          </div>
          <p className="p-5 text-ss-bl text-xl">
            Our team set out to identify the performance threshold where
            SmoothSail starts to show signs of decline as the user load
            increases. This insight was crucial for providing recommendations on
            optimizing the application&#39;s future use.
          </p>
          <p className="p-5 text-ss-bl text-xl">
            To conduct a comprehensive assessment, we utilized Artillery.io for
            SmoothSail load testing. We used an SDK Service RESTful endpoint to
            set up the conditions for our load tests. This endpoint
            authenticated requests and transmitted data for 10 feature flags
            upon successful validation. Despite our initial assumption that 10
            requests/second (req/s) was reasonable for our use case and expected
            user numbers, we deliberately pushed the limits by significantly
            increasing the req/s to identify potential performance bottlenecks.
          </p>
          <p className="p-5 text-ss-bl text-xl">
            The load test unfolded in three phases. The initial phase started at
            1 req/s, gradually escalating to 10 req/s within 60 seconds. The
            second phase sustained the load at 10 req/s and further ramped up to
            100 req/s over 60 seconds. The final phase maintained a load of 100
            req/s and peaked at 1000 req/s.
          </p>
          <p className="p-5 text-ss-bl text-xl">
            Notably, the mean HTTP response time showed signs of slowing at
            around 500 req/s, increasing from 35ms to 227ms. Based on these
            results, we recommend scaling SmoothSail when the application
            approaches 500 req/s to ensure it can handle the increased load
            effectively. Overall, our load testing affirms that SmoothSail is
            robust enough to reliably accommodate the expected user loads.
          </p>
          <div className="border-b border-ss-coral pb-5 pt-10">
            <h3 className="text-4xl font-semibold  text-ss-bl p-5">
              <a id="using-smoothsail">Using SmoothSail</a>
            </h3>
          </div>
          <h4 className="text-2xl font-semibold text-ss-bl p-5">Design</h4>
          <p className="p-5 text-ss-bl text-xl">
            A <strong>flag</strong> is a fundamental entity in SmoothSail,
            typically associated with a single feature. Each flag will have the
            following properties:
          </p>
          <ul className="p-5 text-ss-bl text-xl">
            <li className="list-disc ml-10">
              <strong>fKey:</strong> a unique identifier used in flag evaluation
            </li>
            <li className="list-disc ml-10">
              <strong>title:</strong> a user-friendly identifier for use in the
              SmoothSail UI
            </li>
            <li className="list-disc ml-10">
              <strong>description:</strong> description of the associated
              feature{" "}
            </li>
            <li className="list-disc ml-10">
              <strong>isActive:</strong> boolean used to determine if the
              feature will be available to users in the flag&#39;s segments
            </li>
            <li className="list-disc ml-10">
              <strong>segments:</strong> associated segments for which the flag
              should evaluate <code>true</code>
            </li>
          </ul>
          <p className="flex justify-center pb-5">
            <img
              src="images/flag-example.png"
              alt="flag-example"
              className="overflow-auto rounded-xl"
            />
          </p>
          <p className="px-5 pb-5 text-ss-bl text-lg text-center">
            Flag Creation
          </p>
          <p className="p-5 text-ss-bl text-xl">
            The <strong>user context</strong> is passed to the SDK&#39;s flag
            evaluation method as an object and contains the user&#39;s
            properties and associated values. User context is utilized in the
            flag evaluation logic to determine if the user is within one of the
            segments associated with the flag.
          </p>
          <p className="flex justify-center pb-5">
            <img
              src="images/userContext.png"
              alt="user-context"
              className="overflow-auto max-w-2xl"
            />
          </p>
          <p className="p-5 text-ss-bl text-xl">
            An <strong>attribute</strong> is the property used to identify a
            particular characteristic about a user. Some examples of attributes
            are <code>device</code>, <code>browser</code>, and{" "}
            <code>language</code>. These attributes are used to create rules
            within a segment. User context is expected to contain an attribute
            whose key is equal to the attribute key and the value to be specific
            to the user.
          </p>
          <p className="p-5 text-ss-bl text-xl">
            An attribute can be reused within different segments or multiple
            times within the same segment. This reuse of an attribute within the
            same segment allows for the case of different acceptable values.
            (ie. users with an email address ending in either @gmail.com or
            @yahoo.com). You can find more information on creating rules and
            using attributes in SmoothSail&#39;s documentation on our GitHub
            organization page.
          </p>
          <p className="flex justify-center pb-5">
            <img
              src="images/attribute-example.png"
              alt="attribute-example"
              className="overflow-auto rounded-xl"
            />
          </p>
          <p className="px-5 pb-5 text-ss-bl text-lg text-center">
            Attribute Creation
          </p>
          <p className="p-5 text-ss-bl text-xl">
            A <strong>segment</strong> is a representation of a user
            demographic. Each segment will have the following properties:
          </p>
          <ul className="p-5 text-ss-bl text-xl">
            <li className="list-disc ml-10">
              <strong>sKey:</strong> unique identifier
            </li>
            <li className="list-disc ml-10">
              <strong>description:</strong> description of the user demographic{" "}
            </li>
            <li className="list-disc ml-10">
              <strong>rulesOperator:</strong> the value <code>all</code> or{" "}
              <code>any</code>, indicates what rules must be true for a user to
              fall within the segment
            </li>
            <li className="list-disc ml-10">
              <strong>rules:</strong> associated rules that place a user in this
              demographic or grouping
            </li>
          </ul>
          <p className="flex justify-center pb-5">
            <img
              src="images/segment-example.png"
              alt="segment-example"
              className="overflow-auto rounded-xl"
            />
          </p>
          <p className="px-5 pb-5 text-ss-bl text-lg text-center">
            Segment Creation
          </p>
          <p className="flex justify-center pb-5">
            <img
              src="images/edit-rules-example.png"
              alt="edit-rules-example"
              className="overflow-auto rounded-xl"
            />
          </p>
          <p className="px-5 pb-5 text-ss-bl text-lg text-center">
            Rule Association with Segments
          </p>

          <p className="p-5 text-ss-bl text-xl">
            Segments can be associated with multiple flags. The association
            between a segment and a flag means that for any user within that
            segment, the associated flag will be evaluated to true (assuming the
            flag is currently active).
          </p>
          <p className="p-5 text-ss-bl text-xl">
            Associating a segment with multiple flags, an engineer could release
            multiple features to users within a specific segment. An engineer
            can also add or remove segments associated with a flag at any time,
            thus continuing a feature&#39;s release or rolling back the feature
            for specific demographics.
          </p>
          <p className="flex justify-center pb-5">
            <img
              src="images/segment-association-example.png"
              alt="segment-association"
              className="overflow-auto rounded-xl"
            />
          </p>
          <p className="px-5 pb-5 text-ss-bl text-lg text-center">
            Segment Association with Flag
          </p>
          <div className="border-b border-ss-coral pb-5 pt-10"></div>
          <h4 className="text-2xl font-semibold text-ss-bl p-5">
            Installation
          </h4>
          <p className="p-5 text-ss-bl text-xl">
            There are two ways developers can integrate SmoothSail into their
            applications. The first and easiest way is to make use of Docker. We
            offer a compose file that references SmoothSail&#39;s latest images
            for each component, along with the latest images of PostgreSQL and
            NATS. These run in a single Docker network and can be configured to
            expose API endpoints.
          </p>
          <p className="flex justify-center pb-5">
            <img
              src="images/docker.png"
              alt="docker"
              className="overflow-auto"
            />
          </p>
          <p className="p-5 text-ss-bl text-xl">
            Second, since SmoothSail is an open-source platform, developers can
            access and install each component via GitHub. Open access allows
            SmoothSail users to modify the application according to their
            specific requirements, offering greater control over its
            functionality. We provide comprehensive documentation to guide
            developers on effectively running each component.
          </p>
          <div className="border-b border-ss-coral pb-5 pt-10">
            <h3 className="text-4xl font-semibold text-ss-bl p-5">
              <a id="future-plans">Future Plans</a>
            </h3>
          </div>
          <p className="p-5 text-ss-bl text-xl">
            In summary, SmoothSail is a lightweight, scalable, self-hosted
            feature flag tool that empowers developer teams to release and roll
            back features seamlessly. It allows the creation of reusable
            segments for targeting users during canary and ring feature
            rollouts.
          </p>
          <p className="p-5 text-ss-bl text-xl">
            Our team recognizes opportunities for enhancing SmoothSail&#39;s
            functionality. Future improvements could include:
          </p>
          <ul className="p-5 text-ss-bl text-xl">
            <li className="list-disc ml-10">
              <strong>Feature flag monitoring.</strong> Tracking metrics, like
              the frequency of feature flag evaluations and response time
              comparisons between new features and the baseline, may enhance the
              rollout process. These metrics enable developers to swiftly
              identify and address potential application performance regressions
              related to new features, ensuring an optimized rollout experience
              <HashLink
                scroll={(el) => scrollWithOffset(el)}
                to="#references"
                className="underline"
              >
                [4]
              </HashLink>
              .
            </li>
            <li className="list-disc ml-10">
              <strong>Feature flag expiration.</strong> Once a feature is fully
              released to the user base, the corresponding flag becomes obsolete
              and should be promptly removed from the codebase. To facilitate
              this cleanup process and mitigate technical debt, introducing an
              option to set expiration dates for flags would be of use. When a
              flag exceeds its defined lifespan, its evaluation will log a
              warning, compelling developers to address and eliminate redundant
              feature flags systematically.
            </li>
            <li className="list-disc ml-10">
              <strong>Additional rollout strategies.</strong> Introducing a
              percentage rollout strategy would be valuable for feature releases
              that do not require specific user targeting but demand fine-grain
              control. Incrementally activating a new feature for a growing
              percentage of randomly selected users would enrich
              SmoothSail&#39;s functionality, catering to diverse use cases.
            </li>
          </ul>

          <div className="border-b border-ss-coral pb-5 pt-10">
            <h3 className="text-4xl font-semibold text-ss-bl p-5">
              <a id="references">References</a>
            </h3>
          </div>

          <ol className="p-5 text-ss-bl text-xl">
            <li className="list-decimal ml-10 p-2">
              <a id="reference-1">Blue-green and Canary: </a>
              <a href="https://www.informit.com/articles/article.aspx?p=1833567&seqNum=2">
                https://www.informit.com/articles/article.aspx?p=1833567&seqNum=2
              </a>
            </li>
            <li className="list-decimal ml-10 p-2">
              <a id="reference-2">
                Shipping code fast and safe with Feature Flags (GitHub):{" "}
              </a>
              <a href="https://github.blog/2021-04-27-ship-code-faster-safer-feature-flags/">
                https://github.blog/2021-04-27-ship-code-faster-safer-feature-flags/
              </a>
            </li>
            <li className="list-decimal ml-10 p-2">
              <a id="reference-3">Rollout strategies with Feature Flags: </a>
              <a href="https://reflectoring.io/rollout-strategies-with-feature-flags/">
                https://reflectoring.io/rollout-strategies-with-feature-flags/
              </a>
            </li>
            <li className="list-decimal ml-10 p-2">
              <a id="reference-4">Testing in production & Feature Flags: </a>
              <a href="https://www.lambdatest.com/blog/testing-in-production-a-detailed-guide/">
                https://www.lambdatest.com/blog/testing-in-production-a-detailed-guide/
              </a>
            </li>
            <li className="list-decimal ml-10 p-2">
              <a id="reference-5">MQTT Quality of Service (QoS): </a>
              <a href="http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html#_Toc385349264">
                http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html#_Toc385349264
              </a>
            </li>
            <li className="list-decimal ml-10 p-2">
              <a id="reference-6">Comparison of RabbitMQ vs NATS: </a>
              <a href="https://streamnative.io/pulsar/pulsar-vs-rabbitmq-vs-nats">
                https://streamnative.io/pulsar/pulsar-vs-rabbitmq-vs-nats
              </a>
            </li>
            <li className="list-decimal ml-10 p-2">
              <a id="reference-7">NATS JetStream Consumers: </a>
              <a href="https://docs.nats.io/nats-concepts/jetstream/consumers">
                https://docs.nats.io/nats-concepts/jetstream/consumers
              </a>
            </li>
            <li className="list-decimal ml-10 p-2">
              <a id="reference-8">Artillery Load Testing: </a>
              <a href="https://www.artillery.io/">
                https://www.artillery.io/
              </a>{" "}
            </li>
            <li className="list-decimal ml-10 p-2">
              <a id="reference-9">Max Concurrent Connections: </a>
              https://josephmate.github.io/2022-04-14-max-connections/
              <a href="https://josephmate.github.io/2022-04-14-max-connections/">
                https://josephmate.github.io/2022-04-14-max-connections/
              </a>
            </li>
            <li className="list-decimal ml-10 p-2">
              <a id="reference-10">WebSockets vs SSE Scalability: </a>
              <a href="https://qalbit.com/blog/an-in-depth-look-at-websockets-and-server-sent-events/#:~:text=Scalability%20of%20both%20communication%20methods,and%20scaling%20across%20multiple%20servers">
                https://qalbit.com/blog/an-in-depth-look-at-websockets-and-server-sent-events/#:~:text=Scalability%20of%20both%20communication%20methods,and%20scaling%20across%20multiple%20servers
              </a>
            </li>
          </ol>
          <div className="border-b border-ss-coral pb-5 pt-10"></div>
        </div>
      </div>
    </>
  );
}
