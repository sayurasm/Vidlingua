# Vidlingua
a tool for translating and transcribing videos using AUTOMATIC1111 Stable Diffusion with WAV2LIP Extension and OpenAI Whisper.

## Overview

<img src ="docs\intro.png">

## Approach
Whisper is a general-purpose speech recognition model. It is trained on a large dataset of diverse audio and is also a multitasking model that can perform multilingual speech recognition, speech translation, and language identification.

<img src="docs\approach.png">

A Transformer sequence-to-sequence model is trained on various speech processing tasks, including multilingual speech recognition, speech translation, spoken language identification, and voice activity detection. These tasks are jointly represented as a sequence of tokens to be predicted by the decoder, allowing a single model to replace many stages of a traditional speech-processing pipeline. The multitask training format uses a set of special tokens that serve as task specifiers or classification targets.
### Features

<img src="docs\transcribetranslate.png">
