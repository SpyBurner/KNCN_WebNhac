import json

def convert_time_to_seconds(time_str):
    parts = time_str.split(':')
    # Case hours:minutes:seconds
    if len(parts) == 3:
        print(parts)
        return int(parts[0]) * 3600 + int(parts[1]) * 60 + int(parts[2])
    return int(parts[0]) * 60 + int(parts[1])

def generate_json_from_text(text):
    index = 350
    lines = text.strip().split('\n')
    data = {}
    for i in range(len(lines)):
        line = lines[i]
        parts = line.split()
        title = ' '.join(parts[1:])
        start_time = parts[0]
        start_time_seconds = convert_time_to_seconds(start_time)
        data[i + index] = {
            'id': '9bUMOSM-9Kg',  # You need to fill this with the appropriate YouTube video ID
            'title': title,
            'startTime': start_time_seconds,
            'length': 0
        }
    for i in range(len(data) - 1):
        data[i + index]['length'] = data[i + index + 1]['startTime'] - data[i + index]['startTime']
    return data

def main():
    text = """
    00:00 Batman 
02:14 Journey to Silius  
09:09 Silver Surfer
12:07 Contra Force
15:07 Bad Dudes
17:19 Blaster Master 
19:41 Bucky O'Hare
21:17 DuckTales - The Moon
22:49 Mr. Gimmick
24:50 Batman
25:47 Blaster Master 
26:51 Fester's Quest
28:55 Journey to Silius
30:54 Little Nemo
32:20 Gremlins 2
34:17 Kirby's Adventure; Vegetable Valley 1
37:17 Mega Man 3 - Title Theme
38:39 Ninja Gaiden - Act 4: Part 2
40:22 Batman 
42:34 Wolverine 
46:10 River City Ranson 
49:38 Double Dragon
52:38 Castlevania; Vampire Killer Stage 1
55:38 Castlevania II - The Silence of Daylight Day Time
56:42 Gradius 
59:42 Bionic Commando - Area 1
1:01:55 Maniac Mansion
1:04:44 Little Samson
1:07:43 Power Blade
1:09:15 Shadow of the Ninja
1:11:05 The Goonies II
1:12:15 Snake's Revenge
1:14:00 Superspike V'ball
1:15:23 Shadow of the Ninja
1:17:00 Mr. Gimmick
1:18:41 Blaster Master 
1:20:57 Castlevania II - Bloody Tears Stage Theme
1:22:11 Double Dragon
1:25:10 DuckTales - Amazon
1:26:35 Chip 'N Dale
1:27:43 Batman
1:29:39 Journey to Silius
1:31:28 Gremlins 2
1:33:20 Kid Icarus - Underworld
1:36:11 Life Force
1:37:18 Metroid - Brinstar Theme
1:38:56 Super C
1:40:54 The Adventures of Link - Battle Area
1:41:58 Rush 'n Attack
1:43:27 Wood & Water Rage
1:48:51 TMNT - Title Theme
1:51:36 Power Blade
1:53:31 Shatter Hand
1:55:37 Mega Man - Wily's Fortress 1
1:56:46 Metroid - Kraids Hideout
1:58:18 Mr. Gimmick
2:00:10 TMNT - Stage Theme 1
2:02:02 Metal Gear - Snake is Caught
2:05:02 Journey to Silius
2:06:52 Gun.Smoke
2:08:00 The Adventure of Link - Final Dungeon
2:09:13 DuckTales - Transylvania
2:10:41 Kid Icarus; Angel Land
2:12:55 Gremlins
2:14:38 Gradius
2:17:38 Journey to Silius
2:20:21 Kirby's Adventure - Vegetable Valley 2
2:23:21 Life Force
2:24:25 Metal Gear - Jungle Area
2:27:25 Wrecking Crew
2:29:20 The Adventure of Link - Ending Theme 2
2:30:27 Castlevania; Wicked Child Stage 7
2:33:27 Castlevania II - Nocturnal Curse
2:34:23 Fester's Quest
2:36:50 The Adventure of Link - Town Theme
2:39:28 Life Force
2:40:16 Little Samson
2:43:16 World Cup
2:45:22 Mike Tyson's Punch-Out - Fight Theme
2:47:38 MegaMan 2; Wily's Fortress 1
2:50:13 Mr. Gimmick
2:52:03 Ninja Gaiden II - Act II: Part 2
2:53:25 Rad Racer
2:55:25 TMNT II - Scene 2: Part 1
2:57:51 Super Mario Bros. 3 - Overworld Theme 2
3:00:51 MegaMan 2 - Air Man
3:02:27 Dr. Mario - Fever
3:04:45 Kirby's Adventure - Green Greens
3:07:45 Metal Gear - Ending
3:10:45 Life Force
3:12:00 Kirby's Adventure; Crane Fever: Part 1
3:15:00 Tiny Toon Adventures
3:15:31 Mega Man 3 - Snake Man
3:16:58 World Cup
3:18:46 RoboWarrior
3:22:51 Snake Rattle 'N Roll
3:25:05 TMNT III: The Manhattan Project - Scene 2
3:26:21 Mega Man - Elec Man
3:27:45 Balloon Fight
3:28:42 Zelda - Overworld Theme
3:31:03 The Guardian Legend
3:32:29 Kid Icarus - Sky Palace
3:34:39 Mega Man - Cut Man
3:36:05 World Cup
3:39:19 Mega Man - Bomb Man
3:40:30 Zelda - Dungeon Theme
3:41:54 Mega Man 3 - Spark Man
3:43:02 Super Mario Bros. 2 - Ending Theme
3:44:46 The Adventure of Link - Dungeon Theme
3:47:54 Castlevania II - Dwellings of Doom Castle Theme 1
3:48:51 Gradius
3:51:51 Gradius II
3:54:51 Gun.Smoke
3:55:49 MegaMan 2 - Wood Man
3:57:06 Kid Icarus - Sky Palace
3:58:42 Kirby's Adventure - Ice Cream Island 1
4:01:42 Mike Tyson's Punch-Out - Bicycle Training
4:03:36 World Cup
4:06:25 The Goonies II
4:08:52 Super Mario Bros. 3 - Overworld Theme 1
4:11:52 MegaMan 2 - Bubble Man
4:13:12 Teenage Mutant Ninja Turtles
4:14:50 Kirby's Adventure - Butter Building
4:17:50 Life Force
4:19:05 The Goonies II
4:20:37 Zelda - Ganon's Dungeon
4:22:13 Metroid Escape Theme
4:24:23 Metal Gear Outer Haven
4:27:23 TMNT
4:28:38 Metroid - Title Theme
4:30:14 Mike Tyson's Punch-Ou Title Theme
4:31:21 Wrecking Crew
4:32:31 World Cup
4:35:38 Rad Racer
4:36:15 The Goonies II
4:37:43 Rush 'N Attack
4:39:28 Shadowgate
4:41:17 Metroid; Ending Theme
4:43:32 Rad Racer
4:45:20 Shadowgate
4:47:33 Snake Rattle 'N Roll
4:49:16 Super Mario Bros. 2 - Overworld Theme
4:52:16 Super Mario Bros. 3 - Underground Theme
4:55:16 TMNT - Overworld 1
4:56:24 TMNT II - Scene 7
4:58:08 The Goonies II
4:59:49 The Legend of Zelda - Title Theme
5:02:36 The Guardian Legend
5:04:12 The Adventure of Link - Boss Battle
5:04:40 Mother
    """
    data = generate_json_from_text(text)
    with open('data.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=4)

if __name__ == "__main__":
    main()

