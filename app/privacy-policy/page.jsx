import React from "react";

export default function page() {
  return (
    <div className="mx-auto max-w-6xl my-16 px-2">
      <div className="md:max-w-[70%]">
        <h1>Privacy Policy</h1>

        <p>
          Welcome to Weather10Days.com. This Privacy Policy outlines how we
          handle user information on our website.
        </p>

        <h2>Information We Collect:</h2>

        <p>
          We only collect your current location to provide accurate weather
          forecasts. We do not store or process any personally identifiable
          information. We use Google AdSense for ads, and they may collect
          anonymous data.
        </p>

        <h2>Location Information:</h2>

        <p>
          Your location is solely used for weather reporting purposes. We do not
          share this information with third parties, and it is not stored beyond
          your current session.
        </p>

        <h2>Third-Party Services:</h2>

        <p>
          We use Google AdSense for advertising. Please review{" "}
          <a href="https://policies.google.com/privacy">
            Google&apos;s Privacy Policy
          </a>{" "}
          for information on how they handle data.
        </p>

        <h2>Cookies:</h2>

        <p>
          We use cookies for a better user experience. You can disable cookies
          in your browser settings.
        </p>

        <h2>Security:</h2>

        <p>
          We prioritize the security of your information. However, please be
          aware that no online platform is entirely secure.
        </p>

        <h2>Updates:</h2>

        <p>
          This Privacy Policy may be updated; please check periodically for
          changes.
        </p>

        <p>
          By using Weather10Days.com, you agree to the terms of this Privacy
          Policy. If you have any concerns or questions, contact us at{" "}
          <a href="mailto:contact@weather10days.com">
            contact@weather10days.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
