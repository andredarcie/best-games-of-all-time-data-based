import csv
import os

files_url = '../extracted_data'
os.chdir(files_url)
csv_files = os.listdir()

games = []
final_games_list = []

def get_unique_game_title(game_title):
    return (''.join(e for e in game_title if e.isalnum())).lower()

def order_games(game_list):
    final_games_list.sort(key=lambda x: x[0], reverse=True)
    return game_list

def generate_csv_file(game_list):
    with open('../docs/json/games.js', 'w', newline='') as myfile:
        myfile.write('var games = [')

        for game in final_games_list:
            myfile.write(f"""
              {{
                    score: {game[0]},
                    game_title: "{game[1]}",
                    number_of_citations: {game[3]},
                    citations: {game[4]}
              }},""")

        myfile.write(']')

for csv_file_name in csv_files:
    with open(f'{files_url}/{csv_file_name}') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        for row in csv_reader:
            if row[1] != 'game_title':
                games.append([row[0], row[1], csv_file_name.replace('.csv', '')])

for game in games:
    position, game_title, origin = game
    found = False

    for final_game in final_games_list:
        if get_unique_game_title(game_title) == final_game[2]:
            final_game[0] = final_game[0] + abs(int(position) - 100)
            final_game[3] = final_game[3] + 1
            final_game[4].append(origin)
            found = True

    if not found:
        key = get_unique_game_title(game_title)
        final_games_list.append([abs(int(position) - 100), game_title, key, 1, list([origin])])


final_games_list = order_games(final_games_list)
generate_csv_file(final_games_list)

