#export ELEVENLABS_API_KEY="<>"
#pip install elevenlabs
#pip install python-dotenv

import os
from typing import Optional

from dotenv import load_dotenv
from dubbing_utils import download_dubbed_file, wait_for_dubbing_completion
from elevenlabs.client import ElevenLabs

ELEVENLABS_API_KEY="6ef1fe622691d92866c99f54b91f01e9"

client = ElevenLabs(api_key=ELEVENLABS_API_KEY,)


def create_dub_from_url(source_url: str,source_language: str,target_language: str,) -> Optional[str]:
    response = client.dubbing.dub_a_video_or_an_audio_file(
        source_url=source_url,
        target_lang=target_language,
        mode="automatic",
        source_lang=source_language,
        num_speakers=1,
        watermark=True,
    )

    dubbing_id = response.dubbing_id
    if wait_for_dubbing_completion(dubbing_id):
        output_file_path = download_dubbed_file(dubbing_id, target_language)
        return output_file_path
    else:
        return None


if __name__ == "__main__":
    source_url = "https://youtube.com/shorts/xOkVLAzTIMI?si=q-Al2kkwtlGdfP-U"
    source_language = "en"
    target_language = "ja"
    result = create_dub_from_url(source_url, source_language, target_language)
    if result:
        print("Dubbing was successful! File saved at:", result)
    else:
        print("Dubbing failed or timed out.")