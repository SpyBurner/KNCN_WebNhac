import json

# Given JSON data
video_data = {
  "scQu6EPsuxw": {
    "title": "Driftveil City: 8-Bit Remix",
    "startTime": 0,
    "length": 163
  },
  "6-wEAeNcA_A": 
  {
    "title": "Lindsey Stirling - Senbonzakura",
    "startTime": 0,
    "length": 204
  },
  "TxTprtLZurY": {
    "title": "Bad Apple - (Orchestral Arrangement) Instrumental",
    "startTime": 0,
    "length": 334
  },
  "cBsUr4UMcD0": {
    "title": "Point the star | Lofi",
    "startTime": 0,
    "length": 259
  },
  "FSuNBT1ifVY": {
    "title": "nawhij - cloud nine",
    "startTime": 0,
    "length": 135
  },
  "Q3saFny02KU": {
    "title": "Autumn Jazz",
    "startTime": 0,
    "length": 177
  },
  "sls44rlHpRg": {
    "title": "nawhij(나우히즈) - with you",
    "startTime": 0,
    "length": 234
  },
  "fc-c5nxQBS4": {
    "title": "Soulitune - Reverie | Lofi",
    "startTime": 0,
    "length": 155
  },
  "Vg0o_MbV310": {
    "title": "Jazz Trio loop music _ Imagination",
    "startTime": 0,
    "length": 183
  },
  "BJYEz2oPRms": {
    "title": "nawhij - hydrangea",
    "startTime": 0,
    "length": 804
  },
  "Wj-fDD2b47A": {
    "title": "Soulitune - Pal | Lofi",
    "startTime": 0,
    "length": 148
  },
}

# Convert to the desired format
formatted_data = {}
index = 0
for video_id, video_info in video_data.items():
    formatted_data[str(index)] = {
        "id": video_id,
        "title": video_info["title"],
        "startTime": str(video_info["startTime"]),
        "length": video_info["length"]
    }
    index += 1

# Convert to JSON string
formatted_json = json.dumps(formatted_data, indent=4)

# Print the formatted JSON
print(formatted_json)
