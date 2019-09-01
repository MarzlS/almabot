/*
* User-specific configuration
* IMPORTANT NOTES:
*  Please ensure you do not interchange your username and password.
*  Your username is the longer value: 36 digits, including hyphens
*  Your password is the smaller value: 12 characters
*/

// replace with the workspace identifier of your Watson Assistant workspace
exports.workspaceId = 'YOUR_WORKSPACE_ID';

// Set this to false if your TJBot does not have a camera.
exports.hasCamera = true;

// set up TJBot's configuration
exports.tjConfig = {
    log: {
        level: 'info'     // info/verbose/debug/silly
    },
    robot: {
        gender: 'female', // see TJBot.prototype.genders
        name: 'Alma'
    },
    speak: {
        voice: 'de-DE_BirgitV3Voice',
        speakerDeviceId: 'plughw:0,0'  // use 'plughw:1,0' when using USB sound card
    },
    listen: {
        language: 'de-DE'
    },
    see: {
        language: 'de',
        confidenceThreshold: {
            object: 0.5,
            text: 0.1
        },
        camera: {
            height: 720,
            width: 960,
            verticalFlip: true, // flips the image vertically, may need to set to 'true' if the camera is installed upside-down
            horizontalFlip: true // flips the image horizontally, should not need to be overridden
        }
    }
};

// All possible name variants we should listen to
exports.nameVariants = [exports.tjConfig.robot.name, "alle", "waldemar"];

// Create the credentials object for export
exports.credentials = {};

// Watson Assistant
// https://www.ibm.com/watson/services/conversation/
exports.credentials.conversation = {
    // IAM authentication -- fill in your API key below
    apikey: 'YOUR_API_KEY',
    // service URL -- change this if the URL is different in your authentication credentials
    url: 'https://gateway-fra.watsonplatform.net/assistant/api/'
};

// Watson Speech to Text
// https://www.ibm.com/watson/services/speech-to-text/
exports.credentials.speech_to_text = {
    // IAM authentication -- fill in your API key below
    apikey: 'YOUR_API_KEY',
    // service URL -- change this if the URL is different in your authentication credentials
    url: 'https://stream-fra.watsonplatform.net/speech-to-text/api/'
};


// Watson Text to Speech
// https://www.ibm.com/watson/services/text-to-speech/
exports.credentials.text_to_speech = {
    // IAM authentication -- fill in your API key below
    apikey: 'YOUR_API_KEY',
    // service URL -- change this if the URL is different in your authentication credentials
    url: 'https://stream-fra.watsonplatform.net/text-to-speech/api/'
};


// Watson Visual Recognition
// https://www.ibm.com/watson/services/visual-recognition/
exports.credentials.visual_recognition = {
    // IAM authentication -- fill in your API key below
    apikey: 'YOUR_API_KEY',
    // service URL -- change this if the URL is different in your authentication credentials
    url: 'https://gateway.watsonplatform.net/visual-recognition/api'
};
