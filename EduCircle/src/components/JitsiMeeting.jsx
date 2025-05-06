import { useEffect, useRef } from "react";

const JitsiMeeting = ({ roomName, displayName }) => {
  const jitsiContainerRef = useRef(null);

  useEffect(() => {
    if (!window.JitsiMeetExternalAPI) return;

    // Prevent double initialization
    if (jitsiContainerRef.current?.childElementCount > 0) return;

    const domain = "meet.jit.si";
    const options = {
      roomName: roomName || "EduCircleStudyRoom",
      parentNode: jitsiContainerRef.current,
      userInfo: { displayName: displayName || "Guest" },
    };

    new window.JitsiMeetExternalAPI(domain, options);
  }, []);


  return (
    <div
      ref={jitsiContainerRef}
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        
      }}
    />
  );
};

export default JitsiMeeting;
