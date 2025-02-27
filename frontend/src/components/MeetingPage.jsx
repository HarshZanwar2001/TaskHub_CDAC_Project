import { useState } from 'react';
// import { DyteProvider, useDyteClient } from '@dytesdk/react-web-core';
import { DyteDialogManager } from '@dytesdk/react-ui-kit';
import { DyteProvider, useDyteClient } from '@dytesdk/react-web-core';
import Meeting from './MeetingComponents';

function MeetingPage() {
  const [meeting, initMeeting] = useDyteClient();
  const [meetingId, setMeetingId] = useState('');
  const [authToken, setAuthToken] = useState('');
  const [meetingStarted, setMeetingStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [creatingMeeting, setCreatingMeeting] = useState(false);

  // Function to create a new meeting
  const createMeeting = async () => {
    setCreatingMeeting(true);

    try {
      const response = await fetch('https://api.dyte.io/v2/meetings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${btoa('62f5faf3-7b93-496a-8e60-a30ad48762d0:1629046b5e695b72193e')}`, // Replace with your Dyte Org Key & Secret
        },
        body: JSON.stringify({
          title: 'New Dyte Meeting',
          preferred_region: 'ap-south-1',
          record_on_start: false,
          live_stream_on_start: false,
          persist_chat: false,
          summarize_on_end: false,
        }),
      });

      const responseText = await response.text();
      console.log('Create Meeting Response:', responseText);

      if (!response.ok) {
        throw new Error(`Failed to create meeting: ${responseText}`);
      }

      const data = JSON.parse(responseText);
      setMeetingId(data.data.id); // Set the new meeting ID
      alert(`Meeting Created! ID: ${data.data.id}`);
    } catch (error) {
      console.error('Error creating meeting:', error);
      alert(`Failed to create meeting: ${error.message}`);
    } finally {
      setCreatingMeeting(false);
    }
  };

  // Function to get authToken from Dyte API
  const fetchAuthToken = async () => {
    if (!meetingId) {
      alert('Please enter a valid Meeting ID');
      return;
    }

    setLoading(true);

    try {
      console.log(`Fetching token for Meeting ID: ${meetingId}`);

      const response = await fetch(`https://api.dyte.io/v2/meetings/${meetingId}/participants`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${btoa('62f5faf3-7b93-496a-8e60-a30ad48762d0:1629046b5e695b72193e')}`,
        },
        body: JSON.stringify({
          "name": "Mary Sue",
          "picture": "https://i.imgur.com/test.jpg",
          "preset_name": "group_call_participant",
          "custom_participant_id": "arpit@gmail.com"
        }),
      });

      const responseText = await response.text();
      console.log('API Response:', responseText);

      if (!response.ok) {
        throw new Error(`Failed to fetch auth token: ${responseText}`);
      }

      const data = JSON.parse(responseText);
      setAuthToken(data.data.token);
    } catch (error) {
      console.error('Error fetching auth token:', error);
      alert(`Failed to fetch auth token: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Function to start the meeting
  const handleStartMeeting = () => {
    if (!authToken) {
      alert('AuthToken not available');
      return;
    }

    initMeeting({
      authToken,
      defaults: {
        audio: false,
        video: false,
      },
    });

    setMeetingStarted(true);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      {!meetingStarted ? (
        <div>
          {/* Button to Create a Meeting */}
          <button
            onClick={createMeeting}
            disabled={creatingMeeting}
            style={{ padding: '10px 20px', fontSize: '16px', marginBottom: '10px' }}
          >
            {creatingMeeting ? 'Creating Meeting...' : 'Create Meeting'}
          </button>
          <br />

          {/* Input for Meeting ID */}
          <input
            type="text"
            placeholder="Enter Meeting ID"
            value={meetingId}
            onChange={(e) => setMeetingId(e.target.value)}
            style={{ padding: '10px', width: '300px', marginBottom: '10px' }}
          />
          <br />

          {/* Button to Get Auth Token */}
          <button onClick={fetchAuthToken} disabled={loading} style={{ padding: '10px 20px', fontSize: '16px' }}>
            {loading ? 'Fetching Token...' : 'Get Auth Token'}
          </button>
          <br />

          {/* Button to Start Meeting */}
          {authToken && (
            <button onClick={handleStartMeeting} style={{ padding: '10px 20px', fontSize: '16px', marginTop: '10px' }}>
              Start Meeting
            </button>
          )}
        </div>
      ) : (
        <div style={{ width: '100vw', height: '100vh' }}>
          <DyteProvider value={meeting} fallback={<></>}>
            <DyteDialogManager meeting={meeting} />
            <Meeting />

            <button
              onClick={() => {
                meeting?.leaveRoom();
                setMeetingStarted(false);
              }}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                padding: '10px 20px',
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Leave Meeting
            </button>
          </DyteProvider>
        </div>
      )}
    </div>
  );
}

export default MeetingPage;
