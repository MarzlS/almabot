
# Alma German Conversation Bot
> Chat with Alma!

Alma bot is a German speaking variation of TJBot. This recipe is based on [IBM TJBot](https://github.com/ibmtjbot/tjbot) and uses the [Watson Assistant](https://www.ibm.com/watson/services/conversation/) and other Watson services to turn Alma into a chatting robot.

Some possible things to tell her:

* "Alma, wie geht es dir?" - To get to know about her feelings.
* "Hallo Alma!" - Alma will say hello and waves her arm.
* "Alma, ändere das Licht auf Blau!" - Switch the LED to the given color.
* "Alma, lass uns Disco machen!" - Rotate through all LED colors.
* "Wie viel Uhr ist es, Alma?" - Alma tells you the time.
* "Alma, welcher Tag ist heute?" - Alma tells you the date.
* "Alma, was siehst du gerade?" - Alma takes a photo and tries to guess what she sees.
* "Alma, erzähle mir einen Witz!" - Alma tells a joke.
* "Gute Nacht, Alma!" - Ends the conversation.


## Hardware
This recipe requires a TJBot with a microphone, a speaker, a LED, a servo arm and a camera.


## Build and Run

### Bootstrap
First, make sure you have configured your Raspberry Pi for TJBot by following the [bootstrap instructions](https://github.com/ibmtjbot/tjbot/tree/master/bootstrap).

### Using Audio and the LED together
To use the LED and Audio in paralled I use an external USB sound card.

To get this up and running the Audio must be blacklisted, but not all modules. E.g. do not blacklist the Headjack, otherwise USB Audio does notwork any more!

After bootstrap script has been run enter

    $ sudo vi /etc/modprobe.d/tjbot-blacklist-snd.conf

and delete the last line:

    $ blacklist snd

Save the changes and restart the system.

### Dependencies and configuration

Next, go to the `almabot` folder and install the dependencies.

    $ cd almabot
    $ npm install

Import the `skill-Alma-Bot.json` file into the Watson Assistant service and note the workspace ID.

Create instances of all the required Watson services in Frankfurt data center and note the authentication credentials.

Make a copy the default configuration file and update it with the Watson service credentials and the conversation workspace ID.

    $ cp config.default.js config.js
    $ nano config.js
    <update your service API keys and the Assistant workspace ID in the specified places>

### Run!

Make sure PulseAudio is started:

    pulseaudio --start

Start the bot:

    sudo node almabot.js

> Note the `sudo` command. Root user access is required to run TJBot recipes.

## Troubleshooting

### Audio issues - I can`t hear anything

When you use an external USB sound card you may have to change the speaker device id.

For me I had to change the option 'speakerDeviceId' in file 'config.js' to 'plughw:1,0'.

# Watson Services
- [Watson Assistant](https://www.ibm.com/watson/services/conversation/)
- [Watson Speech to Text](https://www.ibm.com/watson/services/speech-to-text/)
- [Watson Text to Speech](https://www.ibm.com/watson/services/text-to-speech/)
- [Watson Visual Recognition](https://www.ibm.com/watson/services/visual-recognition/)

# License
This project is licensed under Apache 2.0. Full license text is available in [LICENSE](LICENSE).

