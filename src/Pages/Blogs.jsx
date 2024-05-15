const Blogs = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-[#fff2f2] hover:scale-[1.05] transition-all p-8 rounded-lg mb-10 mt-10">
        <h1 className="text-2xl font-lato font-semibold">
          What is an access token and refresh token? How do they work and where
          should we store them on the client side?
        </h1>
        <p>
          Access tokens and refresh tokens are commonly used in authentication
          systems, especially in the context of OAuth 2.0. Access Token: An
          access token is a credential used to access protected resources on
          behalf of a user. It is usually short-lived and grants access to
          specific resources or APIs. Access tokens are typically obtained by
          exchanging authentication credentials (such as a username/password
          combination or another token) for them. Refresh Token: A refresh token
          is a credential used to obtain a new access token when the current
          access token expires. Unlike access tokens, refresh tokens are
          long-lived and are meant to be securely stored by the client
          application. They are used to request new access tokens without
          needing the user to re-authenticate. Here's how they work together:
          When a user authenticates and authorizes a client application, the
          authorization server provides both an access token and a refresh
          token. The client application uses the access token to access
          protected resources on the server. When the access token expires,
          instead of asking the user to re-authenticate, the client application
          can use the refresh token to request a new access token from the
          authorization server. If the refresh token expires or is revoked (due
          to security reasons or user action), the user will need to
          re-authenticate with the server. As for where to store them on the
          client side, best practices include: Access Token: Access tokens are
          usually short-lived and can be stored in memory. They should not be
          stored in persistent storage (like local storage or cookies) due to
          security concerns. Instead, they should be kept in memory and
          transmitted securely over HTTPS. Refresh Token: Refresh tokens are
          long-lived and should be stored securely. They are commonly stored in
          secure storage mechanisms like encrypted cookies, secure storage in
          mobile apps, or in the case of web applications, in HTTP-only cookies
          with the Secure and SameSite attributes set. Storing refresh tokens
          securely is crucial because if they are compromised, an attacker can
          use them to obtain new access tokens without the user's consent,
          potentially leading to unauthorized access to the user's resources.
        </p>
      </div>

      <div className="bg-[#fff2f2] hover:scale-[1.05] transition-all p-8 rounded-lg mb-12 ">
        <p className="text-2xl font-lato font-semibold">
          What is express js? What is Nest JS ?
        </p>
        <p>
          Express.js and NestJS are both popular frameworks used for building
          server-side applications in JavaScript/TypeScript, but they have
          different approaches and features. Express.js: Description: Express.js
          is a minimalist web application framework for Node.js, designed to
          build web applications and APIs quickly and with minimalism in mind.
          It provides a robust set of features for web and mobile applications.
          Features: Middleware support: Express allows you to use middleware
          functions to handle requests, perform tasks, and modify responses.
          Routing: Express provides a simple yet powerful routing mechanism to
          handle different HTTP requests. Template engines: Although not
          included in Express itself, it can be easily integrated with various
          template engines like EJS, Handlebars, etc., for server-side
          rendering. Flexibility: Express is known for its flexibility, allowing
          developers to customize and extend it according to their needs.
          Lightweight: Express.js is lightweight and unopinionated, giving
          developers the freedom to structure their applications as they see
          fit.
          <h1 className="text-2xl font-lato font-semibold">
            What is Nest JS ?
          </h1>
          <span className="font-bold">Description:</span> NestJS is a
          progressive Node.js framework for building efficient, reliable, and
          scalable server-side applications. It is built with TypeScript and
          heavily inspired by Angular, sharing some of its design principles and
          concepts. <br />
          <span className="font-bold">Features:</span> Modular and scalable
          architecture: NestJS encourages a modular and scalable architecture,
          making it easy to organize and maintain large-scale applications.
          Dependency injection: NestJS provides a powerful dependency injection
          system that helps manage the application's components and their
          dependencies. Built-in support for TypeScript: Since NestJS is built
          with TypeScript, developers can leverage features like decorators,
          static typing, and interfaces for building robust applications.
          Decorators and middleware: NestJS uses decorators extensively for
          defining controllers, providers, middleware, etc., making the codebase
          more readable and maintainable. Integration with other libraries:
          NestJS seamlessly integrates with other libraries and tools commonly
          used in the Node.js ecosystem. Built-in testing utilities: NestJS
          comes with built-in testing utilities and support for unit,
          integration, and end-to-end testing, helping developers ensure the
          reliability and stability of their applications. In summary,
          Express.js is a minimalist and flexible framework for building web
          applications and APIs, while NestJS is a more opinionated and
          structured framework that provides a modular architecture and built-in
          support for TypeScript. The choice between them often depends on the
          specific requirements of the project and the preferences of the
          development team.
        </p>
      </div>
      <div className="bg-[#fff2f2] hover:scale-[1.05] transition-all p-8 rounded-lg mb-12 ">
        <p className="text-2xl font-lato font-semibold">Explain code</p>
        <p>
          Row html css javascript along with whatever technologies are used to
          create this project.
          <li>React js</li>
          <li>Node js</li>
          <li>Express js</li>
          <li>Mongo DB</li>
          <li>Tailwind css</li>
          <li>Row Javascript</li>
        </p>
        <h1 className="text-xl font-bold mt-3">NPM package</h1>
        <li>React Datepicker</li>
        <li> DaisyUi </li>
        <li> Meraki ui</li>
        <li> Framer Motion</li>
        <li> Swiper slider</li>
        <li> React tabs</li>
        <br />
        <p>
          {" "}
          This project is basically an online biased job portal. Here it will
          help a user to find the job of his choice very easily.Also, a buyer
          can find employees for any of his upcoming projects.A common user can
          easily select the job of his choice from the filter option by going to
          the all job section to find the job of his choice.And a Bayer can post
          jobs by going to the add job route to find employees for his project
          and must register or login to take advantage of this facility.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
