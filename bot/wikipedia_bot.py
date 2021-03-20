import wikipedia
import difflib

game_title = 'Super Mario: 64'
wikipage = wikipedia.page(game_title)

print('title ', wikipage.summary)

base_url = 'https://upload.wikimedia.org/wikipedia/en/'
approximate_url = base_url + '/' + game_title

result = difflib.get_close_matches(approximate_url, wikipage.images)
print(result[0])