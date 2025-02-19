import { useEffect, useRef } from "react";

const DyteMeeting = () => {
  const meetingRef = useRef(null);

  useEffect(() => {
    const loadDyteSDK = async () => {
      await import(
        "https://cdn.jsdelivr.net/npm/@dytesdk/ui-kit@2.1.5/loader/index.es2017.js"
      )
        .then((module) => module.defineCustomElements())
        .catch((err) => console.error("Failed to load Dyte UI Kit", err));

      const script = document.createElement("script");
      script.src = "https://cdn.dyte.in/core/dyte-2.2.2.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = async () => {
        if (window.DyteClient) {
          const meeting = await window.DyteClient.init({
            authToken:
              "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdJZCI6IjM4NDI5MjM4LTNmNjEtNGI2My04MzJhLTczODUyMzY0NGQxYyIsIm1lZXRpbmdJZCI6ImJiYjMxYzkxLTgzMzAtNGVlMC1iMDU5LTJiZmI5NGJmZWMxZiIsInBhcnRpY2lwYW50SWQiOiJhYWFmYzIzNi04YTUyLTRjMjQtYWEyNi1hNjFmYTNkMDVlN2EiLCJwcmVzZXRJZCI6IjZkMjFlNzRkLTM4NWMtNGI5NC05NmU3LWZjOGJiNWI3OTRlNyIsImlhdCI6MTczODY1ODkwMCwiZXhwIjoxNzQ3Mjk4OTAwfQ.eYWZQlMfpfEJZoBdreQGQyMduEHcmBgXacbmIpVYsriqteJn0-xs-3NOYorN6kSBN8h_vdVZdYL1QY3OnYK3g-PZfZ76cTigZm2iGSC7WG1SFmoVrlTjrXjoihJ8tS-hph7oHa1fH69xsB6ORsjiz0pJhzEosT5IJQ5tADW0Fc7yiwR1oHLJCV7hh-eCkcMgOh1UXLg6SItI0cPKC289rXNnonNtNg4C5si-v3j3uzY2fmEAZzIRs6dX5ilpTml_4J2JhqeBXrY1CW1eCM6TgLM3RzAOJGSrcd7t2nIzHiHuTuKaNiLAi6zzfN_jZAl_Q0rjBFYILIhcAF_dbh7TJA",
            id: "aaafc236-8a52-4c24-aa26-a61fa3d05e7a",
            defaults: {
              audio: false,
              video: false,
            },
          });

          if (meetingRef.current) {
            meetingRef.current.showSetupScreen = false;
            meetingRef.current.meeting = meeting;
          }
        }
      };
    };

    loadDyteSDK();
  }, []);

  return <dyte-meeting ref={meetingRef}></dyte-meeting>;
};

export default DyteMeeting;
