import csv
import os

files_url = '../extracted_data'
os.chdir(files_url)
csv_files = os.listdir()

games = []
final_games_list = []
sources = []
game_content_list = []

def get_unique_game_title(game_title):
    return (''.join(e for e in game_title if e.isalnum())).lower()

def order_games(game_list):
    game_list.sort(key=lambda x: x[0], reverse=True)
    return game_list

def get_game_content(key):
    for game in game_content_list:
        if get_unique_game_title(game[0]) == key:
            return game 

    return [ '', ' ' ]


def generate_csv_file(game_list):
    with open('../docs/json/games.js', 'w', newline='') as myfile:
        myfile.write('var games = [')

        for game in game_list:
            game_content = get_game_content(game[2])

            myfile.write(f"""
              {{
                    score: {game[0]},
                    game_title: "{game[1]}",
                    image_url: "{game_content[1]}",
                    number_of_citations: {game[3]},
                    citations: {game[4]}
              }},""")

        myfile.write('];')

        myfile.write(f"""var sources = 
            {list(map(lambda file : file.replace('.csv', ''), csv_files))}
        """)

def get_score(position):
    return str(abs(int(position) - 100))

with open('../sources.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    for row in csv_reader:
        sources.append(row)

with open('../game_content.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    for row in csv_reader:
        game_content_list.append(row)

print(sources[1][3])

for csv_file_name in csv_files:
    with open(f'{files_url}/{csv_file_name}') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        for row in csv_reader:
            if row[1] != 'game_title':
                found_source = list(filter(lambda s : s[3].strip() == csv_file_name, sources))
                if found_source:
                    games.append([row[0], row[1], found_source[0]])

for game in games:
    position, game_title, source = game
    found = False
    source_data = [get_score(position), position, source[0], source[1], source[2], 'https://github.com/andredarcie/best-games-of-all-time/blob/master/extracted_data/' + source[3].strip()]
    #source_description = '(score: ' + get_score(position) + ') ' + origin[0]  + ' at ' + position + ' position.'

    for final_game in final_games_list:
        if get_unique_game_title(game_title) == final_game[2]:
            final_game[0] = final_game[0] + abs(int(position) - 100)
            final_game[3] = final_game[3] + 1
            final_game[4].append(source_data)
            found = True

    if not found:
        key = get_unique_game_title(game_title)
        final_games_list.append([abs(int(position) - 100), game_title, key, 1, list([source_data])])


final_games_list = order_games(final_games_list)

games_with_more_than_one_citation = final_games_list
#games_with_more_than_one_citation = list(filter(lambda game : game[3] > 2, final_games_list))

counter = 1
for game in games_with_more_than_one_citation:
    game[1] = str(counter) + '. ' + game[1]
    counter += 1

generate_csv_file(games_with_more_than_one_citation)

