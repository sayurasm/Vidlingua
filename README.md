# Vidlingua
a tool for translating and transcribing videos using AUTOMATIC1111 Stable Diffusion with WAV2LIP Extension and OpenAI Whisper.
Voice Cloning using elevenlabs API and facebook research for voice to voice "seamless_communication" translation.

## Overview

<img src ="docs\intro.png">

## Approach
Whisper is a general-purpose speech recognition model. It is trained on a large dataset of diverse audio and is also a multitasking model that can perform multilingual speech recognition, speech translation, and language identification.

<img src="docs\approach.png">

A Transformer sequence-to-sequence model is trained on various speech processing tasks, including multilingual speech recognition, speech translation, spoken language identification, and voice activity detection. These tasks are jointly represented as a sequence of tokens to be predicted by the decoder, allowing a single model to replace many stages of a traditional speech-processing pipeline. The multitask training format uses a set of special tokens that serve as task specifiers or classification targets.
### Features

<img src="docs\transcribetranslate.png">

## Installation
### Using Facebook Research's "Seamless Communication" that is based on OpenAI Whisper for transcribe and translate to another language.
check the original repo here [facebookseamless](https://github.com/facebookresearch/seamless_communication)
and went to the collab using public url and went to gradio [Demo](https://colab.research.google.com/github/camenduru/seamless-m4t-colab/blob/main/seamless_expressive_v2_colab.ipynb)

### Using ElevenLabs API for translating a uploaded video to another language
Get the API here [ElevenLabs](https://elevenlabs.io/app/dubbing)
note: you have to create a profile first and went to "profile+API key"

### Run it locally 
in the "Vidlingua API" folder
Check the dubdub.py and dubbing_utils.py
insert the elevenlabs API
```bash
export ELEVENLABS_API_KEY="<>"
pip install elevenlabs
pip install python-dotenv
```
insert the audio from youtube and select translation to the language you prefer.

### Run WAV2LIP for the AI Lipsync
Original repo [Wav2Lip](https://github.com/natlamir/Wav2Lip-WebUI)
```bash
conda create -n wav2lip python=3.10
conda activate wav2lip
git clone https://github.com/natlamir/Wav2Lip-WebUI.git wav2lip
cd wav2lip
conda install pytorch torchvision torchaudio pytorch-cuda=11.8 -c pytorch -c nvidia
pip install -r requirements.txt
```
Make sure to download the pre-trained model and weights and place them in the appropriate directory: Pre-trained model (rename to s3fd.pth and place in face_detection/detection/sfd folder):

https://www.adrianbulat.com/downloads/python-fan/s3fd-619a316812.pth

Weights (place in checkpoints folder):

    https://iiitaphyd-my.sharepoint.com/:u:/g/personal/radrabha_m_research_iiit_ac_in/Eb3LEzbfuKlJiR600lQWRxgBIY27JZg80f7V9jtMfbNDaQ?e=TBFBVW
    https://iiitaphyd-my.sharepoint.com/:u:/g/personal/radrabha_m_research_iiit_ac_in/EdjI7bZlgApMqsVoEUUXpLsBxqXbn5z8VTmoxp55YNDcIA?e=n9ljGW

